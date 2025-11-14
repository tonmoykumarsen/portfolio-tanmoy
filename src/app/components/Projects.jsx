import React from 'react';
import { Github, ExternalLink, Youtube } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      name: "React Task Manager",
      tech: "React JS | React Router | DaisyUI | Context API | Tailwind CSS",
      img: "https://i.postimg.cc/3wbGTVS9/image.png",
      liveLink: "https://task-manager-eight-theta-22.vercel.app/",
      clientLink: "https://github.com/tonmoykumarsen/task-manager",
      // serverLink: "#",
    },
    {
      name: "Next Portfolio",
      tech: "Next JS | Tailwind CSS | Framer Motion | DaisyUI",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
      liveLink: "https://portfolio-tanmoy.vercel.app/",
      clientLink: "https://github.com/tonmoykumarsen/portfolio-tanmoy",
      // serverLink: "#",
    },
    // {
    //   name: "Next Admin Dashboard",
    //   tech: "Next JS | Chart JS | Tailwind CSS | MongoDB | Auth",
    //   img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=500&fit=crop",
    //   liveLink: "#",
    //   clientLink: "#",
    //   serverLink: "#",
    // },
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white relative">
      {/* Header */}
      <div className="text-left max-w-7xl mx-auto px-8 mb-12">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-sm font-semibold text-indigo-400 tracking-wider uppercase">
            PROJECTS
          </h2>
          <div className="h-0.5 w-32 bg-indigo-400"></div>
        </div>
        <h3 className="text-4xl font-bold text-white">What I've Built</h3>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group bg-gradient-to-br from-[#1a1f2e] to-[#141824] rounded-xl overflow-hidden shadow-2xl hover:shadow-indigo-900/20 transition-all duration-300 hover:-translate-y-2 border border-gray-800 hover:border-indigo-500/50"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-64 bg-gray-900 group">
              <img 
                src={project.img} 
                alt={project.name} 
                className="w-full h-full object-cover transform transition-transform duration-[2s] ease-in-out group-hover:translate-y-[-100%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] via-transparent to-transparent opacity-70"></div>
              
              {/* Tech Badge Overlay */}
              <div className="absolute top-4 right-4">
                <span className="bg-indigo-600/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg">
                  {project.tech.split('|')[0].trim()}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                <span className="font-semibold text-indigo-300">Technology Used: </span>
                {project.tech}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2">
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    className="flex items-center gap-1 px-3 py-1.5 bg-gray-800 hover:bg-white hover:text-black rounded-md transition-all text-xs font-semibold shadow-md"
                  >
                    <Youtube size={16} />
                    LIVE
                  </a>
                )}
                {project.clientLink && (
                  <a 
                    href={project.clientLink} 
                    className="flex items-center gap-1 px-3 py-1.5 bg-gray-800 hover:bg-white hover:text-black rounded-md transition-all text-xs font-semibold shadow-md"
                  >
                    <Github size={16} />
                    CLIENT
                  </a>
                )}
                {project.serverLink && (
                  <a 
                    href={project.serverLink} 
                    className="flex items-center gap-1 px-3 py-1.5 bg-gray-800 hover:bg-white hover:text-black rounded-md transition-all text-xs font-semibold shadow-md"
                  >
                    <ExternalLink size={16} />
                    SERVER
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
