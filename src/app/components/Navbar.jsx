'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const menus = [
	  'About',
	  'Education',
	  'Experience',
	  'Projects',
    'Skills',
    
    
    
    'Contact',
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home'); // currently active section

  const handleLinkClick = (id) => {
    setIsOpen(false); // Close mobile menu
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActive(id); // update active section on click
    }
  };

  useEffect(() => {
    const sections = ['home', ...menus.map((m) => m.toLowerCase())];
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // 60% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020617]/90 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1
          className={`text-2xl font-bold cursor-pointer ${
            active === 'home' ? 'text-indigo-400' : 'text-white'
          }`}
          onClick={() => handleLinkClick('home')}
        >
          Tanmoy
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white">
          {menus.map((item) => {
            const id = item.toLowerCase();
            return (
              <li key={id}>
                <button
                  onClick={() => handleLinkClick(id)}
                  className={`transition-colors font-medium ${
                    active === id ? 'text-indigo-400' : 'hover:text-indigo-400'
                  }`}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Desktop Contact Button */}
        <button
          onClick={() => handleLinkClick('contact')}
          className={`hidden md:inline-block px-4 py-2 border-2 rounded-lg transition-all ${
            active === 'contact'
              ? 'bg-indigo-400 text-black border-indigo-400'
              : 'border-indigo-400 text-white hover:bg-indigo-400 hover:text-black'
          }`}
        >
          Contact
        </button>

        {/* Mobile Right Side */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => handleLinkClick('contact')}
            className="px-3 py-1.5 border-2 border-indigo-400 text-white rounded-lg hover:bg-indigo-400 hover:text-black transition-all text-sm"
          >
            Contact
          </button>
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#020617]/95 backdrop-blur-md w-full px-4 py-6 absolute top-full left-0 shadow-lg">
          <ul className="flex flex-col gap-4 text-white text-center">
            {menus.map((item) => {
              const id = item.toLowerCase();
              return (
                <li key={id}>
                  <button
                    onClick={() => handleLinkClick(id)}
                    className={`transition-colors text-lg font-medium ${
                      active === id ? 'text-indigo-400' : 'hover:text-indigo-400'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
