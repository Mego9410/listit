import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { useThemeTokens } from '@/theme';

export const Divider: React.FC<ViewProps> = ({ style, ...props }) => {
  const tokens = useThemeTokens();

  return (
    <View
      {...props}
      style={[styles.base, { backgroundColor: tokens.colors.border }, style]}
    />
  );
};

const styles = StyleSheet.create({
  base: {
    height: 1,
    width: '100%',
  },
});

