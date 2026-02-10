
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textPathRef = useRef<SVGTextElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    // Initial State - Set stroke dasharray to length of text roughly
    // The font size is large, so the stroke length is significant.
    gsap.set(textPathRef.current, { 
      strokeDasharray: 800, 
      strokeDashoffset: 800,
      fill: "transparent",
      opacity: 1
    });

    // 1. Signature Animation (Draws the name)
    // Simulating the pen writing
    tl.to(textPathRef.current, {
      strokeDashoffset: 0,
      duration: 2.0,
      ease: "power1.inOut",
    });

    // 2. Fill the text smoothly (Ink drying/filling)
    tl.to(textPathRef.current, {
      fill: "#FDFBF7", // sandal-50
      stroke: "transparent",
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5");

    // 3. Pause for impact
    tl.to({}, { duration: 0.3 });

    // 4. Premium Exit (Curtain Slide Up)
    tl.to(curtainRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut",
    });
    
    // 5. Hide container (for cleanup)
    tl.set(containerRef.current, { display: 'none' });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
    >
      {/* The Curtain Background */}
      <div 
        ref={curtainRef}
        className="absolute inset-0 bg-burgundy-900 w-full h-full flex flex-col items-center justify-center"
      >
          {/* Grain Texture Overlay */}
          <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay"></div>
          
          {/* Content Container */}
          <div className="relative w-full flex flex-col items-center justify-center p-8">
             
             {/* Signature Text - SVG for Stroke Animation */}
             <div className="relative z-10 overflow-visible transform scale-110 md:scale-150">
               <svg viewBox="0 0 400 150" className="w-[300px] md:w-[500px] h-auto overflow-visible">
                  <text 
                    ref={textPathRef}
                    x="50%" 
                    y="50%" 
                    dominantBaseline="middle" 
                    textAnchor="middle" 
                    className="font-signature text-[80px] md:text-[100px] stroke-sandal-50 stroke-[0.8px] opacity-0"
                  >
                    Akash Portfolio
                  </text>
               </svg>
             </div>

             {/* Optional Pen Tip Decoration or Subtitle */}
             <div className="absolute bottom-[20%] opacity-40">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-sandal-50">
                   Signing In
                </span>
             </div>
          </div>
      </div>
    </div>
  );
};
