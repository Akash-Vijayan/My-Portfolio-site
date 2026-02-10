
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  sections: { id: string; label: string }[];
}

export const Navbar: React.FC<NavbarProps> = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter out 'contact' from the main list since we have a dedicated button for it
  // Filter out 'hero' (Home) as the Logo acts as the home link
  const navLinks = sections.filter(s => s.id !== 'contact' && s.id !== 'hero');

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
    return () => {
        document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled 
            ? 'bg-sandal-50/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-sandal-200 dark:border-neutral-800 py-4 shadow-[0_2px_20px_rgba(61,54,43,0.02)]' 
            : 'bg-transparent border-b border-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div 
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-serif font-black text-burgundy-900 dark:text-sandal-100 cursor-pointer tracking-tight flex items-center gap-1 group relative z-50"
          >
            Akash<span className="text-burgundy-600 dark:text-burgundy-400 group-hover:opacity-50 transition-opacity">.</span>
          </div>

          <div className="flex items-center gap-6">
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-[10px] font-bold text-sandal-900/60 dark:text-sandal-100/60 hover:text-burgundy-900 dark:hover:text-sandal-50 transition-colors uppercase tracking-[0.15em] relative group"
                >
                  {section.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-burgundy-900 dark:bg-sandal-200 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
            
            <div className="hidden md:flex items-center gap-4">
                <ThemeToggle />
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-burgundy-900 dark:bg-sandal-200 text-sandal-50 dark:text-burgundy-900 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-burgundy-700 dark:hover:bg-white transition-all rounded-sm"
                >
                  Contact
                </button>
            </div>

            {/* Mobile Toggle & Theme Toggle for Mobile */}
            <div className="flex items-center gap-4 lg:hidden relative z-50">
              <ThemeToggle />
              <button 
                className="text-burgundy-900 dark:text-sandal-100 p-2"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-sandal-50 dark:bg-[#050505] flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        
        {/* Background Element */}
        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[50vh] h-[50vh] bg-sandal-200/30 dark:bg-burgundy-900/10 rounded-full blur-[80px]"></div>

        <nav className="flex flex-col items-center gap-8 relative z-10">
            {sections.filter(s => s.id !== 'hero').map((section, i) => (
            <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-4xl font-serif text-burgundy-900 dark:text-sandal-100 hover:text-burgundy-600 dark:hover:text-burgundy-400 transition-all hover:italic group flex items-center gap-4"
                style={{ transitionDelay: `${i * 50}ms` }}
            >
                <span className="text-xs font-sans text-sandal-300 dark:text-sandal-600 font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">0{i+1}</span>
                {section.label}
            </button>
            ))}
        </nav>

        <div className="absolute bottom-12 text-[10px] font-bold uppercase tracking-widest text-sandal-400 dark:text-neutral-500">
            © 2025 Akash V
        </div>
      </div>
    </>
  );
};
