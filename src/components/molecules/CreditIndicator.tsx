import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { AppText, Badge } from '@/components/atoms';
import { useThemeTokens } from '@/theme';

interface CreditIndicatorProps extends ViewProps {
  balance: number;
  tier?: 'free' | 'starter' | 'pro';
}

export const CreditIndicator: React.FC<CreditIndicatorProps> = ({
  balance,
  tier = 'starter',
  style,
  ...props
}) => {
  const tokens = useThemeTokens();

  const tierLabel = React.useMemo(() => {
    if (tier === 'free') return 'Free';
    if (tier === 'pro') return 'Pro';
    return 'Starter';
  }, [tier]);

  return (
    <View
      {...props}
      style={[
        styles.container,
        { backgroundColor: tokens.colors.surface, borderColor: tokens.colors.border },
        style,
      ]}
    >
      <View style={styles.row}>
        <AppText variant="caption" style={{ color: tokens.colors.textSecondary }}>
          Credits
        </AppText>
        <Badge label={tierLabel} tone={tier === 'pro' ? 'success' : 'neutral'} />
      </View>
      <AppText style={styles.balance}>{balance.toLocaleString()}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  balance: {
    fontSize: 32,
    fontWeight: '700',
  },
});

