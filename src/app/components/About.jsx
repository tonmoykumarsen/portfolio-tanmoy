import React from "react";

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-black text-white">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-10">
        {/* LEFT: heading + text */}
        <div className="md:w-1/2 flex flex-col gap-6">
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
              href="/Tanmoy_Resume.pdf" // Replace with your CV file path
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-500 transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </div>

        {/* RIGHT: image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-[320px] md:w-[384px] h-[430px] md:h-[513px] rounded-xl object-cover border-2 border-indigo-500 shadow-2xl self-start"
          />
        </div>
      </div>
    </section>
  );
}
