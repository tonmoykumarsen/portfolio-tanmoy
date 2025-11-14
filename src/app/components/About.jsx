"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-black text-white">
      {/* Container with fade-in + slide animation */}
      <motion.div
        className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-10"
        initial={{ opacity: 0, y: 50 }} // Start invisible & slightly below
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible & original position
        viewport={{ once: true, amount: 0.3 }} // Animate only once when 30% visible
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* LEFT: heading + text */}
        <motion.div
          className="md:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Side accent + title */}
          <div className="flex items-center gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-400 mr-2">About Me</h2>
            <div className="w-10 h-[2px] bg-gray-700"></div>
          </div>

          {/* Who I Am + description */}
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-white">Who I Am</h3>
            <p className="text-gray-300 text-lg leading-relaxed text-justify mb-6">
              I’m a passionate Web Developer focused on crafting user-friendly and
              responsive interfaces with clean, modern, and efficient code. I
              specialize in turning complex ideas into smooth, functional digital
              experiences that look great and perform seamlessly across all devices.
              I enjoy solving real-world problems through code and building
              pixel-perfect designs that meet user expectations. My goal is to
              continuously refine my skills and create digital products that are both
              visually appealing and highly optimized for performance.
            </p>

            {/* Resume Button */}
            <a
              href="/Tanmoy_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-500 transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT: image with pop-in animation */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-[320px] md:w-[384px] h-[430px] md:h-[513px] rounded-xl object-cover border-2 border-indigo-500 shadow-2xl self-start"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
