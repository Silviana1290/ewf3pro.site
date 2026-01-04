import React, { useEffect, useState, createContext, useContext } from 'react';
type FontSize = 'small' | 'medium' | 'large';
interface FontSizeContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  scale: number;
}
const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);
export function FontSizeProvider({
  children
}: {
  children: ReactNode;
}) {
  const [fontSize, setFontSizeState] = useState<FontSize>(() => {
    const saved = localStorage.getItem('ewfpro_fontsize');
    return saved as FontSize || 'medium';
  });
  const setFontSize = (size: FontSize) => {
    setFontSizeState(size);
    localStorage.setItem('ewfpro_fontsize', size);
  };
  const getScale = () => {
    switch (fontSize) {
      case 'small':
        return 0.9;
      case 'large':
        return 1.1;
      default:
        return 1;
    }
  };
  // Apply font size to root for rem scaling if needed, or just provide the scale
  useEffect(() => {
    const root = document.documentElement;
    switch (fontSize) {
      case 'small':
        root.style.fontSize = '14px';
        break;
      case 'large':
        root.style.fontSize = '18px';
        break;
      default:
        root.style.fontSize = '16px';
    }
  }, [fontSize]);
  return <FontSizeContext.Provider value={{
    fontSize,
    setFontSize,
    scale: getScale()
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