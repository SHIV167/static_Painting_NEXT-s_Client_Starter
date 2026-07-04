'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { theme as defaultTheme } from '@/lib/theme';

interface ThemeContextType {
  theme: typeof defaultTheme;
  updateTheme: (newTheme: Partial<typeof defaultTheme>) => void;
  resetTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('custom-theme');
    if (savedTheme) {
      try {
        const parsedTheme = JSON.parse(savedTheme);
        return { ...defaultTheme, ...parsedTheme };
      } catch (error) {
        console.error('Failed to parse saved theme:', error);
        return defaultTheme;
      }
    }
    return defaultTheme;
  });

  const updateTheme = (newTheme: Partial<typeof defaultTheme>) => {
    const updatedTheme = { ...theme, ...newTheme };
    setTheme(updatedTheme);
    localStorage.setItem('custom-theme', JSON.stringify(newTheme));
  };

  const resetTheme = () => {
    setTheme(defaultTheme);
    localStorage.removeItem('custom-theme');
  };

  // Apply CSS custom properties to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply primary colors
    Object.entries(theme.primary).forEach(([key, value]) => {
      root.style.setProperty(`--color-primary-${key}`, String(value));
    });
    
    // Apply secondary colors
    Object.entries(theme.secondary).forEach(([key, value]) => {
      root.style.setProperty(`--color-secondary-${key}`, String(value));
    });
    
    // Apply neutral colors
    Object.entries(theme.neutral).forEach(([key, value]) => {
      root.style.setProperty(`--color-neutral-${key}`, String(value));
    });
    
    // Apply gradients
    Object.entries(theme.gradients).forEach(([key, value]) => {
      root.style.setProperty(`--gradient-${key}`, String(value));
    });
    
    // Apply backgrounds
    Object.entries(theme.backgrounds).forEach(([key, value]) => {
      root.style.setProperty(`--bg-${key}`, String(value));
    });
    
    // Apply text colors
    Object.entries(theme.text).forEach(([key, value]) => {
      root.style.setProperty(`--text-${key}`, String(value));
    });
    
    // Apply border colors
    Object.entries(theme.border).forEach(([key, value]) => {
      root.style.setProperty(`--border-${key}`, String(value));
    });
    
    // Apply shadow colors
    Object.entries(theme.shadow).forEach(([key, value]) => {
      root.style.setProperty(`--shadow-${key}`, String(value));
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, updateTheme, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
