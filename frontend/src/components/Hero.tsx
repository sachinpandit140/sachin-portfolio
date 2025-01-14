import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import Flicker from "./Flicker";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen w-full pt-20 relative bg-cover bg-center bg-no-repeat [transition:none]"
      style={{ backgroundImage: `url(Hero.jpeg)` }}
    >
      <div className="container mx-auto px-4 md:px-12 py-12 md:py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary  ">
              Hi, I'm{" "}
              <span className="text-p">
                {" "}
                Sachin Pandit
              </span>
              <span className="text-p">
                {" "}
                <Flicker
                  words={[
                    "Web Developer",
                    "Explorer",
                    "Singer",
                  ]}
                />
              </span>
            </h1>
            <p className="text-xl text-gray-200">
              Full-stack developer specializing in building exceptional digital
              experiences. I love creating innovative solutions that make a
              difference. Based in USA.
            </p>
            <div className="flex space-x-4 text-secondary">
              <a
                href="https://github.com/sachinpandit140"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2  hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/sachinpandit140"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2  hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:sachinpandit6284@gmail.com"
                className="p-2 hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://www.youtube.com/@syntaxfz"
                className="p-2 hover:text-primary transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            {/* You can add an image or other content here */}
          </div>
        </div>
      </div>
    </section>
  );
};
