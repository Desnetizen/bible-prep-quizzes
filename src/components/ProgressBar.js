import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme';

export default function ProgressBar({ current, total }) {
  const progress = total > 0 ? current / total : 0;
  return (
    <View style={styles.container}>
      <View style={styles.barBg}>
        <View style={[styles.barFill, { width: `${progress * 100}%` }]} />
      </View>
      <Text style={styles.text}>{current}/{total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  text: { fontSize: 12, fontWeight: '700', color: Colors.navy, fontVariant: ['tabular-nums'] },
  barBg: { flex: 1, height: 6, backgroundColor: Colors.border, borderRadius: 3, overflow: 'hidden' },
  barFill: { height: '100%', backgroundColor: Colors.gold, borderRadius: 3 },
});
