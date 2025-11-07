import { useMemo } from 'react';
import { creditSnapshot } from '@/fixtures/credits';

export const useCredits = () => {
  return useMemo(() => ({
    balance: creditSnapshot.balance,
    tier: creditSnapshot.tier,
    monthlyAllowance: creditSnapshot.monthlyAllowance,
    usedThisMonth: creditSnapshot.usedThisMonth,
    nextResetAt: creditSnapshot.nextResetAt,
  }), []);
};

