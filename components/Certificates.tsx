
import React, { useState } from 'react';
import { Award, ExternalLink, X, Eye } from 'lucide-react';

const certs = [
  { 
    name: "Frontend Developer Internship", 
    org: "MATT Engineering Solution", 
    year: "Dec 2025 – Present",
    id: "MATT-FE-2025",
    link: "#",
    image: "../asserts/certificate/MATT.png" 
  },
  { 
    name: "MERN Stack Masterclass", 
    org: "RoboLearn India LLP", 
    year: "Oct 26, 2025",
    id: "ROBO-MERN-2025",
    link: "#",
    image: "../asserts/certificate/Robolearn.png"
  },
  { 
    name: "OCI 2025 – AI Foundations Associate", 
    org: "Oracle University", 
    year: "Aug 2025",
    id: "ORACLE-AI-2025",
    link: "#",
    image: "../asserts/certificate/OracleCert.png"
  },
  { 
    name: "Full Stack Development Internship", 
    org: "NoviTech R&D Pvt Ltd", 
    year: "July – Aug 2025",
    id: "NOV-2025-FSD",
    link: "#",
    image: "../asserts/certificate/FSD Internship Cert.jpg"
  },
];

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certs[0] | null>(null);

  return (
    <div className="relative py-12 md:py-24">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sandal-100/20 dark:bg-burgundy-900/10 rounded-full blur-3xl -z-10"></div>

      <div className="grid md:grid-cols-12 gap-12 items-start">
        {/* Header Section */}
        <div className="md:col-span-4 md:sticky md:top-32 relative z-10">
           <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy-600 dark:text-burgundy-400 flex items-center gap-4 mb-8">
             <span className="w-8 h-[1px] bg-burgundy-600 dark:bg-burgundy-400"></span>
             Credentials
           </h2>
           <h3 className="text-4xl md:text-5xl font-serif text-burgundy-900 dark:text-sandal-100 leading-tight mb-6">
             Verified <br/>
             <span className="italic text-sandal-400 dark:text-sandal-500">Excellence.</span>
           </h3>
           <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xs mb-8">
             Continuous learning is the cornerstone of my professional growth. Here are the certifications and internships that validate my technical expertise.
           </p>
           
           <div className="hidden md:block p-6 bg-white dark:bg-neutral-900 border border-sandal-100 dark:border-neutral-800 shadow-[0_20px_40px_-15px_rgba(61,54,43,0.05)]">
              <div className="flex items-center gap-4 mb-2">
                 <div className="w-10 h-10 rounded-full bg-burgundy-900/5 dark:bg-sandal-100/10 flex items-center justify-center text-burgundy-900 dark:text-sandal-100">
                    <Award className="w-5 h-5" />
                 </div>
                 <div className="text-xs font-bold uppercase tracking-widest text-burgundy-900 dark:text-sandal-100">Latest Achievement</div>
              </div>
              <p className="text-sm font-serif text-neutral-800 dark:text-neutral-200">Frontend Developer Internship</p>
              <p className="text-[10px] text-neutral-400 mt-1 uppercase tracking-wider">MATT Engineering Solution</p>
           </div>
        </div>

        {/* Certificates List */}
        <div className="md:col-span-8">
           <div className="bg-white dark:bg-neutral-900 border border-sandal-200 dark:border-neutral-800 shadow-sm">
              {certs.map((cert, i) => (
                <div 
                  key={i} 
                  onClick={() => setSelectedCert(cert)}
                  className="group relative flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 border-b border-sandal-100 dark:border-neutral-800 last:border-0 hover:bg-sandal-50/50 dark:hover:bg-neutral-800 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex-1 pr-8">
                     <div className="flex items-center gap-3 mb-2">
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-sandal-400 dark:text-neutral-500 group-hover:text-burgundy-600 dark:group-hover:text-sandal-200 transition-colors">
                           {cert.org}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-sandal-300 dark:bg-neutral-600"></span>
                        <span className="text-[10px] font-mono text-sandal-400 dark:text-neutral-500">{cert.year}</span>
                     </div>
                     <h4 className="text-xl md:text-2xl font-serif text-neutral-800 dark:text-neutral-200 group-hover:text-burgundy-900 dark:group-hover:text-white transition-colors">
                        {cert.name}
                     </h4>
                     <p className="text-[10px] font-mono text-neutral-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                        ID: {cert.id}
                     </p>
                  </div>

                  <div className="mt-6 md:mt-0 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-burgundy-900 dark:text-sandal-200 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                     View Credential <Eye className="w-4 h-4" />
                  </div>

                  {/* Hover Accent Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-burgundy-900 dark:bg-sandal-200 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                </div>
              ))}
           </div>
           
           <div className="mt-8 text-right">
              <p className="text-[10px] font-mono text-sandal-400 dark:text-neutral-600 uppercase tracking-widest">
                 * Click on a credential to view details
              </p>
           </div>
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-burgundy-900/90 dark:bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-4xl bg-[#FDFBF7] dark:bg-neutral-900 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-[fadeIn_0.3s_ease-out]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-sandal-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <div>
                <h3 className="text-xl md:text-2xl font-serif text-burgundy-900 dark:text-sandal-100">{selectedCert.name}</h3>
                <p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">
                  Issued by {selectedCert.org} — {selectedCert.year}
                </p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors group"
              >
                <X className="w-6 h-6 text-neutral-400 group-hover:text-burgundy-900 dark:group-hover:text-white" />
              </button>
            </div>

            {/* Modal Body - Image Viewer */}
            <div className="flex-1 overflow-y-auto bg-neutral-100 dark:bg-neutral-950 p-4 md:p-8 relative">
               <div className="relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] bg-white dark:bg-neutral-900 p-2 border border-white dark:border-neutral-800 mx-auto max-w-full w-fit">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.name} 
                    className="block w-full h-auto max-w-full"
                  />
                  {/* Watermark / Overlay Effect */}
                  <div className="absolute inset-0 pointer-events-none mix-blend-multiply bg-sandal-100/10 dark:bg-black/20"></div>
               </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 md:p-6 bg-white dark:bg-neutral-900 border-t border-sandal-200 dark:border-neutral-800 z-10">
              <div className="text-[10px] font-mono text-neutral-400">
                CREDENTIAL ID: {selectedCert.id}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
