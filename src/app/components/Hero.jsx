'use client';
import { useState, useEffect } from 'react';

export default function Hero() {
  const titles = ['A Front-End Developer', 'A Web Developer'];
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [typing, setTyping] = useState(true);
  const [mounted, setMounted] = useState(false); // flag

  const speed = 150;
  const pause = 2000;

  // Mark component as mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return; // skip effect on server

    const currentText = titles[index];
    let timeout;

    if (typing) {
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => setTyping(false), pause);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, speed / 2);
      } else {
        setTyping(true);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, typing, index, mounted, titles]);

  if (!mounted) return null; // render nothing on server

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-black text-white px-6" id="home">
      <h2 className="text-sm uppercase tracking-widest text-indigo-400 mb-2">
        Let's Build Something Together
      </h2>

      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Hi, I’m <span className="text-indigo-400">Tanmoy</span>
      </h1>

      <h3 className="text-2xl md:text-3xl font-medium mb-6 text-gray-700 flex items-center justify-center">
        <span>{displayedText}</span>
        <span className="ml-1 text-indigo-400 animate-blink">|</span>
      </h3>

      <p className="max-w-xl text-gray-200 mb-8 leading-relaxed">
        I build scalable, modern web applications integrating frontend and backend seamlessly.
      </p>

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

      <style jsx>{`
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
