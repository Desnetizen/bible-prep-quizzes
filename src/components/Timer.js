import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../theme';

function formatTime(seconds) {
  if (seconds <= 0) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

export default function Timer({ remaining, total = 60 }) {
  return (
    <View style={styles.container}>
      <Ionicons name="time-outline" size={14} color={Colors.navy} />
      <Text style={[styles.timeText, remaining <= 5 && styles.urgent]}>
        {formatTime(remaining)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  timeText: { fontSize: 14, fontWeight: '700', color: Colors.navy, fontVariant: ['tabular-nums'] },
  urgent: { color: Colors.status.error },
});
