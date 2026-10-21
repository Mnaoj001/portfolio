export interface Skill {
  name: string;
  category: 'Languages & Core' | 'Cyber Security & Data' | 'Web & Database' | 'Soft Skills';
  level: number; // 1-100
  iconName: string;
  highlight?: boolean;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'Cyber Security' | 'Data Science & Python' | 'Java & Database';
  technologies: string[];
  metrics: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  image: string;
  keyFeatures: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  score: string;
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  category: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    titles: string[];
    bio: string;
    shortBio: string;
    location: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    twitter?: string;
    languages: string[];
    status: string;
    learningMotto: string;
    avatarUrl: string;
  };
  stats: {
    label: string;
    value: string;
    detail: string;
  }[];
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Manoj D",
    titles: [
      "Computer Science & Data Science Engineer",
      "Cyber Security & Threat Analyst",
      "Java & Python Developer",
      "SQL & Database Specialist"
    ],
    bio: "Motivated Computer Science & Engineering (Data Science) student at GM University with practical internship experience in Cyber Security, threat management, and digital defense. Driven by a genuine passion to constantly learn new things, explore emerging technologies, and engineer reliable software solutions.",
    shortBio: "B.Tech CSE-DS student passionate about learning new technologies, Cyber Security, and Data Science.",
    location: "Davangere, Karnataka, India (577002)",
    email: "manojraogorpade@gmail.com",
    phone: "+91 8660840634",
    github: "https://github.com/Mnaoj001",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    languages: ["English", "Hindi"],
    status: "Available for Internships & Engineering Roles",
    learningMotto: "Always eager to learn new things, explore emerging technologies, and solve real-world problems.",
    avatarUrl: "/manoj.jpg"
  },
  stats: [
    { label: "B.Tech Focus", value: "CSE-DS", detail: "Data Science & Computer Engineering" },
    { label: "Diploma CGPA", value: "7.68", detail: "Govt Polytechnic College Mundgod" },
    { label: "Certifications", value: "4+", detail: "Infosys Springboard & Industry Internships" },
    { label: "SSLC Score", value: "80.64%", detail: "Shree G P G M School Avaragere" }
  ],
  skills: [
    // Languages & Core
    { name: "Java", category: "Languages & Core", level: 88, iconName: "Cpu", highlight: true },
    { name: "Python", category: "Languages & Core", level: 90, iconName: "Terminal", highlight: true },
    { name: "SQL", category: "Languages & Core", level: 85, iconName: "Database", highlight: true },
    { name: "HTML & CSS", category: "Languages & Core", level: 88, iconName: "Code2", highlight: true },
    
    // Cyber Security & Data
    { name: "Cyber Security Fundamentals", category: "Cyber Security & Data", level: 92, iconName: "ShieldCheck", highlight: true },
    { name: "Threat Management & Defense", category: "Cyber Security & Data", level: 88, iconName: "Lock", highlight: true },
    { name: "Data Science & Analytics", category: "Cyber Security & Data", level: 82, iconName: "BarChart3", highlight: true },
    { name: "Network Security & Protocols", category: "Cyber Security & Data", level: 84, iconName: "Network" },

    // Web & Database
    { name: "Relational Database Management", category: "Web & Database", level: 85, iconName: "HardDrive" },
    { name: "Next-Gen Technologies", category: "Web & Database", level: 80, iconName: "Zap" },
    { name: "Git & Version Control", category: "Web & Database", level: 82, iconName: "GitBranch" },
    { name: "Web Application Security", category: "Web & Database", level: 84, iconName: "Container" },

    // Soft Skills
    { name: "Team Leading", category: "Soft Skills", level: 94, iconName: "Workflow", highlight: true },
    { name: "Active Listening & Communication", category: "Soft Skills", level: 95, iconName: "Sparkles", highlight: true },
    { name: "Analytical Problem Solving", category: "Soft Skills", level: 88, iconName: "CheckCircle2" },
    { name: "Multilingual (English & Hindi)", category: "Soft Skills", level: 92, iconName: "Share2" }
  ],
  projects: [
    {
      id: "scam-shield",
      title: "Scam Shield 2.0 - Scam & Threat Checker",
      tagline: "Check the message. Know what to do next. Pause · verify · then decide.",
      description: "A deployed, privacy-first cybersecurity tool that checks messages, SMS, emails, job offers, and bank alerts for fraud warning signs, inspects links safely, and provides actionable next steps.",
      longDescription: "Architected Scam Shield 2.0 as a client-side security application deployed on Vercel. Engineered with a strict privacy-by-design philosophy: user text never leaves their browser. Features automatic classification across Job, Delivery, Banking, and Investment threats, safe link reviews without malicious redirects, and practical incident response steps to prevent OTP or credential leakage.",
      category: "Cyber Security",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Cyber Security", "Vercel"],
      metrics: "Live on Vercel • 100% Private (Runs on Device)",
      githubUrl: "https://github.com",
      liveUrl: "https://scam-shield-three-roan.vercel.app/",
      featured: true,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
      keyFeatures: [
        "Category detection engine supporting Job offers, Delivery alerts, Bank warnings, and Prize scams",
        "Safe link review inspector examining URLs without opening malicious destinations",
        "Private-by-design architecture: message analysis executes entirely in the local browser",
        "Clear step-by-step guidance advising users on immediate protective measures against fraud"
      ]
    },
    {
      id: "data-analytics-engine",
      title: "DataVision - Predictive Analytics & Data Science Pipeline",
      tagline: "Exploratory data analysis and trend prediction for enterprise datasets",
      description: "An end-to-end data science platform built with Python, Pandas, and SQL that cleanses raw data, performs statistical modeling, and renders interactive insights.",
      longDescription: "Built to process multi-dimensional tabular datasets. Implemented SQL preprocessing queries, correlation matrices, outlier detection, and predictive regression models for decision intelligence.",
      category: "Data Science & Python",
      technologies: ["Python", "Pandas", "SQL", "NumPy", "Matplotlib", "HTML5"],
      metrics: "Processed 100,000+ records with clean statistical visualization",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      keyFeatures: [
        "Automated data cleansing pipeline handling missing values and duplicate rows",
        "Advanced SQL schema design and aggregation queries for high-speed indexing",
        "Interactive graphical dashboard rendering demographic and operational trends",
        "Exportable analytics reports in CSV and visual chart formats"
      ]
    },
    {
      id: "secure-auth-java",
      title: "SecureBank - Role-Based Authentication & Banking Portal",
      tagline: "Secure transaction processing system with cryptographic hashing and SQL persistence",
      description: "A robust Java application featuring hashed user credentials, session security, multi-tier user authorization, and ACID-compliant SQL transactions.",
      longDescription: "Engineered using Java OOP principles and JDBC database connections. Implemented SHA-256 password salting, SQL injection protection via PreparedStatements, and real-time ledger balance updates.",
      category: "Java & Database",
      technologies: ["Java", "SQL / MySQL", "JDBC", "HTML", "Cyber Security"],
      metrics: "100% resilient against SQL injection and unauthorized role escalation",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
      keyFeatures: [
        "Cryptographic password hashing and defense against rainbow table attacks",
        "PreparedStatement query architecture eliminating SQL injection vectors",
        "Granular Role-Based Access Control (Admin, Teller, Customer)",
        "Audit logging capturing timestamped user logins and balance mutations"
      ]
    }
  ],
  experiences: [
    {
      id: "exp-intern-1",
      role: "Cyber Security Intern",
      company: "ClickCrawl Media Private Limited",
      location: "Davangere / Remote",
      period: "Apr 2026",
      type: "Internship",
      description: [
        "Completed an intensive professional internship focusing on Cyber Security, threat intelligence, and vulnerability prevention methodologies.",
        "Demonstrated strong technical dedication, collaborative team communication, and rapid mastery of digital security tools.",
        "Participated in security audits, analyzed threat vectors, and recommended defensive countermeasures to safeguard sensitive digital assets."
      ],
      technologies: ["Cyber Security", "Threat Management", "Network Protocols", "Security Auditing"]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "B.Tech in Computer Science and Engineering - Data Science (CSE-DS)",
      institution: "GM University",
      period: "Aug 2026 – Present",
      location: "Davangere, Karnataka",
      score: "Pursuing",
      highlights: [
        "Specializing in Data Science, Machine Learning Foundations, and Advanced Computing Systems",
        "Actively applying cybersecurity practices and database engineering principles in academic projects"
      ]
    },
    {
      id: "edu-2",
      degree: "Diploma in Engineering",
      institution: "Govt Polytechnic College Mundgod",
      period: "Aug 2022 – May 2026",
      location: "Mundgod, Karnataka",
      score: "CGPA: 7.68",
      highlights: [
        "Achieved strong academic standing with a CGPA of 7.68",
        "Built core technical foundations in Java programming, database structures, and system hardware"
      ]
    },
    {
      id: "edu-3",
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Shree G P G M School Avaragere",
      period: "Jun 2021 – Apr 2022",
      location: "Davanagere, Karnataka",
      score: "Percentage: 80.64%",
      highlights: [
        "Graduated with distinction scoring 80.64%",
        "Demonstrated leadership in school academic and co-curricular initiatives"
      ]
    }
  ],
  certifications: [
    {
      title: "Cyber Security Internship Certificate",
      issuer: "ClickCrawl Media Private Limited",
      date: "Apr 2026",
      description: "Completed professional cybersecurity internship focusing on threat prevention, dedication, and security best practices.",
      category: "Industry Internship"
    },
    {
      title: "Cyber Security Foundation",
      issuer: "Infosys Springboard",
      date: "Mar 2025",
      description: "Completed a comprehensive program covering foundational concepts in cybersecurity, threat management, and digital security practices.",
      category: "Certification"
    },
    {
      title: "Introduction to Cyber Security",
      issuer: "Infosys Springboard",
      date: "Jul 2025",
      description: "Introductory course certificate covering core principles of cybersecurity, encryption, and safe digital architecture.",
      category: "Certification"
    },
    {
      title: "Next Gen Technologies",
      issuer: "Infosys Springboard",
      date: "Aug 2025",
      description: "Program completion certificate covering foundational concepts in cybersecurity and emerging next-gen digital systems.",
      category: "Certification"
    }
  ]
};
