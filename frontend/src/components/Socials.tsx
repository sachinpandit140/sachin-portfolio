import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const socials = [
  {
    icon: <Github className="w-6 h-6" />,
    label: "GitHub",
    href: "https://github.com",
    color: "hover:text-gray-900",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/sachinpandit140",
    color: "hover:text-blue-600",
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    label: "Instagram",
    href: "https://www.instagram.com/sachin.diaries_/",
    color: "hover:text-blue-400",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    href: "mailto:sachinpandit6284@gmail.com  ",
    color: "hover:text-red-500",
  },
];

export const Socials = () => {
  return (
    <section id="socials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Let's Connect</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 group"
            >
              <div
                className={`p-4 rounded-full bg-gray-100 transition-colors ${social.color}`}
              >
                {social.icon}
              </div>
              <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                {social.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
