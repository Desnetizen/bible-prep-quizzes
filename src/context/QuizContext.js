import React, { createContext, useCallback, useMemo, use, useReducer, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const QuizContext = createContext();

const initialState = { history: [], currentQuiz: null, currentQuestionIndex: 0, score: 0, streak: 0, maxStreak: 0, answers: [], timerRemaining: 60 };

async function saveHistory(newHistory) {
  try { await AsyncStorage.setItem('quizHistory', JSON.stringify(newHistory)); }
  catch (e) { console.log('Failed to save history:', e); }
}

function quizReducer(state, action) {
  switch (action.type) {
    case 'SET_HISTORY': return { ...state, history: action.payload };
    case 'START_QUIZ': return { ...state, currentQuiz: action.payload, currentQuestionIndex: 0, score: 0, streak: 0, maxStreak: 0, answers: [], timerRemaining: 60 };
    case 'ANSWER_QUESTION': return { ...state, answers: [...state.answers, action.payload], score: state.score + (action.payload.points || 0) };
    case 'STREAK_INCREASE': {
      const newStreak = state.streak + 1;
      return { ...state, streak: newStreak, maxStreak: Math.max(state.maxStreak, newStreak) };
    }
    case 'STREAK_RESET': return { ...state, streak: 0 };
    case 'ADVANCE_QUESTION': return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    case 'SAVE_RESULT': return { ...state, lastResult: action.payload };
    case 'ADD_TO_HISTORY': return { ...state, history: [action.payload, ...state.history].slice(0, 50) };
    case 'RESET_QUIZ': return { ...state, currentQuiz: null, currentQuestionIndex: 0, score: 0, streak: 0, maxStreak: 0, answers: [], timerRemaining: 60 };
    default: return state;
  }
}

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  useEffect(() => { loadHistory(); }, []);

  const loadHistory = async () => {
    try {
      const stored = await AsyncStorage.getItem('quizHistory');
      if (stored) dispatch({ type: 'SET_HISTORY', payload: JSON.parse(stored) });
    } catch (e) { console.log('Failed to load history:', e); }
  };

  const initialLoadDone = useRef(false);

  const addToHistory = useCallback((result) => {
    dispatch({ type: 'ADD_TO_HISTORY', payload: result });
  }, []);

  useEffect(() => {
    if (initialLoadDone.current) {
      saveHistory(state.history);
    }
    initialLoadDone.current = true;
  }, [state.history]);

  const ctxValue = useMemo(() => ({ state, dispatch, addToHistory }), [state, dispatch, addToHistory]);
  return <QuizContext.Provider value={ctxValue}>{children}</QuizContext.Provider>;
}

export function useQuiz() { const c = use(QuizContext); if (!c) throw new Error('useQuiz must be used within a QuizProvider'); return c; }
