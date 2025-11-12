import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center  bg-black text-white px-6"
    >
      {/* Small subtitle */}
      <h2 className="text-sm uppercase tracking-widest text-indigo-400 mb-2">
        Let's Build Something Together
      </h2>

      {/* Main heading */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Hi, I’m <span className="text-indigo-400">Tanmoy</span>
      </h1>

      {/* Subheading */}
      <h3 className="text-2xl md:text-3xl font-medium mb-6 text-gray-300">
        A MERN Stack Developer
      </h3>

      {/* Description */}
      <p className="max-w-xl text-gray-400 mb-8 leading-relaxed">
        I build scalable, modern web applications integrating frontend and
        backend seamlessly.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="#projects"
          className="px-8 py-3 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 text-white font-medium rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          View Work
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border-2 border-indigo-500 text-indigo-400 font-medium rounded-xl hover:bg-indigo-500 hover:text-white shadow-md transition-all duration-300"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
