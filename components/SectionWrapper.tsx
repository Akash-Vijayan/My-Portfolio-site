
import React, { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  id 
}) => {
  // The Hero component handles its own layout, container, and padding.
  // We bypass the wrapper styles to avoid double padding and misalignment.
  if (id === 'hero') {
    return (
      <section id={id} className="w-full">
        {children}
      </section>
    );
  }

  return (
    <section
      id={id}
      className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32 border-b border-neutral-200/60 last:border-0"
    >
      {children}
    </section>
  );
};
