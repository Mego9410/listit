import React, { createContext, useContext, useMemo } from 'react';
import { defaultTokens, ThemeTokens } from './tokens';

interface ThemeProviderProps {
  tokens?: ThemeTokens;
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeTokens>(defaultTokens);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  tokens = defaultTokens,
  children,
}) => {
  const value = useMemo(() => tokens, [tokens]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useThemeTokens = () => useContext(ThemeContext);

