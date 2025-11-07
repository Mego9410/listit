import React, { useMemo } from 'react';
import { ClerkProvider } from '@clerk/clerk-expo';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/theme';
import { tokenCache } from '@/services/clerk/tokenCache';
import { config } from '@/utils/config';

interface AppProvidersProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  const publishableKey = config.clerkPublishableKey;

  const clerkKey = useMemo(() => publishableKey, [publishableKey]);

  const providers = (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  );

  if (!clerkKey) {
    console.warn('Clerk publishable key not set; rendering without ClerkProvider.');
    return providers;
  }

  return (
    <ClerkProvider publishableKey={clerkKey} tokenCache={tokenCache}>
      {providers}
    </ClerkProvider>
  );
};

