import { useState, useEffect } from 'react';
import { navLinks } from '../constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-sm backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-serif font-medium text-gray-800">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>RA</a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors" onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }); }}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center">
            <a href="#contact" className="hidden sm:inline-block px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300">
              Book Appointment
            </a>
            {/* Mobile menu button can be added here */}
          </div>
        </div>
      </div>
    </header>
  );
}
