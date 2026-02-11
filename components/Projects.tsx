import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "HomeBaking",
    category: "E-Commerce Web Application",
    year: "2025",
    scope: "Full Stack Development",
    img: "Projects/Web01.png",
    link: "https://home-baking.vercel.app"
  }
];

export const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative">

      {/* Header */}
      <div className="flex items-end justify-between mb-24">
        <div>
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy-600 dark:text-burgundy-400 mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-burgundy-600 dark:bg-burgundy-400"></span>
            Selected Works
          </h2>

          <h3 className="text-6xl md:text-8xl font-serif text-burgundy-900 dark:text-sandal-100 tracking-tighter">
            Index <span className="text-sandal-400 dark:text-sandal-500 font-light">&</span>
            <br />
            Archives
          </h3>
        </div>

        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sandal-900/40 dark:text-sandal-100/40 hidden md:block">
          ( {projects.length} ITEMS )
        </span>
      </div>

      {/* Table */}
      <div className="flex flex-col border-t border-burgundy-900 dark:border-sandal-200">

        {/* Table Header */}
        <div className="hidden md:flex py-4 border-b border-sandal-200 dark:border-neutral-800 text-[10px] font-bold uppercase tracking-[0.2em] text-sandal-400 dark:text-neutral-500">
          <div className="w-5/12">Project</div>
          <div className="w-3/12">Category</div>
          <div className="w-3/12">Scope</div>
          <div className="w-1/12 text-right">Year</div>
        </div>

        {projects.map((project, i) => (
          <div
            key={i}
            className="group relative border-b border-sandal-200 dark:border-neutral-800 py-12 flex flex-col md:flex-row items-start justify-between transition-colors hover:bg-white/60 dark:hover:bg-neutral-800/60"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >

            {/* Project Title + Premium Button */}
            <div className="md:w-5/12 flex flex-col">
              <h3 className="text-3xl md:text-4xl font-serif text-neutral-900 dark:text-neutral-200 group-hover:text-burgundy-900 dark:group-hover:text-sandal-100 transition-all duration-500 ease-out">
                {project.title}
              </h3>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 ml-4 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-burgundy-900 dark:border-sandal-200 text-[11px] font-semibold uppercase tracking-widest text-burgundy-900 dark:text-sandal-100 hover:bg-burgundy-900 hover:text-white dark:hover:bg-sandal-100 dark:hover:text-neutral-900 transition-all duration-300 w-fit"
              >
                View Site
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Category */}
            <div className="md:w-3/12 mt-8 md:mt-0">
              <span className="text-xs font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400 group-hover:text-burgundy-600 dark:group-hover:text-sandal-200 transition-colors">
                {project.category}
              </span>
            </div>

            {/* Scope */}
            <div className="md:w-3/12 mt-6 md:mt-0">
              <span className="inline-block px-3 py-1 border border-sandal-200 dark:border-neutral-700 rounded-full text-[10px] font-bold uppercase tracking-wider text-sandal-500 dark:text-neutral-400 group-hover:border-burgundy-200 dark:group-hover:border-sandal-200/50 group-hover:text-burgundy-800 dark:group-hover:text-sandal-200 transition-colors">
                {project.scope}
              </span>
            </div>

            {/* Year */}
            <div className="md:w-1/12 flex justify-end mt-6 md:mt-0">
              <span className="text-xs font-mono text-sandal-400 dark:text-neutral-500">
                {project.year}
              </span>
            </div>

            {/* Hover Image Preview */}
            <div
              className={`hidden md:block absolute z-20 top-1/2 left-[65%] -translate-y-1/2 w-[400px] pointer-events-none transition-all duration-500 ease-out ${
                hoveredIndex === i
                  ? 'opacity-100 translate-x-0 rotate-2'
                  : 'opacity-0 translate-x-12 rotate-6'
              }`}
            >
              <div className="bg-[#FDFBF7] dark:bg-neutral-900 p-4 pb-8 shadow-[0_20px_50px_rgba(61,54,43,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-sandal-200 dark:border-neutral-800">
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-neutral-900/5 dark:border-white/5">
                  <img
                    src={project.img}
                    className="w-full h-full object-cover"
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-burgundy-900/5 mix-blend-multiply dark:mix-blend-overlay"></div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};