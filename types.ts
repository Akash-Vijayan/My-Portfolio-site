import React from 'react';

export interface SectionProps {
  id: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface ProjectData {
  title: string;
  category: string;
  image: string;
}

export interface CertificateData {
  title: string;
  issuer: string;
  year: string;
}

export interface SkillData {
  name: string;
  category: string;
}