import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Colors, Shadows, Typography } from '../theme';

export default function MultipleChoice({ question, selectedIndex, onSelect, showResult, correctIndex }) {
  return (
    <View style={styles.container}>
      {question.options.map((option, index) => {
        const isSelected = selectedIndex === index;
        const isCorrect = showResult && index === correctIndex;
        const isWrong = showResult && isSelected && index !== correctIndex;
        return (
          <Pressable
            key={option}
            style={({ pressed }) => [
              styles.option,
              isSelected && !showResult && styles.selected,
              isCorrect && styles.correct,
              isWrong && styles.wrong,
              showResult && !isCorrect && !isWrong && styles.disabledOption,
              pressed && !showResult && styles.pressed,
            ]}
            onPress={() => !showResult && onSelect(index)}
            disabled={showResult}
          >
            <View style={[styles.radioOuter, (isSelected || isCorrect) && !isWrong && styles.radioSelected]}>
              {(isSelected || isCorrect) && !showResult && <View style={styles.radioDot} />}
              {isCorrect && <View style={[styles.radioDot, styles.radioDotCorrect]} />}
              {isWrong && <View style={[styles.radioDot, styles.radioDotWrong]} />}
            </View>
            <Text style={[styles.optionText, isSelected && !showResult && styles.selectedText]}>{option}</Text>
            {isCorrect && <Text style={styles.checkmark}>✓</Text>}
            {isWrong && <Text style={styles.crossmark}>✗</Text>}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 8 },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.card,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: Colors.border,
    ...Shadows.soft,
  },
  selected: { borderColor: Colors.gold, backgroundColor: '#FCFAF6' },
  correct: { borderColor: Colors.status.success, backgroundColor: Colors.status.successBg },
  wrong: { borderColor: Colors.status.error, backgroundColor: Colors.status.errorBg },
  disabledOption: { opacity: 0.6 },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: Colors.text.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  radioSelected: { borderColor: Colors.gold },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.gold,
  },
  radioDotCorrect: { backgroundColor: Colors.status.success },
  radioDotWrong: { backgroundColor: Colors.status.error },
  optionText: { flex: 1, fontSize: 14, color: '#1A1A1A', lineHeight: 19 },
  selectedText: { fontWeight: '600' },
  checkmark: { fontSize: 16, color: Colors.status.success, fontWeight: '700', marginLeft: 6 },
  crossmark: { fontSize: 16, color: Colors.status.error, fontWeight: '700', marginLeft: 6 },
  pressed: { opacity: 0.7 },
});
