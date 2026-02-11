
import React from 'react';
import { Code2, Sparkles, Database, Palette, Terminal, Cpu, Layers, GitBranch } from 'lucide-react';

const skillCategories = [
  {
  id: "01",
  title: "Frontend Engineering",
  description: "Building responsive, scalable interfaces with clean component structure and modern UI practices.",
  icon: <Code2 className="w-6 h-6" />,
  tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"]
},
  {
  id: "02",
  title: "Backend & Database",
  description: "Developing APIs and managing structured data to support reliable, production-ready applications.",
  icon: <Database className="w-6 h-6" />,
  tags: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
},
  {
  id: "03",
  title: "Creative Design",
  description: "Designing clean visual systems, social creatives, and branding assets with clarity and impact.",
  icon: <Palette className="w-6 h-6" />,
  tags: ["Canva", "Affinity Designer", "UI Design", "Branding"]
},
  {
  id: "04",
  title: "AI & Development Tools",
  description: "Integrating AI-powered tools into development, automation, and creative workflows to enhance productivity and output quality.",
  icon: <Sparkles className="w-6 h-6" />,
  tags: [
    "ChatGPT",
    "GitHub Copilot",
    "Gemini",
    "Claude",
    "Perplexity",
    "DALL·E",
    "Canva AI",
    "ElevenLabs",
    "etc."
  ]
}
];

export const Skills: React.FC = () => {
  return (
    <div className="py-24 relative">
       {/* Background Decoration */}
       <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-sandal-100/30 dark:from-burgundy-900/10 to-transparent pointer-events-none -z-10"></div>

       {/* Section Header */}
       <div className="grid md:grid-cols-12 gap-12 mb-20 items-end">
          <div className="md:col-span-7">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy-600 dark:text-burgundy-400 mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-burgundy-600 dark:bg-burgundy-400"></span>
              Technical Arsenal
            </h2>
            <h3 className="text-4xl md:text-7xl font-serif text-burgundy-900 dark:text-sandal-100 leading-[1] tracking-tight">
              Engineering with <br/>
              <span className="italic text-sandal-400 dark:text-sandal-500 font-light">Calculated Finesse.</span>
            </h3>
          </div>
          <div className="md:col-span-5 md:text-right pb-2">
             <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed text-balance">
               My stack is selected for performance, scalability, and visual fidelity. I don't just write code; I compose digital ecosystems.
             </p>
          </div>
       </div>

       {/* Grid Layout */}
       <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <div 
              key={i} 
              className="group relative bg-white dark:bg-neutral-900 border border-sandal-200 dark:border-neutral-800 p-8 md:p-12 hover:border-burgundy-900/30 dark:hover:border-sandal-200/30 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(61,54,43,0.05)] hover:-translate-y-1 overflow-hidden"
            >
                {/* Large Watermark Number */}
                <span className="absolute -right-4 -top-8 text-[80px] md:text-[120px] font-serif text-sandal-100/50 dark:text-neutral-800/50 group-hover:text-burgundy-900/5 dark:group-hover:text-sandal-100/5 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-700 select-none pointer-events-none">
                    {cat.id}
                </span>

                {/* Header */}
                <div className="relative z-10 mb-8">
                    <div className="w-12 h-12 rounded-full bg-sandal-50 dark:bg-neutral-800 border border-sandal-100 dark:border-neutral-700 flex items-center justify-center text-burgundy-900 dark:text-sandal-100 mb-6 group-hover:scale-110 group-hover:bg-burgundy-900 dark:group-hover:bg-sandal-100 group-hover:text-white dark:group-hover:text-burgundy-900 transition-all duration-500">
                        {cat.icon}
                    </div>
                    <h3 className="text-2xl font-serif text-neutral-900 dark:text-neutral-100 mb-3 group-hover:text-burgundy-900 dark:group-hover:text-sandal-200 transition-colors">
                        {cat.title}
                    </h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed max-w-sm">
                        {cat.description}
                    </p>
                </div>

                {/* Tags Grid */}
                <div className="relative z-10 flex flex-wrap gap-2">
                    {cat.tags.map((tag, tIndex) => (
                        <span 
                            key={tIndex} 
                            className="text-[10px] font-bold uppercase tracking-wider px-3 py-2 bg-sandal-50 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-sandal-100 dark:border-neutral-700 group-hover:border-burgundy-900/10 dark:group-hover:border-sandal-100/20 group-hover:bg-white dark:group-hover:bg-neutral-700 transition-colors duration-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Corner Decoration */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-burgundy-900/10 dark:border-sandal-100/10 group-hover:border-burgundy-900/40 dark:group-hover:border-sandal-100/40 transition-colors duration-500"></div>
            </div>
          ))}
       </div>
    </div>
  );
};
