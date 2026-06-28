import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuiz } from '../context/QuizContext';
import { RotateCcw, House } from 'lucide-react-native';
import BackgroundLayer from '../components/BackgroundLayer';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import { shuffleArray } from '../data/getAllQuestions';
import { Colors, Typography, Shadows, Spacing } from '../theme';

export default function ResultsScreen({ route, navigation }) {
  const { result } = route.params || {};
  const { dispatch } = useQuiz();

  if (!result) return <View style={styles.center}><Text>No results available</Text></View>;

  const percentage = result.totalPossible > 0 ? Math.min(100, Math.round((result.score / result.totalPossible) * 100)) : 0;
  const gradeColor = percentage >= 80 ? '#4CAF50' : percentage >= 60 ? '#FF9800' : '#F44336';
  const gradeMessage = percentage >= 80 ? 'Excellent!' : percentage >= 60 ? 'Good Effort!' : percentage >= 40 ? 'Keep Studying!' : 'Review and Try Again!';

  return (
    <BackgroundLayer>
      <SafeAreaView edges={['top']} style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.header}><Text style={styles.headerTitle}>Quiz Complete!</Text><Text style={styles.chapterTitle}>{result.chapterTitle}</Text></View>
        <View style={styles.scoreCard}>
          <View style={[styles.circle, { borderColor: gradeColor }]}>
            <Text style={[styles.scoreNumber, { color: gradeColor }]}>{percentage}%</Text>
          </View>
          <Text style={[styles.gradeMessage, { color: gradeColor }]}>{gradeMessage}</Text>
        </View>
        <View style={styles.breakdown}>
          <View style={styles.breakdownRow}>
            <View style={styles.breakdownItem}>
              <View style={[styles.breakdownIcon, { backgroundColor: '#E8F5E9' }]}><Ionicons name="checkmark-circle" size={20} color="#4CAF50" /></View>
              <Text style={styles.breakdownLabel}>Correct</Text><Text style={[styles.breakdownValue, { color: '#4CAF50' }]}>{result.correct}</Text>
            </View>
            <View style={styles.breakdownItem}>
              <View style={[styles.breakdownIcon, { backgroundColor: '#FFEBEE' }]}><Ionicons name="close-circle" size={20} color="#F44336" /></View>
              <Text style={styles.breakdownLabel}>Incorrect</Text><Text style={[styles.breakdownValue, { color: '#F44336' }]}>{result.incorrect}</Text>
            </View>
            <View style={styles.breakdownItem}>
              <View style={[styles.breakdownIcon, { backgroundColor: '#FFF3E0' }]}><Ionicons name="time-outline" size={20} color="#FF9800" /></View>
              <Text style={styles.breakdownLabel}>Time's Up</Text><Text style={[styles.breakdownValue, { color: '#FF9800' }]}>{result.timeUp}</Text>
            </View>
            <View style={styles.breakdownItem}>
              <View style={[styles.breakdownIcon, { backgroundColor: '#FFF8E1' }]}><MaterialCommunityIcons name="fire" size={20} color="#FF6F00" /></View>
              <Text style={styles.breakdownLabel}>Best Streak</Text><Text style={[styles.breakdownValue, { color: '#FF6F00' }]}>{(result.maxStreak || 0) > 0 ? `🔥${result.maxStreak}` : '-'}</Text>
            </View>
          </View>
        </View>
      <View style={styles.review}>
        <Text style={styles.reviewTitle}>Questions to Review</Text>
        {result.questions && result.answers ? (
          result.answers.map((ans, idx) => {
            const q = result.questions.find(q => q.id === ans.questionId);
            if (!q || ans.isCorrect) return null;
            const userAnswer = ans.answer === null ? null :
              q.type === 'multipleChoice' && typeof ans.answer === 'number' ? q.options[ans.answer] :
              ans.answer;
            const correctAnswer = q.type === 'multipleChoice' ? q.options[q.correctIndex] : q.answer;
            return (
              <View key={ans.questionId} style={styles.reviewCard}>
                <View style={styles.reviewHeader}>
                  <Text style={styles.reviewQNum}>Q{idx + 1} · {q.reference}</Text>
                  <View style={[styles.reviewBadge, { backgroundColor: ans.answer === null ? '#FFF3E0' : '#FFEBEE' }]}>
                    <Text style={[styles.reviewBadgeText, { color: ans.answer === null ? '#FF9800' : '#F44336' }]}>
                      {ans.answer === null ? 'TIME' : 'WRONG'}
                    </Text>
                  </View>
                </View>
                <Text style={styles.reviewQuestion}>{q.question}</Text>
                <Text style={styles.reviewLabel}>Your answer:</Text>
                <Text style={[styles.reviewAnswer, { color: ans.answer === null ? '#FF9800' : '#F44336' }]}>
                  {userAnswer ?? 'Time\'s Up — no answer given'}
                </Text>
                <Text style={styles.reviewLabel}>Correct answer:</Text>
                <Text style={[styles.reviewAnswer, { color: '#4CAF50' }]}>{correctAnswer}</Text>
              </View>
            );
          })
        ) : null}
      </View>
      <View style={styles.actions}>
        <PrimaryButton title="Retry Quiz" icon={RotateCcw} onPress={() => {
          const quizPayload = {
            id: result.chapterId,
            title: result.chapterTitle,
            questions: shuffleArray(result.questions),
          };
          dispatch({ type: 'START_QUIZ', payload: quizPayload });
          navigation.navigate('QuizTab', { screen: 'Quiz', params: { chapterId: result.chapterId } });
        }} />
        <SecondaryButton title="Home" icon={House} onPress={() => { dispatch({ type: 'RESET_QUIZ' }); navigation.navigate('HomeTab'); }} />
      </View>
      </ScrollView>
    </SafeAreaView>
    </BackgroundLayer>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { alignItems: 'center', paddingTop: 16, paddingBottom: 20 },
  headerTitle: { ...Typography.sectionTitle, fontSize: 24 },
  chapterTitle: { ...Typography.sectionSubtitle, marginTop: 4 },
  scoreCard: { alignItems: 'center', paddingVertical: 20 },
  circle: { width: 120, height: 120, borderRadius: 60, borderWidth: 4, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.card, ...Shadows.soft },
  scoreNumber: { ...Typography.scoreNumber },
  scoreDivider: { fontSize: 14, color: Colors.text.secondary, marginVertical: -2 },
  scoreTotal: { fontSize: 16, color: Colors.text.secondary, fontWeight: '600' },
  gradeMessage: { fontSize: 16, fontWeight: '700', marginTop: 10 },
  breakdown: { paddingHorizontal: Spacing.outer, marginBottom: 20 },
  breakdownRow: { flexDirection: 'row', backgroundColor: Colors.card, borderRadius: 12, padding: 16, ...Shadows.soft },
  breakdownItem: { flex: 1, alignItems: 'center' },
  breakdownIcon: { width: 36, height: 36, borderRadius: 18, justifyContent: 'center', alignItems: 'center', marginBottom: 4 },
  breakdownLabel: { fontSize: 10, color: Colors.text.body, fontWeight: '600', marginBottom: 2 },
  breakdownValue: { fontSize: 20, fontWeight: '800' },
  review: { paddingHorizontal: Spacing.outer, marginBottom: 20 },
  reviewTitle: { ...Typography.sectionTitle, marginBottom: 12 },
  reviewCard: { backgroundColor: Colors.card, borderRadius: 12, padding: 14, marginBottom: 10, ...Shadows.soft },
  reviewHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  reviewQNum: { fontSize: 12, color: Colors.text.body, fontWeight: '600' },
  reviewBadge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4 },
  reviewBadgeText: { fontSize: 10, fontWeight: '800', letterSpacing: 0.5 },
  reviewQuestion: { fontSize: 14, fontWeight: '600', color: Colors.text.heading, marginBottom: 8 },
  reviewLabel: { fontSize: 11, color: Colors.text.secondary, fontWeight: '600', marginTop: 4 },
  reviewAnswer: { fontSize: 14, fontWeight: '700', marginBottom: 2 },
  actions: { paddingHorizontal: Spacing.outer, gap: 10, paddingBottom: 40 },
  pressed: { opacity: 0.7 },
});
