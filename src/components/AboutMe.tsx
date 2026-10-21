import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { User, Terminal, Code2, ShieldCheck, Database, FileText, Award, Sparkles, Languages, BookOpen } from 'lucide-react';

interface AboutMeProps {
  onOpenResume: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onOpenResume }) => {
  const { personal } = portfolioData;

  const pillars = [
    {
      title: 'Cyber Security & Defense',
      desc: 'Trained in threat intelligence, digital security practices, network vulnerability auditing, and prevention methodologies through industry internship & Infosys certifications.',
      icon: ShieldCheck,
      color: 'text-cyan-400',
      border: 'border-cyan-500/20'
    },
    {
      title: 'Java & Python Engineering',
      desc: 'Developing robust logic, object-oriented applications, algorithm implementation, and automated scripting with clean and structured syntax.',
      icon: Code2,
      color: 'text-indigo-400',
      border: 'border-indigo-500/20'
    },
    {
      title: 'SQL & Data Science Foundations',
      desc: 'Designing relational database schemas, executing complex SQL queries, and utilizing data analytics principles to extract actionable insights.',
      icon: Database,
      color: 'text-emerald-400',
      border: 'border-emerald-500/20'
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Curriculum Vitae / Summary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education, Discipline & Technical Focus
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            A comprehensive profile of my academic background at GM University, cybersecurity training, and core technical strengths.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900/50 border border-slate-800/80 p-8 sm:p-10 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider mb-4">
                <Terminal className="w-4 h-4" />
                <span>manoj_profile.ts</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Dedicated CSE (Data Science) student passionate about Cyber Security & Software Development.
              </h3>

              <p className="text-slate-300 leading-relaxed text-base mb-4">
                I am currently pursuing my <strong>B.Tech in Computer Science and Engineering - Data Science (CSE-DS)</strong> at <strong>GM University</strong>. Prior to this, I completed my Diploma at Govt Polytechnic College Mundgod with a CGPA of <strong>7.68</strong> and scored <strong>80.64%</strong> in my SSLC.
              </p>

              <p className="text-slate-400 leading-relaxed text-sm">
                I completed a professional <strong>Cyber Security Internship at ClickCrawl Media Private Limited</strong>, where I developed practical threat awareness and defensive best practices. Certified in <em>Cyber Security Foundation</em>, <em>Introduction to Cyber Security</em>, and <em>Next Gen Technologies</em> by Infosys Springboard.
              </p>

              <div className="mt-4 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                <p className="text-xs sm:text-sm text-amber-200 font-medium">
                  <strong>Continuous Learning Mindset:</strong> I am deeply interested in learning new things, exploring emerging technologies, and solving challenging engineering problems.
                </p>
              </div>
            </div>

            {/* Quick action button inside about */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Soft Skills: Team Leading • Good Listener • Eager Learner</span>
              </div>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all cursor-pointer shadow-md shadow-indigo-600/20"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Inspect Full CV</span>
              </button>
            </div>
          </div>

          {/* Quick Info & CV Details Card */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-900/50 border border-slate-800/80 p-8 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-400" />
                <span>Key Details & Contact</span>
              </h3>

              <div className="space-y-3.5">
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80 text-sm">
                  <span className="text-slate-400">Location</span>
                  <span className="text-slate-200 font-medium">Davangere, Karnataka</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80 text-sm">
                  <span className="text-slate-400">Current Program</span>
                  <span className="text-indigo-400 font-medium">B.Tech in CSE-DS</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80 text-sm">
                  <span className="text-slate-400">University</span>
                  <span className="text-slate-200 font-medium">GM University</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80 text-sm">
                  <span className="text-slate-400">Diploma College</span>
                  <span className="text-emerald-400 font-medium">Govt Polytechnic (7.68 CGPA)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80 text-sm">
                  <span className="text-slate-400">Languages Known</span>
                  <span className="text-slate-200 font-medium">English, Hindi</span>
                </div>
                <div className="flex justify-between items-center py-2 text-sm">
                  <span className="text-slate-400">Availability</span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Open to Internships & Roles
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-200">
              💡 <strong>Recruiter Note:</strong> Click the "Resume" button anytime to print Manoj's exact CV as a one-page PDF.
            </div>
          </div>

        </div>

        {/* 3 Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl bg-slate-900/40 border ${pillar.border} hover:bg-slate-900/60 transition-all duration-300 group`}
              >
                <div className="p-3 rounded-2xl bg-slate-800/80 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Icon className={`w-6 h-6 ${pillar.color}`} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{pillar.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
