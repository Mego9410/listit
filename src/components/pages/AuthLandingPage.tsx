import { useOAuth } from '@clerk/clerk-expo';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useThemeTokens } from '@/theme';
import { config } from '@/utils/config';

export const AuthLandingPage: React.FC = () => {
  const tokens = useThemeTokens();
  const isConfigured = Boolean(config.clerkPublishableKey);

  if (!isConfigured) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: tokens.colors.background }]}>        
        <View style={styles.content}>
          <Text style={[styles.heading, { color: tokens.colors.text }]}>Set Up Authentication</Text>
          <Text style={[styles.body, { color: tokens.colors.textSecondary }]}>
            Add your Clerk publishable key to enable sign-in. Until then this screen provides a
            placeholder experience.
          </Text>
          <View style={[styles.cta, styles.ctaDisabled, { backgroundColor: tokens.colors.surface }]}>            
            <Text style={[styles.ctaText, styles.ctaDisabledText, { color: tokens.colors.textSecondary }]}>Configure Clerk to enable OAuth
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return <ConfiguredAuthLanding tokens={tokens} />;
};

interface ConfiguredAuthLandingProps {
  tokens: ReturnType<typeof useThemeTokens>;
}

const ConfiguredAuthLanding: React.FC<ConfiguredAuthLandingProps> = ({ tokens }) => {
  const { startOAuthFlow, isLoading } = useOAuth({ strategy: 'oauth_facebook' });

  const handlePress = async () => {
    try {
      await startOAuthFlow();
    } catch (error) {
      console.warn('OAuth flow failed', error);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: tokens.colors.background }]}>
      <View style={styles.content}>
        <Text style={[styles.heading, { color: tokens.colors.text }]}>Welcome</Text>
        <Text style={[styles.body, { color: tokens.colors.textSecondary }]}>
          Configure Clerk keys to enable authentication. Use this screen to preview the signed-out
          experience with dummy actions.
        </Text>
        <TouchableOpacity
          style={[styles.cta, { backgroundColor: tokens.colors.primary }]}
          onPress={handlePress}
          disabled={isLoading}
        >
          <Text style={[styles.ctaText, { color: tokens.colors.surface }]}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 16,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
  },
  body: {
    fontSize: 16,
    lineHeight: 22,
  },
  cta: {
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: 'center',
  },
  ctaDisabled: {
    opacity: 0.4,
  },
  ctaText: {
    fontSize: 16,
    fontWeight: '600',
  },
  ctaDisabledText: {
    textTransform: 'uppercase',
  },
});

