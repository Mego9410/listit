import { useMemo } from 'react';
import { jobFixtures, JobFixture } from '@/fixtures/jobs';

const sortJobs = (jobs: JobFixture[]) =>
  [...jobs].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

export const useJobs = () => {
  const jobs = useMemo(() => sortJobs(jobFixtures), []);
  const activeJob = useMemo(
    () => jobs.find(job => job.status === 'processing' || job.status === 'queued') ?? null,
    [jobs],
  );
  const completedJobs = useMemo(
    () => jobs.filter(job => job.status === 'completed'),
    [jobs],
  );

  return {
    jobs,
    activeJob,
    completedJobs,
  };
};

