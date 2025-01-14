import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";
import cron from "node-cron";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

// CORS configuration
app.use(cors());

// Serve static files from public directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Add route for resume
app.get('/resume', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/Resume.pdf'));
});

let accessToken = "";

// Function to refresh the access token
const refreshAccessToken = async () => {
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
      }),
      {
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(
              `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
            ).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    accessToken = response.data.access_token;
    console.log("Access token refreshed");
  } catch (error) {
    console.error("Error refreshing access token", error.response.data);
  }
};

// Refresh token every hour
cron.schedule("0 * * * *", refreshAccessToken);

// Initial token refresh on server start
refreshAccessToken();

// Route to fetch the currently playing song
app.get("/now-playing", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.status === 204 || response.data === "") {
      return res.json({ playing: false, message: "No song is currently playing." });
    }

    const track = response.data.item;

    res.json({
      playing: true,
      song: track.name,
      artist: track.artists.map((artist) => artist.name).join(", "),
      albumArt: track.album.images[0].url,
      link: track.external_urls.spotify,
    });
  } catch (error) {
    console.error("Error fetching now playing", error.response?.data);
    res.status(500).json({ error: "Failed to fetch now playing track" });
  }
});

// Start server in development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
