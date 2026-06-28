const { daniel1to6Questions } = require('./daniel-1-6-questions.js');
const { daniel7to12Questions } = require('./daniel-7-12-questions.js');

const { historyQuestions } = require('./history.js');
const { charactersQuestions } = require('./characters.js');
const { prophecyQuestions } = require('./prophecy.js');
const { generalKnowledgeQuestions } = require('./generalKnowledge.js');

const chapterQuestions = [...daniel1to6Questions, ...daniel7to12Questions];
const allQuestions = [...chapterQuestions, ...historyQuestions, ...charactersQuestions, ...prophecyQuestions, ...generalKnowledgeQuestions];

const CATEGORY_META = {
  history: { id: 'history', title: 'History', icon: 'globe-outline', color: '#D4A574', description: 'Kings, empires, events, and life in Babylon' },
  characters: { id: 'characters', title: 'Characters', icon: 'people-outline', color: '#4A6FA5', description: 'Daniel, his companions, kings, and angels' },
  prophecy: { id: 'prophecy', title: 'Prophecy', icon: 'eye-outline', color: '#8B5CF6', description: 'Visions, symbols, and future events' },
  generalKnowledge: { id: 'generalKnowledge', title: 'General Knowledge', icon: 'compass-outline', color: '#14B8A6', description: 'Cross-chapter themes, theology, and application' },
};

function getQuestionsByChapter(chapter) {
  return chapterQuestions.filter(q => q.chapter === chapter);
}

export function getChapterData() {
  const chapters = [];
  for (let i = 1; i <= 12; i++) {
    const questions = getQuestionsByChapter(i);
    if (questions.length > 0) {
      chapters.push({ id: i, title: `Chapter ${i}`, questionCount: questions.length, questions });
    }
  }
  return chapters;
}

export function getCategoryData() {
  const categories = [
    { questions: historyQuestions, key: 'history' },
    { questions: charactersQuestions, key: 'characters' },
    { questions: prophecyQuestions, key: 'prophecy' },
    { questions: generalKnowledgeQuestions, key: 'generalKnowledge' },
  ];
  return categories.map(c => ({
    id: CATEGORY_META[c.key].id,
    title: CATEGORY_META[c.key].title,
    questionCount: c.questions.length,
    icon: CATEGORY_META[c.key].icon,
    color: CATEGORY_META[c.key].color,
    description: CATEGORY_META[c.key].description,
    questions: c.questions,
  }));
}

export function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * allQuestions.length);
  return allQuestions[randomIndex];
}

export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}


