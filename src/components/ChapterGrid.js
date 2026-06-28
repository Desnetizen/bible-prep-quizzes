import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Wheat, Moon, Flame, Leaf, BookOpen } from 'lucide-react-native';
import ChapterCardBackground from './ChapterCardBackground';
import { Colors, Typography, Shadows } from '../theme';

const CHAPTER_ICONS = {
  1: { icon: Wheat, color: '#D4A574' },
  2: { icon: Moon, color: '#7B8EA0' },
  3: { icon: Flame, color: '#E86252' },
  4: { icon: Leaf, color: '#5B8C5A' },
  5: { icon: 'hand-left-outline', color: '#B8860B' },
  6: { icon: 'shield-outline', color: '#A0522D' },
  7: { icon: 'eye-outline', color: '#4A6FA5' },
  8: { icon: 'water-outline', color: '#3B7DD8' },
  9: { icon: 'time-outline', color: '#8B5CF6' },
  10: { icon: 'map-outline', color: '#0EA5E9' },
  11: { icon: 'globe-outline', color: '#14B8A6' },
  12: { icon: BookOpen, color: '#F59E0B' },
};

function LucideIcon({ name, size, color }) {
  if (!name) return null;
  if (typeof name !== 'string') {
    const Icon = name;
    return <Icon size={size} color={color} strokeWidth={2} />;
  }
  return <Ionicons name={name} size={size} color={color} />;
}

export default function ChapterGrid({ chapters, onChapterPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.headingRow}>
        <BookOpen size={22} color={Colors.goldDark} strokeWidth={1.8} />
        <Text style={styles.heading}>Choose a Chapter</Text>
      </View>
      <View style={styles.grid}>
        {chapters.map((ch, index) => {
          const theme = CHAPTER_ICONS[ch.id] || { icon: BookOpen, color: '#C9A86A' };
          return (
            <Animated.View
              key={ch.id}
              entering={FadeInDown.delay(index * 40).duration(400)}
              style={styles.cardWrap}
            >
              <Pressable
                style={({ pressed }) => [styles.card, pressed && styles.pressed]}
                onPress={() => onChapterPress(ch)}
              >
                <ChapterCardBackground chapterId={ch.id} />
                <LinearGradient
                  colors={['rgba(255,255,255,0.4)', 'transparent']}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1 }}
                  style={styles.cardTopLight}
                />
                <View style={[styles.iconCircle, { backgroundColor: theme.color + '20', borderColor: theme.color + '40' }]}>
                  <LucideIcon name={theme.icon} size={24} color={theme.color} />
                </View>
                <Text style={styles.chapterTitle}>{ch.title}</Text>
                <Text style={styles.count}>{ch.questionCount} questions</Text>
              </Pressable>
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 0, marginBottom: 20, paddingHorizontal: 22 },
  headingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 14,
  },
  heading: {
    ...Typography.sectionTitle,
    fontFamily: 'Georgia',
    fontSize: 21,
    lineHeight: 26,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 14,
  },
  cardWrap: { width: '47.6%' },
  card: {
    backgroundColor: Colors.card,
    height: 98,
    padding: 10,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: 'rgba(201,168,106,0.32)',
    ...Shadows.card,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  cardTopLight: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 2,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 7,
    zIndex: 2,
  },
  chapterTitle: {
    ...Typography.cardTitle,
    fontSize: 17,
    fontFamily: 'Georgia',
    lineHeight: 21,
    zIndex: 2,
  },
  count: {
    ...Typography.caption,
    fontSize: 12,
    color: Colors.text.body,
    marginTop: 4,
    zIndex: 2,
  },
  pressed: { opacity: 0.9 },
});
