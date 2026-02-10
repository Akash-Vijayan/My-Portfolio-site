
import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, ArrowRight, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer className="pt-24 md:pt-40 pb-12">
      {/* Big CTA */}
      <div className="border-b border-burgundy-900/20 dark:border-sandal-200/20 pb-24 mb-24">
         <h2 className="text-[12vw] md:text-[10vw] leading-[0.8] font-serif text-burgundy-900 dark:text-sandal-100 tracking-tighter mb-16 md:mb-24">
           Let's create<br/>
           <span className="ml-8 md:ml-32 text-sandal-400 dark:text-sandal-600 italic">legacy.</span>
         </h2>
         
         <div className="grid md:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Contact Details */}
            <div className="md:col-span-6 flex flex-col gap-10">
                <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-burgundy-900/40 dark:text-sandal-100/40">Coordinates</span>
                    <h3 className="text-xl md:text-2xl font-serif text-burgundy-900 dark:text-sandal-200">
                      Based in India,<br/>Available Worldwide
                    </h3>
                </div>

                {/* Email */}
                <a 
                  href="mailto:vakash9095@gmail.com" 
                  className="group flex items-center gap-4 md:gap-6 text-lg md:text-3xl font-serif italic text-neutral-900 dark:text-neutral-200 hover:text-burgundy-600 dark:hover:text-sandal-300 transition-colors break-all md:break-normal"
                >
                  <div className="w-12 h-12 rounded-full bg-burgundy-900 dark:bg-sandal-200 text-white dark:text-burgundy-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>vakash9095@gmail.com</span>
                </a>

                {/* Phone */}
                <a 
                  href="tel:+918754257970" 
                  className="group flex items-center gap-4 md:gap-6 text-lg md:text-3xl font-bold text-neutral-900 dark:text-white hover:text-burgundy-600 dark:hover:text-sandal-300 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-sandal-200 dark:bg-neutral-800 text-burgundy-900 dark:text-sandal-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+91 87542 57970</span>
                </a>
                
                {/* Status Badge */}
                <div className="mt-8 flex gap-3 items-center">
                   <div className="relative w-3 h-3">
                     <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                     <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                   </div>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Accepting New Inquiries</span>
                 </div>
            </div>
            
            {/* Right Column: Map Visualization */}
            <div className="md:col-span-6 relative h-[400px] w-full rounded-sm overflow-hidden border border-sandal-200 dark:border-neutral-800 shadow-2xl group">
               {/* Map Image (Styled) */}
               <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-900">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
                    alt="Map Location"
                    className="w-full h-full object-cover grayscale opacity-60 dark:opacity-40 contrast-125 group-hover:scale-110 transition-transform duration-[2s]" 
                  />
                  <div className="absolute inset-0 bg-sandal-50/20 mix-blend-sepia pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/10 to-transparent pointer-events-none"></div>
               </div>

               {/* Location Pin */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group-hover:-translate-y-[calc(50%+10px)] transition-transform duration-500">
                  <div className="relative">
                     <MapPin className="w-8 h-8 text-burgundy-900 dark:text-sandal-200 drop-shadow-md relative z-10 fill-burgundy-900/20 dark:fill-sandal-200/20" />
                     <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-1 bg-black/30 rounded-full blur-[2px]"></div>
                  </div>
                  <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm px-4 py-2 rounded-sm shadow-sm border border-sandal-200 dark:border-neutral-700 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                     <span className="block text-[10px] font-bold uppercase tracking-widest text-burgundy-900 dark:text-sandal-100">Nagercoil</span>
                     <span className="block text-[9px] text-neutral-500 dark:text-neutral-400">Tamil Nadu, India</span>
                  </div>
               </div>

               {/* Map Overlay Info */}
               <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
                  <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur px-3 py-2 border border-sandal-100 dark:border-neutral-800">
                      <span className="text-[9px] font-mono font-bold text-burgundy-900 dark:text-sandal-100">8°10'N, 77°25'E</span>
                  </div>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="pointer-events-auto flex items-center gap-2 bg-burgundy-900 dark:bg-sandal-200 text-white dark:text-burgundy-900 px-4 py-2 text-[9px] font-bold uppercase tracking-widest hover:bg-burgundy-700 dark:hover:bg-white transition-colors shadow-lg"
                  >
                    Open Map <ExternalLink className="w-3 h-3" />
                  </a>
               </div>
            </div>

         </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm">
        <div className="space-y-8">
          <h4 className="font-bold uppercase tracking-widest text-burgundy-900 dark:text-sandal-200 text-[10px]">Socials</h4>
          <ul className="space-y-4 text-neutral-500 dark:text-neutral-400">
            <li><a href="#" className="hover:text-burgundy-600 dark:hover:text-sandal-100 transition-colors flex items-center gap-2 group">LinkedIn <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"/></a></li>
            <li><a href="#" className="hover:text-burgundy-600 dark:hover:text-sandal-100 transition-colors flex items-center gap-2 group">Twitter / X <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"/></a></li>
            <li><a href="#" className="hover:text-burgundy-600 dark:hover:text-sandal-100 transition-colors flex items-center gap-2 group">Instagram <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"/></a></li>
            <li><a href="#" className="hover:text-burgundy-600 dark:hover:text-sandal-100 transition-colors flex items-center gap-2 group">GitHub <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"/></a></li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="font-bold uppercase tracking-widest text-burgundy-900 dark:text-sandal-200 text-[10px]">Directory</h4>
          <ul className="space-y-4 text-neutral-500 dark:text-neutral-400">
            <li><a href="#about" className="hover:text-burgundy-600 dark:hover:text-sandal-100 transition-colors">Studio</a></li>
            <li><a href="#projects" className="hover:text-burgundy-600 dark:hover:text-sandal-100 transition-colors">Works</a></li>
            <li><a href="#skills" className="hover:text-burgundy-600 dark:hover:text-sandal-100 transition-colors">Expertise</a></li>
            <li><a href="#contact" className="hover:text-burgundy-600 dark:hover:text-sandal-100 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-2 flex flex-col justify-between items-start md:items-end h-full">
           <div className="text-right hidden md:block">
             <span className="text-[120px] leading-none font-serif text-sandal-200 dark:text-neutral-800 font-black opacity-50">A.</span>
           </div>
           <div className="text-sandal-400 dark:text-neutral-500 text-[10px] font-mono uppercase tracking-widest text-right mt-auto">
             © {new Date().getFullYear()} Akash V.<br/>
             All Rights Reserved.
           </div>
        </div>
      </div>
    </footer>
  );
};
