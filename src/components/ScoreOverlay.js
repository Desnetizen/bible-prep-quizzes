import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getStreakMultiplier } from '../utils/scoring';
import { Colors } from '../theme';

export default function ScoreOverlay({ score, streak, variant = 'overlay' }) {
  const isInline = variant === 'inline';
  const slideAnim = useRef(new Animated.Value(isInline ? 0 : -60)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const prevStreak = useRef(streak);

  useEffect(() => {
    if (!isInline) {
      Animated.timing(slideAnim, { toValue: 0, duration: 400, useNativeDriver: true }).start();
    }
  }, [slideAnim, isInline]);

  useEffect(() => {
    if (streak > prevStreak.current) {
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.3, duration: 150, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 150, useNativeDriver: true }),
      ]).start();
    }
    prevStreak.current = streak;
  }, [streak, pulseAnim]);

  const multiplier = getStreakMultiplier(streak);
  const fireCount = streak >= 10 ? 3 : streak >= 5 ? 2 : streak >= 3 ? 1 : 0;

  return (
    <Animated.View style={[isInline ? styles.inlineContainer : styles.overlayContainer, !isInline && { transform: [{ translateY: slideAnim }] }]}>
      <View style={[styles.scoreSection, isInline && styles.inlineScoreSection]}>
        <Ionicons name="trophy-outline" size={isInline ? 13 : 14} color="#FFD700" />
        <Text style={[styles.scoreText, isInline && styles.inlineScoreText]}>{score}</Text>
      </View>
      {streak > 0 && (
        <Animated.View style={[styles.streakSection, isInline && styles.inlineStreakSection, { transform: [{ scale: pulseAnim }] }]}>
          <Text style={styles.fireEmoji}>
            {fireCount >= 3 ? '🔥🔥🔥' : fireCount === 2 ? '🔥🔥' : fireCount === 1 ? '🔥' : ''}
          </Text>
          <Text style={[styles.streakText, isInline && styles.inlineStreakText]}>{streak}</Text>
          {multiplier > 1 && (
            <View style={[styles.multiplierBadge, isInline && styles.inlineMultiplierBadge]}>
              <Text style={[styles.multiplierText, isInline && styles.inlineMultiplierText]}>x{multiplier}</Text>
            </View>
          )}
        </Animated.View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  overlayContainer: {
    position: 'absolute',
    top: 110,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    zIndex: 100,
    pointerEvents: 'none',
  },
  inlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flexShrink: 1,
    minWidth: 0,
  },
  scoreSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(19,41,75,0.85)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  inlineScoreSection: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  scoreText: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: '800',
  },
  inlineScoreText: {
    fontSize: 13,
  },
  streakSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(255,69,0,0.85)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  inlineStreakSection: {
    paddingHorizontal: 7,
    paddingVertical: 4,
  },
  fireEmoji: {
    fontSize: 14,
  },
  streakText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
  inlineStreakText: {
    fontSize: 13,
  },
  multiplierBadge: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 8,
  },
  inlineMultiplierBadge: {
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  multiplierText: {
    color: Colors.navy,
    fontSize: 11,
    fontWeight: '900',
  },
  inlineMultiplierText: {
    fontSize: 10,
  },
});
