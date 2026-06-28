import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { isAnswerCorrect } from '../utils/answerMatcher';
import { Colors, Shadows, Typography } from '../theme';

export default function FillBlank({ question, value, onChangeText, showResult }) {
  const isCorrect = showResult && isAnswerCorrect(value, question.answer);
  const isWrong = showResult && value.trim() !== '' && !isCorrect;
  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          showResult && isCorrect && styles.correctInput,
          showResult && isWrong && styles.wrongInput,
        ]}
        placeholder="Type your answer..."
        placeholderTextColor={Colors.text.secondary}
        value={value}
        onChangeText={onChangeText}
        editable={!showResult}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {showResult && (
        <View style={[styles.resultBanner, isCorrect ? styles.correctBanner : styles.wrongBanner]}>
          <Text style={styles.resultText}>
            {isCorrect ? `Correct! Answer: ${question.answer}` : `Incorrect. Answer: ${question.answer}`}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 10 },
  input: {
    backgroundColor: Colors.card,
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#1A1A1A',
    ...Shadows.soft,
  },
  correctInput: { borderColor: Colors.status.success, backgroundColor: Colors.status.successBg },
  wrongInput: { borderColor: Colors.status.error, backgroundColor: Colors.status.errorBg },
  resultBanner: { padding: 12, borderRadius: 8 },
  correctBanner: { backgroundColor: Colors.status.successBg },
  wrongBanner: { backgroundColor: Colors.status.errorBg },
  resultText: { fontSize: 14, fontWeight: '600', color: '#1A1A1A' },
});
