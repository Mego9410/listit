import React from 'react';
import { Text, TextProps, TextStyle, StyleProp } from 'react-native';
import { useThemeTokens } from '@/theme';

export type TextVariant = 'body' | 'caption' | 'label';

interface AppTextProps extends TextProps {
  variant?: TextVariant;
}

const fontSizeMap: Record<TextVariant, number> = {
  body: 16,
  caption: 14,
  label: 12,
};

const lineHeightMap: Record<TextVariant, number> = {
  body: 22,
  caption: 18,
  label: 16,
};

export const AppText: React.FC<AppTextProps> = ({
  children,
  style,
  variant = 'body',
  ...props
}) => {
  const tokens = useThemeTokens();

  const composedStyle: StyleProp<TextStyle> = [
    {
      color: tokens.colors.text,
      fontSize: fontSizeMap[variant],
      lineHeight: lineHeightMap[variant],
    },
    style,
  ];

  return (
    <Text style={composedStyle} {...props}>
      {children}
    </Text>
  );
};

