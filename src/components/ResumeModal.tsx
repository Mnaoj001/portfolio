import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, CheckCircle, ShieldCheck, Award, GraduationCap, Briefcase } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
    window.print();
  };

  const handleDownloadMarkdown = () => {
    const mdContent = `# MANOJ D
${portfolioData.personal.email} | ${portfolioData.personal.phone} | Male | Davangere
${portfolioData.personal.location}

## EDUCATION
${portfolioData.education.map(e => `### ${e.degree}
${e.institution} (${e.period})
${e.score}
`).join('\n')}

## TECHNICAL SKILLS
- Languages: Java, Python, HTML, SQL
- Soft Skills: Good listener, Team leading
- Spoken Languages: English, Hindi

## CERTIFICATIONS & INTERNSHIPS
${portfolioData.certifications.map(c => `### ${c.title} (${c.date})
${c.issuer}
${c.description}
`).join('\n')}
`;

    const blob = new Blob([mdContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Manoj_D_Resume.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Action Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90 sticky top-0 z-10 print:hidden">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <h2 className="text-lg font-semibold text-white">Official Curriculum Vitae • Manoj D</h2>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4 text-indigo-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={handleDownloadMarkdown}
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors cursor-pointer shadow-lg shadow-indigo-600/30"
              title="Export Resume"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export MD</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-2 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content formatted like user's exact CV */}
        <div className="overflow-y-auto p-6 sm:p-10 text-slate-200 bg-slate-900 print:text-black print:bg-white print:p-6 print:m-0">
          
          {/* Header Info with Profile Photo */}
          <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-slate-800 print:border-black mb-6 gap-6">
            <div className="text-center sm:text-left flex-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider text-white uppercase print:text-black font-serif">
                MANOJ D
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-indigo-400 print:text-black mt-1">
                B.Tech in CSE-DS • Cyber Security & Threat Analyst
              </p>
              
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-4 mt-2 text-xs text-slate-300 print:text-black">
                <span>{portfolioData.personal.email}</span>
                <span>•</span>
                <span>{portfolioData.personal.phone}</span>
                <span>•</span>
                <span>Male</span>
                <span>•</span>
                <span>Davangere</span>
              </div>

              <p className="text-xs text-slate-400 print:text-slate-700 mt-1">
                Near railway gate Tholahunse, Davangere - 577002
              </p>
            </div>

            <div className="shrink-0 w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden border-2 border-indigo-500/40 print:border-black shadow-xl bg-slate-800">
              <img
                src={portfolioData.personal.avatarUrl}
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-400 print:text-black border-b border-slate-800 print:border-black pb-1 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>EDUCATION</span>
            </h3>

            <div className="space-y-4 text-sm">
              {portfolioData.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <div>
                    <h4 className="font-bold text-white print:text-black">{edu.degree}</h4>
                    <p className="italic text-slate-400 print:text-slate-800 text-xs sm:text-sm">{edu.institution}</p>
                  </div>
                  <div className="text-left sm:text-right text-xs">
                    <span className="font-medium text-indigo-300 print:text-black">{edu.period}</span>
                    <p className="font-semibold text-emerald-400 print:text-black mt-0.5">{edu.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-400 print:text-black border-b border-slate-800 print:border-black pb-1 mb-3">
              TECHNICAL SKILLS
            </h3>

            <div className="space-y-2 text-sm text-slate-300 print:text-black">
              <p>
                <strong className="text-white print:text-black">Languages : </strong>
                <span>Java • Python • HTML • SQL</span>
              </p>
              <p>
                <strong className="text-white print:text-black">Soft Skills : </strong>
                <span>Good listener • Team leading • Interested in learning new things & continuous growth</span>
              </p>
              <p>
                <strong className="text-white print:text-black">Spoken Languages : </strong>
                <span>English • Hindi</span>
              </p>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-400 print:text-black border-b border-slate-800 print:border-black pb-1 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>CERTIFICATIONS & INTERNSHIPS</span>
            </h3>

            <div className="space-y-4 text-sm">
              {portfolioData.certifications.map((cert, idx) => (
                <div key={idx} className="border-b border-slate-800/40 print:border-slate-200 pb-3 last:border-none">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="font-bold text-white print:text-black flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-indigo-400 print:text-black shrink-0" />
                      <span>{cert.title}</span>
                    </h4>
                    <span className="text-xs text-indigo-300 print:text-black font-medium">{cert.date}</span>
                  </div>
                  <p className="italic text-slate-400 print:text-slate-800 text-xs mt-0.5">{cert.issuer}</p>
                  <p className="text-xs text-slate-300 print:text-slate-700 mt-1 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Applied Projects */}
          <div className="mb-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-400 print:text-black border-b border-slate-800 print:border-black pb-1 mb-3">
              KEY APPLIED PROJECTS
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              {portfolioData.projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex items-center justify-between font-semibold text-white print:text-black">
                    <span>{proj.title}</span>
                    <span className="text-[11px] text-indigo-400 print:text-slate-800">{proj.technologies.join(', ')}</span>
                  </div>
                  <p className="text-slate-300 print:text-slate-700 text-xs mt-0.5">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
