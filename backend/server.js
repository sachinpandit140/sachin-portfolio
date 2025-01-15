import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cron from "node-cron";
import { refreshAccessToken } from "./services/spotifyService.js";
import nowPlayingRouter from "./routes/nowPlaying.js";
import staticRouter from "./routes/staticFiles.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use("/public", staticRouter);
app.use("/now-playing", nowPlayingRouter);

// Initial token refresh and scheduling
refreshAccessToken();
cron.schedule("0 * * * *", refreshAccessToken);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
