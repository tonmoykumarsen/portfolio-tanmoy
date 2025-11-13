
export default function Contact() {
  return (
    <section id="contact" className="relative py-20  bg-black text-white overflow-hidden">
      {/* 🌌 Background Stars Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              opacity: 0.8,
            }}
          ></div>
        ))}
      </div>

      {/* 🌟 Contact Card */}
      <div className="relative z-10 max-w-xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#1a1f2e] to-[#141824] rounded-3xl p-10 shadow-2xl border border-gray-800 text-center">
          {/* 👋 Emoji */}
          <div className="flex justify-center mb-6">
            <span className="text-6xl md:text-7xl drop-shadow-lg">👋</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Let's Connect!
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base mb-6">
            Have a question or idea? I'd love to hear from you.
          </p>

          {/* Contact Button */}
          <a
            href="https://www.linkedin.com/in/tonmoy-kumar-721b7b1b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&original_referer="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 text-base font-medium bg-gray-900 border-2 border-gray-700 rounded-2xl text-white transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
