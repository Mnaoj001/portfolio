import React, { useState } from 'react';
import { portfolioData, Skill } from '../data/portfolioData';
import { Cpu, Search, Sparkles, Check, Atom, Layers, Code2, Palette, Box, Workflow, Server, Network, Terminal, Share2, Database, HardDrive, Zap, Flame, Container, Cloud, GitBranch, CheckCircle2, ShieldCheck, Lock, BarChart3 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Languages & Core', 'Cyber Security & Data', 'Web & Database', 'Soft Skills'];

  const filteredSkills = portfolioData.skills.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Lock': return <Lock className="w-5 h-5 text-rose-400" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-cyan-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-indigo-400" />;
      case 'Database': return <Database className="w-5 h-5 text-blue-400" />;
      case 'HardDrive': return <HardDrive className="w-5 h-5 text-emerald-400" />;
      case 'Network': return <Network className="w-5 h-5 text-purple-400" />;
      case 'Workflow': return <Workflow className="w-5 h-5 text-teal-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-300" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-violet-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-orange-400" />;
      case 'Container': return <Container className="w-5 h-5 text-sky-400" />;
      default: return <Cpu className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Skills Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technologies & Tooling
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-xl">
              Proven proficiency across the modern software engineering lifecycle.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Docker, React)..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className={`p-5 rounded-2xl bg-slate-900/60 border ${
                skill.highlight ? 'border-indigo-500/40 shadow-lg shadow-indigo-500/5' : 'border-slate-800/80'
              } hover:border-indigo-500/60 transition-all duration-300 group hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800/90 group-hover:scale-110 transition-transform">
                    {getIcon(skill.iconName)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm group-hover:text-indigo-400 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] text-slate-400">{skill.category}</span>
                  </div>
                </div>

                {skill.highlight && (
                  <span className="p-1 rounded-full bg-amber-500/10 text-amber-400" title="Core Specialty">
                    <Sparkles className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>

              {/* Progress Bar & Percentage */}
              <div className="mt-4">
                <div className="flex justify-between items-center text-xs mb-1.5 font-mono">
                  <span className="text-slate-400 text-[11px]">Proficiency</span>
                  <span className="text-indigo-300 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            No skills found matching "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
};
