import React from 'react';
import { Pressable, PressableProps, StyleSheet, View } from 'react-native';
import { useThemeTokens } from '@/theme';

interface IconButtonProps extends PressableProps {
  icon: React.ReactNode;
  size?: number;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, size = 44, style, ...props }) => {
  const tokens = useThemeTokens();

  return (
    <Pressable
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.base,
        {
          width: size,
          height: size,
          backgroundColor: tokens.colors.surface,
          borderColor: tokens.colors.border,
          opacity: pressed ? 0.7 : 1,
        },
        style,
      ]}
      {...props}
    >
      <View style={styles.icon}>{icon}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    borderWidth: 1,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

