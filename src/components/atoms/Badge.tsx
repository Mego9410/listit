import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { AppText } from './AppText';
import { useThemeTokens } from '@/theme';

interface BadgeProps extends ViewProps {
  label: string;
  tone?: 'success' | 'warning' | 'danger' | 'neutral';
}

export const Badge: React.FC<BadgeProps> = ({ label, tone = 'neutral', style, ...props }) => {
  const tokens = useThemeTokens();

  const color = React.useMemo(() => {
    switch (tone) {
      case 'success':
        return tokens.colors.accent;
      case 'danger':
        return tokens.colors.danger;
      case 'warning':
        return '#FFAD49';
      default:
        return tokens.colors.textSecondary;
    }
  }, [tone, tokens]);

  return (
    <View {...props} style={[styles.base, { borderColor: color }, style]}>
      <AppText variant="caption" style={[styles.label, { color }]}>
        {label}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  label: {
    fontWeight: '600',
  },
});

