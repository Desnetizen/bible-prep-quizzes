import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BookOpen } from 'lucide-react-native';
import { useQuiz } from '../context/QuizContext';
import BackgroundLayer from '../components/BackgroundLayer';
import { Colors, Typography, Shadows, Spacing } from '../theme';

function formatDate(iso) { const d = new Date(iso); return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }); }
function getScoreColor(s, t) { const p = t > 0 ? (s / t) * 100 : 0; return p >= 80 ? '#4CAF50' : p >= 60 ? '#FF9800' : '#F44336'; }

function renderWrongAnswers(item) {
  const { questions, answers } = item;
  if (!questions || !answers || answers.length === 0) {
    return (
      <View style={styles.reviewDivider}>
        <Text style={styles.reviewEmpty}>No answer details available.</Text>
      </View>
    );
  }

  const wrongAnswers = answers.filter(ans => !ans.isCorrect);

  if (wrongAnswers.length === 0) {
    return (
      <View style={styles.reviewDivider}>
        <Text style={styles.perfectText}>{'Perfect score \u2014 all correct!'}</Text>
      </View>
    );
  }

  return (
    <View style={styles.reviewSection}>
      <Text style={styles.reviewTitle}>Questions to Review</Text>
      {wrongAnswers.map((ans, idx) => {
        const q = questions.find(q => q.id === ans.questionId);
        if (!q) return null;
        const userAnswer = ans.answer === null ? null :
          q.type === 'multipleChoice' && typeof ans.answer === 'number' ? q.options[ans.answer] :
          ans.answer;
        const correctAnswer = q.type === 'multipleChoice' ? q.options[q.correctIndex] : q.answer;
        return (
          <View key={ans.questionId} style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <Text style={styles.reviewQNum}>{`Q${idx + 1} \u00B7 ${q.reference}`}</Text>
              <View style={[styles.reviewBadge, { backgroundColor: ans.answer === null ? '#FFF3E0' : '#FFEBEE' }]}>
                <Text style={[styles.reviewBadgeText, { color: ans.answer === null ? '#FF9800' : '#F44336' }]}>
                  {ans.answer === null ? 'TIME' : 'WRONG'}
                </Text>
              </View>
            </View>
            <Text style={styles.reviewQuestion}>{q.question}</Text>
            <Text style={styles.reviewLabel}>Your answer:</Text>
            <Text style={[styles.reviewAnswer, { color: ans.answer === null ? '#FF9800' : '#F44336' }]}>
              {userAnswer ?? "Time's Up \u2014 no answer given"}
            </Text>
            <Text style={styles.reviewLabel}>Correct answer:</Text>
            <Text style={[styles.reviewAnswer, { color: '#4CAF50' }]}>{correctAnswer}</Text>
          </View>
        );
      })}
    </View>
  );
}

function HistoryCard({ item, isExpanded, onToggle }) {
  const pct = item.totalPossible > 0 ? Math.round((item.score / item.totalPossible) * 100) : 0;
  const sc = getScoreColor(item.score, item.totalPossible);
  return (
    <Pressable onPress={onToggle} style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>
      <View style={styles.cardHeader}>
        <View style={styles.cardLeft}>
          <Text style={styles.chapterName}>{item.chapterTitle || 'Quiz'}</Text>
          <Text style={styles.date}>{formatDate(item.date)}</Text>
          <Text style={styles.detail}>✓ {item.correct}  ✗ {item.incorrect}  ⏱ {item.timeUp}{item.maxStreak > 0 ? `  🔥${item.maxStreak}` : ''}</Text>
        </View>
        <View style={styles.cardRight}><Text style={[styles.score, { color: sc }]}>{pct}%</Text><Text style={styles.scoreDetail}>{item.score}/{item.totalPossible}</Text></View>
      </View>
      {isExpanded && renderWrongAnswers(item)}
    </Pressable>
  );
}

