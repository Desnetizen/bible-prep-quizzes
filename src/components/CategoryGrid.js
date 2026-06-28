import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Colors, Typography, Shadows, Spacing } from '../theme';

export default function CategoryGrid({ categories, onCategoryPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Thematic Quizzes</Text>
      <Text style={styles.subheading}>Test your knowledge by theme</Text>
      <View style={styles.grid}>
        {categories.map((cat, index) => (
          <Animated.View
            key={cat.id}
            entering={FadeInDown.delay(index * 40 + 200).duration(400)}
          >
            <Pressable
              style={({ pressed }) => [styles.card, pressed && styles.pressed]}
              onPress={() => onCategoryPress(cat)}
            >
              <LinearGradient
                colors={['rgba(255,255,255,0.4)', 'transparent']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.cardTopLight}
              />
              <View style={[styles.iconCircle, { backgroundColor: cat.color + '20' }]}>
                <Ionicons name={cat.icon} size={24} color={cat.color} />
              </View>
              <Text style={styles.cardTitle}>{cat.title}</Text>
              <Text style={styles.description}>{cat.description}</Text>
              <Text style={styles.count}>{cat.questionCount} questions</Text>
            </Pressable>
          </Animated.View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: Spacing.sectionMargin, paddingHorizontal: Spacing.outer },
  heading: { ...Typography.sectionTitle, marginBottom: 2 },
  subheading: { ...Typography.sectionSubtitle, marginBottom: 12 },
  grid: { gap: Spacing.cardGap },
  card: {
    backgroundColor: Colors.card,
    padding: 16,
    borderRadius: 12,
    ...Shadows.card,
    position: 'relative',
    overflow: 'hidden',
  },
  cardTopLight: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 2,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: { ...Typography.cardTitle },
  description: { ...Typography.cardSubtitle, marginTop: 2, lineHeight: 16 },
  count: { ...Typography.caption, marginTop: 6 },
  pressed: { opacity: 0.9 },
});
