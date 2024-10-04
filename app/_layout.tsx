// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import AppNavigator from './(tabs)';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}