// Daniel 7-12 Study Question Bank (NKJV)
// Source document: Daniel_7-12_Study_Questions.docx
// Covers Daniel chapters 7-12, verse-by-verse (NKJV)
// 322 questions total
//
// Question shape:
//   { id, chapter, reference, question, difficulty, type, ...type-specific fields }
//   reference is the chapter:verse string (e.g. "3:18"); it is also
//   baked into the end of the `question` text as "(Daniel 3:18)".
//   difficulty is one of: 'easy', 'medium', 'hard'.
//
// type: 'multipleChoice' -> options (array of 4 strings), correctIndex (0-3)
// type: 'fillBlank'      -> answer (string the learner must recall/type)

const daniel7to12Questions = [
  {
    "id": 393,
    "chapter": 7,
    "reference": "7:1",
    "question": "In whose reign did Daniel have his dream and visions? (Daniel 7:1)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Belshazzar"
  },
  {
    "id": 394,
    "chapter": 7,
    "reference": "7:1",
    "question": "What did Daniel do with the dream? (Daniel 7:1)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Forgot it",
      "Wrote down the sum of the matters",
      "Told no one",
      "Burned the scroll"
    ],
    "correctIndex": 1
  },
  {
    "id": 395,
    "chapter": 7,
    "reference": "7:2",
    "question": "What did Daniel see in his vision at night? (Daniel 7:2)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "A river of fire",
      "The four winds of heaven stirring up the Great Sea",
      "A burning bush",
      "A golden statue"
    ],
    "correctIndex": 1
  },
  {
    "id": 396,
    "chapter": 7,
    "reference": "7:2",
    "question": "How many winds stirred up the sea? (Daniel 7:2)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Two",
      "Three",
      "Four",
      "Seven"
    ],
    "correctIndex": 2
  },
  {
    "id": 397,
    "chapter": 7,
    "reference": "7:3",
    "question": "How many great beasts came up from the sea? (Daniel 7:3)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "correctIndex": 2
  },
  {
    "id": 398,
    "chapter": 7,
    "reference": "7:3",
    "question": "How were the beasts described as being from one another? (Daniel 7:3)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Identical",
      "Different from one another",
      "Invisible",
      "Made of metal"
    ],
    "correctIndex": 1
  },
  {
    "id": 399,
    "chapter": 7,
    "reference": "7:4",
    "question": "What was the first beast like? (Daniel 7:4)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "A bear",
      "A lion with eagle's wings",
      "A leopard",
      "A dragon"
    ],
    "correctIndex": 1
  },
  {
    "id": 400,
    "chapter": 7,
    "reference": "7:4",
    "question": "What happened to the first beast's wings? (Daniel 7:4)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "They grew larger",
      "They were plucked off",
      "They turned to fire",
      "They multiplied"
    ],
    "correctIndex": 1
  },
  {
    "id": 401,
    "chapter": 7,
    "reference": "7:5",
    "question": "What was the second beast like? (Daniel 7:5)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "A lion",
      "A bear",
      "A leopard",
      "A goat"
    ],
    "correctIndex": 1
  },
  {
    "id": 402,
    "chapter": 7,
    "reference": "7:5",
    "question": "What did the second beast have between its teeth? (Daniel 7:5)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Fire",
      "Three ribs",
      "A sword",
      "A crown"
    ],
    "correctIndex": 1
  },
  {
    "id": 403,
    "chapter": 7,
    "reference": "7:6",
    "question": "What was the third beast like? (Daniel 7:6)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "A bear",
      "A leopard",
      "A wolf",
      "A serpent"
    ],
    "correctIndex": 1
  },
  {
    "id": 404,
    "chapter": 7,
    "reference": "7:6",
    "question": "How many wings did the third beast have? (Daniel 7:6)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Two",
      "Four",
      "Six",
      "Eight"
    ],
    "correctIndex": 1
  },
  {
    "id": 405,
    "chapter": 7,
    "reference": "7:7",
    "question": "What made the fourth beast different from the others? (Daniel 7:7)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "It had wings of gold",
      "It was dreadful, terrible, and exceedingly strong with iron teeth",
      "It was small and gentle",
      "It had no teeth"
    ],
    "correctIndex": 1
  },
  {
    "id": 406,
    "chapter": 7,
    "reference": "7:7",
    "question": "How many horns did the fourth beast have? (Daniel 7:7)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Seven",
      "Ten",
      "Twelve",
      "Three"
    ],
    "correctIndex": 1
  },
  {
    "id": 407,
    "chapter": 7,
    "reference": "7:8",
    "question": "What rose up among the ten horns? (Daniel 7:8)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Another little horn"
  },
  {
    "id": 408,
    "chapter": 7,
    "reference": "7:8",
    "question": "What did the little horn have besides eyes and a mouth speaking great things? (Daniel 7:8)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Wings of an eagle",
      "It plucked up three of the first horns by the roots",
      "Seven heads",
      "A scepter"
    ],
    "correctIndex": 1
  },
  {
    "id": 409,
    "chapter": 7,
    "reference": "7:9",
    "question": "What was set in place in Daniel's vision? (Daniel 7:9)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "An altar",
      "Thrones, and the Ancient of Days was seated",
      "A throne of gold only",
      "A judgment seat for beasts"
    ],
    "correctIndex": 1
  },
  {
    "id": 410,
    "chapter": 7,
    "reference": "7:9",
    "question": "What was the clothing and hair of the Ancient of Days like? (Daniel 7:9)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Black as night",
      "White as snow, hair like pure wool",
      "Crimson",
      "Made of bronze"
    ],
    "correctIndex": 1
  },
  {
    "id": 411,
    "chapter": 7,
    "reference": "7:10",
    "question": "What flowed from before the Ancient of Days? (Daniel 7:10)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Water",
      "A fiery stream",
      "Wind",
      "Blood"
    ],
    "correctIndex": 1
  },
  {
    "id": 412,
    "chapter": 7,
    "reference": "7:10",
    "question": "How many stood before Him as the books were opened? (Daniel 7:10)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "A thousand thousands ministered to Him; ten thousand times ten thousand stood before Him",
      "Only twelve",
      "Seventy",
      "None"
    ],
    "correctIndex": 0
  },
  {
    "id": 413,
    "chapter": 7,
    "reference": "7:11",
    "question": "Why did Daniel watch because of the voice of the great words? (Daniel 7:11)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Which the bear spoke",
      "Which the horn spoke",
      "Which the Ancient of Days spoke",
      "Which the angel spoke"
    ],
    "correctIndex": 1
  },
  {
    "id": 414,
    "chapter": 7,
    "reference": "7:11",
    "question": "What happened to the fourth beast? (Daniel 7:11)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "It fled",
      "It was slain, its body destroyed and given to the burning flame",
      "It was crowned",
      "It became a lamb"
    ],
    "correctIndex": 1
  },
  {
    "id": 415,
    "chapter": 7,
    "reference": "7:12",
    "question": "What happened to the rest of the beasts' dominion? (Daniel 7:12)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "It increased",
      "It was taken away",
      "It was divided equally",
      "It was given to the little horn"
    ],
    "correctIndex": 1
  },
  {
    "id": 416,
    "chapter": 7,
    "reference": "7:12",
    "question": "What happened to their lives? (Daniel 7:12)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Prolonged for a season and time"
  },
  {
    "id": 417,
    "chapter": 7,
    "reference": "7:13",
    "question": "Who came with the clouds of heaven? (Daniel 7:13)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "An angel",
      "One like the Son of Man",
      "A lion",
      "Daniel himself"
    ],
    "correctIndex": 1
  },
  {
    "id": 418,
    "chapter": 7,
    "reference": "7:13",
    "question": "To whom was He brought? (Daniel 7:13)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "To the four beasts",
      "To the Ancient of Days",
      "To the ten kings",
      "To Israel"
    ],
    "correctIndex": 1
  },
  {
    "id": 419,
    "chapter": 7,
    "reference": "7:14",
    "question": "What was given to the Son of Man? (Daniel 7:14)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Dominion, glory, and a kingdom"
  },
  {
    "id": 420,
    "chapter": 7,
    "reference": "7:14",
    "question": "How long shall His dominion last? (Daniel 7:14)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "For a thousand years",
      "An everlasting dominion which shall not pass away",
      "Until the fourth beast returns",
      "Seventy years"
    ],
    "correctIndex": 1
  },
  {
    "id": 421,
    "chapter": 7,
    "reference": "7:15",
    "question": "How did Daniel feel in his spirit? (Daniel 7:15)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Grieved/troubled"
  },
  {
    "id": 422,
    "chapter": 7,
    "reference": "7:15",
    "question": "What troubled Daniel besides his spirit? (Daniel 7:15)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The beasts' roaring",
      "The visions of his head",
      "The cold weather",
      "Hunger"
    ],
    "correctIndex": 1
  },
  {
    "id": 423,
    "chapter": 7,
    "reference": "7:16",
    "question": "Whom did Daniel approach for the truth of the matter? (Daniel 7:16)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The Ancient of Days",
      "One of those who stood by",
      "The lion-beast",
      "The king"
    ],
    "correctIndex": 1
  },
  {
    "id": 424,
    "chapter": 7,
    "reference": "7:16",
    "question": "What did that one do for Daniel? (Daniel 7:16)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Punished him",
      "Made known to him the interpretation of these things",
      "Silenced him",
      "Took his scroll"
    ],
    "correctIndex": 1
  },
  {
    "id": 425,
    "chapter": 7,
    "reference": "7:17",
    "question": "What are the four great beasts? (Daniel 7:17)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Four angels",
      "Four kings which shall arise out of the earth",
      "Four rivers",
      "Four prophets"
    ],
    "correctIndex": 1
  },
  {
    "id": 426,
    "chapter": 7,
    "reference": "7:17",
    "question": "What kind of kings are they identified as? (Daniel 7:17)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Spiritual rulers only",
      "Kings who shall arise out of the earth",
      "Heavenly beings",
      "Foreign gods"
    ],
    "correctIndex": 1
  },
  {
    "id": 427,
    "chapter": 7,
    "reference": "7:18",
    "question": "Who shall receive the kingdom? (Daniel 7:18)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The beasts",
      "The saints of the Most High",
      "The little horn",
      "The four winds"
    ],
    "correctIndex": 1
  },
  {
    "id": 428,
    "chapter": 7,
    "reference": "7:18",
    "question": "How long shall the saints possess the kingdom? (Daniel 7:18)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Forever, even forever and ever"
  },
  {
    "id": 429,
    "chapter": 7,
    "reference": "7:19",
    "question": "About which beast did Daniel want greater certainty? (Daniel 7:19)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The lion",
      "The fourth beast",
      "The bear",
      "The leopard"
    ],
    "correctIndex": 1
  },
  {
    "id": 430,
    "chapter": 7,
    "reference": "7:19",
    "question": "What were the fourth beast's feet like? (Daniel 7:19)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Of gold",
      "Of bronze claws, devouring and breaking in pieces",
      "Of clay",
      "Of wood"
    ],
    "correctIndex": 1
  },
  {
    "id": 431,
    "chapter": 7,
    "reference": "7:20",
    "question": "What did Daniel want to know about the ten horns? (Daniel 7:20)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Their color",
      "Their meaning, and concerning the other horn that came up",
      "Their number only",
      "Their weight"
    ],
    "correctIndex": 1
  },
  {
    "id": 432,
    "chapter": 7,
    "reference": "7:20",
    "question": "What did the other horn have that made it more impressive than its fellows? (Daniel 7:20)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Wings",
      "Eyes, and a mouth speaking great things",
      "A crown of gold",
      "Seven heads"
    ],
    "correctIndex": 1
  },
  {
    "id": 433,
    "chapter": 7,
    "reference": "7:21",
    "question": "What did Daniel observe the horn doing? (Daniel 7:21)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Hiding",
      "Making war against the saints and prevailing against them",
      "Singing",
      "Sleeping"
    ],
    "correctIndex": 1
  },
  {
    "id": 434,
    "chapter": 7,
    "reference": "7:21",
    "question": "Against whom did this horn make war? (Daniel 7:21)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "The saints"
  },
  {
    "id": 435,
    "chapter": 7,
    "reference": "7:22",
    "question": "Until whom did the saints wait for judgment? (Daniel 7:22)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The fourth beast",
      "The Ancient of Days",
      "The little horn",
      "The first beast"
    ],
    "correctIndex": 1
  },
  {
    "id": 436,
    "chapter": 7,
    "reference": "7:22",
    "question": "What was given to the saints? (Daniel 7:22)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Wealth",
      "Judgment was given in their favor, and they possessed the kingdom",
      "A new beast",
      "Exile"
    ],
    "correctIndex": 1
  },
  {
    "id": 437,
    "chapter": 7,
    "reference": "7:23",
    "question": "What was the fourth beast interpreted to be? (Daniel 7:23)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "A nation of angels",
      "A fourth kingdom on earth, different from all other kingdoms",
      "The first kingdom returning",
      "A heavenly host"
    ],
    "correctIndex": 1
  },
  {
    "id": 438,
    "chapter": 7,
    "reference": "7:23",
    "question": "What would this kingdom do to the whole earth? (Daniel 7:23)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Bless it",
      "Devour, break in pieces, and trample it",
      "Ignore it",
      "Restore it"
    ],
    "correctIndex": 1
  },
  {
    "id": 439,
    "chapter": 7,
    "reference": "7:24",
    "question": "What do the ten horns represent? (Daniel 7:24)",
    "difficulty": "hard",
    "type": "fillBlank",
    "answer": "Ten kings who shall arise"
  },
  {
    "id": 440,
    "chapter": 7,
    "reference": "7:24",
    "question": "What would the one who arises after them do to the first ones? (Daniel 7:24)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Honor them",
      "Be different and subdue three kings",
      "Crown them",
      "Join them as equals"
    ],
    "correctIndex": 1
  },
  {
    "id": 441,
    "chapter": 7,
    "reference": "7:25",
    "question": "Against whom shall this king speak pompous words? (Daniel 7:25)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The angels",
      "The Most High",
      "The other kings",
      "The beasts"
    ],
    "correctIndex": 1
  },
  {
    "id": 442,
    "chapter": 7,
    "reference": "7:25",
    "question": "For how long shall the saints be given into his hand? (Daniel 7:25)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Seven years",
      "A time, times, and half a time",
      "Forty years",
      "One generation"
    ],
    "correctIndex": 1
  },
  {
    "id": 443,
    "chapter": 7,
    "reference": "7:26",
    "question": "What shall happen at the judgment? (Daniel 7:26)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The horn's dominion shall increase",
      "He will be crowned king of all",
      "His dominion shall be taken away, to be consumed and destroyed forever",
      "Nothing will change"
    ],
    "correctIndex": 2
  },
  {
    "id": 444,
    "chapter": 7,
    "reference": "7:26",
    "question": "What will happen to his dominion in the end? (Daniel 7:26)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "It will be inherited by his sons",
      "It will be consumed and destroyed forever",
      "It will merge with the saints' kingdom",
      "It will be hidden"
    ],
    "correctIndex": 1
  },
  {
    "id": 445,
    "chapter": 7,
    "reference": "7:27",
    "question": "To whom shall the kingdom and dominion be given? (Daniel 7:27)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "The four beasts",
      "The people of the saints of the Most High",
      "The ten kings",
      "The little horn"
    ],
    "correctIndex": 1
  },
  {
    "id": 446,
    "chapter": 7,
    "reference": "7:27",
    "question": "How long shall this kingdom endure? (Daniel 7:27)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "A thousand years",
      "An everlasting kingdom, and all dominions shall serve and obey Him",
      "Until the next beast rises",
      "Seventy years"
    ],
    "correctIndex": 1
  },
  {
    "id": 447,
    "chapter": 7,
    "reference": "7:28",
    "question": "How did this account end for Daniel? (Daniel 7:28)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "\"This is the end of the account\"",
      "\"Here is the end of the account. As for me, Daniel, my countenance changed greatly\"",
      "\"And Daniel rejoiced greatly\"",
      "\"And the king praised God\""
    ],
    "correctIndex": 1
  },
  {
    "id": 448,
    "chapter": 7,
    "reference": "7:28",
    "question": "What did Daniel do with the matter afterward? (Daniel 7:28)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Kept the matter in his heart"
  },
  {
    "id": 449,
    "chapter": 8,
    "reference": "8:1",
    "question": "In which year of Belshazzar's reign did this vision appear to Daniel? (Daniel 8:1)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "First year",
      "Third year",
      "Tenth year",
      "Twentieth year"
    ],
    "correctIndex": 1
  },
  {
    "id": 450,
    "chapter": 8,
    "reference": "8:1",
    "question": "How did this vision compare to the one Daniel saw before? (Daniel 8:1)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "It was unrelated",
      "It appeared after the one that appeared to him the first time",
      "It was identical",
      "It was given to someone else first"
    ],
    "correctIndex": 1
  },
  {
    "id": 451,
    "chapter": 8,
    "reference": "8:2",
    "question": "Where was Daniel in the vision? (Daniel 8:2)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Babylon",
      "Shushan (Susa), in the province of Elam, by the River Ulai",
      "Jerusalem",
      "Nineveh"
    ],
    "correctIndex": 1
  },
  {
    "id": 452,
    "chapter": 8,
    "reference": "8:2",
    "question": "By what river was Daniel standing? (Daniel 8:2)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Ulai"
  },
  {
    "id": 453,
    "chapter": 8,
    "reference": "8:3",
    "question": "What did Daniel see standing by the river? (Daniel 8:3)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "A lion",
      "A ram with two horns",
      "A goat",
      "A serpent"
    ],
    "correctIndex": 1
  },
  {
    "id": 454,
    "chapter": 8,
    "reference": "8:3",
    "question": "What was notable about the ram's two horns? (Daniel 8:3)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Both were the same height",
      "One was higher than the other, and the higher came up last",
      "Both were broken",
      "They were made of gold"
    ],
    "correctIndex": 1
  },
  {
    "id": 455,
    "chapter": 8,
    "reference": "8:4",
    "question": "In which directions did the ram push? (Daniel 8:4)",
    "difficulty": "medium",
    "type": "fillBlank",
    "answer": "Westward, northward, and southward"
  },
  {
    "id": 456,
    "chapter": 8,
    "reference": "8:4",
    "question": "Could any beast stand before the ram? (Daniel 8:4)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Yes, many",
      "No beast could withstand him",
      "Only the lion",
      "Only the leopard"
    ],
    "correctIndex": 1
  },
  {
    "id": 457,
    "chapter": 8,
    "reference": "8:5",
    "question": "What came from the west while Daniel considered the ram? (Daniel 8:5)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Another ram",
      "A male goat with a notable horn between its eyes",
      "A flying eagle",
      "A great fish"
    ],
    "correctIndex": 1
  },
  {
    "id": 458,
    "chapter": 8,
    "reference": "8:5",
    "question": "How did the goat travel? (Daniel 8:5)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Slowly walking",
      "It touched not the ground (moved swiftly)",
      "By swimming",
      "It did not move"
    ],
    "correctIndex": 1
  },
  {
    "id": 459,
    "chapter": 8,
    "reference": "8:6",
    "question": "Toward whom did the goat run furiously? (Daniel 8:6)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Toward Babylon",
      "Toward the ram with the two horns",
      "Toward the lion",
      "Toward Jerusalem"
    ],
    "correctIndex": 1
  },
  {
    "id": 460,
    "chapter": 8,
    "reference": "8:6",
    "question": "Where had Daniel seen the ram standing? (Daniel 8:6)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "In a field",
      "Before the river",
      "On a mountain",
      "In a temple"
    ],
    "correctIndex": 1
  },
  {
    "id": 461,
    "chapter": 8,
    "reference": "8:7",
    "question": "What happened when the goat reached the ram? (Daniel 8:7)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "They became friends",
      "The goat attacked, broke the ram's two horns, and cast it to the ground",
      "The ram defeated the goat",
      "Nothing happened"
    ],
    "correctIndex": 1
  },
  {
    "id": 462,
    "chapter": 8,
    "reference": "8:7",
    "question": "Could the ram withstand the goat? (Daniel 8:7)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Yes, easily",
      "No power was left to withstand him",
      "It fled successfully",
      "It was never challenged"
    ],
    "correctIndex": 1
  },
  {
    "id": 463,
    "chapter": 8,
    "reference": "8:8",
    "question": "What happened to the goat after it became great? (Daniel 8:8)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "It remained the same",
      "Its great horn was broken, and four notable horns came up in its place",
      "It turned into a ram",
      "It vanished"
    ],
    "correctIndex": 1
  },
  {
    "id": 464,
    "chapter": 8,
    "reference": "8:8",
    "question": "In what directions did the four horns grow? (Daniel 8:8)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Only upward",
      "Toward the four winds of heaven",
      "Underground",
      "Only eastward"
    ],
    "correctIndex": 1
  },
  {
    "id": 465,
    "chapter": 8,
    "reference": "8:9",
    "question": "From one of the horns, what came forth? (Daniel 8:9)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "A flood",
      "A little horn which grew exceedingly great",
      "Another goat",
      "A river"
    ],
    "correctIndex": 1
  },
  {
    "id": 466,
    "chapter": 8,
    "reference": "8:9",
    "question": "Toward which lands did this little horn grow great? (Daniel 8:9)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "North and west",
      "South, east, and toward the Glorious Land (Israel)",
      "Only north",
      "Only Babylon"
    ],
    "correctIndex": 1
  },
  {
    "id": 467,
    "chapter": 8,
    "reference": "8:10",
    "question": "How great did the little horn grow? (Daniel 8:10)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "It stayed small",
      "It grew up to the host of heaven",
      "It shrank",
      "It became invisible"
    ],
    "correctIndex": 1
  },
  {
    "id": 468,
    "chapter": 8,
    "reference": "8:10",
    "question": "What did it cast down and trample? (Daniel 8:10)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Mountains",
      "Some of the host and stars, trampling them",
      "Rivers",
      "Cities"
    ],
    "correctIndex": 1
  },
  {
    "id": 469,
    "chapter": 8,
    "reference": "8:11",
    "question": "Against whom did the little horn magnify itself? (Daniel 8:11)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "The king of Babylon",
      "The Prince of the host (the Commander of the army, i.e. God)",
      "The angel Gabriel",
      "The ram"
    ],
    "correctIndex": 1
  },
  {
    "id": 470,
    "chapter": 8,
    "reference": "8:11",
    "question": "What was taken away because of it? (Daniel 8:11)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The temple treasures",
      "The daily sacrifice",
      "The king's crown",
      "The written law"
    ],
    "correctIndex": 1
  },
  {
    "id": 471,
    "chapter": 8,
    "reference": "8:12",
    "question": "What was given to the horn along with the daily sacrifices being taken away? (Daniel 8:12)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "A new temple",
      "A host (army) was given to it because of transgression",
      "A new ram",
      "Peace"
    ],
    "correctIndex": 1
  },
  {
    "id": 472,
    "chapter": 8,
    "reference": "8:12",
    "question": "What did the horn do to truth? (Daniel 8:12)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Cast truth down to the ground"
  },
  {
    "id": 473,
    "chapter": 8,
    "reference": "8:13",
    "question": "Who did Daniel hear speaking? (Daniel 8:13)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Two angels (holy ones)",
      "A certain saint speaking, and another saint asking him a question",
      "Only God",
      "The ram"
    ],
    "correctIndex": 1
  },
  {
    "id": 474,
    "chapter": 8,
    "reference": "8:13",
    "question": "What question was asked? (Daniel 8:13)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "How long the ram would live",
      "How long the vision concerning the daily sacrifice, transgression, and desolation would be",
      "Where Daniel was from",
      "What the goat's name was"
    ],
    "correctIndex": 1
  },
  {
    "id": 475,
    "chapter": 8,
    "reference": "8:14",
    "question": "What was the answer given regarding the timeframe? (Daniel 8:14)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Seventy years",
      "Two thousand three hundred days",
      "Forty days",
      "Seven years"
    ],
    "correctIndex": 1
  },
  {
    "id": 476,
    "chapter": 8,
    "reference": "8:14",
    "question": "What would happen after that time? (Daniel 8:14)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "The sanctuary would be cleansed (restored)"
  },
  {
    "id": 477,
    "chapter": 8,
    "reference": "8:15",
    "question": "What did Daniel do after seeing the vision? (Daniel 8:15)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Celebrated",
      "Sought to understand it, and a man's appearance stood before him",
      "Fell asleep",
      "Left immediately"
    ],
    "correctIndex": 1
  },
  {
    "id": 478,
    "chapter": 8,
    "reference": "8:15",
    "question": "Who appeared before Daniel? (Daniel 8:15)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "A beast",
      "One having the appearance of a man",
      "A ram",
      "An empty void"
    ],
    "correctIndex": 1
  },
  {
    "id": 479,
    "chapter": 8,
    "reference": "8:16",
    "question": "Whose voice did Daniel hear between the banks of the Ulai? (Daniel 8:16)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "An unknown voice",
      "A man's voice that called and said, \"Gabriel, make this man understand\"",
      "The king's voice",
      "An animal's voice"
    ],
    "correctIndex": 1
  },
  {
    "id": 480,
    "chapter": 8,
    "reference": "8:16",
    "question": "Who was commanded to explain the vision? (Daniel 8:16)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Michael",
      "Gabriel",
      "Lucifer",
      "An unnamed angel"
    ],
    "correctIndex": 1
  },
  {
    "id": 481,
    "chapter": 8,
    "reference": "8:17",
    "question": "How did Daniel react when Gabriel approached? (Daniel 8:17)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "He laughed",
      "He was afraid and fell on his face",
      "He ran away",
      "He bowed in greeting"
    ],
    "correctIndex": 1
  },
  {
    "id": 482,
    "chapter": 8,
    "reference": "8:17",
    "question": "What did Gabriel say the vision referred to? (Daniel 8:17)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The present time",
      "The time of the end",
      "The distant past",
      "Babylon's fall only"
    ],
    "correctIndex": 1
  },
  {
    "id": 483,
    "chapter": 8,
    "reference": "8:18",
    "question": "What happened to Daniel while Gabriel spoke? (Daniel 8:18)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He stood firm",
      "He fell into a deep sleep with his face to the ground",
      "He spoke back",
      "He wrote it down"
    ],
    "correctIndex": 1
  },
  {
    "id": 484,
    "chapter": 8,
    "reference": "8:18",
    "question": "What did Gabriel do to Daniel? (Daniel 8:18)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Left him there",
      "Touched him and set him upright",
      "Struck him",
      "Ignored him"
    ],
    "correctIndex": 1
  },
  {
    "id": 485,
    "chapter": 8,
    "reference": "8:19",
    "question": "What did Gabriel say he would make known to Daniel? (Daniel 8:19)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The history of Babylon",
      "What shall happen in the latter time of the indignation; the end shall be at the appointed time",
      "The genealogy of kings",
      "Only the meaning of the ram"
    ],
    "correctIndex": 1
  },
  {
    "id": 486,
    "chapter": 8,
    "reference": "8:19",
    "question": "What specific period did Gabriel reference? (Daniel 8:19)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "The latter time of the indignation"
  },
  {
    "id": 487,
    "chapter": 8,
    "reference": "8:20",
    "question": "What did the ram with two horns represent? (Daniel 8:20)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Babylon and Egypt",
      "The kings of Media and Persia",
      "Greece and Rome",
      "Assyria and Egypt"
    ],
    "correctIndex": 1
  },
  {
    "id": 488,
    "chapter": 8,
    "reference": "8:20",
    "question": "How many horns did this ram have, matching the kingdoms? (Daniel 8:20)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "One",
      "Two",
      "Four",
      "Ten"
    ],
    "correctIndex": 1
  },
  {
    "id": 489,
    "chapter": 8,
    "reference": "8:21",
    "question": "What did the male goat represent? (Daniel 8:21)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "The king of Babylon",
      "The kingdom of Greece",
      "The kingdom of Egypt",
      "The Medes"
    ],
    "correctIndex": 1
  },
  {
    "id": 490,
    "chapter": 8,
    "reference": "8:21",
    "question": "What did the notable horn between the goat's eyes represent? (Daniel 8:21)",
    "difficulty": "hard",
    "type": "fillBlank",
    "answer": "The first king (of Greece)"
  },
  {
    "id": 491,
    "chapter": 8,
    "reference": "8:22",
    "question": "What did the broken horn and the four that rose up represent? (Daniel 8:22)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Four prophets",
      "Four kingdoms arising from that nation, but not with its former power",
      "Four angels",
      "Four false gods"
    ],
    "correctIndex": 1
  },
  {
    "id": 492,
    "chapter": 8,
    "reference": "8:22",
    "question": "Would these four kingdoms have the same power as the first? (Daniel 8:22)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Yes, identical",
      "No, not with its power",
      "Greater power",
      "No power at all"
    ],
    "correctIndex": 1
  },
  {
    "id": 493,
    "chapter": 8,
    "reference": "8:23",
    "question": "When would a fierce king arise? (Daniel 8:23)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "At the beginning of the kingdoms",
      "In the latter time of their kingdom, when the transgressors have reached fullness",
      "Immediately after the ram",
      "Before the goat appeared"
    ],
    "correctIndex": 1
  },
  {
    "id": 494,
    "chapter": 8,
    "reference": "8:23",
    "question": "How is this king described? (Daniel 8:23)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Gentle and just",
      "Fierce, understanding sinister schemes",
      "Weak and foolish",
      "A peacemaker"
    ],
    "correctIndex": 1
  },
  {
    "id": 495,
    "chapter": 8,
    "reference": "8:24",
    "question": "How great would this king's power become, though not by his own power? (Daniel 8:24)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Weak and short-lived",
      "Mighty, and he shall destroy fearfully, prospering and thriving",
      "Equal only to the goat",
      "Limited to his own land"
    ],
    "correctIndex": 1
  },
  {
    "id": 496,
    "chapter": 8,
    "reference": "8:24",
    "question": "Whom would he destroy? (Daniel 8:24)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Only foreign armies",
      "The mighty, and also the holy people",
      "Only himself",
      "No one"
    ],
    "correctIndex": 1
  },
  {
    "id": 497,
    "chapter": 8,
    "reference": "8:25",
    "question": "Through what means would he cause craft to prosper? (Daniel 8:25)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Open warfare only",
      "Through his cunning/policy, and by peace he shall destroy many",
      "Bribery alone",
      "Famine"
    ],
    "correctIndex": 1
  },
  {
    "id": 498,
    "chapter": 8,
    "reference": "8:25",
    "question": "Against whom would he rise up, and how would he ultimately fall? (Daniel 8:25)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Against the goat; he would flee",
      "Against the Prince of princes; he shall be broken without human hand",
      "Against the ram; he would surrender",
      "Against Gabriel; he would repent"
    ],
    "correctIndex": 1
  },
  {
    "id": 499,
    "chapter": 8,
    "reference": "8:26",
    "question": "What was Daniel told to do with the vision? (Daniel 8:26)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Reveal it immediately",
      "Seal up the vision, for it refers to many days in the future",
      "Destroy it",
      "Give it to the king"
    ],
    "correctIndex": 1
  },
  {
    "id": 500,
    "chapter": 8,
    "reference": "8:26",
    "question": "How far off was this vision's fulfillment? (Daniel 8:26)",
    "difficulty": "medium",
    "type": "fillBlank",
    "answer": "Many days in the future"
  },
  {
    "id": 501,
    "chapter": 8,
    "reference": "8:27",
    "question": "How did Daniel feel after the vision? (Daniel 8:27)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Joyful and refreshed",
      "Fainted and was sick for days",
      "Indifferent",
      "Angry"
    ],
    "correctIndex": 1
  },
  {
    "id": 502,
    "chapter": 8,
    "reference": "8:27",
    "question": "What did Daniel do afterward regarding the vision? (Daniel 8:27)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Told the king everything",
      "Got up and continued the king's business, but was astonished by the vision with no one to explain it",
      "Forgot it completely",
      "Wrote a public letter about it"
    ],
    "correctIndex": 1
  },
  {
    "id": 503,
    "chapter": 9,
    "reference": "9:1",
    "question": "In the first year of whose reign does this chapter open? (Daniel 9:1)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Belshazzar",
      "Darius the son of Ahasuerus, of the lineage of the Medes",
      "Cyrus",
      "Nebuchadnezzar"
    ],
    "correctIndex": 1
  },
  {
    "id": 504,
    "chapter": 9,
    "reference": "9:1",
    "question": "Over what was Darius made king? (Daniel 9:1)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Egypt",
      "The realm of the Chaldeans",
      "Greece",
      "Israel only"
    ],
    "correctIndex": 1
  },
  {
    "id": 505,
    "chapter": 9,
    "reference": "9:2",
    "question": "What did Daniel understand from the books? (Daniel 9:2)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The age of the universe",
      "The number of years for Jerusalem's desolation — seventy years",
      "The names of all kings",
      "The location of the temple"
    ],
    "correctIndex": 1
  },
  {
    "id": 506,
    "chapter": 9,
    "reference": "9:2",
    "question": "Whose words/prophecy did Daniel reference? (Daniel 9:2)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Isaiah",
      "Jeremiah the prophet",
      "Ezekiel",
      "Moses"
    ],
    "correctIndex": 1
  },
  {
    "id": 507,
    "chapter": 9,
    "reference": "9:3",
    "question": "How did Daniel set his face toward God? (Daniel 9:3)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Casually",
      "To seek Him by prayer and supplications, with fasting, sackcloth, and ashes",
      "With anger",
      "Without any preparation"
    ],
    "correctIndex": 1
  },
  {
    "id": 508,
    "chapter": 9,
    "reference": "9:3",
    "question": "What physical signs of mourning did Daniel use? (Daniel 9:3)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Sackcloth and ashes"
  },
  {
    "id": 509,
    "chapter": 9,
    "reference": "9:4",
    "question": "How does Daniel address God in his prayer? (Daniel 9:4)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "As a distant judge only",
      "\"O Lord, great and awesome God, who keeps His covenant and mercy\"",
      "As an unnamed spirit",
      "As a king of Babylon"
    ],
    "correctIndex": 1
  },
  {
    "id": 510,
    "chapter": 9,
    "reference": "9:4",
    "question": "To whom does God keep covenant and mercy according to Daniel? (Daniel 9:4)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "All nations equally",
      "Those who love Him and keep His commandments",
      "Only the kings",
      "Only the priests"
    ],
    "correctIndex": 1
  },
  {
    "id": 511,
    "chapter": 9,
    "reference": "9:5",
    "question": "What does Daniel confess on behalf of the people? (Daniel 9:5)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Innocence",
      "They have sinned, committed iniquity, done wickedly, and rebelled",
      "Only minor mistakes",
      "Nothing wrong"
    ],
    "correctIndex": 1
  },
  {
    "id": 512,
    "chapter": 9,
    "reference": "9:5",
    "question": "What did the people depart from? (Daniel 9:5)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Babylon",
      "God's precepts and judgments",
      "Their homes",
      "The temple only"
    ],
    "correctIndex": 1
  },
  {
    "id": 513,
    "chapter": 9,
    "reference": "9:6",
    "question": "Whom had the people failed to heed? (Daniel 9:6)",
    "difficulty": "medium",
    "type": "fillBlank",
    "answer": "God's servants the prophets"
  },
  {
    "id": 514,
    "chapter": 9,
    "reference": "9:6",
    "question": "To whom had the prophets spoken? (Daniel 9:6)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Only foreigners",
      "Kings, princes, fathers, and all the people of the land",
      "Only Daniel",
      "Only the priests"
    ],
    "correctIndex": 1
  },
  {
    "id": 515,
    "chapter": 9,
    "reference": "9:7",
    "question": "To whom does righteousness belong, according to Daniel? (Daniel 9:7)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "To God"
  },
  {
    "id": 516,
    "chapter": 9,
    "reference": "9:7",
    "question": "What belongs to the people, by contrast? (Daniel 9:7)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Glory",
      "Shame of face, because of their unfaithfulness",
      "Wealth",
      "Peace"
    ],
    "correctIndex": 1
  },
  {
    "id": 517,
    "chapter": 9,
    "reference": "9:8",
    "question": "Who else is said to share in this shame? (Daniel 9:8)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Only the common people",
      "Kings, princes, and fathers",
      "Foreign nations",
      "The angels"
    ],
    "correctIndex": 1
  },
  {
    "id": 518,
    "chapter": 9,
    "reference": "9:8",
    "question": "Why do they share in this shame? (Daniel 9:8)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "They are innocent",
      "Because they have sinned against God",
      "Because of famine",
      "Because of war only"
    ],
    "correctIndex": 1
  },
  {
    "id": 519,
    "chapter": 9,
    "reference": "9:9",
    "question": "What belongs to the Lord even amid the people's sin? (Daniel 9:9)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Mercy and forgiveness"
  },
  {
    "id": 520,
    "chapter": 9,
    "reference": "9:9",
    "question": "Against whom had the people rebelled? (Daniel 9:9)",
    "difficulty": "medium",
    "type": "fillBlank",
    "answer": "Against the Lord"
  },
  {
    "id": 521,
    "chapter": 9,
    "reference": "9:10",
    "question": "What had the people not done regarding God's voice? (Daniel 9:10)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Listened occasionally",
      "Not obeyed the voice of the Lord their God",
      "Obeyed fully",
      "Misunderstood it"
    ],
    "correctIndex": 1
  },
  {
    "id": 522,
    "chapter": 9,
    "reference": "9:10",
    "question": "What had God set before them through His servants? (Daniel 9:10)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Riches",
      "His laws",
      "New kings",
      "A new land"
    ],
    "correctIndex": 1
  },
  {
    "id": 523,
    "chapter": 9,
    "reference": "9:11",
    "question": "What had all Israel done concerning the law? (Daniel 9:11)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Kept it perfectly",
      "Transgressed it and departed, not obeying His voice",
      "Rewritten it",
      "Forgotten it existed"
    ],
    "correctIndex": 1
  },
  {
    "id": 524,
    "chapter": 9,
    "reference": "9:11",
    "question": "What therefore came upon them? (Daniel 9:11)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Blessing",
      "The curse and the oath written in the Law of Moses",
      "Wealth",
      "Nothing"
    ],
    "correctIndex": 1
  },
  {
    "id": 525,
    "chapter": 9,
    "reference": "9:12",
    "question": "What had God confirmed against them? (Daniel 9:12)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "A promise of peace",
      "His words spoken against them and their rulers",
      "A new covenant",
      "A blessing"
    ],
    "correctIndex": 1
  },
  {
    "id": 526,
    "chapter": 9,
    "reference": "9:12",
    "question": "What great calamity is mentioned as having come upon Jerusalem? (Daniel 9:12)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Famine alone",
      "A great calamity such as had not happened under the whole heaven",
      "A minor setback",
      "Prosperity"
    ],
    "correctIndex": 1
  },
  {
    "id": 527,
    "chapter": 9,
    "reference": "9:13",
    "question": "As written in the Law of Moses, what came upon them? (Daniel 9:13)",
    "difficulty": "medium",
    "type": "fillBlank",
    "answer": "All this calamity"
  },
  {
    "id": 528,
    "chapter": 9,
    "reference": "9:13",
    "question": "What had the people failed to do to receive God's favor? (Daniel 9:13)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Build a temple",
      "Turn from their iniquities and understand God's truth",
      "Pay tribute",
      "Move to a new land"
    ],
    "correctIndex": 1
  },
  {
    "id": 529,
    "chapter": 9,
    "reference": "9:14",
    "question": "Why did the Lord watch over them for calamity? (Daniel 9:14)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Randomly",
      "For the Lord our God is righteous in all His works",
      "Because He hated them",
      "By mistake"
    ],
    "correctIndex": 1
  },
  {
    "id": 530,
    "chapter": 9,
    "reference": "9:14",
    "question": "What had the people failed to do concerning God's voice? (Daniel 9:14)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Praised Him constantly",
      "Obeyed His voice",
      "Listened occasionally",
      "Ignored Him kindly"
    ],
    "correctIndex": 1
  },
  {
    "id": 531,
    "chapter": 9,
    "reference": "9:15",
    "question": "By what mighty act does Daniel recall God acted for His people? (Daniel 9:15)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Creation of the world",
      "Bringing the people out of Egypt with a mighty hand",
      "The flood",
      "The tower of Babel"
    ],
    "correctIndex": 1
  },
  {
    "id": 532,
    "chapter": 9,
    "reference": "9:15",
    "question": "What had the people and rulers done despite this deliverance? (Daniel 9:15)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Remained faithful",
      "Sinned and done wickedly",
      "Built a temple",
      "Conquered nations"
    ],
    "correctIndex": 1
  },
  {
    "id": 533,
    "chapter": 9,
    "reference": "9:16",
    "question": "What does Daniel ask God to turn away because of His righteousness? (Daniel 9:16)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Blessings",
      "His anger and fury from Jerusalem",
      "The prophets",
      "The law"
    ],
    "correctIndex": 1
  },
  {
    "id": 534,
    "chapter": 9,
    "reference": "9:16",
    "question": "What had made Jerusalem and God's people a reproach? (Daniel 9:16)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Foreign invasion only",
      "Their sins and the iniquities of their fathers",
      "Lack of rain",
      "Poor harvests"
    ],
    "correctIndex": 1
  },
  {
    "id": 535,
    "chapter": 9,
    "reference": "9:17",
    "question": "What does Daniel ask God to do regarding the desolate sanctuary? (Daniel 9:17)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Destroy it further",
      "Cause His face to shine upon it for the Lord's sake",
      "Ignore it",
      "Rebuild it Himself immediately without prayer"
    ],
    "correctIndex": 1
  },
  {
    "id": 536,
    "chapter": 9,
    "reference": "9:17",
    "question": "What does Daniel call himself in this plea? (Daniel 9:17)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "A king",
      "Your servant",
      "A prophet of equal rank to Moses",
      "A stranger"
    ],
    "correctIndex": 1
  },
  {
    "id": 537,
    "chapter": 9,
    "reference": "9:18",
    "question": "On what basis does Daniel say they present their pleas? (Daniel 9:18)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Their own righteousness",
      "God's great mercies, not their own righteous deeds",
      "Their wealth",
      "Their sacrifices"
    ],
    "correctIndex": 1
  },
  {
    "id": 538,
    "chapter": 9,
    "reference": "9:18",
    "question": "What does Daniel ask God to incline toward them? (Daniel 9:18)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "His ear, and to hear"
  },
  {
    "id": 539,
    "chapter": 9,
    "reference": "9:19",
    "question": "What threefold plea does Daniel make to the Lord? (Daniel 9:19)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "\"Hear, see, and remember\"",
      "\"O Lord, hear! O Lord, forgive! O Lord, listen and act!\"",
      "\"Bless, save, and crown\"",
      "\"Judge, condemn, and destroy\""
    ],
    "correctIndex": 1
  },
  {
    "id": 540,
    "chapter": 9,
    "reference": "9:19",
    "question": "For whose sake does Daniel ask God not to delay? (Daniel 9:19)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Daniel's own sake",
      "God's own sake, for the city and people bear His name",
      "The king of Babylon's sake",
      "No particular reason given"
    ],
    "correctIndex": 1
  },
  {
    "id": 541,
    "chapter": 9,
    "reference": "9:20",
    "question": "What was Daniel doing as he spoke and prayed? (Daniel 9:20)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Sleeping",
      "Confessing his sin and the sin of his people Israel",
      "Singing",
      "Fighting"
    ],
    "correctIndex": 1
  },
  {
    "id": 542,
    "chapter": 9,
    "reference": "9:20",
    "question": "Concerning what was Daniel presenting his plea? (Daniel 9:20)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "His personal wealth",
      "The holy mountain of his God",
      "A foreign land",
      "His own future"
    ],
    "correctIndex": 1
  },
  {
    "id": 543,
    "chapter": 9,
    "reference": "9:21",
    "question": "Who came to Daniel while he was speaking in prayer? (Daniel 9:21)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Michael",
      "Gabriel, the man he had seen before in the vision",
      "An unnamed prophet",
      "The king"
    ],
    "correctIndex": 1
  },
  {
    "id": 544,
    "chapter": 9,
    "reference": "9:21",
    "question": "At what time did Gabriel reach Daniel? (Daniel 9:21)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "At midnight",
      "About the time of the evening offering",
      "At dawn",
      "At noon"
    ],
    "correctIndex": 1
  },
  {
    "id": 545,
    "chapter": 9,
    "reference": "9:22",
    "question": "What did Gabriel say he came to give Daniel? (Daniel 9:22)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Wealth",
      "Skill to understand",
      "A new vision only",
      "A scroll to seal"
    ],
    "correctIndex": 1
  },
  {
    "id": 546,
    "chapter": 9,
    "reference": "9:22",
    "question": "How did Gabriel inform Daniel of his task? (Daniel 9:22)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Silently",
      "He informed him and talked with him",
      "Through a dream only",
      "Through writing only"
    ],
    "correctIndex": 1
  },
  {
    "id": 547,
    "chapter": 9,
    "reference": "9:23",
    "question": "When did the command go out, according to Gabriel? (Daniel 9:23)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "After Daniel finished praying",
      "At the beginning of Daniel's supplications",
      "A year before",
      "Never; it was unrelated"
    ],
    "correctIndex": 1
  },
  {
    "id": 548,
    "chapter": 9,
    "reference": "9:23",
    "question": "Why did Gabriel come to Daniel? (Daniel 9:23)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Because of his wealth",
      "Because Daniel is greatly beloved; to give him understanding",
      "Because Daniel sinned greatly",
      "Randomly"
    ],
    "correctIndex": 1
  },
  {
    "id": 549,
    "chapter": 9,
    "reference": "9:24",
    "question": "How many weeks (sevens) are determined for Daniel's people and his holy city? (Daniel 9:24)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Seven weeks",
      "Seventy weeks",
      "Seventeen weeks",
      "Seven hundred weeks"
    ],
    "correctIndex": 1
  },
  {
    "id": 550,
    "chapter": 9,
    "reference": "9:24",
    "question": "What purposes are these seventy weeks to accomplish? (Daniel 9:24)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Only to rebuild the temple",
      "To finish the transgression, end sin, make atonement, bring everlasting righteousness, seal up vision/prophecy, and anoint the Most Holy",
      "To crown a new king",
      "To destroy Jerusalem permanently"
    ],
    "correctIndex": 1
  },
  {
    "id": 551,
    "chapter": 9,
    "reference": "9:25",
    "question": "From the going forth of the command to restore Jerusalem until Messiah, how many weeks are mentioned? (Daniel 9:25)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Seven weeks only",
      "Seven weeks and sixty-two weeks",
      "Seventy weeks only",
      "Ten weeks"
    ],
    "correctIndex": 1
  },
  {
    "id": 552,
    "chapter": 9,
    "reference": "9:25",
    "question": "In what condition would Jerusalem be rebuilt? (Daniel 9:25)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "In peace and ease",
      "In troublesome times, with street and wall built again",
      "Without any opposition",
      "Instantly"
    ],
    "correctIndex": 1
  },
  {
    "id": 553,
    "chapter": 9,
    "reference": "9:26",
    "question": "What would happen to the Messiah after the sixty-two weeks? (Daniel 9:26)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He would be crowned king",
      "He would be cut off, but not for Himself",
      "He would rule forever immediately",
      "He would flee"
    ],
    "correctIndex": 1
  },
  {
    "id": 554,
    "chapter": 9,
    "reference": "9:26",
    "question": "What would happen to the city and the sanctuary? (Daniel 9:26)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "They would be blessed forever",
      "The people of the prince who is to come would destroy them",
      "Nothing would happen",
      "They would be rebuilt fully and last forever"
    ],
    "correctIndex": 1
  },
  {
    "id": 555,
    "chapter": 9,
    "reference": "9:27",
    "question": "What would this prince confirm for one week? (Daniel 9:27)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "War",
      "A covenant with many",
      "A temple tax",
      "A new law code"
    ],
    "correctIndex": 1
  },
  {
    "id": 556,
    "chapter": 9,
    "reference": "9:27",
    "question": "What would happen in the middle of the week? (Daniel 9:27)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The covenant would be strengthened",
      "He would bring an end to sacrifice and offering",
      "Peace would be restored fully",
      "Nothing significant"
    ],
    "correctIndex": 1
  },
  {
    "id": 557,
    "chapter": 10,
    "reference": "10:1",
    "question": "In which king's reign was the message revealed to Daniel in chapter 10? (Daniel 10:1)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Belshazzar",
      "Cyrus, king of Persia",
      "Darius",
      "Nebuchadnezzar"
    ],
    "correctIndex": 1
  },
  {
    "id": 558,
    "chapter": 10,
    "reference": "10:1",
    "question": "By what other name is Daniel called in this verse? (Daniel 10:1)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Shadrach",
      "Belteshazzar",
      "Mishael",
      "Abednego"
    ],
    "correctIndex": 1
  },
  {
    "id": 559,
    "chapter": 10,
    "reference": "10:2",
    "question": "How long was Daniel in mourning? (Daniel 10:2)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "One day",
      "Three full weeks",
      "Seventy days",
      "One year"
    ],
    "correctIndex": 1
  },
  {
    "id": 560,
    "chapter": 10,
    "reference": "10:2",
    "question": "What was Daniel doing during this time? (Daniel 10:2)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Feasting",
      "Mourning",
      "Traveling",
      "Ruling"
    ],
    "correctIndex": 1
  },
  {
    "id": 561,
    "chapter": 10,
    "reference": "10:3",
    "question": "What did Daniel abstain from eating? (Daniel 10:3)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Only bread",
      "Pleasant/choice food, meat, and wine",
      "Only water",
      "Nothing in particular"
    ],
    "correctIndex": 1
  },
  {
    "id": 562,
    "chapter": 10,
    "reference": "10:3",
    "question": "Did Daniel anoint himself during this period? (Daniel 10:3)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Yes, daily",
      "No, not at all till three weeks were fulfilled",
      "Only once",
      "Only on the Sabbath"
    ],
    "correctIndex": 1
  },
  {
    "id": 563,
    "chapter": 10,
    "reference": "10:4",
    "question": "On what day of the month did Daniel receive this vision? (Daniel 10:4)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "First day",
      "Twenty-fourth day of the first month",
      "Last day of the year",
      "Fifteenth day"
    ],
    "correctIndex": 1
  },
  {
    "id": 564,
    "chapter": 10,
    "reference": "10:4",
    "question": "Where was Daniel standing when he saw the vision? (Daniel 10:4)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "In Jerusalem",
      "By the great river Hiddekel (Tigris)",
      "In Babylon's palace",
      "On a mountain"
    ],
    "correctIndex": 1
  },
  {
    "id": 565,
    "chapter": 10,
    "reference": "10:5",
    "question": "What did Daniel see when he lifted his eyes? (Daniel 10:5)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "An angel of light",
      "A certain man clothed in linen, with a belt of fine gold",
      "A burning bush",
      "A lion"
    ],
    "correctIndex": 1
  },
  {
    "id": 566,
    "chapter": 10,
    "reference": "10:5",
    "question": "What material was the man's belt made of? (Daniel 10:5)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Fine gold of Uphaz"
  },
  {
    "id": 567,
    "chapter": 10,
    "reference": "10:6",
    "question": "What was this man's body like? (Daniel 10:6)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Wood",
      "Beryl",
      "Clay",
      "Stone"
    ],
    "correctIndex": 1
  },
  {
    "id": 568,
    "chapter": 10,
    "reference": "10:6",
    "question": "What were his eyes compared to? (Daniel 10:6)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Stars",
      "Torches of fire",
      "Water",
      "Glass"
    ],
    "correctIndex": 1
  },
  {
    "id": 569,
    "chapter": 10,
    "reference": "10:7",
    "question": "Who alone among those present saw the vision? (Daniel 10:7)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Everyone equally",
      "Daniel alone; the men with him did not see it",
      "Only the king",
      "No one saw it"
    ],
    "correctIndex": 1
  },
  {
    "id": 570,
    "chapter": 10,
    "reference": "10:7",
    "question": "What happened to the men who were with Daniel? (Daniel 10:7)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "They saw it too and rejoiced",
      "A great trembling fell on them and they fled to hide",
      "They fainted instantly",
      "They left calmly"
    ],
    "correctIndex": 1
  },
  {
    "id": 571,
    "chapter": 10,
    "reference": "10:8",
    "question": "What happened to Daniel's appearance after this vision? (Daniel 10:8)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "It brightened",
      "It was changed (turned pale/ghastly), and he retained no strength",
      "It remained unchanged",
      "He grew stronger"
    ],
    "correctIndex": 1
  },
  {
    "id": 572,
    "chapter": 10,
    "reference": "10:8",
    "question": "What state was Daniel left alone in? (Daniel 10:8)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Joyful",
      "Without strength, having seen this great vision",
      "Sleeping peacefully",
      "Angry"
    ],
    "correctIndex": 1
  },
  {
    "id": 573,
    "chapter": 10,
    "reference": "10:9",
    "question": "What did Daniel do upon hearing the voice of the man's words? (Daniel 10:9)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Spoke boldly",
      "Fell into a deep sleep on his face, toward the ground",
      "Ran away",
      "Sang praises"
    ],
    "correctIndex": 1
  },
  {
    "id": 574,
    "chapter": 10,
    "reference": "10:9",
    "question": "In what position was Daniel when he fell asleep? (Daniel 10:9)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Standing",
      "On his face, with his face toward the ground",
      "Sitting",
      "Kneeling upright"
    ],
    "correctIndex": 1
  },
  {
    "id": 575,
    "chapter": 10,
    "reference": "10:10",
    "question": "What touched Daniel and caused him to be set trembling on his hands and knees? (Daniel 10:10)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "A hand"
  },
  {
    "id": 576,
    "chapter": 10,
    "reference": "10:10",
    "question": "To what position did the hand raise Daniel? (Daniel 10:10)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Fully standing",
      "Upon his knees and the palms of his hands",
      "Flat on the ground still",
      "Sitting in a chair"
    ],
    "correctIndex": 1
  },
  {
    "id": 577,
    "chapter": 10,
    "reference": "10:11",
    "question": "What did the man call Daniel? (Daniel 10:11)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Servant",
      "O Daniel, man greatly beloved",
      "Sinner",
      "Stranger"
    ],
    "correctIndex": 1
  },
  {
    "id": 578,
    "chapter": 10,
    "reference": "10:11",
    "question": "What did the man tell Daniel to do with the words he was about to speak? (Daniel 10:11)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Forget them",
      "Understand the words and stand upright, for he was sent to Daniel",
      "Write them in secret",
      "Repeat them to the king"
    ],
    "correctIndex": 1
  },
  {
    "id": 579,
    "chapter": 10,
    "reference": "10:12",
    "question": "From what day had Daniel's words been heard? (Daniel 10:12)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "The day he was born",
      "The first day Daniel set his heart to understand and humble himself before God",
      "Only the final day of fasting",
      "Never"
    ],
    "correctIndex": 1
  },
  {
    "id": 580,
    "chapter": 10,
    "reference": "10:12",
    "question": "Why had the messenger come? (Daniel 10:12)",
    "difficulty": "medium",
    "type": "fillBlank",
    "answer": "Because of Daniel's words"
  },
  {
    "id": 581,
    "chapter": 10,
    "reference": "10:13",
    "question": "Who withstood the messenger for twenty-one days? (Daniel 10:13)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Gabriel",
      "The prince of the kingdom of Persia",
      "Daniel",
      "The king of Babylon"
    ],
    "correctIndex": 1
  },
  {
    "id": 582,
    "chapter": 10,
    "reference": "10:13",
    "question": "Who came to help the messenger? (Daniel 10:13)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Lucifer",
      "Michael, one of the chief princes",
      "An unnamed servant",
      "No one"
    ],
    "correctIndex": 1
  },
  {
    "id": 583,
    "chapter": 10,
    "reference": "10:14",
    "question": "Why had the messenger come to Daniel? (Daniel 10:14)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "To punish him",
      "To make him understand what would happen to his people in the latter days",
      "To take him to heaven",
      "To give him riches"
    ],
    "correctIndex": 1
  },
  {
    "id": 584,
    "chapter": 10,
    "reference": "10:14",
    "question": "What does the vision concern, in terms of timing? (Daniel 10:14)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Many days yet to come"
  },
  {
    "id": 585,
    "chapter": 10,
    "reference": "10:15",
    "question": "How did Daniel react while the man spoke to him? (Daniel 10:15)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "He spoke confidently",
      "He set his face toward the ground and became speechless",
      "He laughed",
      "He argued"
    ],
    "correctIndex": 1
  },
  {
    "id": 586,
    "chapter": 10,
    "reference": "10:15",
    "question": "What ability did Daniel lose? (Daniel 10:15)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Speech"
  },
  {
    "id": 587,
    "chapter": 10,
    "reference": "10:16",
    "question": "Who touched Daniel's lips? (Daniel 10:16)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Michael",
      "One who resembled the sons of men",
      "The king",
      "No one"
    ],
    "correctIndex": 1
  },
  {
    "id": 588,
    "chapter": 10,
    "reference": "10:16",
    "question": "What did Daniel say happened to him because of the vision? (Daniel 10:16)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He felt joy",
      "Sorrows/pains had overtaken him, and he retained no strength",
      "Nothing changed",
      "He felt great strength"
    ],
    "correctIndex": 1
  },
  {
    "id": 589,
    "chapter": 10,
    "reference": "10:17",
    "question": "How does Daniel describe himself before this great being? (Daniel 10:17)",
    "difficulty": "medium",
    "type": "fillBlank",
    "answer": "A lowly servant of his lord"
  },
  {
    "id": 590,
    "chapter": 10,
    "reference": "10:17",
    "question": "What two things does Daniel say he has no strength/breath to do? (Daniel 10:17)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Eat and drink",
      "Speak with his lord, and even to breathe",
      "Walk and run",
      "Sing and dance"
    ],
    "correctIndex": 1
  },
  {
    "id": 591,
    "chapter": 10,
    "reference": "10:18",
    "question": "Who touched Daniel again? (Daniel 10:18)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Michael",
      "The one with the appearance of a man",
      "An unnamed prince",
      "The king"
    ],
    "correctIndex": 1
  },
  {
    "id": 592,
    "chapter": 10,
    "reference": "10:18",
    "question": "What did this touch do for Daniel? (Daniel 10:18)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Harmed him",
      "Strengthened him",
      "Put him to sleep again",
      "Blinded him"
    ],
    "correctIndex": 1
  },
  {
    "id": 593,
    "chapter": 10,
    "reference": "10:19",
    "question": "What did the messenger call Daniel as he strengthened him? (Daniel 10:19)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Sinner",
      "O man greatly beloved",
      "Stranger",
      "Servant of the king"
    ],
    "correctIndex": 1
  },
  {
    "id": 594,
    "chapter": 10,
    "reference": "10:19",
    "question": "What did the messenger tell Daniel to do? (Daniel 10:19)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Be afraid",
      "Fear not; peace be to you, be strong, yes, be strong!",
      "Leave immediately",
      "Stay silent forever"
    ],
    "correctIndex": 1
  },
  {
    "id": 595,
    "chapter": 10,
    "reference": "10:20",
    "question": "Where did the messenger say he must return to fight? (Daniel 10:20)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Babylon",
      "Against the prince of Persia, then the prince of Greece would come",
      "Egypt",
      "Rome"
    ],
    "correctIndex": 1
  },
  {
    "id": 596,
    "chapter": 10,
    "reference": "10:20",
    "question": "After Persia, against whom would the messenger contend? (Daniel 10:20)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Babylon",
      "The prince of Greece",
      "Rome",
      "Media"
    ],
    "correctIndex": 1
  },
  {
    "id": 597,
    "chapter": 10,
    "reference": "10:21",
    "question": "What did the messenger come to show Daniel? (Daniel 10:21)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Nothing of value",
      "What is noted in the Scripture of Truth",
      "A new law",
      "The future of Babylon only"
    ],
    "correctIndex": 1
  },
  {
    "id": 598,
    "chapter": 10,
    "reference": "10:21",
    "question": "Who alone stood with the messenger against these princes? (Daniel 10:21)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "No one",
      "Michael, your prince",
      "Gabriel only",
      "Daniel himself"
    ],
    "correctIndex": 1
  },
  {
    "id": 599,
    "chapter": 11,
    "reference": "11:1",
    "question": "In whose first year did the speaker say he stood up to confirm and strengthen Daniel? (Daniel 11:1)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Cyrus",
      "Darius the Mede",
      "Belshazzar",
      "Artaxerxes"
    ],
    "correctIndex": 1
  },
  {
    "id": 600,
    "chapter": 11,
    "reference": "11:1",
    "question": "What did the messenger do for Daniel in that year? (Daniel 11:1)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Punished him",
      "Stood up to confirm and strengthen him",
      "Ignored him",
      "Sent him away"
    ],
    "correctIndex": 1
  },
  {
    "id": 601,
    "chapter": 11,
    "reference": "11:2",
    "question": "How many more kings would arise in Persia, according to the messenger? (Daniel 11:2)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "One",
      "Three, then a fourth far richer than them all",
      "Seven",
      "Ten"
    ],
    "correctIndex": 1
  },
  {
    "id": 602,
    "chapter": 11,
    "reference": "11:2",
    "question": "What would the fourth, richest king do? (Daniel 11:2)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Make peace forever",
      "Stir up everyone against the realm of Greece",
      "Surrender his throne",
      "Build a temple"
    ],
    "correctIndex": 1
  },
  {
    "id": 603,
    "chapter": 11,
    "reference": "11:3",
    "question": "What kind of king would arise after this? (Daniel 11:3)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "A weak king",
      "A mighty king who shall rule with great dominion and do according to his will",
      "A foreign servant",
      "A peaceful farmer"
    ],
    "correctIndex": 1
  },
  {
    "id": 604,
    "chapter": 11,
    "reference": "11:3",
    "question": "What is emphasized about this king's rule? (Daniel 11:3)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Limited and brief",
      "Great dominion, doing according to his own will",
      "Shared rule with others",
      "Subject to Persia"
    ],
    "correctIndex": 1
  },
  {
    "id": 605,
    "chapter": 11,
    "reference": "11:4",
    "question": "What would happen to this mighty king's kingdom when he arose? (Daniel 11:4)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "It would last forever intact",
      "It would be divided and broken up, not given to his posterity",
      "It would be given entirely to his son",
      "It would merge with Persia"
    ],
    "correctIndex": 1
  },
  {
    "id": 606,
    "chapter": 11,
    "reference": "11:4",
    "question": "To whom would the kingdom be divided? (Daniel 11:4)",
    "difficulty": "medium",
    "type": "fillBlank",
    "answer": "Others besides his own descendants"
  },
  {
    "id": 607,
    "chapter": 11,
    "reference": "11:5",
    "question": "Who is described as becoming strong, along with one of his princes? (Daniel 11:5)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The king of the North",
      "The king of the South",
      "The king of Persia",
      "The king of Babylon"
    ],
    "correctIndex": 1
  },
  {
    "id": 608,
    "chapter": 11,
    "reference": "11:5",
    "question": "What would this prince do regarding his own dominion? (Daniel 11:5)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Lose everything",
      "Gain power over a dominion with great authority",
      "Surrender to the South",
      "Flee to Egypt"
    ],
    "correctIndex": 1
  },
  {
    "id": 609,
    "chapter": 11,
    "reference": "11:6",
    "question": "What alliance is described after some years? (Daniel 11:6)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "A war alliance",
      "The daughter of the king of the South would come to the king of the North to make an agreement",
      "A trade deal only",
      "No alliance at all"
    ],
    "correctIndex": 1
  },
  {
    "id": 610,
    "chapter": 11,
    "reference": "11:6",
    "question": "What would happen to her, her offspring, and those who supported her? (Daniel 11:6)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "They would prosper forever",
      "They would be given up/abandoned, along with those who brought her and supported her",
      "They would rule together",
      "Nothing happens"
    ],
    "correctIndex": 1
  },
  {
    "id": 611,
    "chapter": 11,
    "reference": "11:7",
    "question": "Who would arise from her family line in his father's place? (Daniel 11:7)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "A weak ruler",
      "One who would come with an army and enter the fortress of the king of the North",
      "A peaceful trader",
      "No one"
    ],
    "correctIndex": 1
  },
  {
    "id": 612,
    "chapter": 11,
    "reference": "11:7",
    "question": "What would he do once he entered? (Daniel 11:7)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Surrender",
      "Deal against them and prevail",
      "Flee immediately",
      "Make permanent peace"
    ],
    "correctIndex": 1
  },
  {
    "id": 613,
    "chapter": 11,
    "reference": "11:8",
    "question": "What would he carry off to Egypt? (Daniel 11:8)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Nothing valuable",
      "Their gods, princes, and precious articles of silver and gold",
      "Only food",
      "Only weapons"
    ],
    "correctIndex": 1
  },
  {
    "id": 614,
    "chapter": 11,
    "reference": "11:8",
    "question": "For how long would he refrain from the king of the North? (Daniel 11:8)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Forever",
      "More years than the king of the North",
      "Only one day",
      "He would never refrain"
    ],
    "correctIndex": 1
  },
  {
    "id": 615,
    "chapter": 11,
    "reference": "11:9",
    "question": "What would the king of the North do in response? (Daniel 11:9)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Surrender his kingdom",
      "Come into the realm of the king of the South but return to his own land",
      "Conquer permanently",
      "Make a lasting peace treaty"
    ],
    "correctIndex": 1
  },
  {
    "id": 616,
    "chapter": 11,
    "reference": "11:9",
    "question": "Where would he ultimately return? (Daniel 11:9)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Stay in the South forever",
      "His own land",
      "Persia",
      "Greece"
    ],
    "correctIndex": 1
  },
  {
    "id": 617,
    "chapter": 11,
    "reference": "11:10",
    "question": "What would the king of the North's sons do? (Daniel 11:10)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Make peace",
      "Stir up strife and assemble a multitude of great forces",
      "Disband the army",
      "Flee the country"
    ],
    "correctIndex": 1
  },
  {
    "id": 618,
    "chapter": 11,
    "reference": "11:10",
    "question": "How far would one of them overwhelm and pass through? (Daniel 11:10)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Only to the border",
      "Even to his fortress",
      "Not at all",
      "Only to a nearby village"
    ],
    "correctIndex": 1
  },
  {
    "id": 619,
    "chapter": 11,
    "reference": "11:11",
    "question": "How would the king of the South react? (Daniel 11:11)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "With fear",
      "With rage, going out to fight against the king of the North",
      "With indifference",
      "By fleeing"
    ],
    "correctIndex": 1
  },
  {
    "id": 620,
    "chapter": 11,
    "reference": "11:11",
    "question": "What would happen to the great multitude raised by the king of the North? (Daniel 11:11)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "It would be victorious",
      "It would be given into his (the South's) hand",
      "It would vanish without battle",
      "It would defect"
    ],
    "correctIndex": 1
  },
  {
    "id": 621,
    "chapter": 11,
    "reference": "11:12",
    "question": "What would happen when the multitude was taken away? (Daniel 11:12)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The South's heart would be humbled",
      "His (the South's) heart would be lifted up, and he would cast down many ten thousands",
      "Nothing notable",
      "He would retire from battle"
    ],
    "correctIndex": 1
  },
  {
    "id": 622,
    "chapter": 11,
    "reference": "11:12",
    "question": "Would the king of the South be strengthened by this victory in the end? (Daniel 11:12)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Yes, permanently",
      "No, he shall not prevail/be strengthened by it ultimately",
      "He would become emperor of all",
      "He would lose immediately"
    ],
    "correctIndex": 1
  },
  {
    "id": 623,
    "chapter": 11,
    "reference": "11:13",
    "question": "What would the king of the North do after some years? (Daniel 11:13)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Retire permanently",
      "Raise a multitude greater than the former, and come with a great army",
      "Make peace forever",
      "Disband his forces"
    ],
    "correctIndex": 1
  },
  {
    "id": 624,
    "chapter": 11,
    "reference": "11:13",
    "question": "With what would he come after certain years? (Daniel 11:13)",
    "difficulty": "medium",
    "type": "fillBlank",
    "answer": "Much riches/equipment, a great army"
  },
  {
    "id": 625,
    "chapter": 11,
    "reference": "11:14",
    "question": "Who would rise up against the king of the South in those times? (Daniel 11:14)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "No one",
      "Many, including violent men of Daniel's people seeking to fulfill the vision",
      "Only foreign mercenaries",
      "Only the king of the North alone"
    ],
    "correctIndex": 1
  },
  {
    "id": 626,
    "chapter": 11,
    "reference": "11:14",
    "question": "What would happen to those violent men who rose up? (Daniel 11:14)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "They would succeed completely",
      "They would fall",
      "They would rule forever",
      "Nothing happens to them"
    ],
    "correctIndex": 1
  },
  {
    "id": 627,
    "chapter": 11,
    "reference": "11:15",
    "question": "What would the king of the North do to a fortified city? (Daniel 11:15)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Ignore it",
      "Build a siege mound and take a most fortified city",
      "Avoid it entirely",
      "Surrender to it"
    ],
    "correctIndex": 1
  },
  {
    "id": 628,
    "chapter": 11,
    "reference": "11:15",
    "question": "Would the forces of the South be able to withstand him? (Daniel 11:15)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Yes, easily",
      "No, not even his choicest troops would have strength to resist",
      "Yes, with help",
      "The question does not arise"
    ],
    "correctIndex": 1
  },
  {
    "id": 629,
    "chapter": 11,
    "reference": "11:16",
    "question": "What would the invading king do in the Glorious Land? (Daniel 11:16)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Pass through peacefully without effect",
      "Do according to his own will, and the land would be at his discretion/destruction",
      "Be expelled immediately",
      "Make permanent peace there"
    ],
    "correctIndex": 1
  },
  {
    "id": 630,
    "chapter": 11,
    "reference": "11:16",
    "question": "What land is referred to as being under his power? (Daniel 11:16)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Persia",
      "The Glorious Land (Israel)",
      "Egypt",
      "Greece"
    ],
    "correctIndex": 1
  },
  {
    "id": 631,
    "chapter": 11,
    "reference": "11:17",
    "question": "What plan would he set his heart on? (Daniel 11:17)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Permanent peace",
      "To come with the strength of his whole kingdom, making an agreement, giving a daughter in marriage to corrupt the South",
      "To abandon all plans",
      "To retire from politics"
    ],
    "correctIndex": 1
  },
  {
    "id": 632,
    "chapter": 11,
    "reference": "11:17",
    "question": "Would this plan to use his daughter succeed? (Daniel 11:17)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Yes, fully",
      "No, it shall not stand, nor be for him",
      "It is not mentioned",
      "It would last forever"
    ],
    "correctIndex": 1
  },
  {
    "id": 633,
    "chapter": 11,
    "reference": "11:18",
    "question": "After this, where would he turn his face? (Daniel 11:18)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Back home",
      "To the coastlands/islands and take many",
      "To the desert",
      "Nowhere"
    ],
    "correctIndex": 1
  },
  {
    "id": 634,
    "chapter": 11,
    "reference": "11:18",
    "question": "Who would cause his arrogance to cease? (Daniel 11:18)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "No one",
      "A commander/ruler who would turn his reproach back upon him",
      "His own family",
      "The king of the South"
    ],
    "correctIndex": 1
  },
  {
    "id": 635,
    "chapter": 11,
    "reference": "11:19",
    "question": "Where would he then turn? (Daniel 11:19)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "To Egypt",
      "Back to the fortresses of his own land",
      "To Greece",
      "To Rome"
    ],
    "correctIndex": 1
  },
  {
    "id": 636,
    "chapter": 11,
    "reference": "11:19",
    "question": "What would happen to him there? (Daniel 11:19)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He would prosper forever",
      "He would stumble and fall, and not be found",
      "He would become king of the whole earth",
      "Nothing happens"
    ],
    "correctIndex": 1
  },
  {
    "id": 637,
    "chapter": 11,
    "reference": "11:20",
    "question": "Who would arise in his place? (Daniel 11:20)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "A mighty warrior",
      "One who imposes a tax collector for the glory of the kingdom",
      "A foreign invader",
      "No one"
    ],
    "correctIndex": 1
  },
  {
    "id": 638,
    "chapter": 11,
    "reference": "11:20",
    "question": "What would happen to this successor within a few days? (Daniel 11:20)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He would conquer the world",
      "He would be destroyed, but not in anger or in battle",
      "He would live to old age",
      "He would become a great hero"
    ],
    "correctIndex": 1
  },
  {
    "id": 639,
    "chapter": 11,
    "reference": "11:21",
    "question": "Who would arise in his place, described as despicable? (Daniel 11:21)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "A noble prince",
      "A vile person, not given the honor of royalty, who obtains the kingdom by intrigue",
      "A righteous king",
      "A foreign ally"
    ],
    "correctIndex": 1
  },
  {
    "id": 640,
    "chapter": 11,
    "reference": "11:21",
    "question": "How would this vile person come to power? (Daniel 11:21)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "By open warfare and conquest",
      "By coming in peaceably and seizing the kingdom by intrigue/flattery",
      "By inheritance only",
      "By the people's vote"
    ],
    "correctIndex": 1
  },
  {
    "id": 641,
    "chapter": 11,
    "reference": "11:22",
    "question": "What would happen to forces that come against him, including a prince of the covenant? (Daniel 11:22)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "They would succeed",
      "They would be swept away and broken before him",
      "They would be honored",
      "Nothing happens"
    ],
    "correctIndex": 1
  },
  {
    "id": 642,
    "chapter": 11,
    "reference": "11:22",
    "question": "Who specifically would be broken along with the army? (Daniel 11:22)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The king of Persia",
      "The prince of the covenant",
      "The king of Greece",
      "An unnamed servant"
    ],
    "correctIndex": 1
  },
  {
    "id": 643,
    "chapter": 11,
    "reference": "11:23",
    "question": "What would he do after making an alliance with someone? (Daniel 11:23)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Keep it faithfully",
      "Act deceitfully, becoming strong with a small number of people",
      "Disband all forces",
      "Retire from power"
    ],
    "correctIndex": 1
  },
  {
    "id": 644,
    "chapter": 11,
    "reference": "11:23",
    "question": "With how large a following would he initially rise to strength? (Daniel 11:23)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "A great multitude",
      "A small number of people",
      "An entire nation",
      "No followers at all"
    ],
    "correctIndex": 1
  },
  {
    "id": 645,
    "chapter": 11,
    "reference": "11:24",
    "question": "What would he do in times of prosperity, entering the richest places of the province? (Daniel 11:24)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Take only what he needs",
      "Do what his fathers had not done — scatter plunder, spoil, and riches among his followers",
      "Give everything to the South",
      "Burn it all"
    ],
    "correctIndex": 1
  },
  {
    "id": 646,
    "chapter": 11,
    "reference": "11:24",
    "question": "What would he plan against fortresses? (Daniel 11:24)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Ignore them",
      "Devise plans against them, but only for a time",
      "Honor them forever",
      "Surrender them immediately"
    ],
    "correctIndex": 1
  },
  {
    "id": 647,
    "chapter": 11,
    "reference": "11:25",
    "question": "Whom would he stir up his power and courage against? (Daniel 11:25)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Persia",
      "The king of the South, with a great army",
      "Greece",
      "Rome"
    ],
    "correctIndex": 1
  },
  {
    "id": 648,
    "chapter": 11,
    "reference": "11:25",
    "question": "Why would the king of the South ultimately fail despite his army's strength? (Daniel 11:25)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Bad weather",
      "Plots devised against him by his own people",
      "Lack of soldiers",
      "He never went to battle"
    ],
    "correctIndex": 1
  },
  {
    "id": 649,
    "chapter": 11,
    "reference": "11:26",
    "question": "Who would destroy the king of the South? (Daniel 11:26)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Foreign invaders only",
      "Those who eat at his own table (his close associates)",
      "His own father",
      "The prophets"
    ],
    "correctIndex": 1
  },
  {
    "id": 650,
    "chapter": 11,
    "reference": "11:26",
    "question": "What would happen to his army? (Daniel 11:26)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "It would triumph",
      "It would be swept away, and many would fall down slain",
      "It would retreat peacefully",
      "It would join the enemy willingly"
    ],
    "correctIndex": 1
  },
  {
    "id": 651,
    "chapter": 11,
    "reference": "11:27",
    "question": "What would both kings' hearts be set on doing? (Daniel 11:27)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Making true peace",
      "Doing evil, speaking lies at the same table",
      "Retiring from rule",
      "Building temples"
    ],
    "correctIndex": 1
  },
  {
    "id": 652,
    "chapter": 11,
    "reference": "11:27",
    "question": "Would their scheming prosper? (Daniel 11:27)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Yes, forever",
      "No, it shall not prosper, for the end is still to come at the appointed time",
      "Yes, immediately",
      "The text does not say"
    ],
    "correctIndex": 1
  },
  {
    "id": 653,
    "chapter": 11,
    "reference": "11:28",
    "question": "With what would the king of the North return to his own land? (Daniel 11:28)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Great riches"
  },
  {
    "id": 654,
    "chapter": 11,
    "reference": "11:28",
    "question": "Against what would his heart be set, and against the holy covenant, before returning home? (Daniel 11:28)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Building alliances",
      "Acting against the holy covenant",
      "Strengthening foreign religions",
      "Establishing peace with all"
    ],
    "correctIndex": 1
  },
  {
    "id": 655,
    "chapter": 11,
    "reference": "11:29",
    "question": "At the appointed time, what would he do again? (Daniel 11:29)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Avoid the South entirely",
      "Return and go toward the South",
      "Retire from conquest",
      "Make permanent peace"
    ],
    "correctIndex": 1
  },
  {
    "id": 656,
    "chapter": 11,
    "reference": "11:29",
    "question": "How would this latter campaign compare to the former? (Daniel 11:29)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "It would be the same",
      "It would not be like the former or the latter (it would turn out differently)",
      "It would be greater in every way",
      "There would be no difference mentioned"
    ],
    "correctIndex": 1
  },
  {
    "id": 657,
    "chapter": 11,
    "reference": "11:30",
    "question": "Who would come against him this time, causing him to be grieved? (Daniel 11:30)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "No one",
      "Ships of Cyprus/Chittim",
      "The king of Greece directly",
      "His own people"
    ],
    "correctIndex": 1
  },
  {
    "id": 658,
    "chapter": 11,
    "reference": "11:30",
    "question": "Against what would he then vent his fury upon returning? (Daniel 11:30)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "The South only",
      "The holy covenant, showing favor to those who forsake it",
      "His own homeland",
      "No one in particular"
    ],
    "correctIndex": 1
  },
  {
    "id": 659,
    "chapter": 11,
    "reference": "11:31",
    "question": "What would forces from him do to the sanctuary? (Daniel 11:31)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Honor it",
      "Defile the sanctuary fortress, stop the daily sacrifices, and place an abomination that causes desolation",
      "Rebuild it fully",
      "Ignore it"
    ],
    "correctIndex": 1
  },
  {
    "id": 660,
    "chapter": 11,
    "reference": "11:31",
    "question": "What specific act would mark the temple's desecration? (Daniel 11:31)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Setting up the abomination of desolation"
  },
  {
    "id": 661,
    "chapter": 11,
    "reference": "11:32",
    "question": "Whom would he corrupt with flattery? (Daniel 11:32)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The righteous only",
      "Those who act wickedly toward the covenant",
      "No one",
      "Foreign nations only"
    ],
    "correctIndex": 1
  },
  {
    "id": 662,
    "chapter": 11,
    "reference": "11:32",
    "question": "Who would stand firm and do exploits, by contrast? (Daniel 11:32)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The wicked",
      "The people who know their God",
      "Foreign kings",
      "No one"
    ],
    "correctIndex": 1
  },
  {
    "id": 663,
    "chapter": 11,
    "reference": "11:33",
    "question": "What would the wise among the people do? (Daniel 11:33)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Remain silent",
      "Instruct many, though they would fall by sword, flame, captivity, and plunder for many days",
      "Flee immediately and hide forever",
      "Join the oppressor"
    ],
    "correctIndex": 1
  },
  {
    "id": 664,
    "chapter": 11,
    "reference": "11:33",
    "question": "What sufferings would these wise teachers endure? (Daniel 11:33)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Sword, flame, captivity, and plunder"
  },
  {
    "id": 665,
    "chapter": 11,
    "reference": "11:34",
    "question": "What kind of help would they receive when they fall? (Daniel 11:34)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "None at all",
      "A little help, though many would join them insincerely",
      "Complete deliverance immediately",
      "Help from foreign armies only"
    ],
    "correctIndex": 1
  },
  {
    "id": 666,
    "chapter": 11,
    "reference": "11:34",
    "question": "How are those who join them described? (Daniel 11:34)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "All completely sincere",
      "Many joining by hypocrisy/insincerely",
      "None would join at all",
      "Only the wise themselves"
    ],
    "correctIndex": 1
  },
  {
    "id": 667,
    "chapter": 11,
    "reference": "11:35",
    "question": "Why would some of the wise fall, even though they understand? (Daniel 11:35)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Randomly, with no purpose",
      "To refine, purify, and make them white, until the time of the end",
      "Because God abandoned them",
      "Because they sinned greatly"
    ],
    "correctIndex": 1
  },
  {
    "id": 668,
    "chapter": 11,
    "reference": "11:35",
    "question": "Until what point would this refining process continue? (Daniel 11:35)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Forever, with no end",
      "Until the time of the end, for it is still to come",
      "Only a single day",
      "The beginning of the kingdom"
    ],
    "correctIndex": 1
  },
  {
    "id": 669,
    "chapter": 11,
    "reference": "11:36",
    "question": "What would the king do regarding himself? (Daniel 11:36)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Humble himself completely",
      "Exalt and magnify himself above every god, speaking blasphemies",
      "Worship faithfully",
      "Abdicate the throne"
    ],
    "correctIndex": 1
  },
  {
    "id": 670,
    "chapter": 11,
    "reference": "11:36",
    "question": "Until when would he prosper? (Daniel 11:36)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Forever, without end",
      "Until the wrath (indignation) is accomplished, for what is determined shall be done",
      "Only one day",
      "Never; he never prospers"
    ],
    "correctIndex": 1
  },
  {
    "id": 671,
    "chapter": 11,
    "reference": "11:37",
    "question": "What would he disregard, including the god of his fathers? (Daniel 11:37)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Nothing; he honors all gods",
      "The desire of women, and every god, magnifying himself above all",
      "Only foreign gods",
      "Only his family's traditions"
    ],
    "correctIndex": 1
  },
  {
    "id": 672,
    "chapter": 11,
    "reference": "11:37",
    "question": "Above what would he magnify himself? (Daniel 11:37)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "All gods/everything"
  },
  {
    "id": 673,
    "chapter": 11,
    "reference": "11:38",
    "question": "What would he honor instead of the gods of his fathers? (Daniel 11:38)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "No one at all",
      "The god of fortresses, a god his fathers did not know",
      "The God of Israel",
      "The Egyptian gods"
    ],
    "correctIndex": 1
  },
  {
    "id": 674,
    "chapter": 11,
    "reference": "11:38",
    "question": "With what would he honor this new god? (Daniel 11:38)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Sacrifices of animals only",
      "Gold, silver, precious stones, and pleasant things",
      "Nothing at all",
      "Human sacrifice"
    ],
    "correctIndex": 1
  },
  {
    "id": 675,
    "chapter": 11,
    "reference": "11:39",
    "question": "What would he do with the strongholds, using this foreign god? (Daniel 11:39)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Destroy them entirely",
      "Act/fortify them with the help of a foreign god",
      "Abandon them",
      "Give them to the South"
    ],
    "correctIndex": 1
  },
  {
    "id": 676,
    "chapter": 11,
    "reference": "11:39",
    "question": "What would he do for those who acknowledge him? (Daniel 11:39)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Punish them",
      "Increase their honor, giving them rule over many and dividing the land for gain",
      "Exile them",
      "Ignore them completely"
    ],
    "correctIndex": 1
  },
  {
    "id": 677,
    "chapter": 11,
    "reference": "11:40",
    "question": "Who would come against him \"at the time of the end\"? (Daniel 11:40)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "No one",
      "The king of the South, contending with him",
      "Only the king of the North's own people",
      "The Persians only"
    ],
    "correctIndex": 1
  },
  {
    "id": 678,
    "chapter": 11,
    "reference": "11:40",
    "question": "How would the king of the North respond to this attack? (Daniel 11:40)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Flee immediately",
      "Attack like a whirlwind, with chariots, horsemen, and many ships; he would overwhelm countries",
      "Surrender the throne",
      "Make peace forever"
    ],
    "correctIndex": 1
  },
  {
    "id": 679,
    "chapter": 11,
    "reference": "11:41",
    "question": "Which land would he enter, with many countries overthrown? (Daniel 11:41)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Persia",
      "The Glorious Land (Israel)",
      "Greece",
      "Rome"
    ],
    "correctIndex": 1
  },
  {
    "id": 680,
    "chapter": 11,
    "reference": "11:41",
    "question": "Which nations would escape from his hand? (Daniel 11:41)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "None at all",
      "Edom, Moab, and the prominent people of Ammon",
      "Egypt and Persia",
      "Greece and Rome"
    ],
    "correctIndex": 1
  },
  {
    "id": 681,
    "chapter": 11,
    "reference": "11:42",
    "question": "Over which land would he stretch out his hand? (Daniel 11:42)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Persia only",
      "The land of Egypt, which would not escape",
      "Greece",
      "Rome"
    ],
    "correctIndex": 1
  },
  {
    "id": 682,
    "chapter": 11,
    "reference": "11:42",
    "question": "Would Egypt escape his power? (Daniel 11:42)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Yes, completely",
      "No, it shall not escape",
      "Only partially",
      "The text does not say"
    ],
    "correctIndex": 1
  },
  {
    "id": 683,
    "chapter": 11,
    "reference": "11:43",
    "question": "What would he gain power over in Egypt? (Daniel 11:43)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Only the army",
      "The treasures of gold, silver, and all precious things",
      "Nothing of value",
      "Only farmland"
    ],
    "correctIndex": 1
  },
  {
    "id": 684,
    "chapter": 11,
    "reference": "11:43",
    "question": "Which peoples are said to follow at his heels? (Daniel 11:43)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Libyans and Ethiopians"
  },
  {
    "id": 685,
    "chapter": 11,
    "reference": "11:44",
    "question": "What news would trouble him from the east and north? (Daniel 11:44)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Good news of peace",
      "Troubling news/rumors, causing him to go out with great fury to destroy many",
      "No news at all",
      "News of his own coronation"
    ],
    "correctIndex": 1
  },
  {
    "id": 686,
    "chapter": 11,
    "reference": "11:44",
    "question": "With what would he go forth because of this news? (Daniel 11:44)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Peace offerings",
      "Great fury, to destroy and annihilate many",
      "A small escort only",
      "Complete indifference"
    ],
    "correctIndex": 1
  },
  {
    "id": 687,
    "chapter": 11,
    "reference": "11:45",
    "question": "Where would he pitch his tent, between the seas? (Daniel 11:45)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "In Babylon",
      "Between the seas and the glorious holy mountain",
      "In Greece",
      "In Persia"
    ],
    "correctIndex": 1
  },
  {
    "id": 688,
    "chapter": 11,
    "reference": "11:45",
    "question": "What would ultimately happen to him? (Daniel 11:45)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He would rule forever",
      "He would come to his end, with no one to help him",
      "He would be crowned king of the whole world",
      "He would retire peacefully"
    ],
    "correctIndex": 1
  },
  {
    "id": 689,
    "chapter": 12,
    "reference": "12:1",
    "question": "Who would stand up at that time to protect Daniel's people? (Daniel 12:1)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Michael, the great prince"
  },
  {
    "id": 690,
    "chapter": 12,
    "reference": "12:1",
    "question": "Who would be delivered at that time of unprecedented trouble? (Daniel 12:1)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Everyone without exception",
      "Everyone found written in the book",
      "No one",
      "Only the king"
    ],
    "correctIndex": 1
  },
  {
    "id": 691,
    "chapter": 12,
    "reference": "12:2",
    "question": "What would happen to many who sleep in the dust of the earth? (Daniel 12:2)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Nothing; they remain asleep",
      "They shall awake, some to everlasting life, some to shame and contempt",
      "They turn to dust permanently",
      "Only the wicked awake"
    ],
    "correctIndex": 1
  },
  {
    "id": 692,
    "chapter": 12,
    "reference": "12:2",
    "question": "To what two contrasting fates would those who awake be assigned? (Daniel 12:2)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Wealth and poverty",
      "Everlasting life, and shame/everlasting contempt",
      "Kingship and slavery",
      "Long life and short life"
    ],
    "correctIndex": 1
  },
  {
    "id": 693,
    "chapter": 12,
    "reference": "12:3",
    "question": "To what are the wise compared? (Daniel 12:3)",
    "difficulty": "medium",
    "type": "fillBlank",
    "answer": "The brightness of the firmament (sky)"
  },
  {
    "id": 694,
    "chapter": 12,
    "reference": "12:3",
    "question": "To what are those who turn many to righteousness compared? (Daniel 12:3)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Shadows",
      "Stars forever and ever",
      "Stones",
      "Rivers"
    ],
    "correctIndex": 1
  },
  {
    "id": 695,
    "chapter": 12,
    "reference": "12:4",
    "question": "What did Daniel need to do with the words of this book? (Daniel 12:4)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Read them publicly",
      "Seal the book until the time of the end",
      "Destroy it",
      "Translate it into other languages"
    ],
    "correctIndex": 1
  },
  {
    "id": 696,
    "chapter": 12,
    "reference": "12:4",
    "question": "What would many do in the time of the end, regarding knowledge? (Daniel 12:4)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Remain ignorant",
      "Run to and fro, and knowledge shall increase",
      "Lose all knowledge",
      "Stop seeking understanding"
    ],
    "correctIndex": 1
  },
  {
    "id": 697,
    "chapter": 12,
    "reference": "12:5",
    "question": "What did Daniel see standing on the riverbank? (Daniel 12:5)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "One angel",
      "Two others, one on each bank of the river",
      "A multitude of angels",
      "No one"
    ],
    "correctIndex": 1
  },
  {
    "id": 698,
    "chapter": 12,
    "reference": "12:5",
    "question": "Where exactly were these two figures standing? (Daniel 12:5)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Both on the same side",
      "One on each side of the riverbank",
      "In the water",
      "On a mountain"
    ],
    "correctIndex": 1
  },
  {
    "id": 699,
    "chapter": 12,
    "reference": "12:6",
    "question": "What question was asked of the man clothed in linen? (Daniel 12:6)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "\"Who are you?\"",
      "\"How long shall it be to the end of these wonders?\"",
      "\"Where is the sanctuary?\"",
      "\"What is your name?\""
    ],
    "correctIndex": 1
  },
  {
    "id": 700,
    "chapter": 12,
    "reference": "12:6",
    "question": "Who was asked this question? (Daniel 12:6)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Daniel",
      "The man clothed in linen, above the waters of the river",
      "Gabriel",
      "Michael"
    ],
    "correctIndex": 1
  },
  {
    "id": 701,
    "chapter": 12,
    "reference": "12:7",
    "question": "What did the man do as he answered, swearing by Him who lives forever? (Daniel 12:7)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Stood still silently",
      "Raised his right and left hands to heaven",
      "Bowed to the ground",
      "Wrote in a book"
    ],
    "correctIndex": 1
  },
  {
    "id": 702,
    "chapter": 12,
    "reference": "12:7",
    "question": "What time period was given for the end of these things? (Daniel 12:7)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Seventy years",
      "A time, times, and half a time, when the power of the holy people is shattered",
      "A thousand years",
      "Forty days"
    ],
    "correctIndex": 1
  },
  {
    "id": 703,
    "chapter": 12,
    "reference": "12:8",
    "question": "What did Daniel admit he did not understand? (Daniel 12:8)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The river's location",
      "The meaning of what he heard",
      "The man's name",
      "The time of day"
    ],
    "correctIndex": 1
  },
  {
    "id": 704,
    "chapter": 12,
    "reference": "12:8",
    "question": "What did Daniel ask as a result? (Daniel 12:8)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "\"Where am I?\"",
      "\"My lord, what shall be the end of these things?\"",
      "\"Who are you?\"",
      "\"Why am I here?\""
    ],
    "correctIndex": 1
  },
  {
    "id": 705,
    "chapter": 12,
    "reference": "12:9",
    "question": "What did the man tell Daniel to do? (Daniel 12:9)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Speak the words publicly",
      "Go his way, for the words are closed up and sealed till the time of the end",
      "Forget them entirely",
      "Teach them to the king"
    ],
    "correctIndex": 1
  },
  {
    "id": 706,
    "chapter": 12,
    "reference": "12:9",
    "question": "Until when would the words remain sealed? (Daniel 12:9)",
    "difficulty": "medium",
    "type": "fillBlank",
    "answer": "Until the time of the end"
  },
  {
    "id": 707,
    "chapter": 12,
    "reference": "12:10",
    "question": "What process would many undergo, becoming purified and refined? (Daniel 12:10)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "None; they stay corrupt",
      "Many shall be purified, made white, and refined",
      "Only the wicked are purified",
      "Everyone equally without distinction"
    ],
    "correctIndex": 1
  },
  {
    "id": 708,
    "chapter": 12,
    "reference": "12:10",
    "question": "What would the wicked do, in contrast to the wise who understand? (Daniel 12:10)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Also understand fully",
      "Continue to do wickedly, and none of the wicked shall understand",
      "Repent immediately",
      "Become wise"
    ],
    "correctIndex": 1
  },
  {
    "id": 709,
    "chapter": 12,
    "reference": "12:11",
    "question": "From the time the daily sacrifice is taken away and the abomination set up, how many days are given? (Daniel 12:11)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "1,260 days",
      "1,290 days",
      "2,300 days",
      "70 days"
    ],
    "correctIndex": 1
  },
  {
    "id": 710,
    "chapter": 12,
    "reference": "12:11",
    "question": "What event marks the starting point of this count? (Daniel 12:11)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The fall of Babylon",
      "The daily sacrifice being taken away and the abomination of desolation being set up",
      "The birth of a new king",
      "The sealing of the book"
    ],
    "correctIndex": 1
  },
  {
    "id": 711,
    "chapter": 12,
    "reference": "12:12",
    "question": "What blessing is pronounced on one who waits and reaches a certain number of days? (Daniel 12:12)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "\"Blessed is he who waits and comes to 1,290 days\"",
      "\"Blessed is he who waits, and comes to the one thousand three hundred and thirty-five days\"",
      "\"Blessed is he who waits forty days\"",
      "\"Blessed is he who waits one year\""
    ],
    "correctIndex": 1
  },
  {
    "id": 712,
    "chapter": 12,
    "reference": "12:12",
    "question": "How many days are specified for this particular blessing? (Daniel 12:12)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "1,290",
      "1,335",
      "2,300",
      "490"
    ],
    "correctIndex": 1
  },
  {
    "id": 713,
    "chapter": 12,
    "reference": "12:13",
    "question": "What was Daniel told to do, regarding his own end? (Daniel 12:13)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Worry about the future",
      "Go his way till the end; rest, and rise to his inheritance at the end of the days",
      "Stay awake forever",
      "Travel to Egypt immediately"
    ],
    "correctIndex": 1
  },
  {
    "id": 714,
    "chapter": 12,
    "reference": "12:13",
    "question": "What would Daniel do \"at the end of the days\"? (Daniel 12:13)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Remain in the grave forever",
      "Arise/stand in his allotted inheritance",
      "Become a king on earth",
      "Return to Babylon"
    ],
    "correctIndex": 1
  }
];

// Group questions by chapter number (7-12)
const daniel7to12QuestionsByChapter = daniel7to12Questions.reduce((acc, q) => {
  if (!acc[q.chapter]) acc[q.chapter] = [];
  acc[q.chapter].push(q);
  return acc;
}, {});

// Group questions by difficulty ('easy' | 'medium' | 'hard')
const daniel7to12QuestionsByDifficulty = daniel7to12Questions.reduce((acc, q) => {
  if (!acc[q.difficulty]) acc[q.difficulty] = [];
  acc[q.difficulty].push(q);
  return acc;
}, {});

// Export for Node/CommonJS
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { daniel7to12Questions, daniel7to12QuestionsByChapter, daniel7to12QuestionsByDifficulty };
}