export default function HistoryScreen() {
  const { state } = useQuiz();
  const history = state.history || [];
  const [expandedDates, setExpandedDates] = React.useState(new Set());

  const toggleExpand = React.useCallback((date) => {
    setExpandedDates(prev => {
      const next = new Set(prev);
      if (next.has(date)) {
        next.delete(date);
      } else {
        next.add(date);
      }
      return next;
    });
  }, []);

  const completedCount = React.useMemo(() => {
    const uniqueChapters = new Set();
    history.forEach(item => {
      if (typeof item.chapterId === 'number' && item.chapterId >= 1 && item.chapterId <= 12) {
        uniqueChapters.add(item.chapterId);
      }
    });
    return uniqueChapters.size;
  }, [history]);

  const renderProgressBar = () => (
    <View style={styles.progressContainer}>
      <View style={styles.progressHeader}>
        <BookOpen size={16} color={Colors.text.heading} style={{ marginRight: 6 }} />
        <Text style={styles.progressText}>{completedCount} of 12 Chapters Completed</Text>
      </View>
      <View style={styles.progressBar}>
        {Array.from({ length: 12 }).map((_, i) => (
          <View
            key={i}
            style={[
              styles.progressSegment,
              i < completedCount ? styles.progressSegmentFilled : styles.progressSegmentEmpty
            ]}
          />
        ))}
      </View>
    </View>
  );

  if (history.length === 0) {
    return (
      <BackgroundLayer>
        <SafeAreaView edges={['top']} style={styles.screen}>
          <View style={styles.emptyContainer}>
            <Ionicons name="time-outline" size={48} color="#D1D5DB" />
            <Text style={styles.emptyTitle}>No History Yet</Text>
            <Text style={styles.emptyText}>Complete your first quiz to see results here.</Text>
          </View>
        </SafeAreaView>
      </BackgroundLayer>
    );
  }

  return (
    <BackgroundLayer>
    <SafeAreaView edges={['top']} style={styles.screen}>
      <FlatList
        data={history}
        keyExtractor={item => item.date}
        renderItem={({ item }) => (
          <HistoryCard
            item={item}
            isExpanded={expandedDates.has(item.date)}
            onToggle={() => toggleExpand(item.date)}
          />
        )}
        ListHeaderComponent={
          <View>
            {renderProgressBar()}
            <Text style={styles.heading}>Quiz History</Text>
          </View>
        }
        contentContainerStyle={{ paddingBottom: 132 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
    </BackgroundLayer>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  heading: { ...Typography.sectionTitle, marginBottom: 16, marginTop: 8, paddingHorizontal: Spacing.outer },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40 },
  emptyTitle: { fontSize: 18, fontWeight: '700', color: Colors.text.body, marginTop: 12 },
  emptyText: { fontSize: 14, color: Colors.text.secondary, textAlign: 'center', marginTop: 6 },
  card: { backgroundColor: Colors.card, borderRadius: 12, marginBottom: 10, marginHorizontal: Spacing.outer, ...Shadows.soft },
  cardPressed: { opacity: 0.85 },
  cardHeader: { flexDirection: 'row', padding: 16 },
  cardLeft: { flex: 1 },
  chapterName: { fontSize: 15, fontWeight: '700', color: Colors.text.heading },
  date: { fontSize: 12, color: Colors.text.body, marginTop: 2 },
  detail: { fontSize: 12, color: Colors.text.secondary, marginTop: 6 },
  cardRight: { alignItems: 'flex-end', justifyContent: 'center' },
  score: { fontSize: 22, fontWeight: '900' },
  scoreDetail: { fontSize: 11, color: Colors.text.body, marginTop: 2 },
  progressContainer: { marginHorizontal: Spacing.outer, marginTop: 16, marginBottom: 8 },
  progressHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  progressText: { fontSize: 14, color: Colors.text.heading, fontWeight: '500' },
  progressBar: { flexDirection: 'row', justifyContent: 'space-between', gap: 4 },
  progressSegment: { flex: 1, height: 4, borderRadius: 2 },
  progressSegmentFilled: { backgroundColor: Colors.navy },
  progressSegmentEmpty: { backgroundColor: Colors.border },
  reviewDivider: { borderTopWidth: 1, borderTopColor: Colors.border, padding: 16, paddingTop: 12 },
  reviewSection: { borderTopWidth: 1, borderTopColor: Colors.border, padding: 16, paddingTop: 12 },
  reviewTitle: { ...Typography.sectionTitle, fontSize: 14, marginBottom: 10 },
  reviewCard: { backgroundColor: '#F8F7F4', borderRadius: 10, padding: 12, marginBottom: 8 },
  reviewHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  reviewQNum: { fontSize: 12, color: Colors.text.body, fontWeight: '600' },
  reviewBadge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4 },
  reviewBadgeText: { fontSize: 10, fontWeight: '800', letterSpacing: 0.5 },
  reviewQuestion: { fontSize: 14, fontWeight: '600', color: Colors.text.heading, marginBottom: 8 },
  reviewLabel: { fontSize: 11, color: Colors.text.secondary, fontWeight: '600', marginTop: 4 },
  reviewAnswer: { fontSize: 14, fontWeight: '700', marginBottom: 2 },
  perfectText: { fontSize: 13, color: '#4CAF50', fontWeight: '600', textAlign: 'center', paddingVertical: 8 },
  reviewEmpty: { fontSize: 13, color: Colors.text.secondary, fontStyle: 'italic', textAlign: 'center', paddingVertical: 8 },
});
