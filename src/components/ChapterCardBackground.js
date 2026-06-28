import React from 'react';
import { StyleSheet } from 'react-native';
import { Canvas, Fill, Circle, BlurMask, Group } from '@shopify/react-native-skia';
import { Colors } from '../theme';

const ATMOSPHERES = {
  1: { // Warm Parchment
    gradientColors: ['#F5F0E8', '#EDE4D4', '#E8DDD0'],
    glowColor: '#D4A574',
    accentColor: '#C9A86A',
    elements: 'parchment',
  },
  2: { // Night Blue Mist
    gradientColors: ['#E8EDF2', '#D5DDE8', '#C8D2DE'],
    glowColor: '#7B8EA0',
    accentColor: '#A0B4C8',
    elements: 'stars',
  },
  3: { // Embers
    gradientColors: ['#FFF0EA', '#FDE0D0', '#FCD0B8'],
    glowColor: '#E86252',
    accentColor: '#F08070',
    elements: 'embers',
  },
  4: { // Forest
    gradientColors: ['#EEF5EC', '#DDE8DA', '#D0DEC8'],
    glowColor: '#5B8C5A',
    accentColor: '#7AAA78',
    elements: 'leaves',
  },
  5: { // Ancient Scroll
    gradientColors: ['#F5F0E0', '#EDE5C8', '#E5DAB0'],
    glowColor: '#B8860B',
    accentColor: '#C9A040',
    elements: 'scroll',
  },
  6: { // Stone
    gradientColors: ['#F0EDE8', '#E5E0D8', '#DAD0C8'],
    glowColor: '#A0522D',
    accentColor: '#B87050',
    elements: 'stone',
  },
  7: { // Celestial
    gradientColors: ['#EAEFF5', '#D5E0ED', '#C5D5E5'],
    glowColor: '#4A6FA5',
    accentColor: '#7090C0',
    elements: 'stars',
  },
  8: { // Ocean
    gradientColors: ['#EAF0F5', '#D5E0ED', '#C5D5E5'],
    glowColor: '#3B7DD8',
    accentColor: '#6A9BE0',
    elements: 'waves',
  },
  9: { // Twilight
    gradientColors: ['#F0ECF5', '#E5DCF0', '#D8CCE8'],
    glowColor: '#8B5CF6',
    accentColor: '#A880F0',
    elements: 'stars',
  },
  10: { // Sky
    gradientColors: ['#EAF2F5', '#D5E5ED', '#C5D8E5'],
    glowColor: '#0EA5E9',
    accentColor: '#50B8F0',
    elements: 'clouds',
  },
  11: { // Emerald
    gradientColors: ['#EAF5F0', '#D5E8DD', '#C5DECC'],
    glowColor: '#14B8A6',
    accentColor: '#50C8B8',
    elements: 'leaves',
  },
  12: { // Sunrise
    gradientColors: ['#FFF5E8', '#FDEAD0', '#FCE0B8'],
    glowColor: '#F59E0B',
    accentColor: '#F0B840',
    elements: 'sun',
  },
};

export default function ChapterCardBackground({ chapterId }) {
  const atm = ATMOSPHERES[chapterId] || ATMOSPHERES[1];
  return (
    <Canvas style={StyleSheet.absoluteFill}>
      <Fill color={atm.gradientColors[0]} />
      <Group opacity={0.3}>
        <Circle cx="50%" cy="50%" r={120} color={atm.glowColor}>
          <BlurMask blur={40} style="normal" />
        </Circle>
      </Group>
      <Group opacity={0.08}>
        <Circle cx="15%" cy="20%" r={60} color={atm.accentColor}>
          <BlurMask blur={30} style="normal" />
        </Circle>
        <Circle cx="85%" cy="75%" r={50} color={atm.accentColor}>
          <BlurMask blur={25} style="normal" />
        </Circle>
      </Group>
      {atm.elements === 'stars' && (
        <Group opacity={0.12}>
          {[[20,15,2],[45,25,1.5],[70,10,2.5],[85,30,1],[35,60,2],[60,50,1.5],[15,70,1],[50,80,2],[80,65,1.5],
            [25,40,1.5],[65,20,1],[90,45,2.5],[10,50,1],[40,90,1.5],[75,35,1],[55,15,2],[30,85,2]]            .map(([x, y, r], i) => (
            <Circle key={i} cx={`${x}%`} cy={`${y}%`} r={r} color={atm.glowColor}>
              <BlurMask blur={r * 0.5} style="normal" />
            </Circle>
          ))}
        </Group>
      )}
      {atm.elements === 'embers' && (
        <Group opacity={0.1}>
          {[[20,55,3],[40,65,4],[60,70,3],[75,50,5],[35,45,3],[55,55,2],[70,60,4],[25,60,3],[50,75,3],[65,50,2]]            .map(([x, y, r], i) => (
            <Circle key={i} cx={`${x}%`} cy={`${y}%`} r={r} color="#E86252">
              <BlurMask blur={r} style="normal" />
            </Circle>
          ))}
        </Group>
      )}
      {atm.elements === 'leaves' && (
        <Group opacity={0.08}>
          {[[15,20,20],[75,15,18],[85,65,15],[10,70,22],[50,80,18],[90,40,13],
            [30,15,14],[60,85,17],[40,50,10],[70,30,14]]            .map(([x, y, r], i) => (
            <Circle key={i} cx={`${x}%`} cy={`${y}%`} r={r} color={atm.glowColor}>
              <BlurMask blur={15} style="normal" />
            </Circle>
          ))}
        </Group>
      )}
      {atm.elements === 'parchment' && (
        <Group opacity={0.06}>
          <Circle cx="30%" cy="25%" r={35} color="#C9A86A">
            <BlurMask blur={20} style="normal" />
          </Circle>
          <Circle cx="70%" cy="75%" r={40} color="#D4A574">
            <BlurMask blur={15} style="normal" />
          </Circle>
        </Group>
      )}
    </Canvas>
  );
}

