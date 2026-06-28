const DIFFICULTY_MULTIPLIER = { easy: 1, medium: 1.5, hard: 2, 'very hard': 2.5 };
const DIFFICULTY_TIME = { easy: 30, medium: 45, hard: 60, 'very hard': 75 };
const BASE_POINTS = 10;
const FILL_BLANK_BONUS = 15;

const STREAK_THRESHOLDS = [
  { streak: 10, multiplier: 4 },
  { streak: 5, multiplier: 3 },
  { streak: 3, multiplier: 2 },
];

export function getTimerDuration(question) {
  const base = DIFFICULTY_TIME[question.difficulty] || 45;
  return question.type === 'fillBlank' ? base + FILL_BLANK_BONUS : base;
}

export function getStreakMultiplier(streak) {
  for (const t of STREAK_THRESHOLDS) {
    if (streak >= t.streak) return t.multiplier;
  }
  return 1;
}

export function calculateScore(question, timeRemaining, streak = 0) {
  const base = BASE_POINTS * DIFFICULTY_MULTIPLIER[question.difficulty];
  const speedBonus = timeRemaining;
  const multiplier = getStreakMultiplier(streak);
  const streakBonus = Math.round(base * (multiplier - 1));
  return { baseScore: Math.round(base + speedBonus), streakBonus, totalScore: Math.round((base + speedBonus) * multiplier) };
}

export function calculateMaxScore(question, streak = 0) {
  const base = BASE_POINTS * DIFFICULTY_MULTIPLIER[question.difficulty];
  const multiplier = getStreakMultiplier(streak);
  return Math.round((base + getTimerDuration(question)) * multiplier);
}
