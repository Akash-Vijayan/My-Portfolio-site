
import React from 'react';

const educationData = [
  {
    period: "2023 – 2026 (Ongoing)",
    degree: "B.Sc. Computer Science",
    institution: "Pioneer Kumaraswamy College, Vetturnimadam",
    description: "Comprehensive study of computer applications, software development, and modern technologies. Deepening knowledge in algorithms, data structures, and full-stack development principles.",
    isCurrent: true
  },
  {
    period: "2023",
    degree: "HSC (Maths & Computer)",
    institution: "Vins School of Excellence (CBSE)",
    description: "Specialized in Computer Science stream with a strong focus on programming fundamentals, mathematics, and logic building.",
    isCurrent: false
  },
  {
    period: "2021",
    degree: "Secondary School (SSLC)",
    institution: "Vins School of Excellence (CBSE)",
    description: "Completed secondary education with distinction in Mathematics and Science subjects, establishing the core discipline for technical studies.",
    isCurrent: false
  }
];

export const Education: React.FC = () => {
  return (
    <div className="grid md:grid-cols-12 gap-8 md:gap-12">
      <div className="md:col-span-4">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy-600 dark:text-burgundy-400 flex items-center gap-4 h-fit md:sticky md:top-32 relative mb-8 md:mb-0">
           <span className="w-8 h-[1px] bg-burgundy-600 dark:bg-burgundy-400"></span>
           Educational Journey
        </h2>
      </div>
      
      <div className="md:col-span-8 space-y-8">
        {educationData.map((item, index) => (
            <div 
                key={index} 
                className="group relative pl-6 md:pl-12 border-l-2 border-sandal-200 dark:border-neutral-800 hover:border-burgundy-900/30 dark:hover:border-sandal-200/30 transition-colors duration-700"
            >
                {/* Timeline Dot */}
                <span 
                    className={`absolute -left-[9px] top-6 w-4 h-4 rounded-full border-4 border-sandal-50 dark:border-neutral-900 transition-all duration-500 transform group-hover:scale-150 z-10 ${
                        item.isCurrent ? 'bg-burgundy-900 dark:bg-sandal-200 shadow-[0_0_15px_rgba(128,0,32,0.5)]' : 'bg-sandal-300 dark:bg-neutral-600 group-hover:bg-burgundy-600 dark:group-hover:bg-sandal-200'
                    }`}
                ></span>
                
                {/* Card Container */}
                <div className="relative p-6 md:p-8 rounded-sm transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:bg-white dark:hover:bg-neutral-900 hover:shadow-[0_20px_40px_-15px_rgba(61,54,43,0.1)] hover:-translate-y-1 hover:translate-x-2 border border-transparent hover:border-sandal-100 dark:hover:border-neutral-800">
                    
                    {/* Period Badge */}
                    <div className="flex items-center gap-4 mb-4">
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                            item.isCurrent 
                            ? 'bg-burgundy-900/5 dark:bg-sandal-100/10 text-burgundy-900 dark:text-sandal-100 border-burgundy-900/10 dark:border-sandal-100/20 group-hover:bg-burgundy-900 dark:group-hover:bg-sandal-100 group-hover:text-white dark:group-hover:text-burgundy-900 transition-colors duration-500' 
                            : 'bg-sandal-100/50 dark:bg-neutral-800/50 text-sandal-500 dark:text-neutral-400 border-sandal-200 dark:border-neutral-700 group-hover:border-burgundy-900/20 dark:group-hover:border-sandal-200/20 group-hover:text-burgundy-800 dark:group-hover:text-sandal-200 transition-colors duration-500'
                        }`}>
                            {item.period}
                        </span>
                        {item.isCurrent && (
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                        )}
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl md:text-3xl font-serif text-neutral-800 dark:text-neutral-200 mb-2 group-hover:text-burgundy-900 dark:group-hover:text-sandal-100 transition-colors duration-300">
                        {item.degree}
                    </h3>
                    
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-6 flex items-center gap-2 group-hover:text-neutral-500 dark:group-hover:text-neutral-300 transition-colors">
                        <span className="w-2 h-[1px] bg-sandal-300 group-hover:w-6 transition-all duration-500"></span>
                        {item.institution}
                    </h4>
                    
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-light text-sm max-w-lg group-hover:text-neutral-800 dark:group-hover:text-neutral-300 transition-colors">
                        {item.description}
                    </p>

                    {/* Decorative Corner Reveal */}
                    <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
                        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-burgundy-900/20 dark:border-sandal-200/20 translate-x-4 -translate-y-4 group-hover:translate-x-[-8px] group-hover:translate-y-[8px] transition-transform duration-500"></div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};
