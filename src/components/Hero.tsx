import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from './ThemeContext';
import { ArrowRight, FileText, Github, Linkedin, Twitter, Sparkles, Terminal, Code, CheckCircle, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personal, stats } = portfolioData;
  const { accentClass } = useTheme();

  // Dynamic typing effect for titles
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullTitle = personal.titles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullTitle.slice(0, displayText.length + 1));
        if (displayText.length === currentFullTitle.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayText(currentFullTitle.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % personal.titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, personal.titles]);

  const handleResumeClick = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });
    onOpenResume();
  };

  return (
    <section className="relative min-h-[90vh] pt-32 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[380px] h-[380px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Pitch & Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-slate-300">
                  {personal.status}
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold backdrop-blur-md shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Passionate About Learning New Things</span>
              </div>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-indigo-200 to-cyan-300 bg-clip-text text-transparent">{personal.name}</span>
            </h1>

            {/* Dynamic Typed Subtitle */}
            <div className="h-10 sm:h-12 flex items-center mt-3">
              <span className="text-xl sm:text-2xl font-mono text-slate-300 flex items-center">
                <span className="text-indigo-400 mr-2 font-bold">&gt;</span>
                <span>{displayText}</span>
                <span className="w-2.5 h-6 bg-indigo-400 ml-1.5 animate-pulse inline-block"></span>
              </span>
            </div>

            {/* Bio summary */}
            <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {personal.bio}
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleResumeClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500/50 transition-all transform hover:-translate-y-0.5 cursor-pointer shadow-lg"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>View & Print CV</span>
              </button>

              {/* Social Icons */}
              <div className="flex items-center gap-2 ml-1 sm:ml-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 text-slate-400 hover:text-white bg-slate-900/70 hover:bg-slate-800 rounded-xl border border-slate-800 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 text-slate-400 hover:text-white bg-slate-900/70 hover:bg-slate-800 rounded-xl border border-slate-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personal.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 text-slate-400 hover:text-white bg-slate-900/70 hover:bg-slate-800 rounded-xl border border-slate-800 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Card & Floating Tech Satellites */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Center Avatar Card */}
            <div className="relative w-72 h-88 sm:w-80 sm:h-96 rounded-3xl p-1 bg-gradient-to-b from-indigo-500/30 via-slate-700/20 to-slate-900/80 shadow-2xl backdrop-blur-xl group">
              <div className="w-full h-full rounded-[22px] overflow-hidden relative bg-slate-900 flex flex-col justify-end p-6 border border-white/5">
                
                {/* Background Image */}
                <img
                  src={personal.avatarUrl}
                  alt={personal.name}
                  className="absolute inset-0 w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                {/* Floating Glass Pill inside card */}
                <div className="relative z-10 bg-slate-900/85 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-sm">{personal.name}</p>
                      <p className="text-xs text-indigo-400 font-mono">B.Tech CSE-DS</p>
                    </div>
                    <span className="p-2 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      <Code className="w-4 h-4" />
                    </span>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Cyber Security Certified
                    </span>
                    <span className="font-mono text-slate-300">Java / Python / SQL</span>
                  </div>
                </div>

              </div>

              {/* Floating Orbit Satellite 1: ScamShield Security */}
              <div className="absolute -top-4 -left-6 bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-md px-3.5 py-2 rounded-2xl flex items-center gap-2.5 animate-float-slow">
                <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
                <div className="text-left">
                  <p className="text-xs font-semibold text-white">ScamShield</p>
                  <p className="text-[10px] text-slate-400">Fraud & Threat Defense</p>
                </div>
              </div>

              {/* Floating Orbit Satellite 2: Programming */}
              <div className="absolute top-1/2 -right-8 bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-md px-3.5 py-2 rounded-2xl flex items-center gap-2.5 animate-float-slow" style={{ animationDelay: '1.5s' }}>
                <span className="w-3 h-3 rounded-full bg-indigo-400"></span>
                <div className="text-left">
                  <p className="text-xs font-semibold text-white">Python & Java</p>
                  <p className="text-[10px] text-slate-400">OOP & Data Structures</p>
                </div>
              </div>

              {/* Floating Orbit Satellite 3: SQL & Database */}
              <div className="absolute -bottom-4 -left-4 bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-md px-3.5 py-2 rounded-2xl flex items-center gap-2.5 animate-float-slow" style={{ animationDelay: '3s' }}>
                <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                <div className="text-left">
                  <p className="text-xs font-semibold text-white">SQL & Databases</p>
                  <p className="text-[10px] text-slate-400">Queries & Data Modeling</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Stats Grid at Bottom of Hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-8 border-t border-slate-800/80">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/40 transition-colors backdrop-blur-md group"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-indigo-400 transition-colors font-mono">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
