'use client';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

  // repeat icons for smooth scroll
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

        {/* Framer Motion Scrolling Icons */}
        <div className="overflow-hidden relative h-16 sm:h-20">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          >
            {repeatedIcons.map(({ icon: Icon, color }, idx) => (
              <div key={idx} className="mx-4 sm:mx-6 flex-shrink-0">
                <Icon size={40} color={color} />
              </div>
            ))}
          </motion.div>

          {/* Mobile version: just centered icons */}
          {/* <div className="flex justify-center gap-6 sm:hidden mt-2">
            {skillIcons.map(({ icon: Icon, color }, idx) => (
              <Icon key={idx} size={30} color={color} />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
