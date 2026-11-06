export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  problemStatement: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl?: string; // Configurable placeholder
  liveDemoUrl?: string; // Configurable placeholder
  thumbnailPlaceholderColor: string;
  accentColor: string;
  icon: string;
  badge: string;
  status: 'Completed' | 'In Progress' | 'Prototype';
  role?: string;
  systemArchitecture?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  gradient: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  icon: string;
  category: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  status: string;
  period: string;
  highlights: string[];
}

export interface ContactMessage {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

