export type CreditTier = 'free' | 'starter' | 'pro';

export interface CreditSnapshot {
  balance: number;
  tier: CreditTier;
  monthlyAllowance: number;
  usedThisMonth: number;
  nextResetAt: string;
}

export const creditSnapshot: CreditSnapshot = {
  balance: 24,
  tier: 'starter',
  monthlyAllowance: 120,
  usedThisMonth: 96,
  nextResetAt: '2025-11-30T00:00:00.000Z',
};

