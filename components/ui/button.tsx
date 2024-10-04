import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import { useTheme } from '@/components/theme-provider';

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

export function Button({ children, style, ...props }: ButtonProps) {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    button: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: theme.colors.background,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}