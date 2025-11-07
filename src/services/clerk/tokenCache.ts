import * as SecureStore from 'expo-secure-store';

const TOKEN_CACHE_KEY = 'clerk_token_cache_v1';

type Token = {
  token: string;
  expiresAt: number;
};

export const tokenCache = {
  async getToken(key: string) {
    try {
      const raw = await SecureStore.getItemAsync(`${TOKEN_CACHE_KEY}:${key}`);
      if (!raw) return null;

      const parsed = JSON.parse(raw) as Token;
      if (parsed.expiresAt < Date.now()) {
        await SecureStore.deleteItemAsync(`${TOKEN_CACHE_KEY}:${key}`);
        return null;
      }

      return parsed.token;
    } catch (error) {
      console.warn('[tokenCache] getToken failed', error);
      return null;
    }
  },
  async saveToken(key: string, token: string, expiresAt: number) {
    try {
      const payload: Token = { token, expiresAt };
      await SecureStore.setItemAsync(
        `${TOKEN_CACHE_KEY}:${key}`,
        JSON.stringify(payload),
      );
    } catch (error) {
      console.warn('[tokenCache] saveToken failed', error);
    }
  },
  async clearToken(key: string) {
    try {
      await SecureStore.deleteItemAsync(`${TOKEN_CACHE_KEY}:${key}`);
    } catch (error) {
      console.warn('[tokenCache] clearToken failed', error);
    }
  },
};

