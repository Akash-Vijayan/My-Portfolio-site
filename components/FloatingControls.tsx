
import React, { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export const FloatingControls: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Right Side: Actions (WhatsApp + Scroll Top) */}
      <div className="fixed right-6 md:right-12 bottom-8 z-40 flex flex-col gap-4 items-end">
        
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/918754257970"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-burgundy-900 text-white shadow-lg hover:scale-110 transition-all duration-300"
          title="Message Me on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
          <span className="absolute right-full mr-4 bg-white text-burgundy-900 text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-sm">
            WhatsApp Me
          </span>
        </a>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollTop}
          className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-burgundy-900/20 bg-white/80 backdrop-blur-sm text-burgundy-900 shadow-sm hover:bg-burgundy-900 hover:text-white transition-all duration-500 ${showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </>
  );
};
