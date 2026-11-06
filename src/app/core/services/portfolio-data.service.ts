import { Injectable } from '@angular/core';
import { EducationItem, Project, SkillCategory } from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  readonly personalInfo = {
    name: 'Sakthivel S',
    firstName: 'Sakthivel',
    lastName: 'S',
    greeting: "HELLO, I'M",
    headline: 'Computer Science Engineering Student | Aspiring Software Developer',
    shortIntro: 'Crafting responsive, high-performance web applications and intuitive digital experiences with modern web technologies, clean architecture, and user-centric problem solving.',
    aboutParagraphs: [
      'Computer Science Engineering student at K. Ramakrishnan College of Engineering with a strong foundation in JavaScript, React.js, Node.js, Express.js, REST APIs, MongoDB, SQL, HTML5, and CSS3.',
      'Familiar with developing web and mobile applications, implementing JWT authentication, integrating third-party APIs, and architecting systems with AWS cloud services. AWS Certified Cloud Practitioner with a structured approach to learning, debugging, and collaborative software development.',
      'Experienced in building full-stack applications and real-time cloud workflows with hands-on internship exposure to enterprise data integration pipelines and streaming workflows.'
    ],
    verifiedStats: [
      { label: 'Current Degree', value: 'B.E. CSE' },
      { label: 'Academic Standing', value: '7.31 CGPA' },
      { label: 'AWS Certification', value: 'Cloud Practitioner' },
      { label: 'Tech Stack Focus', value: 'React, Node, Angular' }
    ],
    contact: {
      email: 'sakthivels5690@gmail.com',
      phone: '+91 7010652290',
      github: 'https://github.com/sakthi5690',
      linkedin: 'https://www.linkedin.com/in/sakthivel-s-300197329',
      location: 'Trichy, Tamil Nadu, India'
    },
    // Configurable resume path:
    // Placed in "public/assets/documents/Sakthivel_S_Resume.pdf"
    resume: {
      fileName: 'Sakthivel_S_Resume.pdf',
      filePath: 'assets/documents/Sakthivel_S_Resume.pdf',
      lastUpdated: 'Current Academic Year',
      available: true // Mounted and active
    },
    roles: [
      'Aspiring Software Developer',
      'Frontend Developer',
      'Full Stack Developer',
      'Problem Solver'
    ]
  };

  readonly skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: 'code-xml',
      description: 'Foundational and object-oriented programming languages for core logic and problem solving.',
      gradient: 'from-purple-500/20 to-indigo-500/10',
      skills: [
        { name: 'Java', icon: 'coffee', category: 'Programming Languages' },
        { name: 'Python', icon: 'binary', category: 'Programming Languages' },
        { name: 'JavaScript', icon: 'file-code', category: 'Programming Languages' }
      ]
    },
    {
      title: 'Frontend Development',
      icon: 'layout',
      description: 'Modern component-driven frameworks and web standards for high-performance interactive interfaces.',
      gradient: 'from-blue-500/20 to-cyan-500/10',
      skills: [
        { name: 'HTML', icon: 'file-text', category: 'Frontend' },
        { name: 'CSS', icon: 'palette', category: 'Frontend' },
        { name: 'Angular', icon: 'shield', category: 'Frontend' },
        { name: 'React', icon: 'atom', category: 'Frontend' }
      ]
    },
    {
      title: 'Backend Development',
      icon: 'server',
      description: 'Server runtime environments, RESTful APIs, and scalable backend service layers.',
      gradient: 'from-emerald-500/20 to-teal-500/10',
      skills: [
        { name: 'Node.js', icon: 'server', category: 'Backend' },
        { name: 'Express.js', icon: 'zap', category: 'Backend' }
      ]
    },
    {
      title: 'Database Management',
      icon: 'database',
      description: 'Relational structured and NoSQL document storage systems for dependable data management.',
      gradient: 'from-amber-500/20 to-orange-500/10',
      skills: [
        { name: 'MongoDB', icon: 'layers', category: 'Database' },
        { name: 'MySQL', icon: 'database', category: 'Database' }
      ]
    },
    {
      title: 'Mobile Development',
      icon: 'smartphone',
      description: 'Cross-platform mobile application development for smooth native user experiences.',
      gradient: 'from-sky-500/20 to-blue-500/10',
      skills: [
        { name: 'Flutter', icon: 'smartphone', category: 'Mobile' }
      ]
    },
    {
      title: 'Tools & Version Control',
      icon: 'git-branch',
      description: 'Version tracking, collaborative workflow, source code hosting, and repository management.',
      gradient: 'from-violet-500/20 to-purple-500/10',
      skills: [
        { name: 'Git', icon: 'git-pull-request', category: 'Tools' },
        { name: 'GitHub', icon: 'github', category: 'Tools' }
      ]
    }
  ];

  /*
   * =====================================================================
   * PROJECTS CONFIGURATION
   * NOTE: For links and details not yet published, clear placeholders are
   * provided and clearly marked below so you can update them easily.
   * =====================================================================
   */
  readonly projects: Project[] = [
    {
      id: 'nebula-mail',
      name: 'Nebula Mail – AI-Driven Email Client',
      tagline: 'Modern AI-powered email client featuring natural language email generation, Gmail sync, and real-time thread management.',
      category: 'AI & Web Development',
      badge: 'Featured Project',
      status: 'Completed',
      accentColor: '#8b5cf6',
      thumbnailPlaceholderColor: 'linear-gradient(135deg, #1e1136 0%, #3b185f 50%, #1a102f 100%)',
      icon: 'sparkles',
      description: 'An AI-driven email client that integrates Gmail API and Google OAuth for live inbox, sent-mail, composition, and thread management with an intelligent AI copilot.',
      problemStatement: 'High email volumes cause productivity bottlenecks, unorganized threads, and tedious manual draft writing.',
      solution: 'Developed an AI assistant with natural language drafting, smart search/filtering, and real-time Gmail synchronization using Server-Sent Events (SSE) and Google Pub/Sub.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'Gmail API', 'Supabase'],
      keyFeatures: [
        'AI Copilot for natural language email composition, reply, and forwarding',
        'Google OAuth authentication and Gmail API thread management',
        'Real-time synchronization via Google Pub/Sub and Server-Sent Events (SSE)',
        'Secure token persistence and attachment management with Supabase'
      ],
      githubUrl: 'https://github.com/sakthi5690',
      liveDemoUrl: '',
      systemArchitecture: 'Event-driven full-stack architecture with SSE push notifications and OAuth2 token refresh workflows.'
    },
    {
      id: 'pet-care-assistant',
      name: 'Pet CareAssistant – Health & Care App',
      tagline: 'Cross-platform mobile and web application for pet immunization tracking, diet schedules, and medical logs.',
      category: 'Mobile & Cloud Backend',
      badge: 'Mobile App',
      status: 'Completed',
      accentColor: '#0ea5e9',
      thumbnailPlaceholderColor: 'linear-gradient(135deg, #0b2545 0%, #134074 50%, #0d1b2a 100%)',
      icon: 'heart-pulse',
      description: 'A cross-platform mobile application for companion animal wellness, tracking vaccination milestones, feeding intervals, and digital clinical history.',
      problemStatement: 'Pet owners face difficulty tracking veterinary dates, medication schedules, and historical clinical diagnoses across manual notes.',
      solution: 'Consolidated mobile application with automated notifications, interactive scheduling views, and cloud-synced medical logs.',
      technologies: ['Flutter', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'Render'],
      keyFeatures: [
        'Pet health and immunization tracking with automated notifications',
        'Routine feeding schedules and reminder routines',
        'RESTful backend built with Node.js, Express.js, and MongoDB Atlas',
        'JWT-based secure authentication and cloud deployment on Render'
      ],
      githubUrl: 'https://github.com/sakthi5690',
      liveDemoUrl: '',
      systemArchitecture: 'Cross-platform Flutter frontend consuming secured Node.js/Express REST microservices hosted on Render.'
    },
    {
      id: 'weather-dashboard',
      name: 'Real-Time Weather Dashboard',
      tagline: 'Dynamic meteorological dashboard delivering accurate live forecasts, atmospheric metrics, and city search.',
      category: 'Frontend Web App',
      badge: 'Interactive UI',
      status: 'Completed',
      accentColor: '#0ea5e9',
      thumbnailPlaceholderColor: 'linear-gradient(135deg, #0b2545 0%, #134074 50%, #0d1b2a 100%)',
      icon: 'cloud-sun',
      description: 'An interactive web application displaying real-time weather conditions, multi-day forecasts, temperature metrics, humidity indices, and meteorological analytics with dynamic visuals.',
      problemStatement: 'Accessing clean, instant atmospheric updates without cumbersome visual clutter or bloated interfaces can be challenging for daily commuters and travelers.',
      solution: 'A streamlined web dashboard that delivers city-based lookup, live temperature indices, atmospheric conditions, and clean visual cards.',
      technologies: ['[Configurable Tech Stack: e.g., JavaScript / HTML / CSS / Weather API]'],
      keyFeatures: [
        'Real-time temperature, humidity, and wind speed updates',
        'Instant city and geographic location search',
        'Dynamic weather condition status representations',
        'Responsive layout optimized for smartphones and desktops'
      ],
      // Editable placeholders:
      githubUrl: 'https://github.com/sakthi5690/realtime-weather-dashboard', // [REPLACE WITH ACTUAL REPO URL]
      liveDemoUrl: '', // [REPLACE WITH LIVE DEPLOYMENT URL IF AVAILABLE]
      systemArchitecture: 'Asynchronous API-driven frontend parsing real-time JSON meteorological payloads.'
    },
    {
      id: 'hospital-booking',
      name: 'Hospital Appointment Booking System',
      tagline: 'Streamlined clinical scheduling system connecting patients with medical specialists efficiently.',
      category: 'Full Stack Web App',
      badge: 'Healthcare Tech',
      status: 'Prototype',
      accentColor: '#06b6d4',
      thumbnailPlaceholderColor: 'linear-gradient(135deg, #063940 0%, #195e63 50%, #0c2328 100%)',
      icon: 'stethoscope',
      description: 'A structured booking and scheduling platform allowing patients to browse medical departments, select doctors, check available slots, and confirm consultation appointments.',
      problemStatement: 'Traditional walk-in hospital queues and unorganized scheduling lead to excessive wait times and administrative overload for clinic staff.',
      solution: 'An automated scheduling portal enabling structured department listings, doctor profile views, and instant appointment booking confirmations.',
      technologies: ['[Configurable Tech Stack: e.g., Node.js / Express / MySQL or MongoDB / Web UI]'],
      keyFeatures: [
        'Department-based medical specialist browsing',
        'Time slot selection and booking validation',
        'Patient consultation record management',
        'Structured administrative schedule tracking'
      ],
      // Editable placeholders:
      githubUrl: 'https://github.com/sakthi5690/hospital-appointment-system', // [REPLACE WITH ACTUAL REPO URL]
      liveDemoUrl: '', // [REPLACE WITH LIVE DEPLOYMENT URL IF AVAILABLE]
      systemArchitecture: 'Relational database schema paired with server-side validation and responsive patient interfaces.'
    },
    {
      id: 'recycling-management',
      name: 'Recycling Centre Management System',
      tagline: 'Operational management platform for tracking recyclable waste intake, inventory, and processing logistics.',
      category: 'Management Systems',
      badge: 'Sustainability',
      status: 'In Progress',
      accentColor: '#10b981',
      thumbnailPlaceholderColor: 'linear-gradient(135deg, #092c1d 0%, #1b4d3e 50%, #061c12 100%)',
      icon: 'recycle',
      description: 'An operations management solution designed for collection facilities to record material categories (plastics, metals, e-waste, paper), monitor intake tonnage, and organize dispatch workflows.',
      problemStatement: 'Manual paper logs and fragmented spreadsheets in recycling centres cause inaccuracies in stock levels, dispatch delays, and lack of material traceability.',
      solution: 'A centralized portal for categorizing incoming recyclable items, monitoring warehouse weight metrics, and generating dispatch summaries.',
      technologies: ['[Configurable Tech Stack: e.g., Python or Node.js / Database / Dashboard UI]'],
      keyFeatures: [
        'Material categorization (paper, plastic, metal, electronics)',
        'Daily intake tracking and weight logging',
        'Inventory stock calculations and dispatch status',
        'Clean data summary views for facility administrators'
      ],
      // Editable placeholders:
      githubUrl: 'https://github.com/sakthi5690/recycling-centre-management', // [REPLACE WITH ACTUAL REPO URL]
      liveDemoUrl: '', // [REPLACE WITH LIVE DEPLOYMENT URL IF AVAILABLE]
      systemArchitecture: 'Data management layer with transaction logging and analytical dashboard screens.'
    },
    {
      id: 'ai-grievance-management',
      name: 'AI Grievance Management System',
      tagline: 'Intelligent citizen and student grievance portal with automated categorization and status tracking.',
      category: 'AI & Full Stack',
      badge: 'AI Innovation',
      status: 'Prototype',
      accentColor: '#8b5cf6',
      thumbnailPlaceholderColor: 'linear-gradient(135deg, #240046 0%, #3c096c 50%, #10002b 100%)',
      icon: 'sparkles',
      description: 'A modern grievance redressal platform utilizing intelligent classification techniques to route complaints to appropriate administrative authorities and provide transparent tracking.',
      problemStatement: 'Public and institutional complaints often get misplaced or delayed due to manual sorting, lack of prioritization, and minimal status transparency for applicants.',
      solution: 'An intelligent intake system that automatically tags incoming grievances, assigns department priority, and provides end-to-end resolution tracking.',
      technologies: ['[Configurable Tech Stack: e.g., Python / AI & NLP concepts / Web Frontend / Backend API]'],
      keyFeatures: [
        'Automated grievance text categorization',
        'Unique ticket generation and live progress tracking',
        'Departmental routing and administrative oversight',
        'Transparent feedback and audit history'
      ],
      // Editable placeholders:
      githubUrl: 'https://github.com/sakthi5690/ai-grievance-management-system', // [REPLACE WITH ACTUAL REPO URL]
      liveDemoUrl: '', // [REPLACE WITH LIVE DEPLOYMENT URL IF AVAILABLE]
      systemArchitecture: 'Natural language analysis backend connected to a ticket routing queue and responsive tracking UI.'
    }
  ];

  readonly education: EducationItem[] = [
    {
      degree: 'B.E. Computer Science and Engineering',
      institution: 'K. Ramakrishnan College of Engineering',
      location: 'Trichy, Tamil Nadu',
      status: 'Final Year Student',
      period: 'Undergraduate Program',
      highlights: [
        'Focus on core computer science foundations: Data Structures, Algorithms, Database Management Systems, and Object-Oriented Software Engineering.',
        'Hands-on laboratory work in web technologies, mobile application frameworks, and distributed system architectures.',
        'Active participant in technical symposiums, coding challenges, and collaborative academic team projects.'
      ]
    }
  ];
}

