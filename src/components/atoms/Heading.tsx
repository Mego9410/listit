import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { useThemeTokens } from '@/theme';

export type HeadingLevel = 1 | 2 | 3;

const fontSizeMap: Record<HeadingLevel, number> = {
  1: 32,
  2: 24,
  3: 20,
};

const lineHeightMap: Record<HeadingLevel, number> = {
  1: 38,
  2: 30,
  3: 26,
};

export interface HeadingProps extends TextProps {
  level?: HeadingLevel;
}

export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  style,
  children,
  ...props
}) => {
  const tokens = useThemeTokens();

  return (
    <Text
      style={[
        styles.base,
        {
          color: tokens.colors.text,
          fontSize: fontSizeMap[level],
          lineHeight: lineHeightMap[level],
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    fontWeight: '700',
  },
});

