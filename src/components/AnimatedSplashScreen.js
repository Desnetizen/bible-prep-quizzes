import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Animated, {
  cancelAnimation,
  Easing,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { PreparationLogoAnimation } from './PreparationLogoAnimation';

export default function AnimatedSplashScreen({
  onAnimationComplete,
  ref,
}) {
  const onAnimationCompleteRef = useRef(onAnimationComplete);
  onAnimationCompleteRef.current = onAnimationComplete;

  const [isExiting, setIsExiting] = useState(false);
  const hasMounted = useRef(false);
  const exitStartedRef = useRef(false);

  const notifyAnimationComplete = useCallback(() => {
    onAnimationCompleteRef.current?.();
  }, []);

  const containerOpacity = useSharedValue(1);
  const contentScale = useSharedValue(1);
  const imageOpacity = useSharedValue(0);
  const loadingBarWidth = useSharedValue(0);
  const loadingTextOpacity = useSharedValue(0);
  const loadingBarGlow = useSharedValue(0.4);

  useEffect(() => {
    imageOpacity.value = withTiming(1, {
      duration: 800,
      easing: Easing.bezier(0.215, 0.61, 0.355, 1.0),
    });

    loadingTextOpacity.value = withDelay(
      600,
      withTiming(1, { duration: 500, easing: Easing.out(Easing.quad) })
    );

    loadingBarWidth.value = withSequence(
      withTiming(70, { duration: 1800, easing: Easing.bezier(0.25, 0.1, 0.25, 1) }),
      withTiming(85, { duration: 2000, easing: Easing.out(Easing.quad) })
    );

    loadingBarGlow.value = withRepeat(
      withSequence(
        withTiming(0.8, { duration: 1000, easing: Easing.inOut(Easing.quad) }),
        withTiming(0.4, { duration: 1000, easing: Easing.inOut(Easing.quad) })
      ),
      -1,
      true
    );

    hasMounted.current = true;
  }, [imageOpacity, loadingBarGlow, loadingBarWidth, loadingTextOpacity]);

  useImperativeHandle(ref, () => ({
    startExit,
  }), [startExit]);

  useEffect(() => {
    return () => {
      cancelAnimation(loadingBarGlow);
    };
  }, [loadingBarGlow]);

  const beginExitPortal = useCallback(() => {
    contentScale.value = withTiming(1.06, {
      duration: 600,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });

    containerOpacity.value = withTiming(
      0,
      {
        duration: 600,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      },
      (finished) => {
        if (finished) {
          runOnJS(notifyAnimationComplete)();
        }
      }
    );
  }, [containerOpacity, contentScale, notifyAnimationComplete]);

  const startExit = useCallback(() => {
    if (exitStartedRef.current) return;
    exitStartedRef.current = true;
    setIsExiting(true);

    cancelAnimation(loadingBarGlow);

    const currentProgress = loadingBarWidth.value;
    const remaining = Math.max(0, 100 - currentProgress);
    const barDuration = Math.min(1000, Math.max(400, remaining * 15));

    loadingBarWidth.value = withTiming(
      100,
      {
        duration: barDuration,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      },
      (finished) => {
        if (finished) {
          runOnJS(beginExitPortal)();
        }
      }
    );
  }, [beginExitPortal, loadingBarGlow, loadingBarWidth]);

  const animatedContainerStyle = useAnimatedStyle(() => ({
    opacity: containerOpacity.value,
  }));

  const animatedContentStyle = useAnimatedStyle(() => ({
    transform: [{ scale: contentScale.value }],
  }));

  const animatedImageStyle = useAnimatedStyle(() => ({
    opacity: imageOpacity.value,
  }));

  const loadingBarScale = useDerivedValue(() => loadingBarWidth.value / 100);

  const animatedLoadingBarStyle = useAnimatedStyle(() => ({
    transform: [{ scaleX: loadingBarScale.value }],
  }));

  const animatedGlowStyle = useAnimatedStyle(() => ({
    opacity: loadingBarGlow.value,
  }));

  const animatedLoadingTextStyle = useAnimatedStyle(() => ({
    opacity: loadingTextOpacity.value,
  }));

  const pointerEvents = isExiting ? 'none' : 'auto';

  const approxBarValue = Math.round(loadingBarWidth.value);

  return (
    <Animated.View
      style={[styles.container, animatedContainerStyle]}
      pointerEvents={pointerEvents}
    >
      <Animated.View style={[StyleSheet.absoluteFillObject, animatedContentStyle]}>
        <Animated.View style={[StyleSheet.absoluteFillObject, animatedImageStyle]}>
          <Image
            source={require('../../assets/splash-bg.png')}
            style={StyleSheet.absoluteFillObject}
            contentFit="contain"
            priority="high"
          />
        </Animated.View>
      </Animated.View>

      <Animated.View style={[styles.logoAnimationContainer, animatedContentStyle, animatedImageStyle]}>
        <PreparationLogoAnimation style={styles.logoAnimation} speed={1.05} />
      </Animated.View>

      <LinearGradient
        colors={['transparent', 'rgba(2, 6, 18, 0.85)', 'rgba(2, 6, 18, 0.98)']}
        locations={[0, 0.4, 1]}
        style={styles.bottomGradient}
      />

      <View style={styles.glowContainer} pointerEvents="none">
        <Animated.View style={[styles.glowBar, animatedGlowStyle]} />
      </View>

      <View style={styles.loadingContainer}>
        <View
          style={styles.loadingBarTrack}
          accessibilityRole="progressbar"
          accessibilityValue={{ min: 0, max: 100, now: approxBarValue }}
        >
          <View style={styles.loadingBarOriginWrapper}>
            <Animated.View style={[styles.loadingBarFill, animatedLoadingBarStyle]}>
              <LinearGradient
                colors={['#8f6420', '#d6a747', '#fff0a8']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.loadingBarGradient}
              />
            </Animated.View>
          </View>
        </View>

        <Animated.Text style={[styles.loadingText, animatedLoadingTextStyle]}>
          Loading...
        </Animated.Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 99999,
    backgroundColor: '#060e1f',
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 160,
  },
  logoAnimationContainer: {
    position: 'absolute',
    top: 32,
    left: 0,
    right: 0,
    bottom: 128,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoAnimation: {
    width: '100%',
    maxWidth: 560,
    aspectRatio: 1,
  },
  loadingContainer: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 60,
    gap: 12,
  },
  glowContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -6,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  glowBar: {
    width: '100%',
    height: 16,
    backgroundColor: '#d6a747',
    borderRadius: 8,
    boxShadow: '0 0 12px rgba(214,167,71,1)',
  },
  loadingBarTrack: {
    width: '100%',
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  loadingBarOriginWrapper: {
    alignSelf: 'flex-start',
    height: '100%',
  },
  loadingBarFill: {
    height: '100%',
    borderRadius: 2,
  },
  loadingBarGradient: {
    flex: 1,
    borderRadius: 2,
  },
  loadingText: {
    color: 'rgba(255, 255, 255, 0.55)',
    fontSize: 13,
    fontWeight: '400',
    letterSpacing: 0.6,
    textAlign: 'center',
  },
});


