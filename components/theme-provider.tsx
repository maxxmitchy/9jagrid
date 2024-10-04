import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

type Theme = {
  dark: boolean;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    card: string;  // Add this line
    text: string;
    textLight: string;
    border: string;
    error: string;
    white: string;
  };
  sizes: {
    small: number;
    medium: number;
    large: number;
  };
};

const lightTheme: Theme = {
  dark: false,
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    background: '#F2F2F7',
    card: '#FFFFFF',  // Add this line
    text: '#000000',
    textLight: '#8E8E93',
    border: '#C7C7CC',
    error: '#FF3B30',
    white: '#FFFFFF',
  },
  sizes: {
    small: 12,
    medium: 16,
    large: 20,
  },
};

const darkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#0A84FF',
    secondary: '#5E5CE6',
    background: '#000000',
    card: '#1C1C1E',  // Add this line
    text: '#FFFFFF',
    textLight: '#8E8E93',
    border: '#38383A',
    error: '#FF453A',
    white: '#FFFFFF',
  },
  sizes: {
    small: 12,
    medium: 16,
    large: 20,
  },
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>(colorScheme === 'dark' ? darkTheme : lightTheme);

  useEffect(() => {
    setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
  }, [colorScheme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme.dark ? lightTheme : darkTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};