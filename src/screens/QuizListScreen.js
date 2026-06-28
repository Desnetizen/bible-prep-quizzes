import React, { useCallback } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getChapterData, getCategoryData } from '../data/getAllQuestions';
import { useQuiz } from '../context/QuizContext';
import BackgroundLayer from '../components/BackgroundLayer';
import ChapterGrid from '../components/ChapterGrid';
import CategoryGrid from '../components/CategoryGrid';
import { Colors, Typography, Spacing } from '../theme';

export default function QuizListScreen({ navigation }) {
  const { dispatch } = useQuiz();
  const chapters = React.useMemo(() => getChapterData(), []);
  const categories = React.useMemo(() => getCategoryData(), []);

  const handleChapterPress = useCallback((chapter) => {
    dispatch({ type: 'START_QUIZ', payload: chapter });
    navigation.navigate('Quiz', { chapterId: chapter.id });
  }, [dispatch, navigation]);

  const handleCategoryPress = useCallback((category) => {
    dispatch({ type: 'START_QUIZ', payload: category });
    navigation.navigate('Quiz', { chapterId: category.id });
  }, [dispatch, navigation]);

  return (
    <BackgroundLayer>
      <SafeAreaView edges={['top']} style={styles.screen}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 132 }}>
          <View style={styles.section}>
            <Text style={styles.heading}>Select a Chapter</Text>
            <Text style={styles.subheading}>Test your knowledge of the Book of Daniel</Text>
          </View>
          <ChapterGrid chapters={chapters} onChapterPress={handleChapterPress} />
          <CategoryGrid categories={categories} onCategoryPress={handleCategoryPress} />
        </ScrollView>
      </SafeAreaView>
    </BackgroundLayer>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, paddingTop: 16 },
  section: { paddingTop: 16 },
  heading: { ...Typography.sectionTitle, paddingHorizontal: Spacing.outer, marginBottom: 4 },
  subheading: { ...Typography.sectionSubtitle, paddingHorizontal: Spacing.outer, marginBottom: 12 },
});
