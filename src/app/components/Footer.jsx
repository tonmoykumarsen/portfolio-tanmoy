import React from "react";
import { Github, Linkedin, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="footer footer-horizontal footer-center bg-black text-white rounded-t-xl p-10 border-t border-gray-800">
      {/* Navigation Links */}
      <nav className="grid grid-flow-col gap-6">
        <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
        <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
        
      </nav>

      {/* Social Icons */}
      <nav>
        <div className="grid grid-flow-col gap-4 mt-4 md:mt-0">
          <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-md">
            <Github size={20} />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 hover:text-white transition-all duration-300 shadow-md">
            <Linkedin size={20} />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:from-red-500 hover:via-pink-500 hover:to-yellow-500 hover:text-white transition-all duration-300 shadow-md">
            <Youtube size={20} />
          </a>
          <a href="mailto:tanmoy@example.com" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:from-green-400 hover:via-teal-400 hover:to-blue-400 hover:text-white transition-all duration-300 shadow-md">
            <Mail size={20} />
          </a>
        </div>
      </nav>

      {/* Copyright */}
      <aside className="mt-4 md:mt-0 text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} - All rights reserved by Tanmoy</p>
      </aside>
    </footer>
  );
}
