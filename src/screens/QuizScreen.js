import React, { useEffect, useCallback, useReducer, useRef, useState } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView, BackHandler, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { ArrowLeft, ArrowRight } from 'lucide-react-native';
import { Ionicons } from '@expo/vector-icons';
import BackgroundLayer from '../components/BackgroundLayer';
import PrimaryButton from '../components/PrimaryButton';
import Timer from '../components/Timer';
import ProgressBar from '../components/ProgressBar';
import MultipleChoice from '../components/MultipleChoice';
import FillBlank from '../components/FillBlank';
import PointsPopup from '../components/PointsPopup';
import StreakFire from '../components/StreakFire';
import { useQuiz } from '../context/QuizContext';
import { calculateScore, calculateMaxScore, getTimerDuration, getStreakMultiplier } from '../utils/scoring';
import { shuffleArray } from '../data/getAllQuestions';
import { isAnswerCorrect } from '../utils/answerMatcher';
import * as Haptics from 'expo-haptics';
import { Colors, Typography, Shadows, Spacing } from '../theme';

const DIFFICULTY_COLORS = { easy: '#4CAF50', medium: '#FF9800', hard: '#F44336', 'very hard': '#9C27B0' };

function createInitialUIState(timerDuration) {
  return {
    selectedIndex: null,
    textAnswer: '',
    showResult: false,
    timeLeft: timerDuration,
    isTimerRunning: true,
    showNextButton: false,
  };
}

function uiReducer(state, action) {
  switch (action.type) {
    case 'RESET_QUESTION':
      return createInitialUIState(action.timerDuration);
    case 'SELECT_OPTION':
      return { ...state, selectedIndex: action.index };
    case 'SET_TEXT':
      return { ...state, textAnswer: action.text };
    case 'SUBMIT_ANSWER':
      return { ...state, showResult: true, isTimerRunning: false };
    case 'TIME_UP':
      return { ...state, showResult: true, isTimerRunning: false, timeLeft: 0 };
    case 'TICK':
      return { ...state, timeLeft: state.timeLeft - 1 };
    case 'SHOW_NEXT':
      return { ...state, showNextButton: true };
    case 'HIDE_NEXT':
      return { ...state, showNextButton: false };
    default:
      return state;
  }
}

