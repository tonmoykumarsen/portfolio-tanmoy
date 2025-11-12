'use client';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp } from "react-icons/fa";
import { useEffect, useState } from "react";

const Skills = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skillIcons = [
    { icon: FaHtml5, color: "#E44D26" },
    { icon: FaCss3Alt, color: "#1572B6" },
    { icon: FaJs, color: "#F7DF1E" },
    { icon: FaReact, color: "#61DAFB" },
    { icon: FaNodeJs, color: "#339933" },
    { icon: FaPhp, color: "#777BB4" },
  ];

  // repeat for smooth scroll
  const repeatedIcons = [...skillIcons, ...skillIcons];

  if (!mounted) return null;

  return (
    <section id="skills" className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="flex items-center mb-6 justify-center sm:justify-start">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-400 mr-2">Skills</h2>
          <div className="w-10 h-[2px] bg-gray-700"></div>
        </div>

        {/* Scrolling icons */}
        <div className="relative overflow-hidden h-16 sm:h-20">
          <div className="flex animate-slide">
            {repeatedIcons.map(({ icon: Icon, color }, idx) => (
              <div key={idx} className="mx-4 sm:mx-6 flex-shrink-0">
                <Icon size={40} color={color} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          display: flex;
          animation: slide 12s linear infinite;
        }

        @media (max-width: 640px) {
          .animate-slide {
            animation: none; /* stop scrolling on mobile */
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
