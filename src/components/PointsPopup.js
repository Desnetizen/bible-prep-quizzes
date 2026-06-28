import React, { useEffect, useRef, useState } from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../theme';

export default function PointsPopup({ score, streakBonus, multiplier, visible, onFinish }) {
  const translateY = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (visible) {
      setShow(true);
      translateY.setValue(0);
      fadeAnim.setValue(0);
      Animated.parallel([
        Animated.timing(translateY, { toValue: -60, duration: 1500, useNativeDriver: true }),
        Animated.sequence([
          Animated.delay(200),
          Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
          Animated.delay(600),
          Animated.timing(fadeAnim, { toValue: 0, duration: 400, useNativeDriver: true }),
        ]),
      ]).start(() => {
        setShow(false);
        onFinish?.();
      });
    }
  }, [visible, translateY, fadeAnim, onFinish]);

  if (!show && !visible) return null;

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim, transform: [{ translateY }] }]} pointerEvents="none">
      <View style={styles.popup}>
        <Ionicons name="checkmark-circle" size={18} color={Colors.status.success} />
        <Text style={styles.pointsText}>+{score}</Text>
        {multiplier > 1 && (
          <View style={styles.bonusRow}>
            <Text style={styles.multiplierLabel}>x{multiplier}</Text>
            {streakBonus > 0 && (
              <Text style={styles.bonusText}>+{streakBonus} streak</Text>
            )}
          </View>
        )}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: '30%',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 200,
  },
  popup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(232,245,233,0.95)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  pointsText: {
    color: '#2E7D32',
    fontSize: 20,
    fontWeight: '900',
  },
  bonusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginLeft: 4,
  },
  multiplierLabel: {
    color: '#FF6F00',
    fontSize: 13,
    fontWeight: '800',
  },
  bonusText: {
    color: '#E65100',
    fontSize: 11,
    fontWeight: '700',
  },
});
