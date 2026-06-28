import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { Canvas, Circle, BlurMask } from '@shopify/react-native-skia';
import { Colors, Shadows } from '../theme';

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logoWrap}>
        <Canvas style={styles.glowCanvas}>
          <Circle cx="50%" cy="50%" r={60} color="#E9D6A3">
            <BlurMask blur={30} style="normal" />
          </Circle>
        </Canvas>
        <Image
          source={require('../../assets/logo.png')}
          style={[styles.logo, { tintColor: Colors.goldDark }]}
          contentFit="contain"
        />
      </View>
      <Pressable 
        style={({ pressed }) => [styles.profileBtn, pressed && styles.pressed]}
        onPress={() => navigation.navigate('HistoryTab')}
      >
        <Ionicons name="person-outline" size={22} color={Colors.navy} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 8,
    paddingBottom: 0,
  },
  logoWrap: {
    position: 'relative',
    width: 62,
    height: 76,
    justifyContent: 'center',
  },
  glowCanvas: {
    position: 'absolute',
    left: -36,
    top: -18,
    width: 124,
    height: 108,
  },
  logo: { height: 76, width: 62 },
  profileBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1.5,
    borderColor: Colors.goldDark,
    justifyContent: 'center',
    alignItems: 'center',
    ...Shadows.soft,
  },
  pressed: { opacity: 0.7 },
});
