
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Lumina Portfolio",
    category: "WebGL Experience",
    year: "2024",
    scope: "Design & Dev",
    img: "https://picsum.photos/1200/800?random=1"
  },
  {
    title: "Apex Financial",
    category: "SaaS Dashboard",
    year: "2023",
    scope: "Frontend Architecture",
    img: "https://picsum.photos/1200/800?random=2"
  },
  {
    title: "Mono E-Commerce",
    category: "Headless Shopify",
    year: "2023",
    scope: "Full Stack",
    img: "https://picsum.photos/1200/800?random=3"
  },
  {
    title: "Urban Architecture",
    category: "Brand Identity",
    year: "2022",
    scope: "Interaction Design",
    img: "https://picsum.photos/1200/800?random=4"
  },
  {
    title: "Nebula Stream",
    category: "Video Platform",
    year: "2022",
    scope: "UI Engineering",
    img: "https://picsum.photos/1200/800?random=5"
  },
  {
    title: "Velvet Estates",
    category: "Real Estate",
    year: "2021",
    scope: "Frontend Dev",
    img: "https://picsum.photos/1200/800?random=6"
  }
];

export const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative">
      <div className="flex items-end justify-between mb-24">
        <div>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy-600 dark:text-burgundy-400 mb-6 flex items-center gap-4">
             <span className="w-8 h-[1px] bg-burgundy-600 dark:bg-burgundy-400"></span>
             Selected Works
          </h2>
          <h3 className="text-6xl md:text-8xl font-serif text-burgundy-900 dark:text-sandal-100 tracking-tighter">
            Index <span className="text-sandal-400 dark:text-sandal-500 font-light">&</span><br/> Archives
          </h3>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sandal-900/40 dark:text-sandal-100/40 hidden md:block">
          ( {projects.length} ITEMS )
        </span>
      </div>

      <div className="flex flex-col border-t border-burgundy-900 dark:border-sandal-200">
        <div className="hidden md:flex py-4 border-b border-sandal-200 dark:border-neutral-800 text-[10px] font-bold uppercase tracking-[0.2em] text-sandal-400 dark:text-neutral-500">
           <div className="w-5/12">Project</div>
           <div className="w-3/12">Category</div>
           <div className="w-3/12">Scope</div>
           <div className="w-1/12 text-right">Year</div>
        </div>

        {projects.map((project, i) => (
          <div 
            key={i}
            className="group relative border-b border-sandal-200 dark:border-neutral-800 py-12 flex flex-col md:flex-row items-baseline justify-between transition-colors hover:bg-white/60 dark:hover:bg-neutral-800/60 cursor-pointer"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="md:w-5/12">
               <h3 className="text-3xl md:text-4xl font-serif text-neutral-900 dark:text-neutral-200 group-hover:text-burgundy-900 dark:group-hover:text-sandal-100 group-hover:translate-x-4 transition-all duration-500 ease-out">
                 {project.title}
               </h3>
            </div>
            
            <div className="md:w-3/12 mt-4 md:mt-0">
               <span className="text-xs font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400 group-hover:text-burgundy-600 dark:group-hover:text-sandal-200 transition-colors">
                 {project.category}
               </span>
            </div>

            <div className="md:w-3/12 mt-2 md:mt-0">
               <span className="inline-block px-3 py-1 border border-sandal-200 dark:border-neutral-700 rounded-full text-[10px] font-bold uppercase tracking-wider text-sandal-500 dark:text-neutral-400 group-hover:border-burgundy-200 dark:group-hover:border-sandal-200/50 group-hover:text-burgundy-800 dark:group-hover:text-sandal-200 transition-colors">
                 {project.scope}
               </span>
            </div>
            
            <div className="md:w-1/12 flex justify-end mt-4 md:mt-0 items-center gap-4">
              <span className="text-xs font-mono text-sandal-400 dark:text-neutral-500">{project.year}</span>
              <ArrowUpRight className="w-5 h-5 text-sandal-300 dark:text-neutral-600 group-hover:text-burgundy-900 dark:group-hover:text-sandal-100 transition-colors" />
            </div>

            {/* Hover Image Reveal (Desktop) - FRAMED */}
            <div 
              className={`hidden md:block absolute z-20 top-1/2 left-[65%] -translate-y-1/2 w-[400px] pointer-events-none transition-all duration-500 ease-out ${
                hoveredIndex === i ? 'opacity-100 translate-x-0 rotate-2' : 'opacity-0 translate-x-12 rotate-6'
              }`}
            >
               {/* Gallery Frame Container */}
               <div className="bg-[#FDFBF7] dark:bg-neutral-900 p-4 pb-8 shadow-[0_20px_50px_rgba(61,54,43,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-sandal-200 dark:border-neutral-800">
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-neutral-900/5 dark:border-white/5">
                      <img src={project.img} className="w-full h-full object-cover" alt="" />
                      <div className="absolute inset-0 bg-burgundy-900/5 mix-blend-multiply dark:mix-blend-overlay"></div>
                  </div>
                  
                  {/* Frame Metadata */}
                  <div className="mt-4 flex justify-between items-center border-t border-sandal-200 dark:border-neutral-800 pt-3">
                     <span className="text-[9px] font-mono text-neutral-400 tracking-widest uppercase">FIG. 0{i+1}</span>
                     <span className="text-[9px] font-serif italic text-burgundy-900 dark:text-sandal-100">Archive Selection</span>
                  </div>
               </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-24 text-center">
        <a href="#" className="inline-block border-b border-burgundy-900 dark:border-sandal-200 pb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy-900 dark:text-sandal-100 hover:text-burgundy-600 dark:hover:text-white hover:border-burgundy-600 transition-colors">
          View All Archives
        </a>
      </div>
    </div>
  );
};
