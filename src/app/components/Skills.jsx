'use client';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiDaisyui } from 'react-icons/si';
import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Skills = () => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skillIcons = [
    { icon: FaHtml5, color: '#E44D26' },
    { icon: FaCss3Alt, color: '#1572B6' },
    { icon: FaJs, color: '#F7DF1E' },
    { icon: FaBootstrap, color: '#7952B3' },
    { icon: SiTailwindcss, color: '#38B2AC' },
    { icon: SiDaisyui, color: '#EAB308' },
    { icon: FaReact, color: '#61DAFB' },
    { icon: SiNextdotjs, color: '#000000' },
    { icon: SiMongodb, color: '#47A248' },
    { icon: FaNodeJs, color: '#339933' },
  ];

  // Duplicate icons for smooth infinite scroll
  const repeatedIcons = [...skillIcons, ...skillIcons];

  if (!mounted) return null;

  return (
    <section id="skills" className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="flex items-center mb-6 justify-center sm:justify-start">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-400 mr-2">
            Skills
          </h2>
          <div className="w-10 h-[2px] bg-gray-700"></div>
        </div>

        {/* Continuous scrolling icons */}
        <div
          ref={containerRef}
          className="overflow-hidden relative h-16 sm:h-20 flex items-center"
        >
          <motion.div
            className="flex"
            animate={{ x: ['0px', '-100%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20, // adjust speed here
                ease: 'linear',
              },
            }}
          >
            {repeatedIcons.map(({ icon: Icon, color }, idx) => (
              <div key={idx} className="mx-4 sm:mx-6 flex-shrink-0">
                <Icon size={60} color={color} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
