import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Canvas, Circle, BlurMask, Fill, Group } from '@shopify/react-native-skia';
import { Colors, Shadows, Spacing } from '../theme';

export default function ScriptureCard() {
  return (
    <View style={styles.card}>
      <Canvas style={StyleSheet.absoluteFill}>
        <Fill color="#F5F0E8" />
        <Group opacity={0.06}>
          <Circle cx="20%" cy="30%" r={80} color="#E9D6A3">
            <BlurMask blur={40} style="normal" />
          </Circle>
        </Group>
      </Canvas>
      <Text style={styles.quoteMarks}>"</Text>
      <Text style={styles.verse}>But the people that do know their God shall be strong, and do exploits.</Text>
      <Text style={styles.reference}>DANIEL 11:32</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F5F0E8',
    marginHorizontal: Spacing.outer,
    marginVertical: Spacing.sectionMargin,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E8DDD0',
    overflow: 'hidden',
    position: 'relative',
    ...Shadows.soft,
  },
  quoteMarks: {
    fontSize: 40,
    color: Colors.gold,
    fontFamily: 'Georgia',
    lineHeight: 40,
    marginBottom: -8,
    opacity: 0.6,
    zIndex: 2,
  },
  verse: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#1A1A1A',
    lineHeight: 22,
    fontFamily: 'Georgia',
    zIndex: 2,
  },
  reference: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.gold,
    marginTop: 8,
    letterSpacing: 1,
    textAlign: 'right',
    zIndex: 2,
  },
});
