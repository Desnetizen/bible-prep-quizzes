import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Canvas, Fill, Circle, BlurMask, Group } from '@shopify/react-native-skia';
import { Colors } from '../theme';

export default function BackgroundLayer({ children }) {
  return (
    <View style={styles.root}>
      <Canvas style={StyleSheet.absoluteFill}>
        <Fill color={Colors.background} />
        <Group opacity={0.09}>
          {Array.from({ length: 9 }).map((_, i) => (
            <Circle
              key={`texture-a-${i}`}
              cx={`${8 + i * 11}%`}
              cy={`${6 + (i % 3) * 34}%`}
              r={22 + (i % 4) * 8}
              color={Colors.goldLight}
            >
              <BlurMask blur={28} style="normal" />
            </Circle>
          ))}
        </Group>
        <Group opacity={0.08}>
          <Circle cx="50%" cy="15%" r={300} color={Colors.goldLight}>
            <BlurMask blur={60} style="normal" />
          </Circle>
        </Group>
        <Group opacity={0.035}>
          <Circle cx="50%" cy="50%" r={400} color="#000">
            <BlurMask blur={80} style="normal" />
          </Circle>
        </Group>
      </Canvas>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  content: { flex: 1 },
});
