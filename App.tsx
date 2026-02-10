
import React, { useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Hobbies } from './components/Hobbies';
import { Contact } from './components/Contact';
import { SectionWrapper } from './components/SectionWrapper';
import { Navbar } from './components/Navbar';
import { FloatingControls } from './components/FloatingControls';
import { Preloader } from './components/Preloader';

gsap.registerPlugin(ScrollTrigger);

const SECTIONS = [
  { id: 'hero', label: 'Home', component: <Hero /> },
  { id: 'about', label: 'About', component: <About /> },
  { id: 'education', label: 'Education', component: <Education /> },
  { id: 'skills', label: 'Skills', component: <Skills /> },
  { id: 'projects', label: 'Projects', component: <Projects /> },
  { id: 'certificates', label: 'Certificates', component: <Certificates /> },
  { id: 'hobbies', label: 'Hobbies', component: <Hobbies /> },
  { id: 'contact', label: 'Contact', component: <Contact /> },
];

function App() {
  const [loading, setLoading] = useState(true);
  
  // Clean Reveal Animation for Sections
  useLayoutEffect(() => {
    // Only run scroll triggers after loading is complete to ensure correct positions
    if (loading) return;

    const ctx = gsap.context(() => {
      SECTIONS.slice(1).forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          gsap.fromTo(el, 
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
              }
            }
          );
        }
      });
    });
    return () => ctx.revert();
  }, [loading]);

  return (
    <div className="relative w-full min-h-screen bg-sandal-50 dark:bg-[#050505] text-neutral-900 dark:text-neutral-200 font-sans transition-colors duration-500">
      
      {/* Premium Signature Preloader */}
      <Preloader onComplete={() => setLoading(false)} />

      {/* Global Grain Overlay */}
      <div className="bg-noise fixed inset-0 z-[100] opacity-30 mix-blend-multiply dark:mix-blend-overlay pointer-events-none"></div>

      {/* Elegant Background Gradients - Deep Wine & Sandalwood */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-sandal-200/30 dark:bg-burgundy-900/10 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-20%] w-[60vw] h-[60vw] bg-burgundy-900/5 dark:bg-sandal-900/10 rounded-full blur-[150px]"></div>
      </div>

      <Navbar sections={SECTIONS} />
      <FloatingControls />
      
      <main className="relative z-10 w-full flex flex-col">
        {SECTIONS.map((section) => (
          <SectionWrapper key={section.id} id={section.id}>
            {section.component}
          </SectionWrapper>
        ))}
      </main>

      <footer className="relative z-10 py-12 text-center text-sandal-500 dark:text-neutral-600 text-[10px] font-sans uppercase tracking-[0.3em]">
        Design & Development by Akash V
      </footer>
    </div>
  );
}

export default App;
