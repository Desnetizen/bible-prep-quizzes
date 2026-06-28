import { createContext, useCallback, use, useMemo, useState } from 'react';

const AppReadinessContext = createContext(null);

export function AppReadinessProvider({ children }) {
  const [splashAnimationComplete, setSplashAnimationComplete] = useState(false);

  const markSplashAnimationComplete = useCallback(() => {
    setSplashAnimationComplete(true);
  }, []);

  const value = useMemo(
    () => ({
      splashAnimationComplete,
      markSplashAnimationComplete,
    }),
    [splashAnimationComplete, markSplashAnimationComplete]
  );

  return (
    <AppReadinessContext.Provider value={value}>
      {children}
    </AppReadinessContext.Provider>
  );
}

export function useAppReadiness() {
  const context = use(AppReadinessContext);

  if (!context) {
    throw new Error('useAppReadiness must be used within AppReadinessProvider');
  }

  return context;
}
