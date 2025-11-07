import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { useThemeTokens } from '@/theme';

export const Spinner: React.FC<ActivityIndicatorProps> = props => {
  const tokens = useThemeTokens();
  return <ActivityIndicator color={tokens.colors.primary} {...props} />;
};

