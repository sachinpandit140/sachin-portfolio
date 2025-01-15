import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ToSS",
    description:
      "A full-stack web-extension built with React, Python and Gemini",
    image: "Toss_1.png",
    github: "https://github.com/sachinpandit140/toss",
    demo: "https://github.com/sachinpandit140/toss",
    tags: ["React w/ TypeScript", "FastAPI", "Chrome Runtime API", "Gemini"],
  },
  {
    title: "WORDLE",
    description: "An python GUI based WORDLE game",
    image: "WORDLE.png",
    github: "https://github.com/sachinpandit140/WORDLE",
    demo: "https://github.com/sachinpandit140/WORDLE",
    tags: ["Python", "Tkinter"],
  },
  {
    title: "FILE-SORTER",
    description:
      "A file sorting python scripts that makes your file sorting easier.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/sachinpandit140/file_sorter",
    demo: "https://github.com/sachinpandit140/file_sorter",
    tags: ["Python", "CLI", "File Handling"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
