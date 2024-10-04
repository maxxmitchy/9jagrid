import React from 'react';
import { Text, TextProps } from 'react-native';
import { theme } from '../theme';

export const ThemedText: React.FC<TextProps> = ({ style, ...props }) => (
  <Text
    style={[
      {
        color: theme.colors.text,
        fontFamily: theme.fonts.regular,
        fontSize: theme.sizes.medium,
      },
      style,
    ]}
    {...props}
  />
);