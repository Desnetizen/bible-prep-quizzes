import React, { useRef } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { QuizProvider } from './src/context/QuizContext';
import { AppReadinessProvider, useAppReadiness } from './src/context/AppReadinessContext';
import AppNavigator from './src/navigation/AppNavigator';
import AnimatedSplashScreen from './src/components/AnimatedSplashScreen';
import { preloadStartupImages } from './src/utils/startupAssets';

function AppContent() {
  const {
    splashAnimationComplete,
    markSplashAnimationComplete,
  } = useAppReadiness();

  const splashRef = useRef(null);

  React.useEffect(() => {
    let isMounted = true;

    void preloadStartupImages().finally(() => {
      if (isMounted) {
        splashRef.current?.startExit();
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <QuizProvider>
          <SafeAreaProvider>
            <StatusBar barStyle="dark-content" backgroundColor="#FAF8F5" />
            <AppNavigator />
          </SafeAreaProvider>
        </QuizProvider>
      </NavigationContainer>

      {!splashAnimationComplete && (
        <AnimatedSplashScreen
          ref={splashRef}
          onAnimationComplete={markSplashAnimationComplete}
        />
      )}
    </GestureHandlerRootView>
  );
}

export default function App() {
  return (
    <AppReadinessProvider>
      <AppContent />
    </AppReadinessProvider>
  );
}
