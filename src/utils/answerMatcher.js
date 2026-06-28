const STOP_WORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
  'of', 'with', 'by', 'from', 'as', 'is', 'was', 'be', 'been', 'being',
  'he', 'she', 'it', 'they', 'them', 'their', 'his', 'her', 'its', 'our',
  'your', 'my', 'me', 'we', 'us', 'you', 'that', 'this', 'these', 'those',
  'are', 'were', 'has', 'have', 'had', 'do', 'does', 'did', 'will', 'would',
  'can', 'could', 'shall', 'should', 'may', 'might', 'not', 'no', 'nor',
]);

const numberWords = {
  zero: '0', one: '1', two: '2', three: '3', four: '4', five: '5',
  six: '6', seven: '7', eight: '8', nine: '9', ten: '10',
  eleven: '11', twelve: '12', thirteen: '13', fourteen: '14', fifteen: '15',
  sixteen: '16', seventeen: '17', eighteen: '18', nineteen: '19', twenty: '20',
  thirty: '30', forty: '40', fifty: '50', sixty: '60', seventy: '70',
  eighty: '80', ninety: '90', hundred: '100',
};

const digitWords = {};
for (const [word, digit] of Object.entries(numberWords)) {
  digitWords[digit] = word;
}

function normalize(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[''']/g, '')
    .replace(/[^a-z0-9\s/]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*\/\s*/g, '/')
    .trim();
}

function normalizeNumbers(str) {
  const words = str.split(' ');
  return words.map(w => digitWords[w] || w).join(' ');
}

function normalizeNumbersReverse(str) {
  const words = str.split(' ');
  const TENS = new Set(['20','30','40','50','60','70','80','90']);
  const UNITS = new Set(['1','2','3','4','5','6','7','8','9']);
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const num = numberWords[words[i]];
    if (num !== undefined && TENS.has(num) && i + 1 < words.length) {
      const nextNum = numberWords[words[i + 1]];
      if (nextNum !== undefined && UNITS.has(nextNum)) {
        result.push(String(parseInt(num) + parseInt(nextNum)));
        i++;
        continue;
      }
    }
    result.push(num !== undefined ? num : words[i]);
  }
  return result.join(' ');
}

function levenshtein(a, b) {
  const an = a.length;
  const bn = b.length;
  const matrix = [];
  for (let i = 0; i <= bn; i++) matrix[i] = [i];
  for (let j = 0; j <= an; j++) matrix[0][j] = j;
  for (let i = 1; i <= bn; i++) {
    for (let j = 1; j <= an; j++) {
      const cost = a[j - 1] === b[i - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost,
      );
    }
  }
  return matrix[bn][an];
}

function fuzzyMatch(word, targetWords) {
  for (const tw of targetWords) {
    const maxDist = tw.length <= 4 ? 0 : tw.length <= 7 ? 1 : 2;
    if (levenshtein(word, tw) <= maxDist) return true;
  }
  return false;
}

function getKeywords(str) {
  return normalize(str).split(/[\s/]+/).filter(w => w && !STOP_WORDS.has(w));
}

function isAnswerCorrect(userAnswer, correctAnswer) {
  if (!userAnswer || !correctAnswer) return false;

  const normalizedInput = normalize(userAnswer);
  const normalizedCorrect = normalize(correctAnswer);

  if (normalizedInput === normalizedCorrect) return true;

  const alternatives = normalizedCorrect.split('/').flatMap(s => { const t = s.trim(); return t ? [t] : []; });
  if (alternatives.length > 1) {
    for (const alt of alternatives) {
      if (normalizedInput === alt) return true;
    }
    for (const alt of alternatives) {
      if (normalizedInput === normalizeNumbers(alt) || normalizedInput === normalizeNumbersReverse(alt)) return true;
    }
    for (const alt of alternatives) {
      if (fuzzyMatchByWords(normalizedInput, alt)) return true;
    }
  }

  const withNumbers = normalizeNumbers(normalizedInput);
  const withNumbersReverse = normalizeNumbersReverse(normalizedInput);
  if (withNumbers === normalizedCorrect || withNumbersReverse === normalizedCorrect) return true;

  if (fuzzyMatchByWords(normalizedInput, normalizedCorrect)) return true;

  const inputKeywords = getKeywords(normalizedInput);
  const correctKeywords = getKeywords(normalizedCorrect);

  if (correctKeywords.length === 0) return false;

  if (inputKeywords.length > 0) {
    const correctSet = new Set(correctKeywords);
    const allInputInCorrect = inputKeywords.every(ik =>
      correctSet.has(ik) || fuzzyMatch(ik, correctKeywords)
    );
    if (allInputInCorrect) return true;
  }

  let matchCount = 0;
  const inputSet = new Set(inputKeywords);
  for (const ck of correctKeywords) {
    if (inputSet.has(ck) || fuzzyMatch(ck, inputKeywords)) {
      matchCount++;
    }
  }

  if (correctKeywords.length === 1) return matchCount >= 1;
  if (correctKeywords.length === 2) return matchCount >= 2;
  if (correctKeywords.length === 3) return matchCount >= 3;
  return matchCount / correctKeywords.length >= 0.75;
}

function fuzzyMatchByWords(input, correct) {
  const inputWords = input.split(' ').filter(Boolean);
  const correctWords = correct.split(' ').filter(Boolean);
  let matchedCount = 0;
  for (const cw of correctWords) {
    if (fuzzyMatch(cw, inputWords)) matchedCount++;
  }
  if (correctWords.length === 0) return false;
  const ratio = matchedCount / correctWords.length;
  return ratio >= 0.75;
}

export { isAnswerCorrect, normalize, getKeywords };

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { isAnswerCorrect, normalize, getKeywords };
}
