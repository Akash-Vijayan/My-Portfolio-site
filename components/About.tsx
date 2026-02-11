
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* Bio Section */}
      <div className="grid md:grid-cols-12 gap-12 md:gap-24 items-start md:items-center">
        
        {/* Left Column: Collage Style Image */}
        <div className="md:col-span-5 relative md:sticky md:top-32 perspective-[1000px] mb-8 md:mb-0">
          <div className="relative w-full max-w-sm mx-auto md:max-w-none">
              
              {/* 1. Large Background Number */}
              <div className="absolute -top-12 md:-top-20 -left-6 md:-left-10 text-[100px] md:text-[200px] font-serif text-sandal-200/40 dark:text-neutral-800/40 leading-none select-none z-0 pointer-events-none">
                  01
              </div>

              {/* 2. Main Image */}
              <div className="relative z-10 w-full aspect-[3/4] bg-neutral-200 dark:bg-neutral-800 shadow-2xl overflow-hidden border-4 border-white dark:border-neutral-900">
                 <img 
                   src="/public/images/about.jpg" 
                   alt="Portrait of Akash"
                   className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
                 />
                 
                 {/* Inner Border Line */}
                 <div className="absolute inset-4 border border-white/20 pointer-events-none"></div>
              </div>

              {/* 3. Secondary Overlapping Element (Code Texture) */}
              <div className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-12 w-32 h-32 md:w-48 md:h-48 bg-burgundy-900 dark:bg-black z-20 border-4 border-sandal-50 dark:border-neutral-800 shadow-xl flex items-center justify-center overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                  
                  {/* Code Snippet Text */}
                  <div className="relative z-10 p-2 md:p-4 text-sandal-50 text-[8px] md:text-xs font-mono leading-relaxed opacity-80">
                     <span className="text-burgundy-300">class</span> <span className="text-yellow-200">Engineer</span> {'{'}<br/>
                     &nbsp;&nbsp;vision: <span className="text-green-300">"Clear"</span>;<br/>
                     &nbsp;&nbsp;stack: <span className="text-green-300">"Full"</span>;<br/>
                     &nbsp;&nbsp;passion: <span className="text-purple-300">true</span>;<br/>
                     {'}'}
                  </div>
              </div>

              {/* 4. Decorative Tape/Sticker */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E1C550] text-burgundy-900 text-[9px] md:text-[10px] font-bold px-4 py-1 uppercase tracking-widest transform -rotate-3 shadow-md z-30 mix-blend-normal">
                  Selected Profile
              </div>
          </div>
          
          <div className="mt-12 flex justify-between text-[10px] uppercase tracking-widest text-sandal-900/60 dark:text-sandal-100/60 font-medium pl-2">
            <span>Based in India</span>
            <span>Est. 2025</span>
          </div>
        </div>
        
        {/* Right Column: Content */}
        <div className="md:col-span-7 space-y-12 md:space-y-16">
           <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy-600 dark:text-burgundy-400 mb-6 md:mb-10 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-burgundy-600 dark:bg-burgundy-400"></span>
                The Studio
              </h2>
              <p className="text-3xl md:text-5xl font-serif text-burgundy-900 dark:text-sandal-100 leading-[1.1] mb-8 md:mb-10">
                Crafting digital experiences with <span className="italic relative inline-block">
                    clarity & purpose
                </span>.
              </p>
              <div className="space-y-6 md:space-y-8 text-neutral-600 dark:text-neutral-400 font-light leading-relaxed text-base md:text-lg text-balance">
                <p>
                  I’m a final-year Computer Science student focused on frontend development and graphic design. I spend my time building personal projects and improving my ability to create clean, modern, and responsive user interfaces.
                </p>
                <p>
                  I enjoy working on layouts, visual clarity, and thoughtful interactions that make digital experiences simple and intuitive.
                </p>
                <p>
                  With a disciplined approach to learning, I’m continuously developing my skills and preparing for opportunities as a junior frontend developer.
                </p>
              </div>
           </div>

           {/* Philosophy Quote */}
           <div className="bg-sandal-100/30 dark:bg-neutral-900/50 p-6 md:p-8 border-l-2 border-burgundy-900 dark:border-sandal-500 italic font-serif text-neutral-800 dark:text-neutral-200 relative">
             <span className="absolute top-4 left-4 text-4xl md:text-6xl text-sandal-200 dark:text-neutral-700 font-serif leading-none -z-10">"</span>
             The details are not the details. They make the design.
           </div>
        </div>
      </div>
    </div>
  );
};
