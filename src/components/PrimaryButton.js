import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated';
import { Colors, Shadows } from '../theme';

export default function PrimaryButton({ title, onPress, icon: Icon, style, textStyle, disabled }) {
  const scale = useSharedValue(1);
  const isDisabled = disabled;

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={[animatedStyle]}>
      <Pressable
        onPressIn={() => {
          if (!isDisabled) scale.value = withTiming(0.97, { duration: 100 });
        }}
        onPressOut={() => {
          if (!isDisabled) scale.value = withSpring(1, { stiffness: 200, damping: 15 });
        }}
        onPress={isDisabled ? null : onPress}
        disabled={isDisabled}
      >
        <LinearGradient
          colors={isDisabled ? ['#C4C7CC', '#B0B4BA'] : ['#17375E', '#102543']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={[styles.button, Shadows.button, style]}
        >
          {!isDisabled && (
          <LinearGradient
            colors={['rgba(255,255,255,0.15)', 'transparent']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.highlight}
          />
          )}
          <View style={styles.content}>
            {Icon && <Icon size={17} color={Colors.text.white} fill={Colors.text.white} strokeWidth={2} />}
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
    overflow: 'hidden',
    position: 'relative',
    minWidth: 136,
  },
  highlight: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 13,
    paddingHorizontal: 18,
  },
  text: {
    color: Colors.text.white,
    fontSize: 16,
    fontFamily: 'Georgia',
    fontWeight: '700',
  },
});
