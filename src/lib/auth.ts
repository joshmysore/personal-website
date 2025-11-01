// Security: Password is obfuscated using base64 and split across multiple operations
const getAuthKey = (): string => {
  // "Phantom14" encoded in a non-obvious way
  const parts = ['UGhhbnRvbTE0', ''];
  return atob(parts[0]);
};

export const validateDevAccess = (input: string): boolean => {
  return input === getAuthKey();
};

export const DEV_MODE_KEY = 'dev_mode_authenticated';

export const setDevMode = (authenticated: boolean) => {
  if (typeof window !== 'undefined') {
    if (authenticated) {
      sessionStorage.setItem(DEV_MODE_KEY, 'true');
    } else {
      sessionStorage.removeItem(DEV_MODE_KEY);
    }
  }
};

export const isDevMode = (): boolean => {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem(DEV_MODE_KEY) === 'true';
  }
  return false;
};
