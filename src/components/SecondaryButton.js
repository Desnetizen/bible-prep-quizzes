import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated';
import { Colors } from '../theme';

export default function SecondaryButton({ title, onPress, icon: Icon, style, textStyle }) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={[animatedStyle]}>
      <Pressable
        onPressIn={() => { scale.value = withTiming(0.97, { duration: 100 }); }}
        onPressOut={() => { scale.value = withSpring(1, { stiffness: 200, damping: 15 }); }}
        onPress={onPress}
      >
        <LinearGradient
          colors={['#FFFFFF', '#FCFAF6']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={[styles.button, style]}
        >
          <View style={styles.content}>
            {Icon && <Icon size={17} color={Colors.navy} strokeWidth={2} />}
            <Text style={[styles.text, textStyle]}>{title}</Text>
          </View>
        </LinearGradient>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.navy,
    overflow: 'hidden',
    minWidth: 142,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  text: {
    color: Colors.navy,
    fontSize: 16,
    fontFamily: 'Georgia',
    fontWeight: '700',
  },
});
