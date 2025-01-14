import { Code2, Palette, Rocket } from "lucide-react";

const skills = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with React, TypeScript, and modern CSS.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Backend Development",
    description:
      "Creating scalable server-side applications with Node.js and modern databases.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI/UX Design",
    description:
      "Designing intuitive and beautiful user experiences with attention to detail.",
  },
];

export const About = () => {
  return (
    <section id="about" className=" py-20 bg-white">
      <div className=" display-flex justify-center container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
