import React, { useMemo, useCallback } from 'react';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getChapterData, getCategoryData, getRandomQuestion } from '../data/getAllQuestions';
import { useQuiz } from '../context/QuizContext';
import BackgroundLayer from '../components/BackgroundLayer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ChallengeCard from '../components/ChallengeCard';
import ChapterGrid from '../components/ChapterGrid';

export default function HomeScreen({ navigation }) {
  const { dispatch } = useQuiz();
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const chapters = useMemo(() => getChapterData(), []);
  const categories = useMemo(() => getCategoryData(), []);
  const dailyChallenge = useMemo(() => getRandomQuestion(), []);
  const featuredChapters = useMemo(() => chapters.slice(0, 4), [chapters]);

  const handleStartQuiz = useCallback(() => navigation.navigate('QuizTab'), [navigation]);
  const handleExplore = useCallback(() => navigation.navigate('HistoryTab'), [navigation]);

  const handleChapterPress = useCallback((chapter) => {
    dispatch({ type: 'START_QUIZ', payload: chapter });
    navigation.navigate('QuizTab', { screen: 'Quiz', params: { chapterId: chapter.id } });
  }, [dispatch, navigation]);

  const handleChallengePress = useCallback(() => {
    const ch = chapters.find(c => c.questions.some(q => q.id === dailyChallenge?.id));
    if (ch) {
      dispatch({ type: 'START_QUIZ', payload: { ...ch, questions: [dailyChallenge] } });
      navigation.navigate('QuizTab', { screen: 'Quiz', params: { chapterId: ch.id, singleQuestion: true } });
    } else {
      const cat = categories.find(c => c.questions.some(q => q.id === dailyChallenge?.id));
      if (cat) {
        dispatch({ type: 'START_QUIZ', payload: { ...cat, questions: [dailyChallenge] } });
        navigation.navigate('QuizTab', { screen: 'Quiz', params: { chapterId: cat.id, singleQuestion: true } });
      }
    }
  }, [chapters, categories, dailyChallenge, dispatch, navigation]);

  return (
    <BackgroundLayer>
      <SafeAreaView edges={['top']} style={styles.screen}>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          contentContainerStyle={styles.scrollContent}
        >
          <Header />
          <HeroSection onStartQuiz={handleStartQuiz} onExplore={handleExplore} scrollY={scrollY} />
          <ChallengeCard question={dailyChallenge} onPress={handleChallengePress} />
          <ChapterGrid chapters={featuredChapters} onChapterPress={handleChapterPress} />
        </Animated.ScrollView>
      </SafeAreaView>
    </BackgroundLayer>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  scrollContent: { paddingBottom: 132 },
});
