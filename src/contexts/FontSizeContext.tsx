import React, { useEffect, useState, createContext, useContext } from 'react';
type FontSize = 'small' | 'medium' | 'large';
interface FontSizeContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
}
const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);
export function FontSizeProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [fontSize, setFontSizeState] = useState<FontSize>(() => {
    const saved = localStorage.getItem('fontSize');
    return saved as FontSize || 'medium';
  });
  useEffect(() => {
    localStorage.setItem('fontSize', fontSize);
    const root = window.document.documentElement;
    // Remove previous size classes
    root.classList.remove('text-sm', 'text-base', 'text-lg');
    // Add new size class
    switch (fontSize) {
      case 'small':
        root.classList.add('text-sm'); // Base 14px
        break;
      case 'medium':
        root.classList.add('text-base'); // Base 16px
        break;
      case 'large':
        root.classList.add('text-lg'); // Base 18px
        break;
    }
  }, [fontSize]);
  return <FontSizeContext.Provider value={{
    fontSize,
    setFontSize: setFontSizeState
  }}>
      {children}
    </FontSizeContext.Provider>;
}
export function useFontSize() {
  const context = useContext(FontSizeContext);
  if (context === undefined) {
    throw new Error('useFontSize must be used within a FontSizeProvider');
  }
  return context;
}