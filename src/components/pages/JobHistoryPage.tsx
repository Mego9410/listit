import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useThemeTokens } from '@/theme';
import { AppText, Button, Chip, Heading } from '@/components/atoms';
import { useJobs } from '@/hooks/useJobs';

export const JobHistoryPage: React.FC = () => {
  const tokens = useThemeTokens();
  const { jobs } = useJobs();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: tokens.colors.background }]}>      
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Heading style={[styles.heading, { color: tokens.colors.text }]}>Job history</Heading>
        <AppText variant="body" style={{ color: tokens.colors.textSecondary }}>
          This is a static preview loaded from fixtures so you can explore the full UI flow before
          connecting live services.
        </AppText>

        {jobs.map(job => (
          <View
            key={job.id}
            style={[
              styles.card,
              {
                borderColor: tokens.colors.border,
                backgroundColor: tokens.colors.surface,
              },
            ]}
          >
            <View style={styles.cardHeader}>
              <Heading level={3} style={{ color: tokens.colors.text }}>
                {job.title}
              </Heading>
              <AppText variant="caption" style={{ color: tokens.colors.textSecondary }}>
                {job.marketplace} • {new Date(job.createdAt).toLocaleString()}
              </AppText>
            </View>
            <View style={styles.statusRow}>
              <Chip label={job.status.toUpperCase()} />
            </View>
            {job.outputs ? (
              <AppText variant="body" style={{ color: tokens.colors.textSecondary }}>
                {job.outputs.description}
              </AppText>
            ) : (
              <AppText variant="body" style={{ color: tokens.colors.textSecondary }}>
                Awaiting AI output. This mock listing will update automatically in the production
                build.
              </AppText>
            )}
            <View style={styles.actionRow}>
              <Button label="Copy listing" variant="outline" onPress={() => null} />
              <Button label="Duplicate" variant="secondary" onPress={() => null} />
            </View>
          </View>
        ))}
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
  card: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    gap: 12,
  },
  cardHeader: {
    gap: 4,
  },
  statusRow: {
    flexDirection: 'row',
  },
  actionRow: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
});

