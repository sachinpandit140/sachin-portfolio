import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || '';
const RESUME_URL = import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/resume` : '/resume';

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "socials", label: "Connect" },
];

// Add proper type for song data
interface SongData {
  playing: boolean;
  song?: string;
  artist?: string;
  albumArt?: string;
  link?: string;
  message?: string;
}

const NowPlaying = () => {
  const [song, setSong] = useState<SongData | null>(null);

  useEffect(() => {
    const fetchCurrentlyPlaying = async () => {
      try {
        const response = await axios.get(`${API_URL}/now-playing`);
        setSong(response.data);
      } catch (error) {
        console.error("Error fetching currently playing song:", error);
      }
    };

    fetchCurrentlyPlaying();
    const interval = setInterval(fetchCurrentlyPlaying, 30000); // Poll every 30 seconds

    return () => clearInterval(interval);
  }, []);

  if (!song) return null;

  return (
    <div className="flex items-center px-4 py-2 text-sm text-secondary-dark hover:text-primary transition-colors rounded-md">
      <div className="flex items-center space-x-2">
        <div className={`w-3 h-3 ${song.playing ? 'bg-green-500' : 'bg-gray-400'} rounded-full ${song.playing ? 'animate-pulse' : ''}`} />
        <span>Currently Playing on Spotify:</span>
        {song.playing ? (
          <a 
            href={song.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline truncate max-w-[150px]"
          >
            {song.song} - {song.artist}
          </a>
        ) : (
          <span className="text-gray-500 italic">
            {song.message || 'Not playing'}
          </span>
        )}
      </div>
    </div>
  );
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            to="hero"
            smooth={true}
            className="text-2xl font-bold text-primary cursor-pointer"
          >
            Sachin Pandit
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-64}
                className="px-4 py-2 text-secondary-dark hover:text-primary cursor-pointer transition-colors rounded-md"
                activeClass="text-primary bg-primary-light/10 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-primary hover:text-primary-dark font-medium ml-2"
            >
              Resume
            </a>

            <NowPlaying />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={clsx(
            "md:hidden absolute left-0 right-0 bg-white/90 backdrop-blur-sm px-6 py-4 shadow-lg transition-all duration-300 ease-in-out cursor-pointer",
            {
              "opacity-100 top-16": isOpen,
              "opacity-0 -top-96": !isOpen,
            }
          )}
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-64}
                className="px-4 py-2 text-secondary-dark hover:text-primary transition-colors rounded-md"
                activeClass="text-primary bg-primary-light/10 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-primary hover:text-primary-dark font-medium"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}


export default Header;