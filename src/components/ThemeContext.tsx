import React, { createContext, useContext, useState, useEffect } from 'react';

export type AccentColor = 'indigo' | 'cyan' | 'emerald' | 'purple' | 'rose';

interface ThemeContextType {
  accent: AccentColor;
  setAccent: (accent: AccentColor) => void;
  accentClass: {
    primary: string;
    bgGlow: string;
    border: string;
    badgeBg: string;
    text: string;
    gradient: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const accentMap: Record<AccentColor, ThemeContextType['accentClass']> = {
  indigo: {
    primary: 'indigo-500',
    bgGlow: 'bg-indigo-500/10',
    border: 'border-indigo-500/30',
    badgeBg: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
    text: 'text-indigo-400',
    gradient: 'from-indigo-500 to-purple-600',
  },
  cyan: {
    primary: 'cyan-400',
    bgGlow: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    badgeBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    text: 'text-cyan-400',
    gradient: 'from-cyan-400 to-blue-600',
  },
  emerald: {
    primary: 'emerald-400',
    bgGlow: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    text: 'text-emerald-400',
    gradient: 'from-emerald-400 to-teal-600',
  },
  purple: {
    primary: 'purple-500',
    bgGlow: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    badgeBg: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
    text: 'text-purple-400',
    gradient: 'from-purple-500 to-pink-600',
  },
  rose: {
    primary: 'rose-500',
    bgGlow: 'bg-rose-500/10',
    border: 'border-rose-500/30',
    badgeBg: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    text: 'text-rose-400',
    gradient: 'from-rose-500 to-amber-600',
  },
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accent, setAccent] = useState<AccentColor>('indigo');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-accent') as AccentColor;
    if (saved && accentMap[saved]) {
      setAccent(saved);
    }
  }, []);

  const handleSetAccent = (newAccent: AccentColor) => {
    setAccent(newAccent);
    localStorage.setItem('portfolio-accent', newAccent);
  };

  return (
    <ThemeContext.Provider
      value={{
        accent,
        setAccent: handleSetAccent,
        accentClass: accentMap[accent],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
