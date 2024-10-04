import React from 'react';
import { View, ViewProps } from 'react-native';
import { theme } from '../theme';

export const ThemedView: React.FC<ViewProps> = ({ style, ...props }) => (
  <View
    style={[
      {
        backgroundColor: theme.colors.background,
      },
      style,
    ]}
    {...props}
  />
);