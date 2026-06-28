import React, { useEffect, useRef, useState } from 'react';
import { Animated, Text, StyleSheet } from 'react-native';

export default function StreakFire({ streak, visible, onFinish }) {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (visible && streak >= 3) {
      setShow(true);
      Animated.parallel([
        Animated.sequence([
          Animated.timing(scaleAnim, { toValue: 1.5, duration: 300, useNativeDriver: true }),
          Animated.timing(scaleAnim, { toValue: 0, duration: 600, useNativeDriver: true }),
        ]),
        Animated.sequence([
          Animated.timing(fadeAnim, { toValue: 1, duration: 200, useNativeDriver: true }),
          Animated.delay(700),
          Animated.timing(fadeAnim, { toValue: 0, duration: 400, useNativeDriver: true }),
        ]),
      ]).start(() => { setShow(false); onFinish?.(); });
    }
  }, [visible, streak, scaleAnim, fadeAnim, onFinish]);

  if (!show && !visible) return null;

  const intensity = streak >= 10 ? 1 : streak >= 5 ? 0.7 : 0.4;

  return (
    <Animated.View
      style={[styles.container, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}
      pointerEvents="none"
    >
      <Text style={[styles.fire, { opacity: intensity }]}>🔥</Text>
      <Text style={styles.streakLabel}>{streak} streak!</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '40%',
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 200,
  },
  fire: {
    fontSize: 64,
  },
  streakLabel: {
    color: '#FF4500',
    fontSize: 20,
    fontWeight: '900',
    marginTop: 8,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
});
