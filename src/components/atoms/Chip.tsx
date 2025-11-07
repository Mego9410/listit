import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { AppText } from './AppText';
import { useThemeTokens } from '@/theme';

interface ChipProps extends ViewProps {
  label: string;
  selected?: boolean;
}

export const Chip: React.FC<ChipProps> = ({ label, selected = false, style, ...props }) => {
  const tokens = useThemeTokens();

  return (
    <View
      {...props}
      style={[
        styles.base,
        {
          backgroundColor: selected ? tokens.colors.primary : tokens.colors.surface,
          borderColor: selected ? tokens.colors.primaryHover : tokens.colors.border,
        },
        style,
      ]}
    >
      <AppText
        variant="caption"
        style={[
          styles.label,
          { color: selected ? tokens.colors.surface : tokens.colors.textSecondary },
        ]}
      >
        {label}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  label: {
    fontWeight: '600',
  },
});

