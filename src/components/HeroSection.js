import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image as ExpoImage } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, interpolate } from 'react-native-reanimated';
import { BookOpen, Play } from 'lucide-react-native';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import { Colors } from '../theme';

export default function HeroSection({ onStartQuiz, onExplore, scrollY }) {
  const fallbackScrollY = useSharedValue(0);
  const effectiveScrollY = scrollY || fallbackScrollY;
  const imageParallax = useAnimatedStyle(() => ({
    transform: [
      { translateY: interpolate(effectiveScrollY.value, [-100, 0, 100], [-8, 0, 3], 'clamp') },
    ],
  }));
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1000, easing: Easing.bezier(0.215, 0.61, 0.355, 1) });
    translateY.value = withTiming(0, { duration: 1000, easing: Easing.bezier(0.215, 0.61, 0.355, 1) });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageParallax]}>
        <ExpoImage
          source={require('../../assets/indexPageImage.png')}
          style={styles.heroImage}
          contentFit="cover"
          cachePolicy="memory-disk"
        />
      </Animated.View>
      <LinearGradient
        colors={['rgba(252,250,246,0.18)', 'rgba(252,250,246,0.42)', 'rgba(252,250,246,0.9)', Colors.background]}
        locations={[0, 0.5, 0.82, 1]}
        style={styles.imageFade}
        pointerEvents="none"
      />
      <LinearGradient
        colors={[Colors.background, 'rgba(252,250,246,0.78)', 'rgba(252,250,246,0)']}
        locations={[0, 0.52, 1]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.leftFade}
        pointerEvents="none"
      />
      <Animated.View style={[styles.overlay, animatedStyle]}>
        <Text style={styles.title}>DANIEL{"\n"}QUIZ</Text>
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <View style={styles.dividerDiamond} />
          <View style={styles.dividerLine} />
        </View>
        <Text style={styles.description}>
          Test your knowledge of the Book of Daniel. From Babylon to prophecy, every question strengthens your understanding.
        </Text>
        <View style={styles.buttonRow}>
          <PrimaryButton title="Start Quiz" icon={Play} onPress={onStartQuiz} />
          <SecondaryButton title="Explore Daniel" icon={BookOpen} onPress={onExplore} />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 380,
    marginTop: -2,
    marginBottom: 8,
    overflow: 'hidden',
  },
  heroImage: {
    position: 'absolute',
    right: -132,
    top: 0,
    width: '126%',
    height: '108%',
    opacity: 0.98,
  },
  imageFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '54%',
  },
  leftFade: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '72%',
  },
  overlay: {
    flex: 1,
    paddingHorizontal: 22,
    justifyContent: 'flex-start',
    paddingTop: 32,
    zIndex: 2,
  },
  title: {
    fontSize: 36,
    fontFamily: 'Georgia',
    fontWeight: '700',
    letterSpacing: 1.5,
    lineHeight: 40,
    color: Colors.text.heading,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    width: 84,
    marginTop: 14,
    marginBottom: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1.5,
    backgroundColor: Colors.goldDark,
  },
  dividerDiamond: {
    width: 11,
    height: 11,
    backgroundColor: Colors.goldDark,
    transform: [{ rotate: '45deg' }],
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.text.heading,
    maxWidth: '48%',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
});
