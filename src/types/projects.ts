// Project Type Definitions

export interface Feature {
  title: string;
  description: string;
}

export interface TechStack {
  frontend?: string[];
  backend?: string[];
  ui?: string[];
  features?: string[];
  ai?: string[];
  stateManagement?: string[];
  storage?: string[];
}

export interface ProjectData {
  name: string;
  tagline: string;
  description: string;
  features: Feature[];
  techStack: TechStack;
}

export interface Project {
  id: string;
  category: 'fullstack' | 'frontend-api' | 'frontend-pure';
  en: ProjectData;
  de: ProjectData;
  demoUrl?: string;
  githubUrl?: string;
  images?: string[];
  video?: string;
}
