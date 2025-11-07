import Constants from 'expo-constants';

type ExtraConfig = {
  clerkPublishableKey?: string;
  eas?: {
    projectId?: string;
  };
};

const extra = (Constants.expoConfig?.extra ?? {}) as ExtraConfig;

export const config = {
  clerkPublishableKey: extra.clerkPublishableKey ?? '',
  easProjectId: extra.eas?.projectId ?? '',
};

