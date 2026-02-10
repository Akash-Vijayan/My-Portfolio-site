
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Globe, Phone, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Adjusted delays to sync with Preloader exit (approx 2.2s mark)
      
      // Text Reveal
      gsap.fromTo(textRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power4.out", delay: 2.2 }
      );
      
      // Image Reveal
      gsap.fromTo(imageRef.current,
        { scale: 0.9, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 2.6 }
      );

      // UI Elements Reveal
      gsap.fromTo(".hero-element", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out", delay: 3.0 }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen relative flex flex-col pt-28 pb-12 md:pt-40 md:pb-16 px-6 md:px-12 max-w-[1400px] mx-auto w-full overflow-hidden perspective-[1000px]">
        
        {/* Top Meta Layer (Topper) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-burgundy-900/10 dark:border-sandal-100/10 pb-6 hero-element mb-8 md:mb-12 gap-6 md:gap-0">
            {/* Status & Contact */}
            <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy-600 dark:text-burgundy-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-burgundy-600 dark:bg-burgundy-400 animate-pulse"></span>
                    Available for work
                </span>
                <a href="tel:+918754257970" className="text-sm font-bold text-burgundy-900 dark:text-sandal-100 hover:text-burgundy-600 dark:hover:text-white transition-colors flex items-center gap-2 group">
                   <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" /> 
                   <span>+91 87542 57970</span>
                </a>
            </div>

            {/* Socials & Location */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16 self-end md:self-auto w-full md:w-auto">
                
                {/* Social Icons */}
                <div className="flex items-center gap-6 text-burgundy-900/60 dark:text-sandal-100/60 order-2 md:order-1">
                    <a href="https://github.com/Akash-Vijayan" className="hover:text-burgundy-900 dark:hover:text-white hover:scale-110 transition-all" aria-label="GitHub"><Github className="w-4 h-4" /></a>
                    <a href="https://www.linkedin.com/in/akash-v-13a6402b1/" className="hover:text-burgundy-900 dark:hover:text-white hover:scale-110 transition-all" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
                    <a href="https://www.instagram.com/akazz_i/" className="hover:text-burgundy-900 dark:hover:text-white hover:scale-110 transition-all" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
                </div>

                <div className="flex flex-col text-right group cursor-default order-1 md:order-2 self-end md:self-auto">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sandal-900/40 dark:text-sandal-100/40 group-hover:text-burgundy-600 dark:group-hover:text-burgundy-400 transition-colors">Location</span>
                    <span className="text-xs font-medium text-burgundy-900 dark:text-sandal-100">India, IN</span>
                </div>
            </div>
        </div>

        {/* Main Content Split Layout */}
        <div className="flex-1 grid md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
            
            {/* Left: Text Content */}
            <div className="md:col-span-7 flex flex-col justify-center relative z-20 order-2 md:order-1">
                {/* Massive Headline */}
                <h1 ref={textRef} className="text-[13vw] md:text-[10vw] leading-[0.9] md:leading-[0.85] font-serif font-medium text-burgundy-900 dark:text-sandal-100 tracking-tighter mix-blend-multiply dark:mix-blend-normal select-none cursor-default mb-6 md:mb-12">
                    Hi, I’m <br/>
                    <span className="italic relative inline-block">
                      Akash V
                      <span className="hidden md:block absolute -right-12 top-0 text-[2vw] font-sans font-bold text-burgundy-900/20 dark:text-sandal-100/20 not-italic tracking-widest -rotate-90 origin-bottom-left">DEV</span>
                    </span>
                    <span className="text-burgundy-600 dark:text-burgundy-400 inline-block hover:scale-150 transition-transform duration-500 cursor-pointer">.</span>
                </h1>

                {/* Subtitle & Actions */}
                <div className="hero-element md:max-w-lg bg-sandal-50/80 dark:bg-[#050505]/80 backdrop-blur-sm md:bg-transparent p-4 md:p-0 rounded-lg">
                    <h2 className="text-lg md:text-2xl font-medium text-burgundy-900 dark:text-sandal-200 mb-6">
                        Frontend Developer <span className="font-serif italic text-sandal-500 dark:text-sandal-400">&</span> Graphic Designer
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-8 text-balance border-l-2 border-sandal-300 dark:border-sandal-700 pl-6">
                        I create clean, modern, and responsive digital experiences with a focus on clarity and detail.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                            onClick={() => scrollToSection('projects')}
                            className="group flex items-center justify-center gap-3 bg-burgundy-900 dark:bg-sandal-200 text-sandal-50 dark:text-burgundy-900 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-burgundy-700 dark:hover:bg-white transition-colors"
                        >
                            Explore Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button 
                            onClick={() => scrollToSection('contact')}
                            className="group flex items-center justify-center gap-3 border border-burgundy-900/20 dark:border-sandal-100/20 text-burgundy-900 dark:text-sandal-100 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-burgundy-900/5 dark:hover:bg-sandal-100/5 transition-colors"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>

            {/* Right: Hero Image - Avant-Garde Monolith */}
            <div className="md:col-span-5 h-full relative flex items-center justify-center md:justify-end mt-4 md:mt-0 order-1 md:order-2" ref={imageRef}>
               {/* Background Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-sandal-200/30 dark:bg-burgundy-900/20 rounded-full blur-[80px] z-0 pointer-events-none"></div>

               {/* The Composition Container */}
               <div className="relative z-10 w-full max-w-[280px] md:max-w-[320px] aspect-[2/3] md:mr-12 mx-auto md:mx-0">
                   
                   {/* 1. The Solid Backing Block (Offset) */}
                   <div className="absolute top-4 left-4 md:top-6 md:left-6 w-full h-full bg-burgundy-900 dark:bg-sandal-900 z-0 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>

                   {/* 2. The Main Image (Monolith) */}
                   <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10 shadow-2xl transition-transform duration-700 hover:-translate-y-2 hover:-translate-x-2 bg-neutral-200 dark:bg-neutral-800">
                        <img 
                          src="../asserts/images/Profile.jpeg" 
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                          alt="Akash V"
                        />
                        
                        {/* Overlay Gradient for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/90 via-burgundy-900/20 to-transparent opacity-80 mix-blend-multiply dark:mix-blend-overlay"></div>

                        {/* Internal Text */}
                        <div className="absolute bottom-6 left-6 text-sandal-50 z-20">
                            <p className="font-serif italic text-2xl">Visionary</p>
                            <p className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-80 text-sandal-200">Frontend Engineer</p>
                        </div>
                   </div>

                   {/* 3. Vertical Text Decoration (Desktop Only) */}
                   <div className="hidden md:flex absolute -right-16 top-0 h-full flex-col justify-between py-4 z-20 pointer-events-none mix-blend-difference">
                       <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-sandal-200 rotate-90 origin-left translate-x-full whitespace-nowrap">
                           Based in India
                       </span>
                       <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-sandal-200 rotate-90 origin-left translate-x-full whitespace-nowrap">
                           Est. 2025
                       </span>
                   </div>

                   {/* 4. Floating Badge */}
                   <div className="absolute -top-6 -left-6 bg-sandal-50 dark:bg-neutral-900 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.1)] z-30 flex flex-col items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border border-sandal-200 dark:border-neutral-800 group hover:scale-110 transition-transform">
                      <Globe className="w-4 h-4 md:w-5 md:h-5 text-burgundy-900 dark:text-sandal-100 mb-1 group-hover:rotate-180 transition-transform duration-700" />
                      <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-200">INTL</span>
                   </div>
               </div>
            </div>
        </div>

        {/* Bottom Ticker/Status */}
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-burgundy-900/10 dark:border-sandal-100/10 pt-6 mt-8 md:mt-12 hero-element gap-4 md:gap-0">
             <div className="hidden md:flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy-900/40 dark:text-sandal-100/40">
                 <Globe className="w-4 h-4 text-burgundy-900/20 dark:text-sandal-100/20" />
                 <span>Local Time: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
             </div>
             
             <div className="flex w-full md:w-auto justify-between md:justify-start gap-2 md:gap-16 flex-wrap">
                 {['Frontend', 'Graphic Design', 'Creative'].map((item, i) => (
                     <span key={i} className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-sandal-900/40 dark:text-sandal-100/40 flex items-center gap-2 hover:text-burgundy-900 dark:hover:text-sandal-100 transition-colors cursor-default">
                         0{i+1} <span className="w-4 md:w-8 h-[1px] bg-sandal-300 dark:bg-neutral-700"></span> <span>{item}</span>
                     </span>
                 ))}
             </div>
        </div>
    </div>
  );
};
