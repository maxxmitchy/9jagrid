import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { useTheme } from '@/components/theme-provider';

interface InputProps extends TextInputProps {}

export function Input({ style, ...props }: InputProps) {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    input: {
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.border,
      borderWidth: 1,
      borderRadius: 8,
      padding: 12,
      fontSize: 16,
      color: theme.colors.text,
    },
  });

  return <TextInput style={[styles.input, style]} placeholderTextColor={theme.colors.textLight} {...props} />;
}