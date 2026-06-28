import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Canvas, Circle, BlurMask, Group } from '@shopify/react-native-skia';
import { BookOpen } from 'lucide-react-native';
import { Colors, Spacing } from '../theme';

export default function StatsBanner({ totalChapters, totalQuestions, totalLevels, totalCategories }) {
  return (
    <View style={styles.banner}>
      <Canvas style={StyleSheet.absoluteFill}>
        <Group opacity={0.15}>
          <Circle cx="50%" cy="50%" r={100} color="#E9D6A3">
            <BlurMask blur={40} style="normal" />
          </Circle>
        </Group>
      </Canvas>
      <View style={styles.statItem}>
        <BookOpen size={18} color={Colors.gold} strokeWidth={2} />
        <Text style={styles.statNumber}>{totalChapters}</Text>
        <Text style={styles.statLabel}>CHAPTERS</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.statItem}>
        <Ionicons name="help-circle-outline" size={18} color={Colors.gold} />
        <Text style={styles.statNumber}>{totalQuestions}+</Text>
        <Text style={styles.statLabel}>QUESTIONS</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.statItem}>
        <Ionicons name="bar-chart" size={18} color={Colors.gold} />
        <Text style={styles.statNumber}>{totalLevels}</Text>
        <Text style={styles.statLabel}>LEVELS</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.statItem}>
        <Ionicons name="layers-outline" size={18} color={Colors.gold} />
        <Text style={styles.statNumber}>{totalCategories || 4}</Text>
        <Text style={styles.statLabel}>CATEGORIES</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.statItem}>
        <Ionicons name="trophy-outline" size={18} color={Colors.gold} />
        <Text style={styles.statAchieve}>ACHIEVE{"\n"}AND GROW</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    backgroundColor: Colors.navy,
    marginHorizontal: Spacing.outer,
    marginVertical: Spacing.sectionMargin,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  statItem: { flex: 1, alignItems: 'center', justifyContent: 'center', zIndex: 2 },
  statNumber: { fontSize: 18, fontWeight: '800', color: '#fff', marginTop: 4 },
  statLabel: { fontSize: 8, fontWeight: '700', color: Colors.gold, letterSpacing: 1, marginTop: 1 },
  statAchieve: { fontSize: 9, fontWeight: '700', color: Colors.gold, textAlign: 'center', letterSpacing: 0.5, lineHeight: 13 },
  divider: { width: 1, height: 40, backgroundColor: Colors.darkBorder },
});
