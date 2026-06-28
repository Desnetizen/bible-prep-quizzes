import React, { useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Canvas, Circle, BlurMask } from '@shopify/react-native-skia';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronRight, CircleHelp } from 'lucide-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withSequence, withTiming, Easing } from 'react-native-reanimated';
import { Colors, Typography, Shadows } from '../theme';

export default function ChallengeCard({ question, onPress }) {
  const glowOpacity = useSharedValue(0.3);

  useEffect(() => {
    glowOpacity.value = withRepeat(
      withSequence(
        withTiming(0.6, { duration: 4000, easing: Easing.inOut(Easing.quad) }),
        withTiming(0.3, { duration: 4000, easing: Easing.inOut(Easing.quad) }),
      ),
      -1,
      true,
    );
  }, []);

  const glowStyle = useAnimatedStyle(() => ({
    opacity: glowOpacity.value,
  }));

  if (!question) return null;
  return (
    <Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed]} onPress={onPress}>
      <LinearGradient
        colors={['rgba(255,255,255,0.5)', 'transparent']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.topLight}
      />
      <View style={styles.iconWrap}>
        <LinearGradient
          colors={['#17375E', '#102543']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.iconBg}
        >
          <Animated.View style={[StyleSheet.absoluteFill, glowStyle]}>
            <Canvas style={StyleSheet.absoluteFill}>
              <Circle cx="50%" cy="50%" r={28} color="#E9D6A3">
                <BlurMask blur={15} style="normal" />
              </Circle>
            </Canvas>
          </Animated.View>
          <CircleHelp size={24} color={Colors.gold} strokeWidth={2} />
        </LinearGradient>
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.label}>TODAY'S CHALLENGE</Text>
        <Text style={styles.question} numberOfLines={2}>{question.question}</Text>
      </View>
      <ChevronRight size={24} color={Colors.goldDark} strokeWidth={2} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.card,
    marginHorizontal: 22,
    marginTop: 0,
    marginBottom: 18,
    paddingHorizontal: 14,
    paddingVertical: 12,
    minHeight: 74,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: Colors.goldDark,
    ...Shadows.card,
    overflow: 'hidden',
    position: 'relative',
  },
  topLight: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 2,
  },
  iconWrap: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: Colors.gold,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
    ...Shadows.glow,
  },
  iconBg: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  textWrap: { flex: 1 },
  label: {
    ...Typography.label,
    fontSize: 10,
    letterSpacing: 1.6,
    color: Colors.goldDark,
    marginBottom: 4,
  },
  question: {
    fontSize: 15,
    lineHeight: 20,
    fontFamily: 'Georgia',
    fontWeight: '700',
    color: Colors.text.heading,
  },
  pressed: { opacity: 0.8 },
});
