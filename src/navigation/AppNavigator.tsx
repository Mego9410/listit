import React, { useMemo } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SignedIn, SignedOut } from '@clerk/clerk-expo';
import { HomePage } from '@/components/pages/HomePage';
import { AuthLandingPage } from '@/components/pages/AuthLandingPage';
import { CreateJobPage } from '@/components/pages/CreateJobPage';
import { JobHistoryPage } from '@/components/pages/JobHistoryPage';
import { SettingsPage } from '@/components/pages/SettingsPage';
import { useThemeTokens } from '@/theme';
import { config } from '@/utils/config';
import type { MainTabParamList, RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#121318',
        borderTopColor: 'rgba(255,255,255,0.05)',
      },
      tabBarActiveTintColor: '#5B8CFF',
      tabBarInactiveTintColor: '#9EA3B5',
    }}
  >
    <Tab.Screen name="Dashboard" component={HomePage} />
    <Tab.Screen name="CreateJob" component={CreateJobPage} options={{ title: 'Create' }} />
    <Tab.Screen name="History" component={JobHistoryPage} />
    <Tab.Screen name="Settings" component={SettingsPage} />
  </Tab.Navigator>
);

const SignedInNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainTabs" component={MainTabs} />
  </Stack.Navigator>
);

export const AppNavigator: React.FC = () => {
  const tokens = useThemeTokens();
  const hasClerkKey = Boolean(config.clerkPublishableKey);
  const navigationTheme = useMemo(
    () => ({
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: tokens.colors.background,
        card: tokens.colors.surface,
        text: tokens.colors.text,
        border: tokens.colors.border,
        primary: tokens.colors.primary,
      },
    }),
    [tokens],
  );

  const signedInContent = <SignedInNavigator />;

  return (
    <NavigationContainer theme={navigationTheme}>
      {hasClerkKey ? (
        <>
          <SignedIn>{signedInContent}</SignedIn>
          <SignedOut>
            <AuthLandingPage />
          </SignedOut>
        </>
      ) : (
        signedInContent
      )}
    </NavigationContainer>
  );
};