export default function QuizScreen({ route, navigation }) {
  const insets = useSafeAreaInsets();
  const { state, dispatch, addToHistory } = useQuiz();
  const chapter = state.currentQuiz;
  const questionsRef = useRef(null);
  const prevChapterIdRef = useRef(null);
  if (questionsRef.current === null || prevChapterIdRef.current !== chapter?.id) {
    questionsRef.current = shuffleArray(chapter?.questions || []);
    prevChapterIdRef.current = chapter?.id;
  }
  const questions = questionsRef.current;
  const currentQ = questions[state.currentQuestionIndex] || null;
  const timerDuration = currentQ ? getTimerDuration(currentQ) : 60;

  const [ui, uiDispatch] = useReducer(uiReducer, timerDuration, createInitialUIState);
  const [popupData, setPopupData] = useState(null);
  const [streakFireVisible, setStreakFireVisible] = useState(false);

  const handleTimeUpRef = useRef(null);
  const nextBtnTimeoutRef = useRef(null);

  useEffect(() => {
    if (!ui.isTimerRunning) return;
    const interval = setInterval(() => {
      uiDispatch({ type: 'TICK' });
    }, 1000);
    return () => clearInterval(interval);
  }, [ui.isTimerRunning]);

  useEffect(() => {
    if (ui.timeLeft > 0) return;
    if (ui.timeLeft <= 0 && ui.isTimerRunning) {
      handleTimeUpRef.current?.();
    }
  }, [ui.timeLeft, ui.isTimerRunning]);

  useEffect(() => {
    if (state.currentQuestionIndex < questions.length) {
      if (nextBtnTimeoutRef.current) clearTimeout(nextBtnTimeoutRef.current);
      nextBtnTimeoutRef.current = null;
      uiDispatch({ type: 'RESET_QUESTION', timerDuration });
    }
  }, [state.currentQuestionIndex, questions.length, timerDuration]);

  const timeLeftRef = useRef(ui.timeLeft);
  timeLeftRef.current = ui.timeLeft;
  const recordAnswer = useCallback((answerValue, points, isCorrect) => {
    dispatch({ type: 'ANSWER_QUESTION', payload: { questionId: currentQ?.id, answer: answerValue, points, isCorrect, timeTaken: timerDuration - timeLeftRef.current } });
  }, [currentQ, dispatch, timerDuration]);

  const handleTimeUp = useCallback(() => {
    uiDispatch({ type: 'TIME_UP' }); recordAnswer(null, 0, false);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    dispatch({ type: 'STREAK_RESET' });
    if (nextBtnTimeoutRef.current) clearTimeout(nextBtnTimeoutRef.current);
    uiDispatch({ type: 'HIDE_NEXT' });
    nextBtnTimeoutRef.current = setTimeout(() => uiDispatch({ type: 'SHOW_NEXT' }), 3000);
  }, [recordAnswer, dispatch]);

  handleTimeUpRef.current = handleTimeUp;

  const handleSubmit = useCallback(() => {
    uiDispatch({ type: 'SUBMIT_ANSWER' });
    let isCorrect = false;
    if (currentQ.type === 'multipleChoice') isCorrect = ui.selectedIndex === currentQ.correctIndex;
    else isCorrect = isAnswerCorrect(ui.textAnswer, currentQ.answer);
    const streak = isCorrect ? state.streak + 1 : 0;
    const { baseScore, streakBonus, totalScore } = isCorrect ? calculateScore(currentQ, ui.timeLeft, streak) : { baseScore: 0, streakBonus: 0, totalScore: 0 };
    const points = isCorrect ? totalScore : 0;
    recordAnswer(isCorrect ? (currentQ.type === 'multipleChoice' ? ui.selectedIndex : ui.textAnswer) : null, points, isCorrect);

    if (isCorrect) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      if (streak >= 3) Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
      else Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      dispatch({ type: 'STREAK_INCREASE' });
      setPopupData({ score: totalScore, streakBonus, multiplier: getStreakMultiplier(streak) });
      if (streak >= 3) setStreakFireVisible(true);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      dispatch({ type: 'STREAK_RESET' });
    }

    if (nextBtnTimeoutRef.current) clearTimeout(nextBtnTimeoutRef.current);
    if (isCorrect) {
      uiDispatch({ type: 'SHOW_NEXT' });
    } else {
      uiDispatch({ type: 'HIDE_NEXT' });
      nextBtnTimeoutRef.current = setTimeout(() => uiDispatch({ type: 'SHOW_NEXT' }), 3000);
    }
  }, [currentQ, ui.selectedIndex, ui.textAnswer, ui.timeLeft, state.streak, recordAnswer, dispatch]);

  const handleNext = useCallback(() => {
    if (state.currentQuestionIndex >= questions.length - 1) {
      const totalPossible = questions.reduce((sum, q) => sum + calculateMaxScore(q), 0);
      const result = {
        chapterId: chapter?.id, chapterTitle: chapter?.title,
        score: state.score, totalPossible,
        correct: state.answers.filter(a => a.isCorrect).length,
        incorrect: state.answers.filter(a => !a.isCorrect && a.answer !== null).length,
        timeUp: state.answers.filter(a => a.answer === null).length,
        total: questions.length, date: new Date().toISOString(),
        answers: state.answers, questions: questions,
        maxStreak: state.maxStreak,
      };
      dispatch({ type: 'SAVE_RESULT', payload: result });
      addToHistory(result);
      navigation.replace('Results', { result });
    } else {
      dispatch({ type: 'ADVANCE_QUESTION' });
    }
  }, [state, chapter, questions, dispatch, addToHistory, navigation]);

  const confirmLeave = useCallback(() => {
    const hasProgress = state.currentQuestionIndex > 0 || state.answers.length > 0;
    if (!hasProgress) { navigation.goBack(); return; }
    Alert.alert('Leave Quiz?', 'Your progress will be lost.', [
      { text: 'Stay', style: 'cancel' },
      { text: 'Leave', style: 'destructive', onPress: () => navigation.goBack() },
    ]);
  }, [navigation, state.currentQuestionIndex, state.answers.length]);

  useEffect(() => {
    const handler = BackHandler.addEventListener('hardwareBackPress', () => {
      confirmLeave();
      return true;
    });
    return () => handler.remove();
  }, [confirmLeave]);

  if (!currentQ) {
    if (state.currentQuestionIndex >= questions.length && questions.length > 0) return null;
    if (!chapter) {
      navigation.replace('QuizList');
      return null;
    }
    return <View style={styles.center}><Text>No questions available</Text></View>;
  }

  const isLast = state.currentQuestionIndex >= questions.length - 1;

  return (
    <BackgroundLayer>
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : insets.top}>
      <View style={styles.screen}>
        <BlurView intensity={80} tint="light" style={[styles.topBar, { paddingTop: insets.top + 12 }]}>
          <Pressable onPress={confirmLeave} style={({ pressed }) => [styles.backBtn, pressed && styles.pressed]}>
            <ArrowLeft size={22} color={Colors.navy} strokeWidth={2} />
            <Text style={styles.backText}>Back</Text>
          </Pressable>
          <View style={styles.statusGroup}>
            <View style={styles.statusItem}>
              <Ionicons name="trophy-outline" size={14} color="#FFD700" />
              <Text style={styles.statusText}>{state.score}</Text>
            </View>
            {state.streak > 0 && (
              <View style={styles.statusItem}>
                <Text style={styles.fireEmoji}>
                  {state.streak >= 10 ? '🔥🔥🔥' : state.streak >= 5 ? '🔥🔥' : '🔥'}
                </Text>
                <Text style={styles.statusText}>{state.streak}</Text>
                {getStreakMultiplier(state.streak) > 1 && (
                  <View style={styles.multiplierBadge}>
                    <Text style={styles.multiplierText}>x{getStreakMultiplier(state.streak)}</Text>
                  </View>
                )}
              </View>
            )}
          </View>
          <Timer remaining={ui.timeLeft} total={timerDuration} />
        </BlurView>
        <ScrollView style={styles.scrollArea} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <View style={styles.content}>
            <ProgressBar current={state.currentQuestionIndex + 1} total={questions.length} />
            <View style={styles.difficultyRow}>
              <View style={[styles.difficultyBadge, { backgroundColor: (DIFFICULTY_COLORS[currentQ.difficulty] || '#6B7280') + '20' }]}>
                <Text style={[styles.difficultyText, { color: DIFFICULTY_COLORS[currentQ.difficulty] || '#6B7280' }]}>{currentQ.difficulty.toUpperCase()}</Text>
              </View>
              <Text style={styles.reference}>{currentQ.reference}</Text>
            </View>
            <Text style={styles.question}>{currentQ.question}</Text>
            {currentQ.type === 'multipleChoice' ? (
              <MultipleChoice question={currentQ} selectedIndex={ui.selectedIndex} onSelect={(i) => uiDispatch({ type: 'SELECT_OPTION', index: i })} showResult={ui.showResult} correctIndex={currentQ.correctIndex} />
            ) : (
              <FillBlank question={currentQ} value={ui.textAnswer} onChangeText={(t) => uiDispatch({ type: 'SET_TEXT', text: t })} showResult={ui.showResult} />
            )}
          </View>
        </ScrollView>
        <BlurView intensity={80} tint="light" style={[styles.footer, { paddingBottom: insets.bottom + 12 }]}>
          {!ui.showResult ? (
            <PrimaryButton
              title="Submit Answer"
              onPress={handleSubmit}
              disabled={false}
            />
          ) : ui.showNextButton ? (
            <PrimaryButton
              title={isLast ? 'View Results' : 'Next Question'}
              icon={ArrowRight}
              onPress={handleNext}
            />
          ) : (
            <View style={styles.waitingContainer}>
              <Text style={styles.waitingText}>Showing correct answer...</Text>
            </View>
          )}
        </BlurView>
        <StreakFire streak={state.streak} visible={streakFireVisible} onFinish={() => setStreakFireVisible(false)} />
        {popupData && (
          <PointsPopup
            score={popupData.score}
            streakBonus={popupData.streakBonus}
            multiplier={popupData.multiplier}
            visible={true}
            onFinish={() => setPopupData(null)}
          />
        )}
      </View>
    </KeyboardAvoidingView>
    </BackgroundLayer>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(201,168,106,0.2)',
    overflow: 'hidden',
    gap: 8,
  },
  backBtn: { flexDirection: 'row', alignItems: 'center', gap: 4, flexShrink: 1, minWidth: 0 },
  backText: { fontSize: 14, fontWeight: '600', color: Colors.navy },
  statusGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  statusText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.navy,
    fontVariant: ['tabular-nums'],
  },
  fireEmoji: {
    fontSize: 12,
  },
  multiplierBadge: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 6,
    marginLeft: 1,
  },
  multiplierText: {
    color: Colors.navy,
    fontSize: 9,
    fontWeight: '900',
  },
  scrollArea: { flex: 1 },
  scrollContent: { paddingBottom: 16 },
  content: { padding: Spacing.outer },
  difficultyRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  difficultyBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 4 },
  difficultyText: { fontSize: 10, fontWeight: '800', letterSpacing: 1 },
  reference: { ...Typography.reference },
  question: { ...Typography.questionText, marginBottom: 16 },
  footer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(201,168,106,0.2)',
    overflow: 'hidden',
  },
  waitingContainer: { paddingVertical: 13, alignItems: 'center' },
  waitingText: { fontSize: 13, color: Colors.text.secondary, fontStyle: 'italic' },
  pressed: { opacity: 0.7 },
});
