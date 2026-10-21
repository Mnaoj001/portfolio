import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { useTheme, AccentColor } from './ThemeContext';
import { Menu, X, FileText, Sparkles, Send } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { accent, setAccent } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const accents: { id: AccentColor; label: string; colorClass: string }[] = [
    { id: 'indigo', label: 'Indigo', colorClass: 'bg-indigo-500' },
    { id: 'cyan', label: 'Cyan', colorClass: 'bg-cyan-400' },
    { id: 'emerald', label: 'Emerald', colorClass: 'bg-emerald-400' },
    { id: 'purple', label: 'Purple', colorClass: 'bg-purple-500' },
    { id: 'rose', label: 'Rose', colorClass: 'bg-rose-500' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080B14]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a
            href="#"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-base shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              MD
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                B.Tech CSE-DS • Cyber Security
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons & Theme Customizer */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Color Accent Picker */}
            <div className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-800/80 rounded-full px-2.5 py-1.5 backdrop-blur-md" title="Customize Accent Color">
              <Sparkles className="w-3.5 h-3.5 text-slate-400 mr-0.5" />
              {accents.map((acc) => (
                <button
                  key={acc.id}
                  onClick={() => setAccent(acc.id)}
                  className={`w-3.5 h-3.5 rounded-full ${acc.colorClass} transition-transform cursor-pointer ${
                    accent === acc.id ? 'ring-2 ring-white scale-125' : 'opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Select ${acc.label} theme`}
                />
              ))}
            </div>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/70 rounded-full transition-all cursor-pointer shadow-sm hover:border-slate-500"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span>Resume</span>
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 rounded-full transition-all cursor-pointer shadow-md shadow-indigo-600/30 hover:scale-105"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 text-slate-300 hover:text-white bg-slate-800/80 rounded-lg border border-slate-700 cursor-pointer"
              title="Resume"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 border-b border-slate-800 px-4 pt-3 pb-6 mt-3 backdrop-blur-xl animate-fade-in">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-200 hover:bg-slate-800 rounded-xl"
              >
                {link.label}
              </a>
            ))}

            {/* Theme picker in mobile */}
            <div className="flex items-center justify-between px-4 py-3 mt-2 border-t border-slate-800">
              <span className="text-xs text-slate-400">Accent Color</span>
              <div className="flex items-center gap-2">
                {accents.map((acc) => (
                  <button
                    key={acc.id}
                    onClick={() => setAccent(acc.id)}
                    className={`w-4 h-4 rounded-full ${acc.colorClass} ${
                      accent === acc.id ? 'ring-2 ring-white scale-125' : 'opacity-60'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-slate-200 bg-slate-800 rounded-xl border border-slate-700"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Resume</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-xl"
              >
                <Send className="w-4 h-4" />
                <span>Hire Me</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
