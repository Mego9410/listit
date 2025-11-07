import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useThemeTokens } from '@/theme';
import { CreditIndicator } from '@/components/molecules';
import { AppText, Button, Chip, Divider, Heading } from '@/components/atoms';
import { useCredits } from '@/hooks/useCredits';
import { useJobs } from '@/hooks/useJobs';
import type { MainTabParamList } from '@/navigation/types';

const statusLabels: Record<string, string> = {
  queued: 'Queued',
  processing: 'Processing',
  completed: 'Completed',
};

export const HomePage: React.FC = () => {
  const tokens = useThemeTokens();
  const credits = useCredits();
  const { jobs, activeJob, completedJobs } = useJobs();
  const navigation = useNavigation<BottomTabNavigationProp<MainTabParamList>>();

  const totalCompleted = completedJobs.length;
  const totalQueued = jobs.filter(job => job.status === 'queued').length;
  const totalProcessing = jobs.filter(job => job.status === 'processing').length;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: tokens.colors.background }]}>      
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Heading style={[styles.heading, { color: tokens.colors.text }]}>Reseller snapshot</Heading>
          <AppText variant="body" style={{ color: tokens.colors.textSecondary }}>
            Track credits, monitor AI jobs, and jump straight into listing creation.
          </AppText>
        </View>

        <View style={styles.section}>
          <CreditIndicator balance={credits.balance} tier={credits.tier} />
          <AppText variant="caption" style={{ color: tokens.colors.textSecondary }}>
            {credits.usedThisMonth} of {credits.monthlyAllowance} credits used • resets{' '}
            {new Date(credits.nextResetAt).toLocaleDateString()}
          </AppText>
          <Button
            label="Create new listing"
            onPress={() => navigation.navigate('CreateJob')}
          />
        </View>

        <View style={styles.section}>
          <Heading level={3} style={[styles.subheading, { color: tokens.colors.text }]}>
            Job overview
          </Heading>
          <View style={styles.statusRow}>
            <Chip label={`Queued (${totalQueued})`} />
            <Chip label={`Processing (${totalProcessing})`} />
            <Chip label={`Completed (${totalCompleted})`} />
          </View>

          {activeJob ? (
            <View
              style={[
                styles.jobCard,
                {
                  borderColor: tokens.colors.border,
                  backgroundColor: tokens.colors.surface,
                },
              ]}
            >
              <AppText variant="caption" style={styles.cardEyebrow}>
                In progress
              </AppText>
              <Heading level={3} style={{ color: tokens.colors.text }}>
                {activeJob.title}
              </Heading>
              <AppText variant="body" style={{ color: tokens.colors.textSecondary }}>
                {statusLabels[activeJob.status]} • {activeJob.marketplace}
              </AppText>
              <Button
                label="View job queue"
                variant="outline"
                onPress={() => navigation.navigate('History')}
              />
            </View>
          ) : (
            <AppText variant="body" style={{ color: tokens.colors.textSecondary }}>
              No active jobs at the moment. Create a new one to get started.
            </AppText>
          )}
        </View>

        <View style={styles.section}>
          <Heading level={3} style={[styles.subheading, { color: tokens.colors.text }]}>
            Completed listings
          </Heading>
          <Divider />
          {completedJobs.map(job => (
            <View
              key={job.id}
              style={[
                styles.completedCard,
                {
                  borderColor: tokens.colors.border,
                },
              ]}
            >
              <View style={styles.completedHeader}>
                <View style={[styles.thumbnail, { backgroundColor: job.thumbnailColor }]} />
                <View style={styles.completedMeta}>
                  <Heading level={3} style={{ color: tokens.colors.text }}>
                    {job.title}
                  </Heading>
                  <AppText variant="caption" style={{ color: tokens.colors.textSecondary }}>
                    {job.marketplace} • {new Date(job.createdAt).toLocaleString()}
                  </AppText>
                </View>
              </View>
              {job.outputs ? (
                <View style={styles.completedBody}>
                  <AppText variant="body" style={{ color: tokens.colors.textSecondary }}>
                    {job.outputs.generatedTitle}
                  </AppText>
                  <View style={styles.tagRow}>
                    {job.outputs.tags.map(tag => (
                      <Chip key={`${job.id}-${tag}`} label={`#${tag}`} />
                    ))}
                  </View>
                  <Button
                    label="Copy metadata"
                    variant="secondary"
                    onPress={() => navigation.navigate('History')}
                  />
                </View>
              ) : null}
            </View>
          ))}
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
    gap: 28,
  },
  section: {
    gap: 12,
  },
  heading: {
    fontSize: 28,
  },
  subheading: {
    fontSize: 20,
  },
  statusRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  jobCard: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    gap: 10,
  },
  cardEyebrow: {
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: '#9EA3B5',
  },
  completedCard: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    gap: 12,
    marginBottom: 16,
  },
  completedHeader: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  thumbnail: {
    width: 44,
    height: 44,
    borderRadius: 12,
  },
  completedMeta: {
    flex: 1,
    gap: 4,
  },
  completedBody: {
    gap: 12,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});

