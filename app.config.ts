import 'dotenv/config';
import { ExpoConfig, ConfigContext } from '@expo/config';

const NAME = 'ListIt';
const SLUG = 'listit';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: NAME,
  slug: SLUG,
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'dark',
  newArchEnabled: true,
  splash: {
    image: './assets/splash-icon.png',
    resizeMode: 'contain',
    backgroundColor: '#0B0C0F',
  },
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#0B0C0F',
    },
    edgeToEdgeEnabled: true,
    predictiveBackGestureEnabled: false,
  },
  web: {
    favicon: './assets/favicon.png',
  },
  plugins: ['expo-secure-store'],
  extra: {
    clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY ?? '',
    eas: {
      projectId: process.env.EAS_PROJECT_ID ?? '3634d5b7-b67c-4024-befc-29bc20fd413c',
    },
  },
  scheme: 'listit',
});

