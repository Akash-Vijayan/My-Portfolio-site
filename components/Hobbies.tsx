
import React from 'react';
import { Music, Activity, Compass } from 'lucide-react';

const hobbies = [
  {
    id: 1,
    title: "Martial Discipline",
    category: "Karate",
    description: "A practitioner of Karate. The dojo is where I cultivate focus, resilience, and the understanding that mastery is a journey of endless repetition and refinement.",
    icon: <Activity className="w-5 h-5" />,
    bg: "bg-neutral-900",
    text: "text-sandal-50",
    border: "border-neutral-800",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Sonic Curations",
    category: "Music",
    description: "Curating lo-fi soundscapes and ambient rhythms. Music is my flow state switch; a constant companion that dictates the tempo of my creative output.",
    icon: <Music className="w-5 h-5" />,
    bg: "bg-burgundy-900",
    text: "text-sandal-50",
    border: "border-burgundy-800",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "The Explorer",
    category: "Travel & Photography",
    description: "Seeking new perspectives through travel and lenses. Whether it's finding the perfect espresso in a new city or capturing geometric shadows.",
    icon: <Compass className="w-5 h-5" />,
    bg: "bg-sandal-100",
    text: "text-burgundy-900",
    border: "border-sandal-200",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop"
  }
];

export const Hobbies: React.FC = () => {
  return (
    <div className="overflow-hidden relative z-10">
      {/* Header */}
      <div className="grid md:grid-cols-12 gap-12 items-end mb-12 px-2">
        <div className="md:col-span-6">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy-600 flex items-center gap-4 mb-6">
             <span className="w-8 h-[1px] bg-burgundy-600"></span>
             Personal Interests
          </h2>
          <h3 className="text-4xl md:text-6xl font-serif text-burgundy-900 leading-[1.1]">
            Beyond the <br/><span className="italic text-sandal-400">Terminal.</span>
          </h3>
        </div>
        <div className="md:col-span-6 md:text-right">
          <p className="text-neutral-500 max-w-sm ml-auto text-sm leading-relaxed">
            I believe that great work comes from a well-rounded life. My pursuits outside of code shape my discipline and creativity.
          </p>
        </div>
      </div>

      {/* Cards Stack Container */}
      <div className="relative w-full max-w-5xl mx-auto h-auto md:h-[600px] flex flex-col gap-6 md:block group/deck">
        {hobbies.map((item, i) => (
           <div 
             key={i}
             className={`
               relative w-full md:w-[360px] aspect-[3/4] md:aspect-[3/4.5] p-8 flex flex-col justify-between overflow-hidden 
               transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group border
               ${item.bg} ${item.text} ${item.border}
               md:absolute md:top-0 md:left-1/2 transform-gpu
               
               /* Default Stack Logic */
               ${i === 0 ? 'md:-ml-[380px] md:rotate-[-8deg] md:mt-12 z-10' : ''}
               ${i === 1 ? 'md:-ml-[180px] md:rotate-0 md:-mt-4 z-20' : ''}
               ${i === 2 ? 'md:ml-[20px] md:rotate-[8deg] md:mt-12 z-10' : ''}

               /* Hover Logic: Pop Out, Straighten, Scale Up, High Z-Index */
               hover:z-50 
               hover:md:scale-110 
               hover:md:-translate-y-24 
               hover:md:rotate-0
             `}
           >
              {/* Image Overlay */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 mix-blend-overlay">
                  <img src={item.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={item.title} />
              </div>

              {/* Card Header */}
              <div className="relative z-10 flex justify-between items-start">
                 <div className={`p-3 rounded-full backdrop-blur-md bg-white/10 ${item.text}`}>
                    {item.icon}
                 </div>
                 <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">0{i+1}</span>
              </div>

              {/* Card Content */}
              <div className="relative z-10 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
                 <span className="text-[9px] font-bold uppercase tracking-[0.2em] mb-3 block opacity-70">{item.category}</span>
                 <h4 className="text-2xl font-serif mb-6 leading-tight">{item.title}</h4>
                 <p className="text-xs leading-relaxed opacity-80 font-light border-t border-current pt-4 border-opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                 </p>
              </div>
           </div>
        ))}
      </div>
    </div>
  );
};
