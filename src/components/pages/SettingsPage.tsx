import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useThemeTokens } from '@/theme';
import { AppText, Button, Chip, Divider, Heading } from '@/components/atoms';
import { useCredits } from '@/hooks/useCredits';

export const SettingsPage: React.FC = () => {
  const tokens = useThemeTokens();
  const credits = useCredits();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: tokens.colors.background }]}>      
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Heading style={[styles.heading, { color: tokens.colors.text }]}>Settings</Heading>
        <AppText variant="body" style={{ color: tokens.colors.textSecondary }}>
          Everything here is pre-filled with mock data so you can explore the experience before
          wiring in real services.
        </AppText>

        <View style={styles.section}>
          <Heading level={3} style={[styles.subheading, { color: tokens.colors.text }]}>
            Account
          </Heading>
          <View style={[styles.card, { borderColor: tokens.colors.border, backgroundColor: tokens.colors.surface }]}>
            <AppText variant="caption" style={styles.eyebrow}>
              Signed in as
            </AppText>
            <Heading level={3} style={{ color: tokens.colors.text }}>
              Olivia Acton
            </Heading>
            <AppText variant="body" style={{ color: tokens.colors.textSecondary }}>
              olivia@example.com
            </AppText>
            <Button label="Switch account (mock)" variant="outline" onPress={() => null} />
          </View>
        </View>

        <View style={styles.section}>
          <Heading level={3} style={[styles.subheading, { color: tokens.colors.text }]}>
            Plan
          </Heading>
          <View style={[styles.card, { borderColor: tokens.colors.border, backgroundColor: tokens.colors.surface }]}>
            <AppText variant="caption" style={styles.eyebrow}>
              Current tier
            </AppText>
            <Chip label={credits.tier.toUpperCase()} />
            <AppText variant="body" style={{ color: tokens.colors.textSecondary }}>
              {credits.monthlyAllowance} credits / month • next reset{' '}
              {new Date(credits.nextResetAt).toLocaleDateString()}
            </AppText>
            <Button label="Upgrade plan (mock)" onPress={() => null} />
          </View>
        </View>

        <Divider />

        <View style={styles.section}>
          <Heading level={3} style={[styles.subheading, { color: tokens.colors.text }]}>
            Notifications
          </Heading>
          <AppText variant="body" style={{ color: tokens.colors.textSecondary }}>
            These toggles are non-functional in mock mode but illustrate the actual settings you’ll
            ship.
          </AppText>
          <View style={styles.toggleRow}>
            <AppText variant="body" style={{ color: tokens.colors.text }}>Job completed</AppText>
            <Button label="On" variant="outline" onPress={() => null} />
          </View>
          <View style={styles.toggleRow}>
            <AppText variant="body" style={{ color: tokens.colors.text }}>
              Low credit reminder
            </AppText>
            <Button label="On" variant="outline" onPress={() => null} />
          </View>
          <View style={styles.toggleRow}>
            <AppText variant="body" style={{ color: tokens.colors.text }}>Weekly summary</AppText>
            <Button label="Off" variant="outline" onPress={() => null} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 48,
    gap: 24,
  },
  heading: {
    fontSize: 28,
  },
  subheading: {
    fontSize: 20,
  },
  section: {
    gap: 12,
  },
  card: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    gap: 12,
  },
  eyebrow: {
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: '#9EA3B5',
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
});

