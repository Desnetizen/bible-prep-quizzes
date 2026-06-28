// Daniel 1-6 Study Question Bank (NKJV)
// Source document: Daniel_1-6_Questions.docx
// Covers Daniel chapters 1-6, verse-by-verse (NKJV)
// 392 questions total
//
// Question shape:
//   { id, chapter, reference, question, difficulty, type, ...type-specific fields }
//   reference is the chapter:verse string (e.g. "3:18"); it is also
//   baked into the end of the `question` text as "(Daniel 3:18)".
//   difficulty is one of: 'easy', 'medium', 'hard'.
//
// type: 'multipleChoice' -> options (array of 4 strings), correctIndex (0-3)
// type: 'fillBlank'      -> answer (string the learner must recall/type)

const daniel1to6Questions = [
  {
    "id": 1,
    "chapter": 1,
    "reference": "1:1",
    "question": "In the third year of the reign of Jehoiakim king of Judah, who came to Jerusalem and besieged it? (Daniel 1:1)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Nebuchadnezzar king of Babylon",
      "Cyrus king of Persia",
      "Darius the Mede",
      "Belshazzar king of Chaldea"
    ],
    "correctIndex": 0
  },
  {
    "id": 2,
    "chapter": 1,
    "reference": "1:1",
    "question": "Which king of Judah was reigning when Nebuchadnezzar came to Jerusalem? (Daniel 1:1)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Zedekiah",
      "Jehoiakim",
      "Josiah",
      "Hezekiah"
    ],
    "correctIndex": 1
  },
  {
    "id": 3,
    "chapter": 1,
    "reference": "1:2",
    "question": "What did the Lord give into Nebuchadnezzar's hand when he came to Jerusalem? (Daniel 1:2)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The entire army of Israel and their weapons",
      "The high priest and the ark of the covenant",
      "Jehoiakim king of Judah, along with some articles of the house of God",
      "The wealth of Jerusalem and its treasury"
    ],
    "correctIndex": 2
  },
  {
    "id": 4,
    "chapter": 1,
    "reference": "1:2",
    "question": "To the house of which god did Nebuchadnezzar bring the articles from the house of God? (Daniel 1:2)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Baal in Babylon",
      "Marduk at Nineveh",
      "Dagon in Philistia",
      "His god in the land of Shinar"
    ],
    "correctIndex": 3
  },
  {
    "id": 5,
    "chapter": 1,
    "reference": "1:3",
    "question": "Who did Nebuchadnezzar command to bring some of the children of Israel into Babylon? (Daniel 1:3)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Ashpenaz, the master of his eunuchs",
      "Arioch, the captain of the king's guard",
      "Belshazzar, his son and co-regent",
      "Shadrach, his chief official"
    ],
    "correctIndex": 0
  },
  {
    "id": 6,
    "chapter": 1,
    "reference": "1:3",
    "question": "From which two groups were the youths selected to be brought to Babylon according to Daniel 1:3? (Daniel 1:3)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The priests and the Levites",
      "The king's descendants and the nobles",
      "The warriors and the scribes",
      "The merchants and the landowners"
    ],
    "correctIndex": 1
  },
  {
    "id": 7,
    "chapter": 1,
    "reference": "1:4",
    "question": "Which of the following was NOT listed as a quality required of the young men chosen for Babylon? (Daniel 1:4)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Young men in whom there was no blemish",
      "Gifted in all wisdom",
      "They must be of the tribe of Judah only",
      "Competent to serve in the king's palace"
    ],
    "correctIndex": 2
  },
  {
    "id": 8,
    "chapter": 1,
    "reference": "1:4",
    "question": "What were the chosen young men from Israel to be taught in Babylon? (Daniel 1:4)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The laws and statutes of the Medes",
      "The military tactics of the Babylonian army",
      "The commerce and trade of the eastern nations",
      "The language and literature of the Chaldeans"
    ],
    "correctIndex": 3
  },
  {
    "id": 9,
    "chapter": 1,
    "reference": "1:5",
    "question": "How long was the training period assigned to the chosen young men before they would stand before the king? (Daniel 1:5)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Three years",
      "One year",
      "Seven years",
      "Forty days"
    ],
    "correctIndex": 0
  },
  {
    "id": 10,
    "chapter": 1,
    "reference": "1:5",
    "question": "From what source was the daily provision of food and wine for the young men assigned? (Daniel 1:5)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The temple storehouses of Babylon",
      "The king's delicacies and the wine which he drank",
      "The local marketplace of the Chaldeans",
      "The offerings given to the Babylonian gods"
    ],
    "correctIndex": 1
  },
  {
    "id": 11,
    "chapter": 1,
    "reference": "1:6",
    "question": "Which of the following was NOT one of the four young men from Judah named in Daniel 1:6? (Daniel 1:6)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Daniel",
      "Hananiah",
      "Ezekiel",
      "Azariah"
    ],
    "correctIndex": 2
  },
  {
    "id": 12,
    "chapter": 1,
    "reference": "1:6",
    "question": "Daniel, Hananiah, Mishael, and Azariah were originally from which tribe? (Daniel 1:6)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The children of Benjamin",
      "The children of Levi",
      "The children of Ephraim",
      "The children of Judah"
    ],
    "correctIndex": 3
  },
  {
    "id": 13,
    "chapter": 1,
    "reference": "1:7",
    "question": "What new name was given to Daniel by the chief of the eunuchs? (Daniel 1:7)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Belteshazzar"
  },
  {
    "id": 14,
    "chapter": 1,
    "reference": "1:7",
    "question": "What was the new Babylonian name given to Hananiah? (Daniel 1:7)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Shadrach"
  },
  {
    "id": 15,
    "chapter": 1,
    "reference": "1:8",
    "question": "Why did Daniel purpose in his heart not to defile himself with the king's delicacies? (Daniel 1:8)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "He preferred the simpler food of his homeland",
      "He was not hungry and could not eat the portions given",
      "He did not want to defile himself with the king's meat and wine",
      "He feared becoming sick if he ate Babylonian food"
    ],
    "correctIndex": 2
  },
  {
    "id": 16,
    "chapter": 1,
    "reference": "1:8",
    "question": "From whom did Daniel request permission not to defile himself with the king's food? (Daniel 1:8)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The king himself",
      "His three companions",
      "The steward assigned to them",
      "The chief of the eunuchs"
    ],
    "correctIndex": 3
  },
  {
    "id": 17,
    "chapter": 1,
    "reference": "1:9",
    "question": "How did God show favor to Daniel before the chief of the eunuchs? (Daniel 1:9)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "God brought Daniel into favor and goodwill with the chief of the eunuchs",
      "God caused the chief to fear Daniel and grant his every wish",
      "God spoke directly to the chief in a dream about Daniel",
      "God made Daniel the wisest among all the youths immediately"
    ],
    "correctIndex": 0
  },
  {
    "id": 18,
    "chapter": 1,
    "reference": "1:9",
    "question": "Who gave Daniel favor and goodwill in the sight of the chief of the eunuchs? (Daniel 1:9)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Nebuchadnezzar",
      "God",
      "Arioch",
      "His three companions"
    ],
    "correctIndex": 1
  },
  {
    "id": 19,
    "chapter": 1,
    "reference": "1:10",
    "question": "What was the chief of the eunuchs' main fear about allowing Daniel's request? (Daniel 1:10)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Daniel would become too weak to serve in the king's palace",
      "The other young men would also refuse the king's food",
      "The king would see their appearance worse than other youths and endanger his head",
      "He would lose his position as chief of the eunuchs"
    ],
    "correctIndex": 2
  },
  {
    "id": 20,
    "chapter": 1,
    "reference": "1:10",
    "question": "The chief of the eunuchs said his head would be in danger before whom if Daniel's plan failed? (Daniel 1:10)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The king's army commanders",
      "The Babylonian high priests",
      "The council of nobles",
      "The king"
    ],
    "correctIndex": 3
  },
  {
    "id": 21,
    "chapter": 1,
    "reference": "1:11",
    "question": "When the chief of the eunuchs refused, to whom did Daniel make his dietary request next? (Daniel 1:11)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The steward whom the chief of the eunuchs had set over them",
      "Nebuchadnezzar the king directly",
      "Arioch, the king's captain",
      "The palace cook"
    ],
    "correctIndex": 0
  },
  {
    "id": 22,
    "chapter": 1,
    "reference": "1:11",
    "question": "Who had appointed the steward over Daniel, Hananiah, Mishael, and Azariah? (Daniel 1:11)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Nebuchadnezzar",
      "The chief of the eunuchs",
      "Ashpenaz the master of eunuchs",
      "Belshazzar, the king's son"
    ],
    "correctIndex": 1
  },
  {
    "id": 23,
    "chapter": 1,
    "reference": "1:12",
    "question": "For how many days did Daniel ask the steward to test them on vegetables and water? (Daniel 1:12)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Ten days"
  },
  {
    "id": 24,
    "chapter": 1,
    "reference": "1:12",
    "question": "What diet did Daniel propose during the ten-day test? (Daniel 1:12)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Bread and milk only",
      "Fruit and grain without wine",
      "Whatever the Chaldean servants ate",
      "Vegetables to eat and water to drink"
    ],
    "correctIndex": 3
  },
  {
    "id": 25,
    "chapter": 1,
    "reference": "1:13",
    "question": "After the ten-day test, whose appearance was Daniel's countenance to be compared against? (Daniel 1:13)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "The young men who ate the king's delicacies",
      "The king's personal advisers",
      "The Chaldean magicians and astrologers",
      "The palace guards and warriors"
    ],
    "correctIndex": 0
  },
  {
    "id": 26,
    "chapter": 1,
    "reference": "1:13",
    "question": "What did Daniel promise the steward would happen after comparing them to the others at the end of the test? (Daniel 1:13)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Then grant our request permanently and we will serve faithfully",
      "Then deal with your servants according to what you see",
      "Then report the results to the king for his judgment",
      "Then give us the full portion of the king's food"
    ],
    "correctIndex": 1
  },
  {
    "id": 27,
    "chapter": 1,
    "reference": "1:14",
    "question": "What did the steward do after Daniel's proposal for the ten-day test? (Daniel 1:14)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "He refused and reported the request to the king",
      "He agreed only if they kept it secret",
      "He consented to them in this matter and tested them ten days",
      "He asked for permission from the chief of the eunuchs first"
    ],
    "correctIndex": 2
  },
  {
    "id": 28,
    "chapter": 1,
    "reference": "1:14",
    "question": "For how many days did the steward actually test Daniel and his companions? (Daniel 1:14)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Seven days",
      "Three days",
      "Fourteen days",
      "Ten days"
    ],
    "correctIndex": 3
  },
  {
    "id": 29,
    "chapter": 1,
    "reference": "1:15",
    "question": "What was the result of the ten-day diet test for Daniel and his friends? (Daniel 1:15)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Their features appeared better and fatter in flesh than all the young men who ate the king's delicacies",
      "They looked similar to the others but were stronger in spirit",
      "Their appearance was thinner but their wisdom was greater",
      "They were granted special blessings but still looked weaker"
    ],
    "correctIndex": 0
  },
  {
    "id": 30,
    "chapter": 1,
    "reference": "1:15",
    "question": "How did Daniel and his companions compare in appearance to those who ate the king's food after ten days? (Daniel 1:15)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Thinner but healthier",
      "Better and fatter in flesh",
      "Exactly the same in all ways",
      "Stronger but paler"
    ],
    "correctIndex": 1
  },
  {
    "id": 31,
    "chapter": 1,
    "reference": "1:16",
    "question": "What did the steward do after seeing the result of the ten-day test? (Daniel 1:16)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "He reported the miracle to the king immediately",
      "He allowed them to choose their own food from that point on",
      "He took away their portion of the king's food and gave them vegetables",
      "He asked the chief of the eunuchs to change all the youths' diet"
    ],
    "correctIndex": 2
  },
  {
    "id": 32,
    "chapter": 1,
    "reference": "1:16",
    "question": "After the test, what did the steward permanently replace the king's food and wine with for Daniel and his companions? (Daniel 1:16)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Bread and water",
      "Fruit and grain",
      "Plain meat without wine",
      "Vegetables"
    ],
    "correctIndex": 3
  },
  {
    "id": 33,
    "chapter": 1,
    "reference": "1:17",
    "question": "Which of the following gifts did God specifically give to Daniel that his three companions also received? (Daniel 1:17)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Knowledge and skill in all literature and wisdom",
      "The ability to speak all languages of the East",
      "The power to heal sickness and disease",
      "Supernatural physical strength"
    ],
    "correctIndex": 0
  },
  {
    "id": 34,
    "chapter": 1,
    "reference": "1:17",
    "question": "What additional gift did God give specifically to Daniel, but not listed for his three companions? (Daniel 1:17)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Understanding in all visions and dreams"
  },
  {
    "id": 35,
    "chapter": 1,
    "reference": "1:18",
    "question": "At the end of how many days did the king require the young men to be brought before him? (Daniel 1:18)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "One year after their arrival",
      "Forty days of training",
      "The days that the king had specified (three years)",
      "Seven years of service"
    ],
    "correctIndex": 2
  },
  {
    "id": 36,
    "chapter": 1,
    "reference": "1:18",
    "question": "Who brought Daniel and his companions before Nebuchadnezzar at the end of their training? (Daniel 1:18)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Arioch, the king's guard",
      "The steward",
      "The Chaldean advisers",
      "The chief of the eunuchs"
    ],
    "correctIndex": 3
  },
  {
    "id": 37,
    "chapter": 1,
    "reference": "1:19",
    "question": "What was Nebuchadnezzar's conclusion after speaking with all the young men at the end of their training? (Daniel 1:19)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "None was found like Daniel, Hananiah, Mishael, and Azariah",
      "All the youths were equally gifted and wise",
      "The Chaldean young men surpassed the Israelites in wisdom",
      "Daniel alone was found worthy to stand before the king"
    ],
    "correctIndex": 0
  },
  {
    "id": 38,
    "chapter": 1,
    "reference": "1:19",
    "question": "What did Nebuchadnezzar do with Daniel, Hananiah, Mishael, and Azariah after his assessment? (Daniel 1:19)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "They stood before the king"
  },
  {
    "id": 39,
    "chapter": 1,
    "reference": "1:20",
    "question": "Compared to whom did the king find Daniel and his friends ten times better in wisdom and understanding? (Daniel 1:20)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "All the nobles and princes in his court",
      "The other young men trained alongside them",
      "All the magicians and astrologers who were in his realm",
      "The high priests of Babylon"
    ],
    "correctIndex": 2
  },
  {
    "id": 40,
    "chapter": 1,
    "reference": "1:20",
    "question": "In what matters were Daniel and his friends found ten times better than all others in the realm? (Daniel 1:20)",
    "difficulty": "medium",
    "type": "fillBlank",
    "answer": "All matters of wisdom and understanding"
  },
  {
    "id": 41,
    "chapter": 1,
    "reference": "1:21",
    "question": "How long did Daniel continue in the service of the Babylonian kingdom, according to Daniel 1:21? (Daniel 1:21)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Until the first year of King Cyrus",
      "Until the death of Nebuchadnezzar",
      "Until the fall of Babylon to the Medes",
      "Until the reign of Belshazzar ended"
    ],
    "correctIndex": 0
  },
  {
    "id": 42,
    "chapter": 1,
    "reference": "1:21",
    "question": "Whose first year marked the end of Daniel's mentioned service in Daniel 1:21? (Daniel 1:21)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Darius the Mede",
      "King Cyrus",
      "Belshazzar",
      "Nebuchadnezzar"
    ],
    "correctIndex": 1
  },
  {
    "id": 43,
    "chapter": 2,
    "reference": "2:1",
    "question": "In what year of Nebuchadnezzar's reign did he have the troubling dreams? (Daniel 2:1)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "The second year"
  },
  {
    "id": 44,
    "chapter": 2,
    "reference": "2:1",
    "question": "What was the effect of Nebuchadnezzar's dreams on him? (Daniel 2:1)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "He was filled with joy and called for a celebration",
      "He became sick and could not rise from his bed",
      "He was afraid and fled from his palace",
      "His spirit was troubled and his sleep left him"
    ],
    "correctIndex": 3
  },
  {
    "id": 45,
    "chapter": 2,
    "reference": "2:2",
    "question": "Which of the following was NOT among the groups summoned by Nebuchadnezzar to interpret his dream? (Daniel 2:2)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The prophets",
      "The magicians",
      "The astrologers",
      "The sorcerers and Chaldeans"
    ],
    "correctIndex": 0
  },
  {
    "id": 46,
    "chapter": 2,
    "reference": "2:2",
    "question": "Why did Nebuchadnezzar summon the magicians, astrologers, sorcerers, and Chaldeans? (Daniel 2:2)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "To pray to their gods on his behalf",
      "To tell him his dream and its interpretation",
      "To advise him on matters of war",
      "To write down the dream he described to them"
    ],
    "correctIndex": 1
  },
  {
    "id": 47,
    "chapter": 2,
    "reference": "2:3",
    "question": "What problem did Nebuchadnezzar present to the wise men when they came before him? (Daniel 2:3)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "He said he had seen a vision during the day and could not understand it",
      "He said an angel had appeared to him but he could not remember the message",
      "He said he had dreamed a dream and his spirit was anxious to know the dream",
      "He said strange signs had appeared in the sky and he needed an explanation"
    ],
    "correctIndex": 2
  },
  {
    "id": 48,
    "chapter": 2,
    "reference": "2:3",
    "question": "What was the king's emotional state when he told the wise men about his dream? (Daniel 2:3)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "He was at peace but curious about the meaning",
      "He was filled with anger toward his advisers",
      "He was overwhelmed with fear and could not speak clearly",
      "His spirit was anxious to know the dream"
    ],
    "correctIndex": 3
  },
  {
    "id": 49,
    "chapter": 2,
    "reference": "2:4",
    "question": "In what language did the Chaldeans first speak to the king, according to Daniel 2:4? (Daniel 2:4)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Aramaic (Syrian)",
      "Hebrew",
      "Babylonian",
      "Persian"
    ],
    "correctIndex": 0
  },
  {
    "id": 50,
    "chapter": 2,
    "reference": "2:4",
    "question": "What did the Chaldeans promise to do for the king if he told them his dream? (Daniel 2:4)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Give the interpretation"
  },
  {
    "id": 51,
    "chapter": 2,
    "reference": "2:5",
    "question": "What did Nebuchadnezzar say would happen to the wise men if they did not tell him both the dream AND its interpretation? (Daniel 2:5)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "They would be cast into prison for the rest of their lives",
      "They would be exiled to a distant land never to return",
      "They would be cut in pieces and their houses made into a refuse heap",
      "They would lose all their wealth and titles"
    ],
    "correctIndex": 2
  },
  {
    "id": 52,
    "chapter": 2,
    "reference": "2:5",
    "question": "The king told the wise men his decision was firm. What Aramaic word describes this certainty? (Daniel 2:5)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "It is written and sealed",
      "The decree is established",
      "My word will not return void",
      "The thing has departed from me (the word is gone from me)"
    ],
    "correctIndex": 3
  },
  {
    "id": 53,
    "chapter": 2,
    "reference": "2:6",
    "question": "What reward did Nebuchadnezzar promise if the wise men could tell him the dream and its interpretation? (Daniel 2:6)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Gifts, rewards, and great honor",
      "A position of authority over the kingdom",
      "Their freedom and passage back to their homelands",
      "Gold, silver, and a palace in Babylon"
    ],
    "correctIndex": 0
  },
  {
    "id": 54,
    "chapter": 2,
    "reference": "2:6",
    "question": "In Daniel 2:6, how many things did the king promise to give as a reward? (Daniel 2:6)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Two — riches and a high position",
      "Three — gifts, rewards, and great honor",
      "Four — gold, silver, land, and honor",
      "One great reward left unnamed"
    ],
    "correctIndex": 1
  },
  {
    "id": 55,
    "chapter": 2,
    "reference": "2:7",
    "question": "What did the wise men ask of the king a second time? (Daniel 2:7)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Give us seven days to inquire of our gods",
      "Allow us to consult the royal archives for similar dreams",
      "Let the king tell his servants the dream, and we will give the interpretation",
      "Let the king describe only part of the dream and we will fill in the rest"
    ],
    "correctIndex": 2
  },
  {
    "id": 56,
    "chapter": 2,
    "reference": "2:7",
    "question": "Why did the wise men insist that the king tell them the dream first? (Daniel 2:7)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "They feared the dream might be a test and wanted to hear it correctly",
      "They claimed their ability came only from hearing detailed descriptions",
      "They were buying time by continuing to ask the same question",
      "They said they could only interpret it if they heard it first"
    ],
    "correctIndex": 3
  },
  {
    "id": 57,
    "chapter": 2,
    "reference": "2:8",
    "question": "What did Nebuchadnezzar accuse the wise men of doing when they repeatedly asked him to reveal the dream? (Daniel 2:8)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Trying to gain time because they saw the king's decision was firm",
      "Conspiring together against him in secret",
      "Pretending to have divine powers they did not possess",
      "Attempting to flee from the palace to avoid the task"
    ],
    "correctIndex": 0
  },
  {
    "id": 58,
    "chapter": 2,
    "reference": "2:8",
    "question": "How did the king describe his certainty about the wise men's motives in Daniel 2:8? (Daniel 2:8)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He suspected but was not fully sure of their motives",
      "He knew with certainty that they were trying to gain time",
      "He accused them based on a report from his spies",
      "He had been warned by one of them who came forward honestly"
    ],
    "correctIndex": 1
  },
  {
    "id": 59,
    "chapter": 2,
    "reference": "2:9",
    "question": "What additional accusation did Nebuchadnezzar make against the wise men if they could not tell him the dream? (Daniel 2:9)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "They had bribed others to help them escape the task",
      "They had conspired with foreign nations to overthrow him",
      "They had agreed to speak lying and corrupt words before him",
      "They had deliberately hidden the correct interpretation"
    ],
    "correctIndex": 2
  },
  {
    "id": 60,
    "chapter": 2,
    "reference": "2:9",
    "question": "According to Daniel 2:9, what did the king say would prove the wise men were telling the truth? (Daniel 2:9)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "If they agreed to be placed in prison until they provided the answer",
      "If they each gave the same answer independently",
      "If they could produce a written record of similar past interpretations",
      "If they could first tell him the dream, he would know they could give the interpretation"
    ],
    "correctIndex": 3
  },
  {
    "id": 61,
    "chapter": 2,
    "reference": "2:10",
    "question": "What did the Chaldeans say no man on earth could do for the king? (Daniel 2:10)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Show the king his matter without the king telling the dream",
      "Interpret a dream without divine assistance",
      "Predict future kingdoms without a vision",
      "Understand the secret counsels of the gods"
    ],
    "correctIndex": 0
  },
  {
    "id": 62,
    "chapter": 2,
    "reference": "2:10",
    "question": "What two reasons did the Chaldeans give to show the king's demand was beyond any man? (Daniel 2:10)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "The dream was too long and too complex to describe",
      "No king had asked such a thing, and no magician or astrologer could show it",
      "Their gods had not spoken and the signs were unclear",
      "They lacked the proper materials and time to perform the ritual"
    ],
    "correctIndex": 1
  },
  {
    "id": 63,
    "chapter": 2,
    "reference": "2:11",
    "question": "Who did the Chaldeans say could reveal the king's dream? (Daniel 2:11)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "A great prophet sent from the highest heavens",
      "The king himself if he meditated on it",
      "Only the gods, whose dwelling is not with flesh",
      "No one in heaven or earth"
    ],
    "correctIndex": 2
  },
  {
    "id": 64,
    "chapter": 2,
    "reference": "2:11",
    "question": "The Chaldeans said the thing the king asked was rare. What did they mean by this? (Daniel 2:11)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Such a dream had never been recorded in history",
      "The art of dream interpretation had been lost for generations",
      "Only the greatest magician alive could hope to attempt it",
      "It was a thing too difficult for any man to do"
    ],
    "correctIndex": 3
  },
  {
    "id": 65,
    "chapter": 2,
    "reference": "2:12",
    "question": "What was Nebuchadnezzar's reaction when the wise men said no one could reveal his dream? (Daniel 2:12)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "He was furious and gave the command to destroy all the wise men of Babylon",
      "He dismissed them and sought help from a foreign prophet",
      "He wept in frustration and retreated to his chamber",
      "He ordered them imprisoned until someone could answer"
    ],
    "correctIndex": 0
  },
  {
    "id": 66,
    "chapter": 2,
    "reference": "2:12",
    "question": "Who was included in the decree to be destroyed after the wise men failed? (Daniel 2:12)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Only the magicians and astrologers",
      "All the wise men of Babylon",
      "The Chaldean advisers alone",
      "Every foreign-born official in the palace"
    ],
    "correctIndex": 1
  },
  {
    "id": 67,
    "chapter": 2,
    "reference": "2:13",
    "question": "How did the decree to kill the wise men affect Daniel and his companions? (Daniel 2:13)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "They were exempted because they were Israelites, not Chaldeans",
      "They were placed under house arrest pending further orders",
      "They also were sought to be killed as part of the wise men of Babylon",
      "They were given one last chance to interpret the dream"
    ],
    "correctIndex": 2
  },
  {
    "id": 68,
    "chapter": 2,
    "reference": "2:13",
    "question": "Who came to kill Daniel and his companions when the decree went out? (Daniel 2:13)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Ashpenaz the chief of the eunuchs",
      "The Chaldeans who had accused them",
      "Nebuchadnezzar's personal soldiers",
      "Arioch the captain of the king's guard"
    ],
    "correctIndex": 3
  },
  {
    "id": 69,
    "chapter": 2,
    "reference": "2:14",
    "question": "How did Daniel respond when Arioch came to kill the wise men? (Daniel 2:14)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "With counsel and wisdom",
      "With fear and trembling",
      "By immediately calling on God in prayer",
      "By protesting his innocence to the king"
    ],
    "correctIndex": 0
  },
  {
    "id": 70,
    "chapter": 2,
    "reference": "2:14",
    "question": "Arioch was described as the captain of what in Daniel 2:14? (Daniel 2:14)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The Babylonian army",
      "The king's guard",
      "The palace servants",
      "The royal treasury"
    ],
    "correctIndex": 1
  },
  {
    "id": 71,
    "chapter": 2,
    "reference": "2:15",
    "question": "What did Daniel ask Arioch when he approached him? (Daniel 2:15)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Will you let me speak to the king directly?",
      "Who among the wise men failed to answer the king?",
      "Why is the decree from the king so urgent?",
      "How long do I have before I must be brought before the king?"
    ],
    "correctIndex": 2
  },
  {
    "id": 72,
    "chapter": 2,
    "reference": "2:15",
    "question": "What did Arioch do after Daniel questioned him about the decree? (Daniel 2:15)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "He refused to answer and proceeded with the arrest",
      "He reported Daniel's question back to Nebuchadnezzar",
      "He gave Daniel a written copy of the king's decree",
      "He explained the matter to Daniel"
    ],
    "correctIndex": 3
  },
  {
    "id": 73,
    "chapter": 2,
    "reference": "2:16",
    "question": "What did Daniel request of the king after hearing about the decree? (Daniel 2:16)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Time to give the king the interpretation",
      "Permission to pray to his God before answering",
      "An audience before all the wise men of Babylon",
      "A written guarantee of his safety before proceeding"
    ],
    "correctIndex": 0
  },
  {
    "id": 74,
    "chapter": 2,
    "reference": "2:16",
    "question": "What did Daniel promise the king he would provide if given time? (Daniel 2:16)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Both the dream and its interpretation",
      "The interpretation",
      "A written prophecy about the future kingdom",
      "An explanation from the God of heaven"
    ],
    "correctIndex": 1
  },
  {
    "id": 75,
    "chapter": 2,
    "reference": "2:17",
    "question": "What did Daniel do immediately after going to his house following his meeting with the king? (Daniel 2:17)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He fell before God in prayer alone through the night",
      "He wrote down his understanding of the mystery",
      "He made the matter known to Hananiah, Mishael, and Azariah",
      "He summoned the chief Chaldean to consult with him"
    ],
    "correctIndex": 2
  },
  {
    "id": 76,
    "chapter": 2,
    "reference": "2:17",
    "question": "Who were the companions Daniel informed about the matter of the king's decree? (Daniel 2:17)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Shadrach, Meshach, and Abed-Nego",
      "All the wise men of Babylon",
      "Arioch and the chief of the eunuchs",
      "Hananiah, Mishael, and Azariah"
    ],
    "correctIndex": 3
  },
  {
    "id": 77,
    "chapter": 2,
    "reference": "2:18",
    "question": "For what specific purpose did Daniel ask his companions to pray? (Daniel 2:18)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "That they might seek mercies from the God of heaven concerning this secret",
      "That God would confuse the king and cause him to forget his demand",
      "That God would give Daniel a new dream to replace the king's",
      "That God would send an angel to destroy the Babylonian wise men"
    ],
    "correctIndex": 0
  },
  {
    "id": 78,
    "chapter": 2,
    "reference": "2:18",
    "question": "What did Daniel want to avoid by seeking God's revelation of the secret? (Daniel 2:18)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "That the kingdom of Babylon would not fall prematurely",
      "That Daniel and his companions might not perish with the rest of the wise men of Babylon",
      "That the Chaldeans would not falsely interpret the dream",
      "That he would not have to appear before the king again"
    ],
    "correctIndex": 1
  },
  {
    "id": 79,
    "chapter": 2,
    "reference": "2:19",
    "question": "How was the secret of the king's dream revealed to Daniel? (Daniel 2:19)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "An angel appeared to Daniel and spoke the dream aloud",
      "God spoke to Daniel directly in an audible voice",
      "The secret was revealed to Daniel in a night vision",
      "The dream was written on a wall in his room"
    ],
    "correctIndex": 2
  },
  {
    "id": 80,
    "chapter": 2,
    "reference": "2:19",
    "question": "What was Daniel's immediate response after the secret was revealed to him? (Daniel 2:19)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "He blessed the God of heaven"
  },
  {
    "id": 81,
    "chapter": 2,
    "reference": "2:20",
    "question": "Daniel blessed the name of God saying wisdom and might are His. For how long did he say God's name should be blessed? (Daniel 2:20)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Forever and ever"
  },
  {
    "id": 82,
    "chapter": 2,
    "reference": "2:20",
    "question": "In Daniel 2:20, what two attributes of God did Daniel praise? (Daniel 2:20)",
    "difficulty": "medium",
    "type": "fillBlank",
    "answer": "Wisdom and might"
  },
  {
    "id": 83,
    "chapter": 2,
    "reference": "2:21",
    "question": "According to Daniel 2:21, what does God do with kings? (Daniel 2:21)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He judges kings and destroys the wicked",
      "He crowns kings and grants them wisdom",
      "He removes kings and raises up kings",
      "He tests kings and rewards the faithful"
    ],
    "correctIndex": 2
  },
  {
    "id": 84,
    "chapter": 2,
    "reference": "2:21",
    "question": "What does Daniel 2:21 say God gives to the wise and those who know understanding? (Daniel 2:21)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Power to those who seek it and glory to the humble",
      "Riches to the faithful and honor to the upright",
      "Visions to the prophets and words to the preachers",
      "Wisdom to the wise and knowledge to those who know understanding"
    ],
    "correctIndex": 3
  },
  {
    "id": 85,
    "chapter": 2,
    "reference": "2:22",
    "question": "According to Daniel 2:22, what does God reveal? (Daniel 2:22)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Deep and secret things",
      "The hearts of men and their intentions",
      "The future of every kingdom on earth",
      "The sins of nations and their rulers"
    ],
    "correctIndex": 0
  },
  {
    "id": 86,
    "chapter": 2,
    "reference": "2:22",
    "question": "Daniel 2:22 says God knows what is in the darkness. What does light dwell with according to this verse? (Daniel 2:22)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "With the righteous",
      "With Him",
      "In the heavens alone",
      "Among those who seek understanding"
    ],
    "correctIndex": 1
  },
  {
    "id": 87,
    "chapter": 2,
    "reference": "2:23",
    "question": "For what two things did Daniel specifically thank and praise God in 2:23? (Daniel 2:23)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Protection and guidance throughout the night",
      "The spirit of prophecy and the gift of tongues",
      "Wisdom and might, and making known what was asked of Him",
      "Deliverance from death and clarity of thought"
    ],
    "correctIndex": 2
  },
  {
    "id": 88,
    "chapter": 2,
    "reference": "2:23",
    "question": "In Daniel 2:23, whose God did Daniel address in his prayer of thanksgiving? (Daniel 2:23)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "The God of his fathers"
  },
  {
    "id": 89,
    "chapter": 2,
    "reference": "2:24",
    "question": "What did Daniel tell Arioch NOT to do after he received the revelation from God? (Daniel 2:24)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Do not destroy the wise men of Babylon",
      "Do not report back to the king yet",
      "Do not gather the wise men before the king",
      "Do not execute Daniel's companions"
    ],
    "correctIndex": 0
  },
  {
    "id": 90,
    "chapter": 2,
    "reference": "2:24",
    "question": "What request did Daniel make of Arioch regarding his access after receiving the dream's revelation? (Daniel 2:24)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Allow me to first pray before God once more",
      "Bring me before the king, and I will tell the king the interpretation",
      "Gather the wise men so they can hear the dream together",
      "Let me write down the vision before I present it"
    ],
    "correctIndex": 1
  },
  {
    "id": 91,
    "chapter": 2,
    "reference": "2:25",
    "question": "How did Arioch present Daniel to Nebuchadnezzar? (Daniel 2:25)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "He presented Daniel as the wisest of all the Chaldean advisers",
      "He told the king Daniel was a prophet sent from the God of heaven",
      "He said he had found a man of the captives of Judah who would make known the interpretation",
      "He said Daniel had received a special vision the previous night"
    ],
    "correctIndex": 2
  },
  {
    "id": 92,
    "chapter": 2,
    "reference": "2:25",
    "question": "Arioch told the king Daniel was from the captives of which nation? (Daniel 2:25)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Judah"
  },
  {
    "id": 93,
    "chapter": 2,
    "reference": "2:26",
    "question": "By what two names did Nebuchadnezzar call Daniel when questioning him in 2:26? (Daniel 2:26)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Daniel and Belteshazzar",
      "Daniel and Shadrach",
      "Belteshazzar and Meshach",
      "Daniel and the servant of God"
    ],
    "correctIndex": 0
  },
  {
    "id": 94,
    "chapter": 2,
    "reference": "2:26",
    "question": "What did Nebuchadnezzar ask Daniel when he was brought before him? (Daniel 2:26)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Have your gods revealed to you what the gods of Babylon could not?",
      "Are you able to make known to me the dream which I have seen, and its interpretation?",
      "Can you tell me what the wise men of Babylon could not tell?",
      "What wisdom do you possess that the Chaldeans do not have?"
    ],
    "correctIndex": 1
  },
  {
    "id": 95,
    "chapter": 2,
    "reference": "2:27",
    "question": "According to Daniel, which groups of wise men could NOT reveal the mystery to the king? (Daniel 2:27)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Priests, prophets, seers, and scribes",
      "Chaldeans, Medes, Persians, and Babylonians",
      "Wise men, astrologers, magicians, and soothsayers",
      "Sorcerers, diviners, necromancers, and fortune tellers"
    ],
    "correctIndex": 2
  },
  {
    "id": 96,
    "chapter": 2,
    "reference": "2:27-28",
    "question": "Daniel told the king that no wise man was able to reveal the mystery the king demanded. Who alone could reveal it? (Daniel 2:27-28)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Daniel, who had been especially chosen",
      "The spirit of the holy gods",
      "An angel sent from the highest heaven",
      "God in heaven who reveals secrets"
    ],
    "correctIndex": 3
  },
  {
    "id": 97,
    "chapter": 2,
    "reference": "2:28",
    "question": "According to Daniel 2:28, when would the things shown in the dream take place? (Daniel 2:28)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "In the latter days"
  },
  {
    "id": 98,
    "chapter": 2,
    "reference": "2:28",
    "question": "What did Daniel say God in heaven was making known to Nebuchadnezzar through the dream? (Daniel 2:28)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The hidden sins of the king's ancestors",
      "What will be in the latter days",
      "The identity of the greatest kingdom on earth",
      "The day and hour of Babylon's downfall"
    ],
    "correctIndex": 1
  },
  {
    "id": 99,
    "chapter": 2,
    "reference": "2:29",
    "question": "According to Daniel, what was in the king's mind as he lay on his bed that led to the dream? (Daniel 2:29)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Pride about his great kingdom and its power",
      "Worry about enemies who threatened his throne",
      "Thoughts about what would come to pass after this",
      "Curiosity about the gods of the nations he had conquered"
    ],
    "correctIndex": 2
  },
  {
    "id": 100,
    "chapter": 2,
    "reference": "2:29",
    "question": "What kind of thoughts came to Nebuchadnezzar as he lay on his bed, according to Daniel 2:29? (Daniel 2:29)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Thoughts of warfare and conquest",
      "Thoughts about the meaning of the gods",
      "Thoughts of death and what lay beyond",
      "Thoughts about what would happen after this (future events)"
    ],
    "correctIndex": 3
  },
  {
    "id": 101,
    "chapter": 2,
    "reference": "2:30",
    "question": "Why did Daniel say the secret had been revealed to him? (Daniel 2:30)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Not because he had more wisdom than any living, but so the interpretation might be made known to the king",
      "Because he had prayed more fervently than his companions",
      "Because God chose Daniel as the greatest prophet of his time",
      "Because Daniel was the only one in Babylon who feared God"
    ],
    "correctIndex": 0
  },
  {
    "id": 102,
    "chapter": 2,
    "reference": "2:30",
    "question": "What does Daniel emphasize about himself in verse 30 regarding the revelation he received? (Daniel 2:30)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He was the most faithful of all the Israelites in Babylon",
      "He did not have more wisdom than any living man",
      "He was divinely appointed from birth for this purpose",
      "He alone among his companions had been given a vision"
    ],
    "correctIndex": 1
  },
  {
    "id": 103,
    "chapter": 2,
    "reference": "2:31",
    "question": "What was the first thing described in the great image Nebuchadnezzar saw in his dream? (Daniel 2:31)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "A stone cut without hands that struck a great statue",
      "Four beasts rising out of a great sea",
      "A great image whose splendor was excellent and whose form was awesome",
      "A mighty tree that reached the heavens"
    ],
    "correctIndex": 2
  },
  {
    "id": 104,
    "chapter": 2,
    "reference": "2:31",
    "question": "How is the appearance of the great image in Daniel 2:31 described? (Daniel 2:31)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Frightening in size but dull in color",
      "Bright as the sun and loud as thunder",
      "Giant in height but broken in its lower parts",
      "Excellent splendor and awesome form"
    ],
    "correctIndex": 3
  },
  {
    "id": 105,
    "chapter": 2,
    "reference": "2:32",
    "question": "What were the head and breast/arms of the great image made of respectively? (Daniel 2:32)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Head of fine gold; chest and arms of silver",
      "Head of silver; chest and arms of gold",
      "Head of gold; chest and arms of bronze",
      "Head of iron; chest and arms of gold"
    ],
    "correctIndex": 0
  },
  {
    "id": 106,
    "chapter": 2,
    "reference": "2:32",
    "question": "What material made up the belly and thighs of the great image? (Daniel 2:32)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Silver",
      "Bronze",
      "Iron",
      "Clay"
    ],
    "correctIndex": 1
  },
  {
    "id": 107,
    "chapter": 2,
    "reference": "2:33",
    "question": "What were the legs of the great image made of? (Daniel 2:33)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Bronze",
      "Clay",
      "Iron",
      "Wood"
    ],
    "correctIndex": 2
  },
  {
    "id": 108,
    "chapter": 2,
    "reference": "2:33",
    "question": "What mixture made up the feet and toes of the great image? (Daniel 2:33)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Partly iron and partly clay"
  },
  {
    "id": 109,
    "chapter": 2,
    "reference": "2:34",
    "question": "How was the stone that struck the image described? (Daniel 2:34)",
    "difficulty": "medium",
    "type": "fillBlank",
    "answer": "Cut out without hands"
  },
  {
    "id": 110,
    "chapter": 2,
    "reference": "2:34",
    "question": "Which part of the great image did the stone strike? (Daniel 2:34)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Its head of gold",
      "Its feet of iron and clay",
      "Its chest of silver",
      "Its belly of bronze"
    ],
    "correctIndex": 1
  },
  {
    "id": 111,
    "chapter": 2,
    "reference": "2:35",
    "question": "What happened to all the materials of the great image after being struck by the stone? (Daniel 2:35)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "They sank into the ground and were buried forever",
      "They melted into a pool of molten metal",
      "They became like chaff from a summer threshing floor and the wind carried them away",
      "They were scattered across the four corners of the earth"
    ],
    "correctIndex": 2
  },
  {
    "id": 112,
    "chapter": 2,
    "reference": "2:35",
    "question": "What did the stone become after striking the great image in Daniel 2:35? (Daniel 2:35)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "A shining temple of God",
      "A golden throne for the King of heaven",
      "A river of living water",
      "A great mountain that filled the whole earth"
    ],
    "correctIndex": 3
  },
  {
    "id": 113,
    "chapter": 2,
    "reference": "2:36",
    "question": "After describing the dream, what did Daniel say he would now tell the king? (Daniel 2:36)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The interpretation of it",
      "The name of the kingdom that would follow Babylon",
      "The time when these events would occur",
      "The identity of the stone cut without hands"
    ],
    "correctIndex": 0
  },
  {
    "id": 114,
    "chapter": 2,
    "reference": "2:36",
    "question": "Daniel said, 'This is the dream; now we will tell the interpretation.' Who does 'we' refer to? (Daniel 2:36)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Daniel and his three companions",
      "Daniel and the God of heaven who revealed it",
      "Daniel and the king's wise men",
      "Daniel and Arioch"
    ],
    "correctIndex": 1
  },
  {
    "id": 115,
    "chapter": 2,
    "reference": "2:37",
    "question": "What title did Daniel give Nebuchadnezzar in Daniel 2:37? (Daniel 2:37)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The greatest ruler of all time",
      "Lord over all kingdoms",
      "A king of kings",
      "Ruler of the four corners of the earth"
    ],
    "correctIndex": 2
  },
  {
    "id": 116,
    "chapter": 2,
    "reference": "2:37",
    "question": "Who gave Nebuchadnezzar his kingdom, power, strength, and glory according to Daniel 2:37? (Daniel 2:37)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "His own military conquest",
      "The gods of Babylon",
      "His royal ancestors",
      "The God of heaven"
    ],
    "correctIndex": 3
  },
  {
    "id": 117,
    "chapter": 2,
    "reference": "2:38",
    "question": "In Daniel 2:38, what does Daniel say God gave into Nebuchadnezzar's hand? (Daniel 2:38)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Wherever children of men dwell, the beasts of the field, and the birds of the heaven",
      "All the kingdoms from the east to the west",
      "The treasuries of every nation on earth",
      "The armies of all the nations surrounding Babylon"
    ],
    "correctIndex": 0
  },
  {
    "id": 118,
    "chapter": 2,
    "reference": "2:38",
    "question": "Which part of the great image did Daniel say represented Nebuchadnezzar? (Daniel 2:38)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The chest of silver",
      "The head of gold",
      "The belly of bronze",
      "The legs of iron"
    ],
    "correctIndex": 1
  },
  {
    "id": 119,
    "chapter": 2,
    "reference": "2:39",
    "question": "How did Daniel describe the kingdom that would arise after Babylon (the silver kingdom)? (Daniel 2:39)",
    "difficulty": "medium",
    "type": "fillBlank",
    "answer": "Another kingdom inferior to yours"
  },
  {
    "id": 120,
    "chapter": 2,
    "reference": "2:39",
    "question": "What would the third kingdom (bronze) rule over, according to Daniel 2:39? (Daniel 2:39)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Only the eastern nations",
      "The territories formerly held by Babylon",
      "All kingdoms west of the great river",
      "All the earth"
    ],
    "correctIndex": 3
  },
  {
    "id": 121,
    "chapter": 2,
    "reference": "2:40",
    "question": "How is the fourth kingdom (iron) described in Daniel 2:40? (Daniel 2:40)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "As strong as iron — breaking in pieces and shattering all things",
      "Slow to rise but impossible to defeat once established",
      "The greatest in glory though smallest in territory",
      "Divided from the start but covering the whole earth"
    ],
    "correctIndex": 0
  },
  {
    "id": 122,
    "chapter": 2,
    "reference": "2:40",
    "question": "What does iron do to all the other metals according to the description of the fourth kingdom in Daniel 2:40? (Daniel 2:40)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "It covers and absorbs all other metals",
      "It crushes and breaks all in pieces",
      "It refines and purifies all other metals",
      "It melts and reforms the other metals"
    ],
    "correctIndex": 1
  },
  {
    "id": 123,
    "chapter": 2,
    "reference": "2:41",
    "question": "What did the mixture of iron and clay in the feet and toes represent according to Daniel 2:41? (Daniel 2:41)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "A kingdom of mixed races",
      "A kingdom that would be conquered quickly",
      "A divided kingdom",
      "A kingdom with two rival kings"
    ],
    "correctIndex": 2
  },
  {
    "id": 124,
    "chapter": 2,
    "reference": "2:41",
    "question": "What quality did the iron in the feet still possess, even though mixed with clay? (Daniel 2:41)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The brilliance of gold",
      "The purity of silver",
      "The hardness of bronze",
      "The strength of iron"
    ],
    "correctIndex": 3
  },
  {
    "id": 125,
    "chapter": 2,
    "reference": "2:42",
    "question": "What did the toes being partly iron and partly clay indicate about the kingdom? (Daniel 2:42)",
    "difficulty": "hard",
    "type": "fillBlank",
    "answer": "Partly strong and partly fragile"
  },
  {
    "id": 126,
    "chapter": 2,
    "reference": "2:42",
    "question": "The toes of the feet of the great image showed the kingdom would be partly strong and partly: (Daniel 2:42)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Corrupt",
      "Brittle/fragile",
      "Wealthy",
      "Peaceful"
    ],
    "correctIndex": 1
  },
  {
    "id": 127,
    "chapter": 2,
    "reference": "2:43",
    "question": "According to Daniel 2:43, what would the mixing of iron and clay (intermarriage among kingdoms) fail to produce? (Daniel 2:43)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "A lasting alliance between two great powers",
      "A unified world kingdom under one ruler",
      "They will not adhere to one another",
      "Strong offspring capable of ruling the earth"
    ],
    "correctIndex": 2
  },
  {
    "id": 128,
    "chapter": 2,
    "reference": "2:43",
    "question": "How does Daniel 2:43 describe the mixing that would take place among the kingdoms of the iron-clay feet? (Daniel 2:43)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "They will fight with one another in constant wars",
      "They will be bound together by treaty",
      "They will divide the world among their rulers",
      "They will mingle with the seed of men"
    ],
    "correctIndex": 3
  },
  {
    "id": 129,
    "chapter": 2,
    "reference": "2:44",
    "question": "In the days of which kingdoms would the God of heaven set up His kingdom, according to Daniel 2:44? (Daniel 2:44)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "In the days of these kings",
      "After all earthly kingdoms had ended",
      "At the beginning of the first kingdom",
      "When a righteous man sat on the earthly throne"
    ],
    "correctIndex": 0
  },
  {
    "id": 130,
    "chapter": 2,
    "reference": "2:44",
    "question": "What distinguishes the kingdom God will set up from all the kingdoms of men, according to Daniel 2:44? (Daniel 2:44)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "It shall be ruled by a king chosen from Israel",
      "It shall never be destroyed and shall stand forever",
      "It shall cover all nations simultaneously at once",
      "It shall be invisible to the eyes of earthly rulers"
    ],
    "correctIndex": 1
  },
  {
    "id": 131,
    "chapter": 2,
    "reference": "2:45",
    "question": "The stone cut without hands from the mountain represents what, according to Daniel 2:45? (Daniel 2:45)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "The people of God who would destroy the kingdoms of men",
      "A great military power arising from a small nation",
      "The great God making known what will come to pass",
      "The law of God which would overthrow human traditions"
    ],
    "correctIndex": 2
  },
  {
    "id": 132,
    "chapter": 2,
    "reference": "2:45",
    "question": "How did Daniel describe the certainty of the dream and its interpretation to the king? (Daniel 2:45)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "The dream is possible and its fulfillment is near",
      "The dream will stand though its timing is uncertain",
      "The dream is sealed and will be opened in its time",
      "The dream is certain and its interpretation is sure"
    ],
    "correctIndex": 3
  },
  {
    "id": 133,
    "chapter": 2,
    "reference": "2:46",
    "question": "What did Nebuchadnezzar do when he heard Daniel's interpretation? (Daniel 2:46)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "He fell on his face and prostrated himself before Daniel",
      "He stood and clapped in acknowledgment of Daniel's wisdom",
      "He wept and tore his robes in humility",
      "He immediately sent the court to verify the interpretation"
    ],
    "correctIndex": 0
  },
  {
    "id": 134,
    "chapter": 2,
    "reference": "2:46",
    "question": "Besides prostrating himself, what else did Nebuchadnezzar command to be offered to Daniel? (Daniel 2:46)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Gold and precious stones",
      "An offering and incense",
      "A royal robe and a crown",
      "A feast in his honor"
    ],
    "correctIndex": 1
  },
  {
    "id": 135,
    "chapter": 2,
    "reference": "2:47",
    "question": "What confession did Nebuchadnezzar make about the God of Israel after Daniel's interpretation? (Daniel 2:47)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Your God is mightier than all the gods of Babylon",
      "The God of Israel alone deserves to be worshipped by all nations",
      "Truly your God is the God of gods, Lord of kings, and a revealer of secrets",
      "Your God has given you wisdom beyond all the wise men of the earth"
    ],
    "correctIndex": 2
  },
  {
    "id": 136,
    "chapter": 2,
    "reference": "2:47",
    "question": "In Daniel 2:47, what reason did Nebuchadnezzar give for acknowledging Daniel's God? (Daniel 2:47)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Since you survived the threat of death",
      "Since your God sent an angel to assist you",
      "Since the dream came to pass exactly as you said",
      "Since you could reveal this secret"
    ],
    "correctIndex": 3
  },
  {
    "id": 137,
    "chapter": 2,
    "reference": "2:48",
    "question": "What positions did Nebuchadnezzar give Daniel after the dream interpretation? (Daniel 2:48)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "He made him a great man, gave him many gifts, made him ruler over the whole province of Babylon, and chief administrator over the wise men",
      "He made him his personal advisor and gave him a palace",
      "He appointed him as the keeper of the royal treasury",
      "He gave him command over the Babylonian army"
    ],
    "correctIndex": 0
  },
  {
    "id": 138,
    "chapter": 2,
    "reference": "2:48",
    "question": "As a result of interpreting the dream, Daniel became ruler over which province? (Daniel 2:48)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The province of Judah",
      "The whole province of Babylon",
      "The province of the Chaldeans",
      "The eastern province of the kingdom"
    ],
    "correctIndex": 1
  },
  {
    "id": 139,
    "chapter": 2,
    "reference": "2:49",
    "question": "What did Daniel request of Nebuchadnezzar regarding his three companions? (Daniel 2:49)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "That they be given freedom to return to Jerusalem",
      "That they be appointed as judges over all the provinces",
      "That he set Shadrach, Meshach, and Abed-Nego over the affairs of the province of Babylon",
      "That they be promoted to the rank of chief wise men"
    ],
    "correctIndex": 2
  },
  {
    "id": 140,
    "chapter": 2,
    "reference": "2:49",
    "question": "Where did Daniel himself remain after his companions were appointed to their positions? (Daniel 2:49)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "In the province of Babylon with his companions",
      "In the royal palace with Nebuchadnezzar",
      "In the house of the wise men",
      "In the gate of the king"
    ],
    "correctIndex": 3
  },
  {
    "id": 141,
    "chapter": 3,
    "reference": "3:1",
    "question": "What were the dimensions of the gold image Nebuchadnezzar set up? (Daniel 3:1)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Sixty cubits high and six cubits wide",
      "Forty cubits high and four cubits wide",
      "One hundred cubits high and ten cubits wide",
      "Seventy cubits high and seven cubits wide"
    ],
    "correctIndex": 0
  },
  {
    "id": 142,
    "chapter": 3,
    "reference": "3:1",
    "question": "In which plain was the golden image set up by Nebuchadnezzar? (Daniel 3:1)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The plain of Megiddo in Canaan",
      "The plain of Dura in the province of Babylon",
      "The plain of Shinar outside the city",
      "The valley of Esdraelon near the Euphrates"
    ],
    "correctIndex": 1
  },
  {
    "id": 143,
    "chapter": 3,
    "reference": "3:2",
    "question": "Which of the following officials was NOT listed as being summoned to the dedication of the golden image? (Daniel 3:2)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The satraps",
      "The treasurers",
      "The scribes and teachers of the law",
      "The judges"
    ],
    "correctIndex": 2
  },
  {
    "id": 144,
    "chapter": 3,
    "reference": "3:2",
    "question": "For what event were all the government officials of the provinces summoned together in Daniel 3:2? (Daniel 3:2)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The coronation of Nebuchadnezzar as king of kings",
      "The signing of a new law for all provinces",
      "The victory celebration after a great military conquest",
      "The dedication of the image Nebuchadnezzar had set up"
    ],
    "correctIndex": 3
  },
  {
    "id": 145,
    "chapter": 3,
    "reference": "3:3",
    "question": "What did all the officials do when they came to the dedication of the image? (Daniel 3:3)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "They stood before the image that Nebuchadnezzar had set up",
      "They bowed down before it immediately upon arrival",
      "They circled the image three times in procession",
      "They offered gifts and sacrifices at the base of the image"
    ],
    "correctIndex": 0
  },
  {
    "id": 146,
    "chapter": 3,
    "reference": "3:3",
    "question": "Which groups of leaders are mentioned as gathering at the dedication of the image in Daniel 3:3? (Daniel 3:3)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Priests, Levites, scribes, and teachers of the law",
      "Satraps, administrators, governors, advisors, treasurers, judges, magistrates, and all provincial officials",
      "Military commanders, warriors, and captains of the guard",
      "Wise men, astrologers, magicians, and soothsayers"
    ],
    "correctIndex": 1
  },
  {
    "id": 147,
    "chapter": 3,
    "reference": "3:4",
    "question": "What command did the herald proclaim to the peoples? (Daniel 3:4)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Hear ye, hear ye, all who dwell in the province of Babylon",
      "Let all who fear the king come forward and bow",
      "To you it is commanded, O peoples, nations, and languages",
      "The king commands all his subjects to worship the golden image"
    ],
    "correctIndex": 2
  },
  {
    "id": 148,
    "chapter": 3,
    "reference": "3:4",
    "question": "What three categories of people were included in the herald's command in Daniel 3:4? (Daniel 3:4)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Peoples, nations, and languages"
  },
  {
    "id": 149,
    "chapter": 3,
    "reference": "3:5",
    "question": "When were the people commanded to bow down and worship the golden image? (Daniel 3:5)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "At the moment they heard the sound of the horn, flute, harp, lyre, and psaltery, in symphony with all kinds of music",
      "When the king raised his golden scepter toward the image",
      "At the rising of the sun each morning",
      "When the herald cried out from the top of the image"
    ],
    "correctIndex": 0
  },
  {
    "id": 150,
    "chapter": 3,
    "reference": "3:5",
    "question": "How many musical instruments are specifically listed in Daniel 3:5? (Daniel 3:5)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Three (harp, lyre, and flute)",
      "Six (horn, flute, harp, lyre, psaltery, and symphony)",
      "Four (drum, horn, flute, and lyre)",
      "Seven (trumpet, horn, flute, harp, lyre, psaltery, and drum)"
    ],
    "correctIndex": 1
  },
  {
    "id": 151,
    "chapter": 3,
    "reference": "3:6",
    "question": "What punishment was decreed for anyone who did not bow down to worship the golden image? (Daniel 3:6)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Death by the sword at the king's command",
      "Exile from the province of Babylon forever",
      "Immediately cast into the midst of a burning fiery furnace",
      "Imprisonment until they agreed to worship"
    ],
    "correctIndex": 2
  },
  {
    "id": 152,
    "chapter": 3,
    "reference": "3:6",
    "question": "When was the punishment for not worshipping the image to be applied? (Daniel 3:6)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "After three warnings were given",
      "At the end of the dedication ceremony",
      "After the king reviewed each case personally",
      "Immediately (that very hour)"
    ],
    "correctIndex": 3
  },
  {
    "id": 153,
    "chapter": 3,
    "reference": "3:7",
    "question": "What did all the peoples do when they heard the music in Daniel 3:7? (Daniel 3:7)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "All the peoples, nations, and languages fell down and worshipped the golden image",
      "Some bowed down but others secretly refused",
      "All stood and listened carefully before bowing",
      "All except the Israelites bowed down and worshipped"
    ],
    "correctIndex": 0
  },
  {
    "id": 154,
    "chapter": 3,
    "reference": "3:7",
    "question": "The response of the crowd in Daniel 3:7 shows what about the power of fear? (Daniel 3:7)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Partial compliance with some quietly resisting",
      "Immediate and complete compliance by all peoples",
      "Confusion about what the king actually wanted",
      "Rebellion by a small group of foreigners"
    ],
    "correctIndex": 1
  },
  {
    "id": 155,
    "chapter": 3,
    "reference": "3:8",
    "question": "Who came forward at that time to accuse the Jews before Nebuchadnezzar? (Daniel 3:8)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Certain Chaldeans"
  },
  {
    "id": 156,
    "chapter": 3,
    "reference": "3:8",
    "question": "How is the act of the Chaldeans toward the Jews described in Daniel 3:8? (Daniel 3:8)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "They reported the Jews out of genuine loyalty to the king",
      "They informed the king out of concern for the kingdom's unity",
      "They confronted the Jews directly before going to the king",
      "They came forward and accused the Jews maliciously"
    ],
    "correctIndex": 3
  },
  {
    "id": 157,
    "chapter": 3,
    "reference": "3:9",
    "question": "How did the Chaldean accusers begin their speech to the king? (Daniel 3:9)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "O king, live forever!",
      "Great king, hear the words of your servants",
      "May the king's glory be exalted forever!",
      "We bring urgent news to the king's ears"
    ],
    "correctIndex": 0
  },
  {
    "id": 158,
    "chapter": 3,
    "reference": "3:9",
    "question": "The greeting 'O king, live forever' in Daniel 3:9 shows what about the accusers? (Daniel 3:9)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "They genuinely wished the king good health",
      "They were courtiers using formal palace protocol",
      "They were unfamiliar with royal customs",
      "They were priests performing a religious greeting"
    ],
    "correctIndex": 1
  },
  {
    "id": 159,
    "chapter": 3,
    "reference": "3:10",
    "question": "What law did the Chaldeans remind the king of at the opening of their accusation? (Daniel 3:10)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "That all foreigners must pay tribute to the king at each festival",
      "That all residents of Babylon must register their loyalty annually",
      "That every man who heard the music must fall down and worship the golden image",
      "That any who dishonored the king's gods must be brought to trial"
    ],
    "correctIndex": 2
  },
  {
    "id": 160,
    "chapter": 3,
    "reference": "3:10",
    "question": "The Chaldeans said the king had made a decree. Who was included in that decree according to Daniel 3:10? (Daniel 3:10)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Only those holding positions in the king's court",
      "All residents of Babylon regardless of age",
      "Every official appointed over the provinces",
      "Every man who hears the sound of the music"
    ],
    "correctIndex": 3
  },
  {
    "id": 161,
    "chapter": 3,
    "reference": "3:11",
    "question": "According to the Chaldeans in Daniel 3:11, what was the penalty for not falling down and worshipping? (Daniel 3:11)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Cast into the midst of a burning fiery furnace",
      "Death by the sword immediately",
      "Exile beyond the borders of the kingdom",
      "Imprisonment and confiscation of all property"
    ],
    "correctIndex": 0
  },
  {
    "id": 162,
    "chapter": 3,
    "reference": "3:11",
    "question": "The Chaldeans repeated the punishment for non-worship in verse 11 to achieve what effect? (Daniel 3:11)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "To inform the king of a law he may have forgotten",
      "To reinforce the king's own decree and make the accusation more forceful",
      "To demonstrate their own knowledge of royal law",
      "To frighten the three Hebrews who were listening"
    ],
    "correctIndex": 1
  },
  {
    "id": 163,
    "chapter": 3,
    "reference": "3:12",
    "question": "Who specifically were named in the accusation brought to Nebuchadnezzar? (Daniel 3:12)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Daniel, Hananiah, and Mishael",
      "Belteshazzar, Shadrach, and Meshach",
      "Shadrach, Meshach, and Abed-Nego",
      "Azariah, Hananiah, and Daniel"
    ],
    "correctIndex": 2
  },
  {
    "id": 164,
    "chapter": 3,
    "reference": "3:12",
    "question": "What position did the Chaldeans say the accused men held, which made their refusal worse? (Daniel 3:12)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "They were members of the king's personal advisory council",
      "They were guards of the royal treasury",
      "They were appointed ambassadors to foreign nations",
      "They had been set over the affairs of the province of Babylon"
    ],
    "correctIndex": 3
  },
  {
    "id": 165,
    "chapter": 3,
    "reference": "3:13",
    "question": "How did Nebuchadnezzar respond when he heard the accusation against the three Hebrews? (Daniel 3:13)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "In rage and fury he commanded that they be brought before him",
      "He calmly summoned them for questioning",
      "He immediately ordered them thrown into the furnace",
      "He called for an investigation before making a decision"
    ],
    "correctIndex": 0
  },
  {
    "id": 166,
    "chapter": 3,
    "reference": "3:13",
    "question": "The king's emotional state in Daniel 3:13 is described as: (Daniel 3:13)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Surprise and bewilderment",
      "Rage and fury",
      "Disappointment and sorrow",
      "Calm but stern"
    ],
    "correctIndex": 1
  },
  {
    "id": 167,
    "chapter": 3,
    "reference": "3:14",
    "question": "What question did Nebuchadnezzar put to Shadrach, Meshach, and Abed-Nego? (Daniel 3:14)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Do you not know the penalty for refusing the king's command?",
      "Who gave you permission to disobey the decree of the king?",
      "Is it true that you do not serve my gods or worship the golden image I have set up?",
      "Why have you disgraced yourselves before all the people of Babylon?"
    ],
    "correctIndex": 2
  },
  {
    "id": 168,
    "chapter": 3,
    "reference": "3:14",
    "question": "The king's question in Daniel 3:14 suggests he gave the three men an opportunity to do what? (Daniel 3:14)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Immediately bow down and worship the image",
      "Name others who had also refused to worship",
      "Request a trial before the council of nobles",
      "Deny the accusation or explain themselves before judgment"
    ],
    "correctIndex": 3
  },
  {
    "id": 169,
    "chapter": 3,
    "reference": "3:15",
    "question": "What did Nebuchadnezzar offer Shadrach, Meshach, and Abed-Nego as a last chance? (Daniel 3:15)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "If they were ready at that moment to fall down and worship the image when they heard the music, well and good",
      "Three days to reconsider before facing punishment",
      "The option to return to their homeland in exchange for compliance",
      "A private meeting with the king's priests to resolve the matter"
    ],
    "correctIndex": 0
  },
  {
    "id": 170,
    "chapter": 3,
    "reference": "3:15",
    "question": "What challenge did Nebuchadnezzar direct toward their God in Daniel 3:15? (Daniel 3:15)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Does your God have power equal to the great god of Babylon?",
      "Who is the god who will deliver you from my hands?",
      "Let your God speak now if He has anything to say",
      "Your God cannot protect you within these borders"
    ],
    "correctIndex": 1
  },
  {
    "id": 171,
    "chapter": 3,
    "reference": "3:16",
    "question": "What was the opening of the three men's response to Nebuchadnezzar's threat? (Daniel 3:16)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "O king, live forever; hear our plea",
      "We are prepared to die rather than dishonor our God",
      "O Nebuchadnezzar, we have no need to answer you in this matter",
      "Great king, we cannot worship an image of gold"
    ],
    "correctIndex": 2
  },
  {
    "id": 172,
    "chapter": 3,
    "reference": "3:16",
    "question": "What does the response of Shadrach, Meshach, and Abed-Nego in Daniel 3:16 reveal about their attitude? (Daniel 3:16)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "They were afraid and needed time to prepare an answer",
      "They wanted to explain their faith in detail to the king",
      "They were asking for mercy from the king",
      "They did not feel obligated to defend themselves before the king"
    ],
    "correctIndex": 3
  },
  {
    "id": 173,
    "chapter": 3,
    "reference": "3:17",
    "question": "What did Shadrach, Meshach, and Abed-Nego say their God was able to do? (Daniel 3:17)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Deliver them from the burning fiery furnace and from the king's hand",
      "Destroy the golden image by a miracle",
      "Strike the king with sudden illness if he proceeded",
      "Send an angel to fight on their behalf"
    ],
    "correctIndex": 0
  },
  {
    "id": 174,
    "chapter": 3,
    "reference": "3:17",
    "question": "According to Daniel 3:17, what did the three men express confidence in? (Daniel 3:17)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "That God would destroy Nebuchadnezzar's kingdom if he proceeded",
      "That their God whom they served was able to deliver them",
      "That God would use their death as a testimony to the nations",
      "That God had already spoken to them in a dream the previous night"
    ],
    "correctIndex": 1
  },
  {
    "id": 175,
    "chapter": 3,
    "reference": "3:18",
    "question": "What did the three men say they would NOT do even if God chose not to deliver them? (Daniel 3:18)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Remain in Babylon or serve in the king's palace",
      "Deny their faith publicly before the crowds",
      "Serve the king's gods or worship the golden image",
      "Speak against the king or his decree"
    ],
    "correctIndex": 2
  },
  {
    "id": 176,
    "chapter": 3,
    "reference": "3:18",
    "question": "The statement 'But if not' in Daniel 3:18 shows that the three men's faith was: (Daniel 3:18)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Weak — they were not sure God would save them",
      "Conditional — based on whether God proved Himself",
      "Defiant — a challenge to the king rather than a declaration of faith",
      "Unconditional — not dependent on God's deliverance"
    ],
    "correctIndex": 3
  },
  {
    "id": 177,
    "chapter": 3,
    "reference": "3:19",
    "question": "How did Nebuchadnezzar's attitude change toward the three men after their answer? (Daniel 3:19)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "His image changed and he commanded the furnace heated seven times more than usual",
      "He became sympathetic and reduced their punishment",
      "He ordered them imprisoned rather than executed",
      "He tried one more time to persuade them to comply"
    ],
    "correctIndex": 0
  },
  {
    "id": 178,
    "chapter": 3,
    "reference": "3:19",
    "question": "How many times hotter did Nebuchadnezzar order the furnace to be heated? (Daniel 3:19)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Three times hotter than normal",
      "Seven times more than it was usually heated",
      "Ten times the normal temperature",
      "Forty times the normal intensity"
    ],
    "correctIndex": 1
  },
  {
    "id": 179,
    "chapter": 3,
    "reference": "3:20",
    "question": "Who were ordered to bind Shadrach, Meshach, and Abed-Nego? (Daniel 3:20)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The palace servants and eunuchs",
      "The Chaldeans who had accused them",
      "Certain mighty men of valor who were in his army",
      "The city guards and magistrates"
    ],
    "correctIndex": 2
  },
  {
    "id": 180,
    "chapter": 3,
    "reference": "3:20",
    "question": "What were the three men commanded to be cast into after being bound? (Daniel 3:20)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "A pit filled with wild animals",
      "A deep cistern beneath the palace",
      "The river that ran through the city",
      "The burning fiery furnace"
    ],
    "correctIndex": 3
  },
  {
    "id": 181,
    "chapter": 3,
    "reference": "3:21",
    "question": "In what condition were the three men thrown into the furnace? (Daniel 3:21)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Bound in their coats, their trousers, their turbans, and their other garments",
      "Stripped of all their clothing to humiliate them",
      "Dressed only in their royal robes",
      "Chained together at the hands and feet"
    ],
    "correctIndex": 0
  },
  {
    "id": 182,
    "chapter": 3,
    "reference": "3:21",
    "question": "Which of the following was NOT mentioned as part of the clothing the men were wearing when thrown in? (Daniel 3:21)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Their coats",
      "Their sandals",
      "Their turbans",
      "Their trousers"
    ],
    "correctIndex": 1
  },
  {
    "id": 183,
    "chapter": 3,
    "reference": "3:22",
    "question": "What happened to the soldiers who threw Shadrach, Meshach, and Abed-Nego into the furnace? (Daniel 3:22)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "They were blinded by the intense light of the flame",
      "They survived but were burned severely",
      "The flame of the fire killed those men who took them up",
      "They fled in terror at what they saw"
    ],
    "correctIndex": 2
  },
  {
    "id": 184,
    "chapter": 3,
    "reference": "3:22",
    "question": "Why did the soldiers who threw the three men into the furnace die? (Daniel 3:22)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "God struck them down as a sign of His power",
      "They were pushed into the furnace by the crowd",
      "They fell in along with the three men",
      "The king's command was urgent and the furnace was exceedingly hot"
    ],
    "correctIndex": 3
  },
  {
    "id": 185,
    "chapter": 3,
    "reference": "3:23",
    "question": "What happened to Shadrach, Meshach, and Abed-Nego when they fell into the furnace? (Daniel 3:23)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "They fell bound into the midst of the burning fiery furnace",
      "They were immediately freed of their bonds",
      "They cried out to God and were immediately transported out",
      "They stood upright in the fire unharmed from the start"
    ],
    "correctIndex": 0
  },
  {
    "id": 186,
    "chapter": 3,
    "reference": "3:23",
    "question": "These three men, Shadrach, Meshach, and Abed-Nego, fell into the furnace: (Daniel 3:23)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Freed from their ropes",
      "Bound",
      "Praying aloud",
      "With their hands raised to heaven"
    ],
    "correctIndex": 1
  },
  {
    "id": 187,
    "chapter": 3,
    "reference": "3:24",
    "question": "What startled Nebuchadnezzar and caused him to rise in haste? (Daniel 3:24)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He heard the three men singing songs of praise inside the fire",
      "An earthquake shook the palace just after the men were thrown in",
      "He saw four men loose, walking in the midst of the fire, unhurt",
      "The furnace suddenly stopped burning"
    ],
    "correctIndex": 2
  },
  {
    "id": 188,
    "chapter": 3,
    "reference": "3:24",
    "question": "Who did the king consult after being astonished by what he saw in the furnace? (Daniel 3:24)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "His chief astrologers",
      "The Chaldeans who had made the accusation",
      "His military commanders",
      "His counselors"
    ],
    "correctIndex": 3
  },
  {
    "id": 189,
    "chapter": 3,
    "reference": "3:25",
    "question": "How many figures did Nebuchadnezzar see walking in the furnace? (Daniel 3:25)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Four"
  },
  {
    "id": 190,
    "chapter": 3,
    "reference": "3:25",
    "question": "How did Nebuchadnezzar describe the fourth figure walking in the furnace? (Daniel 3:25)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Like a great angel of fire",
      "Like the Son of God",
      "Like a heavenly being dressed in white",
      "Like a warrior of great power"
    ],
    "correctIndex": 1
  },
  {
    "id": 191,
    "chapter": 3,
    "reference": "3:26",
    "question": "How did Nebuchadnezzar address Shadrach, Meshach, and Abed-Nego when he called them out? (Daniel 3:26)",
    "difficulty": "medium",
    "type": "fillBlank",
    "answer": "Servants of the Most High God"
  },
  {
    "id": 192,
    "chapter": 3,
    "reference": "3:26",
    "question": "After the king called them, what did Shadrach, Meshach, and Abed-Nego do? (Daniel 3:26)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "They first bowed in prayer before coming out",
      "They called back asking the king to come to them",
      "They walked out only after the fire was extinguished",
      "They came from the midst of the fire"
    ],
    "correctIndex": 3
  },
  {
    "id": 193,
    "chapter": 3,
    "reference": "3:27",
    "question": "What did the officials observe when they gathered around Shadrach, Meshach, and Abed-Nego after they came out of the furnace? (Daniel 3:27)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The fire had no power over their bodies; not a hair was singed, nor were their garments affected, nor was the smell of fire on them",
      "Their clothing was burned away but their bodies were untouched",
      "They were slightly burned but otherwise unharmed",
      "Their hair and clothing were unharmed but they smelled of smoke"
    ],
    "correctIndex": 0
  },
  {
    "id": 194,
    "chapter": 3,
    "reference": "3:27",
    "question": "Which of the following was specifically stated as NOT being harmed on the three men after the furnace? (Daniel 3:27)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Not a single binding remained on them",
      "Not a hair of their head was singed",
      "Not a drop of sweat was on them",
      "Not a mark was found on their faces"
    ],
    "correctIndex": 1
  },
  {
    "id": 195,
    "chapter": 3,
    "reference": "3:28",
    "question": "What did Nebuchadnezzar say the three men had done that proved their faith? (Daniel 3:28)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "They called upon their God in faith and He answered them",
      "They refused to bow even when given multiple opportunities to repent",
      "They yielded their bodies that they should not serve nor worship any god except their own God",
      "They stood together as one before the king's command"
    ],
    "correctIndex": 2
  },
  {
    "id": 196,
    "chapter": 3,
    "reference": "3:28",
    "question": "Nebuchadnezzar said God had sent His angel to do what in Daniel 3:28? (Daniel 3:28)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Cool the flames of the furnace to protect the men",
      "Fight against the soldiers who threw them in",
      "Carry them out of the furnace before the flames reached them",
      "Deliver His servants who trusted in Him"
    ],
    "correctIndex": 3
  },
  {
    "id": 197,
    "chapter": 3,
    "reference": "3:29",
    "question": "What new decree did Nebuchadnezzar issue after witnessing the miracle? (Daniel 3:29)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Every people, nation, or language that speaks anything amiss against their God shall be cut in pieces and their houses made a refuse heap",
      "Every person in the kingdom must worship the God of Shadrach, Meshach, and Abed-Nego",
      "The golden image must be melted down and a new temple built for the God of Israel",
      "All who refuse to honor the God of heaven shall be exiled from Babylon"
    ],
    "correctIndex": 0
  },
  {
    "id": 198,
    "chapter": 3,
    "reference": "3:29",
    "question": "What reason did Nebuchadnezzar give for his new decree in Daniel 3:29? (Daniel 3:29)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The God of the Hebrews is the greatest god of all the nations",
      "There is no other god who can deliver like this",
      "He feared that the God of heaven would destroy his kingdom",
      "He was ashamed of how he had treated the servants of God"
    ],
    "correctIndex": 1
  },
  {
    "id": 199,
    "chapter": 3,
    "reference": "3:30",
    "question": "What did the king do for Shadrach, Meshach, and Abed-Nego after the miracle? (Daniel 3:30)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "He sent them back to Jerusalem as honored ambassadors",
      "He invited them to live permanently in the royal palace",
      "The king promoted Shadrach, Meshach, and Abed-Nego in the province of Babylon",
      "He gave them positions equal to Daniel in the king's court"
    ],
    "correctIndex": 2
  },
  {
    "id": 200,
    "chapter": 3,
    "reference": "3:30",
    "question": "In which province were the three men promoted after coming out of the furnace? (Daniel 3:30)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The province of Judah",
      "All provinces of the kingdom equally",
      "The eastern provinces of the Medes",
      "The province of Babylon"
    ],
    "correctIndex": 3
  },
  {
    "id": 201,
    "chapter": 4,
    "reference": "4:1",
    "question": "To whom did Nebuchadnezzar address his proclamation in Daniel 4:1? (Daniel 4:1)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "All peoples, nations, and languages that dwell in all the earth",
      "The wise men and astrologers of his kingdom",
      "The governors and officials of all his provinces",
      "The people of Babylon and the surrounding cities"
    ],
    "correctIndex": 0
  },
  {
    "id": 202,
    "chapter": 4,
    "reference": "4:1",
    "question": "What greeting did Nebuchadnezzar offer in his proclamation? (Daniel 4:1)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Peace be multiplied to you"
  },
  {
    "id": 203,
    "chapter": 4,
    "reference": "4:2",
    "question": "What was Nebuchadnezzar's stated reason for making his proclamation in Daniel 4:2? (Daniel 4:2)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He wanted to warn all nations of the power of the Babylonian empire",
      "He was commanded by his advisers to issue a public statement",
      "It seemed good to him to declare the signs and wonders that the Most High God had worked for him",
      "He needed to explain the new laws he was implementing"
    ],
    "correctIndex": 2
  },
  {
    "id": 204,
    "chapter": 4,
    "reference": "4:2",
    "question": "The things Nebuchadnezzar wanted to declare in Daniel 4:2 belonged to which God? (Daniel 4:2)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The God of Babylon",
      "The God of heaven and earth",
      "The God of the Hebrews",
      "The Most High God"
    ],
    "correctIndex": 3
  },
  {
    "id": 205,
    "chapter": 4,
    "reference": "4:3",
    "question": "What did Nebuchadnezzar say about the kingdom of the Most High God in Daniel 4:3? (Daniel 4:3)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "How great are His signs, how mighty His wonders! His kingdom is an everlasting kingdom, and His dominion is from generation to generation",
      "His signs are mighty and His power is above all other gods",
      "His dominion covers all nations and His word never fails",
      "His kingdom stands when all earthly kingdoms fall"
    ],
    "correctIndex": 0
  },
  {
    "id": 206,
    "chapter": 4,
    "reference": "4:3",
    "question": "In Daniel 4:3, what two words describe the nature of God's signs and wonders? (Daniel 4:3)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Wonderful and glorious",
      "Great and mighty",
      "Powerful and terrifying",
      "Holy and righteous"
    ],
    "correctIndex": 1
  },
  {
    "id": 207,
    "chapter": 4,
    "reference": "4:4",
    "question": "How does Nebuchadnezzar describe his state when the troubling events of this chapter began? (Daniel 4:4)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "At war with surrounding nations",
      "Ill and confined to his bed",
      "At rest in his house and flourishing in his palace",
      "Celebrating a great victory in battle"
    ],
    "correctIndex": 2
  },
  {
    "id": 208,
    "chapter": 4,
    "reference": "4:4",
    "question": "Before the troubling dream of Chapter 4, Nebuchadnezzar was: (Daniel 4:4)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Suffering from a great famine",
      "Preparing for a major military campaign",
      "Mourning the death of a family member",
      "Prosperous and at ease"
    ],
    "correctIndex": 3
  },
  {
    "id": 209,
    "chapter": 4,
    "reference": "4:5",
    "question": "How did Nebuchadnezzar describe the effect of the dream on him? (Daniel 4:5)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "It made him afraid and the thoughts on his bed and the visions of his head troubled him",
      "He woke up joyful and immediately sought an interpretation",
      "He was confused but not afraid and went back to sleep",
      "He fell ill after the dream and could not speak for days"
    ],
    "correctIndex": 0
  },
  {
    "id": 210,
    "chapter": 4,
    "reference": "4:5",
    "question": "Where was Nebuchadnezzar when the visions came to him in Chapter 4? (Daniel 4:5)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "On his bed"
  },
  {
    "id": 211,
    "chapter": 4,
    "reference": "4:6",
    "question": "What did Nebuchadnezzar command in response to his troubling dream? (Daniel 4:6)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "To summon Daniel immediately without delay",
      "To pray and offer sacrifices to all the gods of Babylon",
      "To bring in all the wise men of Babylon so they might make known to him the interpretation",
      "To close all the gates of Babylon until an answer was found"
    ],
    "correctIndex": 2
  },
  {
    "id": 212,
    "chapter": 4,
    "reference": "4:6",
    "question": "The king's first action after his dream was to call in the wise men. What does this show? (Daniel 4:6)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "He had forgotten how they had failed with his first dream",
      "The wise men were the only ones who could help at this point",
      "He was testing whether they had improved since his first dream",
      "He still relied on his court advisers despite their past failures"
    ],
    "correctIndex": 3
  },
  {
    "id": 213,
    "chapter": 4,
    "reference": "4:7",
    "question": "What was the result when the king told the wise men his dream in Daniel 4:7? (Daniel 4:7)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "They could not make known to him the interpretation",
      "They each gave different interpretations and confused the king",
      "They refused to interpret it without more time",
      "They gave a partial interpretation that pleased the king temporarily"
    ],
    "correctIndex": 0
  },
  {
    "id": 214,
    "chapter": 4,
    "reference": "4:7",
    "question": "Which four groups of wise men came before the king in Daniel 4:7? (Daniel 4:7)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Priests, scribes, prophets, and counselors",
      "Magicians, astrologers, Chaldeans, and soothsayers",
      "Sorcerers, diviners, necromancers, and wizards",
      "Judges, governors, nobles, and captains"
    ],
    "correctIndex": 1
  },
  {
    "id": 215,
    "chapter": 4,
    "reference": "4:8",
    "question": "What did Nebuchadnezzar say about the spirit in Daniel? (Daniel 4:8)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "In him is the wisdom of all the gods of Babylon",
      "In him burns the fire of divine understanding",
      "In him is the Spirit of the Holy God",
      "In him dwells the power of the God of heaven"
    ],
    "correctIndex": 2
  },
  {
    "id": 216,
    "chapter": 4,
    "reference": "4:8",
    "question": "By what Babylonian name does Nebuchadnezzar refer to Daniel in Chapter 4:8? (Daniel 4:8)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Shadrach",
      "Meshach",
      "Abed-Nego",
      "Belteshazzar"
    ],
    "correctIndex": 3
  },
  {
    "id": 217,
    "chapter": 4,
    "reference": "4:9",
    "question": "Why did Nebuchadnezzar call Daniel 'master of the magicians'? (Daniel 4:9)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Because no secret troubles Belteshazzar and the spirit of the Holy God is in him",
      "Because Daniel had interpreted the previous dream successfully",
      "Because Daniel had been appointed over all the wise men of Babylon",
      "Because Daniel had passed every test set before the wise men"
    ],
    "correctIndex": 0
  },
  {
    "id": 218,
    "chapter": 4,
    "reference": "4:9",
    "question": "What did the king tell Daniel in Daniel 4:9 regarding the visions and dreams? (Daniel 4:9)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Write down the vision before you speak it aloud",
      "Tell me the visions of my dream that I have seen, and its interpretation",
      "Call on your God first before giving me the answer",
      "Confirm whether it is a true vision from the highest god"
    ],
    "correctIndex": 1
  },
  {
    "id": 219,
    "chapter": 4,
    "reference": "4:10",
    "question": "What did Nebuchadnezzar see in the visions of his head while on his bed? (Daniel 4:10)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "A great statue made of different materials",
      "A river flowing with fire through a great city",
      "A tree in the midst of the earth, and its height was great",
      "A great eagle with enormous wings carrying a vine"
    ],
    "correctIndex": 2
  },
  {
    "id": 220,
    "chapter": 4,
    "reference": "4:10",
    "question": "Where was the tree located in Nebuchadnezzar's dream? (Daniel 4:10)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "In the midst of the earth"
  },
  {
    "id": 221,
    "chapter": 4,
    "reference": "4:11",
    "question": "How high did the tree grow in Nebuchadnezzar's dream? (Daniel 4:11)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "It grew great and became strong; its height reached to the heavens",
      "It grew until it covered the whole province of Babylon",
      "It grew as tall as the highest mountain in the land",
      "It grew until it touched the clouds above the earth"
    ],
    "correctIndex": 0
  },
  {
    "id": 222,
    "chapter": 4,
    "reference": "4:11",
    "question": "Who or what could see the tree in Nebuchadnezzar's dream according to Daniel 4:11? (Daniel 4:11)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Only the people of Babylon could see it",
      "It was visible to the end of all the earth",
      "Only the angels in heaven could see its full height",
      "Only those standing in the center of the land could see it"
    ],
    "correctIndex": 1
  },
  {
    "id": 223,
    "chapter": 4,
    "reference": "4:12",
    "question": "What did the tree provide for the animals and birds in the dream? (Daniel 4:12)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The tree offered shelter from storms and food for all who came near",
      "The birds built their nests at the top while the animals rested beneath",
      "Its leaves were lovely, its fruit abundant, and under it the beasts of the field found shade; the birds of the heavens dwelt in its branches",
      "The tree bore golden fruit which all the creatures of earth desired"
    ],
    "correctIndex": 2
  },
  {
    "id": 224,
    "chapter": 4,
    "reference": "4:12",
    "question": "What did all flesh receive from the great tree in the dream? (Daniel 4:12)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Shelter from storms",
      "Healing from its leaves",
      "Strength from its roots",
      "Food from it"
    ],
    "correctIndex": 3
  },
  {
    "id": 225,
    "chapter": 4,
    "reference": "4:13",
    "question": "Who came down from heaven in the dream, according to Daniel 4:13? (Daniel 4:13)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "A watcher, a holy one",
      "An angel with a flaming sword",
      "The Ancient of Days",
      "A messenger dressed in white linen"
    ],
    "correctIndex": 0
  },
  {
    "id": 226,
    "chapter": 4,
    "reference": "4:13",
    "question": "How does Nebuchadnezzar describe what he saw come down from heaven? (Daniel 4:13)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "A great angel of fire and light",
      "A watcher, a holy one, coming down from heaven",
      "The spirit of God in visible form",
      "A warrior dressed in heavenly armor"
    ],
    "correctIndex": 1
  },
  {
    "id": 227,
    "chapter": 4,
    "reference": "4:14",
    "question": "What did the watcher command to be done to the great tree? (Daniel 4:14)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Pull up the tree by its roots and burn it completely",
      "Leave the tree but drive away all the animals beneath it",
      "Cut down the tree and chop off its branches; strip off its leaves and scatter its fruit",
      "Bend the tree until its top touched the earth"
    ],
    "correctIndex": 2
  },
  {
    "id": 228,
    "chapter": 4,
    "reference": "4:14",
    "question": "What was to happen to the beasts and birds after the tree was cut down? (Daniel 4:14)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "They would be gathered and brought before the watcher",
      "They would scatter to the four winds of heaven",
      "They would perish along with the fallen tree",
      "Let the beasts get out from under it and the birds from its branches"
    ],
    "correctIndex": 3
  },
  {
    "id": 229,
    "chapter": 4,
    "reference": "4:15",
    "question": "What was to be left of the tree stump after the cutting down? (Daniel 4:15)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Leave the stump and roots in the earth, bound with a band of iron and bronze",
      "Leave the roots only, buried in the earth completely",
      "Leave the stump with its lowest branches still attached",
      "Remove the stump entirely but leave the roots to grow again"
    ],
    "correctIndex": 0
  },
  {
    "id": 230,
    "chapter": 4,
    "reference": "4:15",
    "question": "In what will the stump be left, and what will it be wet with, according to Daniel 4:15? (Daniel 4:15)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "In the ashes of the burned forest, and wet with morning rain",
      "In the tender grass of the field, and let it be wet with the dew of heaven",
      "In the soil of the king's garden and wet with the river's waters",
      "In the dust of the earth and covered by the night's frost"
    ],
    "correctIndex": 1
  },
  {
    "id": 231,
    "chapter": 4,
    "reference": "4:16",
    "question": "What change was decreed for the man represented by the tree in Daniel 4:16? (Daniel 4:16)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Let him be cast out from his throne and made a servant",
      "Let him lose his memory and wander without knowledge",
      "Let his heart be changed from that of a man, and let him be given the heart of an animal",
      "Let his wisdom depart and let madness come upon him"
    ],
    "correctIndex": 2
  },
  {
    "id": 232,
    "chapter": 4,
    "reference": "4:16",
    "question": "For how long would this judgment upon the man last, according to Daniel 4:16? (Daniel 4:16)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Three years of wandering",
      "Forty days of humiliation",
      "One year of discipline",
      "Seven times shall pass over him"
    ],
    "correctIndex": 3
  },
  {
    "id": 233,
    "chapter": 4,
    "reference": "4:17",
    "question": "What was the stated purpose of this judgment, according to Daniel 4:17? (Daniel 4:17)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "That the living may know that the Most High rules in the kingdom of men and gives it to whomever He will",
      "That the king would learn to fear the God of heaven above all others",
      "That all nations would see the power of the God of the Hebrews",
      "That the Babylonian empire would be humbled before its enemies"
    ],
    "correctIndex": 0
  },
  {
    "id": 234,
    "chapter": 4,
    "reference": "4:17",
    "question": "According to Daniel 4:17, to whom does the Most High give the kingdom of men? (Daniel 4:17)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Only the most righteous rulers of the earth",
      "Whoever He will, even the lowest of men",
      "Those who acknowledge the Most High as God",
      "Those who have been tested and found faithful"
    ],
    "correctIndex": 1
  },
  {
    "id": 235,
    "chapter": 4,
    "reference": "4:18",
    "question": "After recounting the dream, what did the king say about Daniel specifically? (Daniel 4:18)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "You have never failed me in matters of wisdom",
      "Your God has always given you understanding beyond the others",
      "You are able, for the Spirit of the Holy God is in you",
      "You have proven yourself faithful in all things I have asked"
    ],
    "correctIndex": 2
  },
  {
    "id": 236,
    "chapter": 4,
    "reference": "4:18",
    "question": "Nebuchadnezzar said the wise men could not interpret this dream. What did he say Daniel could do? (Daniel 4:18)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Declare the interpretation"
  },
  {
    "id": 237,
    "chapter": 4,
    "reference": "4:19",
    "question": "What was Daniel's reaction when he first heard the dream's meaning? (Daniel 4:19)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He was astonished for a time, and his thoughts troubled him",
      "He immediately began weeping and tearing his robe",
      "He stood in silence and refused to answer for seven days",
      "He fell to the ground and prayed before answering"
    ],
    "correctIndex": 0
  },
  {
    "id": 238,
    "chapter": 4,
    "reference": "4:19",
    "question": "What did the king tell Daniel when he saw Daniel's troubled expression in Daniel 4:19? (Daniel 4:19)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Speak what you have seen; fear no one in this chamber",
      "Do not let the dream or its interpretation trouble you",
      "Your silence tells me the news is not good",
      "Whatever you have seen, I command you to tell me all of it"
    ],
    "correctIndex": 1
  },
  {
    "id": 239,
    "chapter": 4,
    "reference": "4:20",
    "question": "What did Daniel say the tree represented in its growth and greatness? (Daniel 4:20)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "A future kingdom that would arise after Babylon",
      "All the great kingdoms of the earth together",
      "The tree that grew and became strong and whose height reached to the heavens was you, O king",
      "The wisdom of God covering all the nations"
    ],
    "correctIndex": 2
  },
  {
    "id": 240,
    "chapter": 4,
    "reference": "4:20",
    "question": "Which feature of the tree was repeated in Daniel's interpretation in verse 4:20? (Daniel 4:20)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Its branches were filled with fruit and birds of all kinds",
      "Its roots were deep and could not be pulled up",
      "Its leaves never withered in summer or winter",
      "Its height reached to the heavens and it was visible to all the earth"
    ],
    "correctIndex": 3
  },
  {
    "id": 241,
    "chapter": 4,
    "reference": "4:21",
    "question": "In Daniel 4:21, what provided shade and food for beasts and birds? (Daniel 4:21)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Its leaves, lovely and abundant fruit, shelter for beasts and dwelling for birds",
      "Its trunk and enormous branches",
      "Its height and the shadow it cast over the whole land",
      "Its roots which drew up streams of water for all"
    ],
    "correctIndex": 0
  },
  {
    "id": 242,
    "chapter": 4,
    "reference": "4:21",
    "question": "All flesh being fed from the tree in verse 4:21 pointed to which quality of Nebuchadnezzar's reign? (Daniel 4:21)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "His personal generosity toward the poor of his kingdom",
      "The far-reaching extent and provision of his empire",
      "The fertile agriculture of the Babylonian kingdom",
      "The religious ceremonies he provided for all peoples"
    ],
    "correctIndex": 1
  },
  {
    "id": 243,
    "chapter": 4,
    "reference": "4:22",
    "question": "Who does Daniel say the great tree represents? (Daniel 4:22)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The coming kingdom that will surpass all others",
      "The Babylonian empire throughout its generations",
      "It is you, O king, for you have grown and become strong",
      "The collective wisdom of all the nations under Babylon"
    ],
    "correctIndex": 2
  },
  {
    "id": 244,
    "chapter": 4,
    "reference": "4:22",
    "question": "In Daniel 4:22, Nebuchadnezzar's greatness is described as reaching to: (Daniel 4:22)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The seas in every direction",
      "Every nation from east to west",
      "The borders of all four great kingdoms",
      "Heaven and his dominion to the end of the earth"
    ],
    "correctIndex": 3
  },
  {
    "id": 245,
    "chapter": 4,
    "reference": "4:23",
    "question": "What did the holy watcher who came from heaven decree concerning the tree/king in Daniel 4:23? (Daniel 4:23)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Cut down the tree and destroy it, yet leave the stump and its roots, bound with iron and bronze",
      "Let the tree grow no higher and remove its fruit",
      "Pull up the tree completely and remove its stump",
      "Bend the tree until it lay on the ground for seven times"
    ],
    "correctIndex": 0
  },
  {
    "id": 246,
    "chapter": 4,
    "reference": "4:23",
    "question": "What was the length of time specified in the decree of verse 4:23? (Daniel 4:23)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Seven times pass over him"
  },
  {
    "id": 247,
    "chapter": 4,
    "reference": "4:24",
    "question": "How did Daniel describe the decree of the Most High in verse 4:24? (Daniel 4:24)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "This is what the holy watcher has commanded and it cannot be changed",
      "This vision comes from the God of heaven who rules all kingdoms",
      "This is the interpretation, O king, and this is the decree of the Most High which has come upon my lord the king",
      "I declare to you the word of the God of Israel"
    ],
    "correctIndex": 2
  },
  {
    "id": 248,
    "chapter": 4,
    "reference": "4:24",
    "question": "Daniel said the decree came upon whom specifically? (Daniel 4:24)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The kingdom of Babylon as a whole",
      "All who have exalted themselves against God",
      "Every ruler who has failed to acknowledge the Most High",
      "My lord the king"
    ],
    "correctIndex": 3
  },
  {
    "id": 249,
    "chapter": 4,
    "reference": "4:25",
    "question": "What did Daniel say Nebuchadnezzar would be driven from? (Daniel 4:25)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "From men, and his dwelling will be with the beasts of the field",
      "From his palace and the comfort of royal life",
      "From Babylon and all the lands of his kingdom",
      "From the worship of his false gods"
    ],
    "correctIndex": 0
  },
  {
    "id": 250,
    "chapter": 4,
    "reference": "4:25",
    "question": "According to Daniel 4:25, what would Nebuchadnezzar eat during his judgment? (Daniel 4:25)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Dust of the ground",
      "Grass like oxen",
      "The bread of affliction",
      "Bitter herbs and wild roots"
    ],
    "correctIndex": 1
  },
  {
    "id": 251,
    "chapter": 4,
    "reference": "4:26",
    "question": "What did Daniel say about the king's kingdom after the seven times passed? (Daniel 4:26)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Your kingdom shall be divided among your descendants",
      "Your kingdom will be given to a new ruler who fears God",
      "Your kingdom shall be assured to you after you come to know that Heaven rules",
      "Your kingdom will be restored only if you worship the Most High"
    ],
    "correctIndex": 2
  },
  {
    "id": 252,
    "chapter": 4,
    "reference": "4:26",
    "question": "In Daniel 4:26, the leaving of the stump and roots of the tree signified: (Daniel 4:26)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "That a remnant of Babylon would survive to serve a greater empire",
      "That the king would die but his son would take his throne",
      "That the kingdom would be divided between two successors",
      "That Nebuchadnezzar's kingdom would be restored when he acknowledged God's sovereignty"
    ],
    "correctIndex": 3
  },
  {
    "id": 253,
    "chapter": 4,
    "reference": "4:27",
    "question": "What counsel did Daniel give Nebuchadnezzar at the end of the interpretation? (Daniel 4:27)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Break off your sins by being righteous, and your iniquities by showing mercy to the poor",
      "Build a temple to the Most High and worship Him alone",
      "Release all captives from Israel and send them home",
      "Humble yourself before the God of heaven and pray without ceasing"
    ],
    "correctIndex": 0
  },
  {
    "id": 254,
    "chapter": 4,
    "reference": "4:27",
    "question": "What hope did Daniel express along with his counsel in Daniel 4:27? (Daniel 4:27)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Perhaps the decree can still be changed by the Most High",
      "Perhaps there may be a lengthening of your prosperity",
      "Perhaps the vision will not come to pass if you repent",
      "Perhaps God will spare the kingdom and judge you alone"
    ],
    "correctIndex": 1
  },
  {
    "id": 255,
    "chapter": 4,
    "reference": "4:28",
    "question": "Did everything Daniel interpreted come true for Nebuchadnezzar? (Daniel 4:28)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "No, God relented because Nebuchadnezzar humbled himself",
      "Only part of it came true before the king repented",
      "Yes, all this came upon King Nebuchadnezzar",
      "The dream was fulfilled for his son Belshazzar instead"
    ],
    "correctIndex": 2
  },
  {
    "id": 256,
    "chapter": 4,
    "reference": "4:28",
    "question": "How does Daniel 4:28 serve as a transition in the narrative? (Daniel 4:28)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "It shows that Daniel's interpretation was only partially correct",
      "It introduces the next dream that came to Nebuchadnezzar",
      "It marks the beginning of a new king's reign over Babylon",
      "It confirms that God's word through the dream was certainly fulfilled"
    ],
    "correctIndex": 3
  },
  {
    "id": 257,
    "chapter": 4,
    "reference": "4:29",
    "question": "When did the pride of Nebuchadnezzar emerge that triggered his judgment? (Daniel 4:29)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "At the end of twelve months",
      "At the end of three years",
      "Seven days after Daniel's warning",
      "On the day of the great feast he had arranged"
    ],
    "correctIndex": 0
  },
  {
    "id": 258,
    "chapter": 4,
    "reference": "4:29",
    "question": "Where was Nebuchadnezzar walking when he spoke his proud words? (Daniel 4:29)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "In the great gardens outside the city walls",
      "On the royal palace of Babylon",
      "In the throne room before his counselors",
      "At the top of the great ziggurat of Babylon"
    ],
    "correctIndex": 1
  },
  {
    "id": 259,
    "chapter": 4,
    "reference": "4:30",
    "question": "What proud declaration did Nebuchadnezzar make in Daniel 4:30? (Daniel 4:30)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "I am the greatest king who has ever ruled the earth",
      "No god in heaven or earth is greater than I am",
      "Is not this great Babylon, that I have built for a royal dwelling by my mighty power and for the honor of my majesty?",
      "My kingdom shall stand forever and never be broken"
    ],
    "correctIndex": 2
  },
  {
    "id": 260,
    "chapter": 4,
    "reference": "4:30",
    "question": "What did Nebuchadnezzar claim he had built by his own power and for whose glory? (Daniel 4:30)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The great temples of Babylon for the glory of his gods",
      "The hanging gardens as a sign of his wisdom and wealth",
      "A great empire stretching across all known lands",
      "Great Babylon, for his royal dwelling and for the honor of his majesty"
    ],
    "correctIndex": 3
  },
  {
    "id": 261,
    "chapter": 4,
    "reference": "4:31",
    "question": "What happened immediately while the proud words were still in the king's mouth? (Daniel 4:31)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "A voice fell from heaven speaking the judgment against him",
      "A great wind arose and threw him from the palace roof",
      "He was suddenly struck blind and could not speak",
      "Daniel appeared and warned him one final time"
    ],
    "correctIndex": 0
  },
  {
    "id": 262,
    "chapter": 4,
    "reference": "4:31",
    "question": "What did the heavenly voice tell Nebuchadnezzar in Daniel 4:31? (Daniel 4:31)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "The kingdom has departed from you"
  },
  {
    "id": 263,
    "chapter": 4,
    "reference": "4:32",
    "question": "According to the heavenly voice in Daniel 4:32, where would Nebuchadnezzar be driven? (Daniel 4:32)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "From Babylon and out of all his kingdom",
      "From his palace to live in the wilderness alone",
      "From men, and his dwelling would be with the beasts of the field",
      "From authority over men but not from the palace"
    ],
    "correctIndex": 2
  },
  {
    "id": 264,
    "chapter": 4,
    "reference": "4:32",
    "question": "The heavenly voice in 4:32 confirmed what period of time for Nebuchadnezzar's judgment? (Daniel 4:32)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Three seasons of the year",
      "Forty days and forty nights",
      "One full year of humiliation",
      "Seven times shall pass over you"
    ],
    "correctIndex": 3
  },
  {
    "id": 265,
    "chapter": 4,
    "reference": "4:33",
    "question": "How quickly did the judgment fall upon Nebuchadnezzar? (Daniel 4:33)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "That very hour the word was fulfilled concerning Nebuchadnezzar",
      "After seven days of warning signs first appeared",
      "By the following morning at sunrise",
      "By the end of that same month"
    ],
    "correctIndex": 0
  },
  {
    "id": 266,
    "chapter": 4,
    "reference": "4:33",
    "question": "What physical change came over Nebuchadnezzar as described in Daniel 4:33? (Daniel 4:33)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He became covered in sores like a leper and lived alone",
      "His hair grew like eagles' feathers and his nails like birds' claws",
      "He grew fur over his body like a wild animal",
      "He lost the ability to speak in human language"
    ],
    "correctIndex": 1
  },
  {
    "id": 267,
    "chapter": 4,
    "reference": "4:34",
    "question": "What happened to Nebuchadnezzar at the end of the seven times? (Daniel 4:34)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He fell asleep and woke as a king restored to full memory",
      "Daniel prayed for him and God restored his sanity immediately",
      "He lifted his eyes to heaven, his understanding returned, and he blessed the Most High",
      "He cried out to the God of Israel and was instantly healed"
    ],
    "correctIndex": 2
  },
  {
    "id": 268,
    "chapter": 4,
    "reference": "4:34",
    "question": "What did Nebuchadnezzar say about God's dominion in Daniel 4:34? (Daniel 4:34)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "His power is above all gods and His name stands forever",
      "His kingdom covers all the earth and none can stand against Him",
      "His mercy endures forever and His truth to all generations",
      "His dominion is an everlasting dominion and His kingdom is from generation to generation"
    ],
    "correctIndex": 3
  },
  {
    "id": 269,
    "chapter": 4,
    "reference": "4:35",
    "question": "What does Daniel 4:35 say about all the inhabitants of the earth before God? (Daniel 4:35)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "They are reputed as nothing, and He does according to His will in the army of heaven and among the inhabitants of earth",
      "They are created to serve His purposes and have no will of their own",
      "They are judged according to their deeds and found wanting before Him",
      "They are dust and to dust they shall return at His command"
    ],
    "correctIndex": 0
  },
  {
    "id": 270,
    "chapter": 4,
    "reference": "4:35",
    "question": "According to Nebuchadnezzar's praise in Daniel 4:35, who can question or resist God? (Daniel 4:35)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Only the holy watchers before His throne",
      "No one can restrain His hand or say to Him, 'What have you done?'",
      "None among the gods of the nations",
      "No king or ruler however mighty"
    ],
    "correctIndex": 1
  },
  {
    "id": 271,
    "chapter": 4,
    "reference": "4:36",
    "question": "What happened to Nebuchadnezzar after his reason returned? (Daniel 4:36)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He was welcomed back quietly and ruled as before without ceremony",
      "He was crowned king again by Daniel on behalf of the God of heaven",
      "His honor and splendor returned; his counselors and nobles sought him out; he was restored to his kingdom with even greater greatness",
      "He gave up the throne to his son before taking it back at God's direction"
    ],
    "correctIndex": 2
  },
  {
    "id": 272,
    "chapter": 4,
    "reference": "4:36",
    "question": "Who sought Nebuchadnezzar out when his reason returned? (Daniel 4:36)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "His family and the priests of Babylon",
      "His military commanders and governors",
      "Daniel and the wise men of Babylon",
      "His counselors and nobles"
    ],
    "correctIndex": 3
  },
  {
    "id": 273,
    "chapter": 4,
    "reference": "4:37",
    "question": "What three things did Nebuchadnezzar do at the end of his account in Daniel 4:37? (Daniel 4:37)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Praise, extol, and honor the King of heaven",
      "Pray, worship, and sacrifice to the Most High",
      "Confess, repent, and serve the God of Daniel",
      "Bow, kneel, and declare the greatness of the God of Israel"
    ],
    "correctIndex": 0
  },
  {
    "id": 274,
    "chapter": 4,
    "reference": "4:37",
    "question": "What principle does Nebuchadnezzar declare in Daniel 4:37 regarding God and the proud? (Daniel 4:37)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Those who honor Him shall be exalted in return",
      "Those who walk in pride He is able to put down",
      "Those who seek His face will find peace and rest",
      "Those who humble themselves will be raised up"
    ],
    "correctIndex": 1
  },
  {
    "id": 275,
    "chapter": 5,
    "reference": "5:1",
    "question": "What was Belshazzar doing when the events of Daniel 5 began? (Daniel 5:1)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "He was at war with an advancing army from the east",
      "He was conducting a religious ceremony in the great temple",
      "Belshazzar the king made a great feast for a thousand of his lords",
      "He was reviewing his army before an important battle"
    ],
    "correctIndex": 2
  },
  {
    "id": 276,
    "chapter": 5,
    "reference": "5:1",
    "question": "How many lords were at Belshazzar's great feast? (Daniel 5:1)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Seven hundred",
      "Three hundred",
      "Ten thousand",
      "A thousand"
    ],
    "correctIndex": 3
  },
  {
    "id": 277,
    "chapter": 5,
    "reference": "5:2",
    "question": "What did Belshazzar command to be brought to the feast while he was drinking wine? (Daniel 5:2)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The gold and silver vessels which his father Nebuchadnezzar had taken from the temple in Jerusalem",
      "The great golden image that stood in the plain of Dura",
      "The treasuries of Babylon to be displayed before his lords",
      "The royal crown and scepter of Nebuchadnezzar"
    ],
    "correctIndex": 0
  },
  {
    "id": 278,
    "chapter": 5,
    "reference": "5:2",
    "question": "From where had the vessels originally been taken, according to Daniel 5:2? (Daniel 5:2)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The treasury of the king of Persia",
      "The temple which had been in Jerusalem",
      "The great temple of Marduk in Babylon",
      "The storehouses of Egypt"
    ],
    "correctIndex": 1
  },
  {
    "id": 279,
    "chapter": 5,
    "reference": "5:3",
    "question": "What was done with the sacred vessels once they were brought to the feast? (Daniel 5:3)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "They were placed on display around the banquet hall",
      "They were offered as gifts to the king's most honored lords",
      "They drank from them — the king, his lords, his wives, and his concubines",
      "They were filled with offerings for the gods of Babylon"
    ],
    "correctIndex": 2
  },
  {
    "id": 280,
    "chapter": 5,
    "reference": "5:3",
    "question": "The gold and silver vessels from God's temple were used for what at the feast? (Daniel 5:3)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Serving food to the guests",
      "Burning incense at the feast",
      "Collecting tribute from the lords",
      "Drinking wine"
    ],
    "correctIndex": 3
  },
  {
    "id": 281,
    "chapter": 5,
    "reference": "5:4",
    "question": "While drinking from the sacred vessels, what did the Babylonians praise? (Daniel 5:4)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "The gods of gold, silver, bronze, iron, wood, and stone",
      "Belshazzar and the power of his great kingdom",
      "The gods of Babylon and the wisdom of their ancestors",
      "The conquest of Jerusalem and the fall of the Hebrews"
    ],
    "correctIndex": 0
  },
  {
    "id": 282,
    "chapter": 5,
    "reference": "5:4",
    "question": "How many types of material gods are listed in Daniel 5:4? (Daniel 5:4)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Four — gold, silver, wood, and stone",
      "Six — gold, silver, bronze, iron, wood, and stone",
      "Three — gold, silver, and stone",
      "Seven — gold, silver, bronze, iron, wood, stone, and clay"
    ],
    "correctIndex": 1
  },
  {
    "id": 283,
    "chapter": 5,
    "reference": "5:5",
    "question": "What supernatural event occurred during the feast in Daniel 5:5? (Daniel 5:5)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "A voice from heaven spoke to the king in front of everyone",
      "The sacred vessels shook and fell to the ground by themselves",
      "Fingers of a man's hand appeared and wrote on the plaster of the wall of the king's palace",
      "A vision appeared in the sky above the king's head"
    ],
    "correctIndex": 2
  },
  {
    "id": 284,
    "chapter": 5,
    "reference": "5:5",
    "question": "Near what location in the palace did the writing appear? (Daniel 5:5)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "On the floor beneath the king's feet",
      "Above the main entrance to the banquet hall",
      "On the ceiling of the great throne room",
      "Over against the lampstand, on the plaster of the wall"
    ],
    "correctIndex": 3
  },
  {
    "id": 285,
    "chapter": 5,
    "reference": "5:6",
    "question": "What was the king's physical reaction when he saw the handwriting on the wall? (Daniel 5:6)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "His face turned pale, his thoughts troubled him, his joints loosened, and his knees knocked against each other",
      "He fainted and had to be revived by his servants",
      "He rose from his seat and ran from the room in fear",
      "He was silent and ordered everyone out of the hall"
    ],
    "correctIndex": 0
  },
  {
    "id": 286,
    "chapter": 5,
    "reference": "5:6",
    "question": "Which of the following was NOT one of the physical effects on Belshazzar when he saw the writing? (Daniel 5:6)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "His face turned pale",
      "He fell to the ground unconscious",
      "His knees knocked against each other",
      "His joints loosened"
    ],
    "correctIndex": 1
  },
  {
    "id": 287,
    "chapter": 5,
    "reference": "5:7",
    "question": "What reward did Belshazzar offer to anyone who could read and interpret the writing? (Daniel 5:7)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Gold, silver, and land within the province of Babylon",
      "A palace and command over a thousand soldiers",
      "Clothed with purple, have a chain of gold around his neck, and be the third ruler in the kingdom",
      "A royal title and a seat at the king's table forever"
    ],
    "correctIndex": 2
  },
  {
    "id": 288,
    "chapter": 5,
    "reference": "5:7",
    "question": "What position would the successful interpreter receive in the kingdom? (Daniel 5:7)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Second ruler in the kingdom",
      "Chief of all the wise men",
      "Commander of the entire army",
      "Third ruler in the kingdom"
    ],
    "correctIndex": 3
  },
  {
    "id": 289,
    "chapter": 5,
    "reference": "5:8",
    "question": "Why were the king's wise men unable to help? (Daniel 5:8)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "They could not read the writing or make known its interpretation",
      "They refused to enter the banquet hall out of fear",
      "They were asleep when summoned and could not be awakened",
      "They had all been killed in a recent judgment"
    ],
    "correctIndex": 0
  },
  {
    "id": 290,
    "chapter": 5,
    "reference": "5:8",
    "question": "All the king's wise men came in. Which of the following best describes their failure? (Daniel 5:8)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "They could read it but were afraid to reveal the meaning",
      "They could not read the writing, let alone interpret it",
      "They gave conflicting interpretations that confused the king",
      "They asked for more time to prepare their response"
    ],
    "correctIndex": 1
  },
  {
    "id": 291,
    "chapter": 5,
    "reference": "5:9",
    "question": "What was Belshazzar's state as a result of the wise men's failure? (Daniel 5:9)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He became angry and ordered the wise men executed",
      "He grew calm and decided to wait until morning for an answer",
      "He was greatly troubled, his face turned pale, and his lords were astonished",
      "He fell into a deep sleep from the terror of the night"
    ],
    "correctIndex": 2
  },
  {
    "id": 292,
    "chapter": 5,
    "reference": "5:9",
    "question": "What was the reaction of Belshazzar's lords to the crisis of the writing? (Daniel 5:9)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "They were astonished"
  },
  {
    "id": 293,
    "chapter": 5,
    "reference": "5:10",
    "question": "Who came into the banquet hall as a result of the king and his lords' troubled state? (Daniel 5:10)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "The queen"
  },
  {
    "id": 294,
    "chapter": 5,
    "reference": "5:10",
    "question": "What assurance did the queen offer the king in Daniel 5:10? (Daniel 5:10)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "I know a man who has the spirit of God in him",
      "Let not your thoughts trouble you, nor let your countenance change",
      "There is one who can make known to you the interpretation",
      "Do not be afraid, for help is near"
    ],
    "correctIndex": 1
  },
  {
    "id": 295,
    "chapter": 5,
    "reference": "5:11",
    "question": "What did the queen say distinguished Daniel in the days of Nebuchadnezzar? (Daniel 5:11)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He was the greatest magician and astrologer Babylon had ever known",
      "He had accurately predicted every event in Nebuchadnezzar's reign",
      "The Spirit of the Holy God is in him; light and understanding and wisdom like the wisdom of the gods was found in him",
      "He alone survived every trial the king set before his advisers"
    ],
    "correctIndex": 2
  },
  {
    "id": 296,
    "chapter": 5,
    "reference": "5:11",
    "question": "What title did Nebuchadnezzar give Daniel according to the queen's statement in 5:11? (Daniel 5:11)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Chief of all the wise men of Babylon",
      "Ruler over the province of Babylon and all its affairs",
      "Servant of the Most High God and revealer of secrets",
      "Master of the magicians, astrologers, Chaldeans, and soothsayers"
    ],
    "correctIndex": 3
  },
  {
    "id": 297,
    "chapter": 5,
    "reference": "5:12",
    "question": "According to the queen, what specific abilities were found in Daniel? (Daniel 5:12)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Excellent spirit, knowledge, understanding, interpreting dreams, explaining enigmas, and solving difficult problems",
      "The ability to read all languages and predict the future perfectly",
      "Wisdom, courage, and skill in military strategy and administration",
      "Knowledge of all the gods and their ways, and skill in priestly duties"
    ],
    "correctIndex": 0
  },
  {
    "id": 298,
    "chapter": 5,
    "reference": "5:12",
    "question": "What did the queen advise Belshazzar to do in Daniel 5:12? (Daniel 5:12)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Pray to the God of the Hebrews for an answer",
      "Call for Daniel, and he will give the interpretation",
      "Seek out the wisest man remaining in the kingdom",
      "Wait until morning for a clearer sign from heaven"
    ],
    "correctIndex": 1
  },
  {
    "id": 299,
    "chapter": 5,
    "reference": "5:13",
    "question": "How did Belshazzar identify Daniel when he was brought before him? (Daniel 5:13)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Are you the man who interpreted dreams for Nebuchadnezzar my father?",
      "Are you Belteshazzar, the chief of the magicians?",
      "Are you that Daniel who is one of the captives from Judah whom my father the king brought from Judah?",
      "Are you the servant of the Most High God who revealed the first dream?"
    ],
    "correctIndex": 2
  },
  {
    "id": 300,
    "chapter": 5,
    "reference": "5:13",
    "question": "The way Belshazzar addresses Daniel in 5:13 suggests what about Belshazzar's knowledge of Daniel? (Daniel 5:13)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "He had worked closely with Daniel and knew him very well",
      "He had never heard of Daniel before the queen mentioned him",
      "He knew Daniel as his own chief adviser for many years",
      "He knew of Daniel from reports but had not personally worked with him"
    ],
    "correctIndex": 3
  },
  {
    "id": 301,
    "chapter": 5,
    "reference": "5:14",
    "question": "What had Belshazzar heard about Daniel? (Daniel 5:14)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The Spirit of God is in him and that light and understanding and excellent wisdom are found in him",
      "Daniel had correctly interpreted many dreams in the past",
      "Daniel was the only surviving member of the original wise men",
      "Daniel had been appointed chief of all advisers by Nebuchadnezzar"
    ],
    "correctIndex": 0
  },
  {
    "id": 302,
    "chapter": 5,
    "reference": "5:14",
    "question": "What word does Belshazzar use to describe the wisdom found in Daniel in 5:14? (Daniel 5:14)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Perfect wisdom",
      "Excellent wisdom",
      "Divine wisdom",
      "Unsurpassed wisdom"
    ],
    "correctIndex": 1
  },
  {
    "id": 303,
    "chapter": 5,
    "reference": "5:15",
    "question": "What had the wise men and astrologers been unable to do before Daniel was called? (Daniel 5:15)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Even enter the room where the writing appeared",
      "Agree on what the writing might mean",
      "Read the writing and make known to the king the interpretation",
      "Bring the sacred vessels back to their proper place"
    ],
    "correctIndex": 2
  },
  {
    "id": 304,
    "chapter": 5,
    "reference": "5:15",
    "question": "In Daniel 5:15, the wise men failed. This parallels what earlier event in the book of Daniel? (Daniel 5:15)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "The wise men's refusal to enter the fiery furnace in Chapter 3",
      "The wise men's false interpretation of the tree dream in Chapter 4",
      "The wise men's failure to help Daniel in Chapter 1",
      "The wise men's failure to interpret Nebuchadnezzar's first dream in Chapter 2"
    ],
    "correctIndex": 3
  },
  {
    "id": 305,
    "chapter": 5,
    "reference": "5:16",
    "question": "What did Belshazzar offer Daniel if he could read and interpret the writing? (Daniel 5:16)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Purple garments, a gold chain, and the position of third ruler in the kingdom",
      "Freedom and a return to Jerusalem with full honor",
      "Great wealth and a seat beside the king at all feasts",
      "Command over the armies of Babylon"
    ],
    "correctIndex": 0
  },
  {
    "id": 306,
    "chapter": 5,
    "reference": "5:16",
    "question": "Belshazzar's offer to Daniel in 5:16 was the same as the earlier offer in 5:7. What does this show? (Daniel 5:16)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Daniel was given a special higher offer than the others",
      "The king was consistent in his offer regardless of who answered",
      "The king was desperate and would offer anything",
      "The earlier offer had been rejected and was now being renewed"
    ],
    "correctIndex": 1
  },
  {
    "id": 307,
    "chapter": 5,
    "reference": "5:17",
    "question": "What was Daniel's response to Belshazzar's offer of gifts and rewards? (Daniel 5:17)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He accepted the offer gratefully before giving his answer",
      "He refused all rewards and asked only for permission to speak freely",
      "Let your gifts be for yourself and give your rewards to another; yet I will read the writing to the king",
      "He asked for the rewards to be given to his three companions instead"
    ],
    "correctIndex": 2
  },
  {
    "id": 308,
    "chapter": 5,
    "reference": "5:17",
    "question": "What did Daniel promise to do regardless of the rewards? (Daniel 5:17)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Pray to God for wisdom before giving the answer",
      "Speak only if the king swore not to harm him",
      "Deliver the message and then leave Babylon forever",
      "Read the writing and make known the interpretation"
    ],
    "correctIndex": 3
  },
  {
    "id": 309,
    "chapter": 5,
    "reference": "5:18",
    "question": "Whose reign did Daniel use to begin his rebuke of Belshazzar? (Daniel 5:18)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Nebuchadnezzar his father",
      "Cyrus the Great of Persia",
      "Darius the Mede",
      "His own reign as a young man in Babylon"
    ],
    "correctIndex": 0
  },
  {
    "id": 310,
    "chapter": 5,
    "reference": "5:18",
    "question": "What did Daniel say the Most High God gave to Nebuchadnezzar? (Daniel 5:18)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Wisdom, power, wealth, and long life",
      "Kingdom, majesty, glory, and honor",
      "Dominion, strength, territory, and victory",
      "Great armies, wise counselors, and vast treasuries"
    ],
    "correctIndex": 1
  },
  {
    "id": 311,
    "chapter": 5,
    "reference": "5:19",
    "question": "What authority did Nebuchadnezzar have over all peoples because of the greatness God gave him? (Daniel 5:19)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He could command the rain and the harvest of all lands",
      "He could impose any tax or tribute on any nation at will",
      "Whoever he wished, he executed; whoever he wished, he kept alive; and whom he wished, he set up; and whom he wished, he put down",
      "He could appoint kings over all nations and remove them at will"
    ],
    "correctIndex": 2
  },
  {
    "id": 312,
    "chapter": 5,
    "reference": "5:19",
    "question": "The description of Nebuchadnezzar's power in Daniel 5:19 emphasizes what about his authority? (Daniel 5:19)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "It was limited only by the council of nobles",
      "It was shared equally with his queen and sons",
      "It was greater than any king who had come before him",
      "It was absolute over life, death, honor, and humiliation"
    ],
    "correctIndex": 3
  },
  {
    "id": 313,
    "chapter": 5,
    "reference": "5:20",
    "question": "Why was Nebuchadnezzar deposed and humiliated according to Daniel 5:20? (Daniel 5:20)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "His heart was lifted up and his spirit was hardened in pride",
      "He refused to listen to the counsel of his advisers",
      "He persecuted the Hebrew captives living in Babylon",
      "He turned away from the God of heaven after the dream"
    ],
    "correctIndex": 0
  },
  {
    "id": 314,
    "chapter": 5,
    "reference": "5:20",
    "question": "What was Nebuchadnezzar's fate after his heart was hardened in pride? (Daniel 5:20)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "He was imprisoned in the tower of Babylon",
      "He was deposed from his kingly throne and his glory was taken from him",
      "He was exiled to a distant land permanently",
      "He died suddenly as a sign of God's judgment"
    ],
    "correctIndex": 1
  },
  {
    "id": 315,
    "chapter": 5,
    "reference": "5:21",
    "question": "During his judgment, where was Nebuchadnezzar driven to live? (Daniel 5:21)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Into the wilderness east of Babylon alone",
      "Into a cave in the mountains outside the city",
      "With the wild donkeys, and he ate grass like oxen",
      "Beneath the city walls with the beggars"
    ],
    "correctIndex": 2
  },
  {
    "id": 316,
    "chapter": 5,
    "reference": "5:21",
    "question": "According to Daniel 5:21, when did Nebuchadnezzar acknowledge the true God? (Daniel 5:21)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "After Daniel prayed and interceded for him",
      "After three full years had passed in the wilderness",
      "When the holy watchers appeared to him in a final vision",
      "Until he knew that the Most High God rules in the kingdom of men and appoints over it whomever He will"
    ],
    "correctIndex": 3
  },
  {
    "id": 317,
    "chapter": 5,
    "reference": "5:22",
    "question": "What does Daniel say about Belshazzar in contrast to Nebuchadnezzar? (Daniel 5:22)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "You his son, Belshazzar, have not humbled your heart, although you knew all this",
      "You have not learned from your father's mistakes and have made worse ones",
      "You have rejected God more completely than even Nebuchadnezzar ever did",
      "You have heard the reports of God's power but still hardened your heart"
    ],
    "correctIndex": 0
  },
  {
    "id": 318,
    "chapter": 5,
    "reference": "5:22",
    "question": "The phrase 'although you knew all this' in Daniel 5:22 makes Belshazzar's sin: (Daniel 5:22)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Less serious because knowledge sometimes brings confusion",
      "Worse because he sinned with full knowledge of the consequences",
      "Equal to Nebuchadnezzar's because all pride is the same before God",
      "Unique because no other king had sinned with such awareness"
    ],
    "correctIndex": 1
  },
  {
    "id": 319,
    "chapter": 5,
    "reference": "5:23",
    "question": "What specific acts of blasphemy does Daniel accuse Belshazzar of in Daniel 5:23? (Daniel 5:23)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Building idols in Jerusalem and desecrating the altar of God",
      "Mocking the God of the Hebrews before all his court",
      "Drinking from God's temple vessels and praising gods of silver and gold, and not glorifying the God who holds his breath",
      "Refusing to pray and burning the sacred scriptures"
    ],
    "correctIndex": 2
  },
  {
    "id": 320,
    "chapter": 5,
    "reference": "5:23",
    "question": "What does Daniel say the God of Israel holds in His hand in Daniel 5:23? (Daniel 5:23)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Your breath and all your ways"
  },
  {
    "id": 321,
    "chapter": 5,
    "reference": "5:24",
    "question": "What reason did Daniel give for the hand being sent to write? (Daniel 5:24)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Because of this the hand was sent from Him, and this writing was inscribed",
      "Because God wished to make known His power before all the nations",
      "Because the time of Babylon's end had already been determined",
      "Because Belshazzar had ignored every previous warning"
    ],
    "correctIndex": 0
  },
  {
    "id": 322,
    "chapter": 5,
    "reference": "5:24",
    "question": "The writing on the wall came as a direct result of: (Daniel 5:24)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "A long-standing prophecy from the time of Nebuchadnezzar",
      "Belshazzar's blasphemy and pride in that very hour",
      "A cry from the Hebrew captives who prayed for deliverance",
      "Daniel's prayer the previous night for God to act"
    ],
    "correctIndex": 1
  },
  {
    "id": 323,
    "chapter": 5,
    "reference": "5:25",
    "question": "What were the actual words written on the wall? (Daniel 5:25)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "MENE, TEKEL, PERES",
      "MENE, TEKEL, UPHARSIN, PERES",
      "MENE, MENE, TEKEL, UPHARSIN",
      "MENE, MENE, PERES, UPHARSIN"
    ],
    "correctIndex": 2
  },
  {
    "id": 324,
    "chapter": 5,
    "reference": "5:25",
    "question": "How many words were written on the wall according to Daniel 5:25? (Daniel 5:25)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Three only",
      "Five distinct words",
      "Seven words in total",
      "Four (MENE appears twice, then TEKEL, and UPHARSIN)"
    ],
    "correctIndex": 3
  },
  {
    "id": 325,
    "chapter": 5,
    "reference": "5:26",
    "question": "What did MENE mean in Daniel's interpretation? (Daniel 5:26)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "God has numbered your kingdom and finished it",
      "Your kingdom is weighed and found lacking",
      "Your kingdom is divided and given to others",
      "The days of your reign are complete"
    ],
    "correctIndex": 0
  },
  {
    "id": 326,
    "chapter": 5,
    "reference": "5:26",
    "question": "The interpretation of MENE relates primarily to: (Daniel 5:26)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "The character of Belshazzar's reign being immoral",
      "The duration of Belshazzar's kingdom being at its end",
      "The division of the kingdom among its enemies",
      "The wealth of Babylon being taken away"
    ],
    "correctIndex": 1
  },
  {
    "id": 327,
    "chapter": 5,
    "reference": "5:27",
    "question": "What did TEKEL mean? (Daniel 5:27)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Your kingdom has been numbered and it is finished",
      "Your kingdom is divided and given to the Medes",
      "You have been weighed in the balances and found wanting",
      "Your days are complete and God has ended your reign"
    ],
    "correctIndex": 2
  },
  {
    "id": 328,
    "chapter": 5,
    "reference": "5:27",
    "question": "TEKEL in Daniel's interpretation is a judgment about Belshazzar's: (Daniel 5:27)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Length of reign — he had not reigned long enough",
      "Military power — his army was too weak to defend Babylon",
      "Wealth — his treasury was not sufficient to honor the gods",
      "Personal character — he was weighed and found lacking"
    ],
    "correctIndex": 3
  },
  {
    "id": 329,
    "chapter": 5,
    "reference": "5:28",
    "question": "What did PERES mean according to Daniel? (Daniel 5:28)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Your kingdom is divided and given to the Medes and Persians",
      "Your reign is finished and a new king takes your throne",
      "Your weight is found too light in the balances of God",
      "Your days are numbered and they have reached their end"
    ],
    "correctIndex": 0
  },
  {
    "id": 330,
    "chapter": 5,
    "reference": "5:28",
    "question": "To whom was Belshazzar's kingdom to be given according to Daniel 5:28? (Daniel 5:28)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The Persians and Babylonians",
      "The Medes and Persians",
      "The Medes alone",
      "A new king chosen by God"
    ],
    "correctIndex": 1
  },
  {
    "id": 331,
    "chapter": 5,
    "reference": "5:29",
    "question": "Did Belshazzar honor his promise to Daniel after hearing the interpretation? (Daniel 5:29)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "No, he was too terrified to act and fled the hall",
      "Partially — he gave gold but not the position of third ruler",
      "Yes, Belshazzar gave the command and they clothed Daniel with purple and put a chain of gold around his neck and proclaimed him the third ruler",
      "No, he dismissed Daniel immediately out of anger"
    ],
    "correctIndex": 2
  },
  {
    "id": 332,
    "chapter": 5,
    "reference": "5:29",
    "question": "What position was Daniel given by Belshazzar after the interpretation? (Daniel 5:29)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Second ruler in the kingdom",
      "Chief of all the wise men",
      "Governor of the province of Babylon",
      "Third ruler in the kingdom"
    ],
    "correctIndex": 3
  },
  {
    "id": 333,
    "chapter": 5,
    "reference": "5:30",
    "question": "What happened to Belshazzar that very night? (Daniel 5:30)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Belshazzar the king of the Chaldeans was slain",
      "He fled the palace before the Medes could capture him",
      "He surrendered to Darius and was taken captive",
      "He was imprisoned by his own nobles for desecrating the holy vessels"
    ],
    "correctIndex": 0
  },
  {
    "id": 334,
    "chapter": 5,
    "reference": "5:30",
    "question": "The death of Belshazzar in Daniel 5:30 occurred: (Daniel 5:30)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Three days after Daniel gave the interpretation",
      "That very same night as the writing on the wall",
      "After seven years of continued reign despite the warning",
      "On the morning following the great feast"
    ],
    "correctIndex": 1
  },
  {
    "id": 335,
    "chapter": 5,
    "reference": "5:31",
    "question": "Who received the kingdom after Belshazzar's death? (Daniel 5:31)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Darius the Mede"
  },
  {
    "id": 336,
    "chapter": 5,
    "reference": "5:31",
    "question": "How old was the new ruler when he received the kingdom, according to Daniel 5:31? (Daniel 5:31)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "About forty years old",
      "About seventy-five years old",
      "About thirty years old",
      "About sixty-two years old"
    ],
    "correctIndex": 3
  },
  {
    "id": 337,
    "chapter": 6,
    "reference": "6:1",
    "question": "How many satraps did Darius set over the whole kingdom? (Daniel 6:1)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "One hundred and twenty satraps",
      "Seventy satraps",
      "Forty satraps",
      "Two hundred satraps"
    ],
    "correctIndex": 0
  },
  {
    "id": 338,
    "chapter": 6,
    "reference": "6:1",
    "question": "The purpose of Darius appointing satraps was: (Daniel 6:1)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "To replace the Babylonian wise men who had failed",
      "That they should be over the whole kingdom",
      "To collect tribute from all the conquered nations",
      "To prepare for a new military campaign in the east"
    ],
    "correctIndex": 1
  },
  {
    "id": 339,
    "chapter": 6,
    "reference": "6:2",
    "question": "How many governors were set over the satraps, and who was among them? (Daniel 6:2)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Seven governors with Daniel as the chief",
      "Five governors with Daniel as the least",
      "Three governors, of whom Daniel was one",
      "Ten governors over all the provinces"
    ],
    "correctIndex": 2
  },
  {
    "id": 340,
    "chapter": 6,
    "reference": "6:2",
    "question": "The three governors were set over the satraps for what purpose? (Daniel 6:2)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "So that no satrap might become too powerful",
      "So that the laws of the kingdom might be enforced",
      "So that taxes would be collected faithfully",
      "So that the king might suffer no loss"
    ],
    "correctIndex": 3
  },
  {
    "id": 341,
    "chapter": 6,
    "reference": "6:3",
    "question": "What distinguished Daniel from the other governors and satraps? (Daniel 6:3)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "An excellent spirit was in him and the king planned to set him over the whole realm",
      "He had served the longest and had the most experience",
      "He was the most faithful in collecting the king's revenues",
      "He alone had the ability to interpret the king's dreams"
    ],
    "correctIndex": 0
  },
  {
    "id": 342,
    "chapter": 6,
    "reference": "6:3",
    "question": "What plan did Darius have for Daniel based on his excellent qualities? (Daniel 6:3)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Set him over the whole realm"
  },
  {
    "id": 343,
    "chapter": 6,
    "reference": "6:4",
    "question": "Why were the governors and satraps unable to find any charge against Daniel? (Daniel 6:4)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "He was too powerful and they feared confronting him directly",
      "The king protected him from any accusations",
      "He was faithful and no error or fault was found in him",
      "He kept all his affairs hidden from the other officials"
    ],
    "correctIndex": 2
  },
  {
    "id": 344,
    "chapter": 6,
    "reference": "6:4",
    "question": "What did Daniel's enemies conclude after searching for a charge against him? (Daniel 6:4)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "They gave up and accepted Daniel's superiority",
      "They found minor faults but decided they were not serious enough",
      "They decided to fabricate false evidence against him",
      "They could find no charge or fault, so they decided they must find something against him concerning the law of his God"
    ],
    "correctIndex": 3
  },
  {
    "id": 345,
    "chapter": 6,
    "reference": "6:5",
    "question": "What conclusion did Daniel's enemies reach about how to trap him? (Daniel 6:5)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "We shall not find any charge against this Daniel unless we find it against him concerning the law of his God",
      "We must involve the king in our plot against Daniel",
      "We shall accuse him of disloyalty to the Medes and Persians",
      "We must bring false witnesses to testify against him"
    ],
    "correctIndex": 0
  },
  {
    "id": 346,
    "chapter": 6,
    "reference": "6:5",
    "question": "The enemies' decision in Daniel 6:5 reveals what about Daniel's character? (Daniel 6:5)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "He was clever enough to hide any wrongdoing from investigators",
      "His devotion to God was the only area where they could exploit him",
      "He had many connections that protected him from regular accusations",
      "He had already warned the king of potential plots against him"
    ],
    "correctIndex": 1
  },
  {
    "id": 347,
    "chapter": 6,
    "reference": "6:6",
    "question": "How did the governors and satraps approach the king about Daniel? (Daniel 6:6)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "They sent a written petition through the royal secretary",
      "They sent one representative to speak on behalf of all",
      "They came as a group and spoke to the king",
      "They waited until Daniel was absent before approaching the king"
    ],
    "correctIndex": 2
  },
  {
    "id": 348,
    "chapter": 6,
    "reference": "6:6",
    "question": "The governors and satraps came together in Daniel 6:6 to approach Darius. What does this group approach suggest? (Daniel 6:6)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "There was genuine agreement that a new law was needed",
      "They feared the king would dismiss any individual complaint",
      "They wanted to appear legitimate by presenting a petition",
      "They sought to overwhelm the king with a united front"
    ],
    "correctIndex": 3
  },
  {
    "id": 349,
    "chapter": 6,
    "reference": "6:7",
    "question": "What law did the governors propose to King Darius? (Daniel 6:7)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Whoever petitions any god or man for thirty days, except the king, shall be cast into the den of lions",
      "All citizens must bow before the king three times daily or face imprisonment",
      "Any person who prays to a foreign god shall be exiled from the kingdom",
      "All sacrifices must be directed to the king's gods for sixty days"
    ],
    "correctIndex": 0
  },
  {
    "id": 350,
    "chapter": 6,
    "reference": "6:7",
    "question": "For how long was the proposed decree against prayer to anyone but the king? (Daniel 6:7)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Forty days",
      "Thirty days",
      "Seven days",
      "Sixty days"
    ],
    "correctIndex": 1
  },
  {
    "id": 351,
    "chapter": 6,
    "reference": "6:8",
    "question": "What law did the governors use to make their proposal binding and unchangeable? (Daniel 6:8)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "An oath sworn before all the nobles of the kingdom",
      "A written decree signed by all the governors and satraps",
      "The law of the Medes and Persians, which does not alter",
      "A decree sealed with the king's personal ring"
    ],
    "correctIndex": 2
  },
  {
    "id": 352,
    "chapter": 6,
    "reference": "6:8",
    "question": "The fact that the law of the Medes and Persians cannot be changed was significant because: (Daniel 6:8)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "It showed the governors had the power to bind the king's decisions",
      "It meant the decree would apply to future kings as well",
      "It demonstrated the superiority of Median law over Babylonian law",
      "Once the king signed it, even he could not reverse the decree to save Daniel"
    ],
    "correctIndex": 3
  },
  {
    "id": 353,
    "chapter": 6,
    "reference": "6:9",
    "question": "What did Darius do after hearing the proposal from the governors? (Daniel 6:9)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Darius signed the written decree",
      "He consulted with his other advisers before signing",
      "He delayed signing until he could think it over",
      "He asked about the consequences for violators before agreeing"
    ],
    "correctIndex": 0
  },
  {
    "id": 354,
    "chapter": 6,
    "reference": "6:9",
    "question": "The ease with which Darius signed the decree in Daniel 6:9 suggests: (Daniel 6:9)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "He signed it knowing exactly what would happen to Daniel",
      "He did not realize its implications for Daniel and was deceived by the governors",
      "He was testing Daniel's loyalty by signing the decree",
      "He trusted the governors' judgment without question"
    ],
    "correctIndex": 1
  },
  {
    "id": 355,
    "chapter": 6,
    "reference": "6:10",
    "question": "What did Daniel do when he learned of the signed decree? (Daniel 6:10)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He went directly to the king to appeal the decree",
      "He stopped praying publicly and prayed only in secret",
      "He went home, opened his windows toward Jerusalem, and knelt and prayed three times a day as was his custom",
      "He fled Babylon to avoid being caught"
    ],
    "correctIndex": 2
  },
  {
    "id": 356,
    "chapter": 6,
    "reference": "6:10",
    "question": "In which direction were Daniel's windows open when he prayed? (Daniel 6:10)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "Toward Babylon",
      "Toward the east where the sun rose",
      "Toward heaven with his eyes upward",
      "Toward Jerusalem"
    ],
    "correctIndex": 3
  },
  {
    "id": 357,
    "chapter": 6,
    "reference": "6:11",
    "question": "How did Daniel's enemies discover he was still praying? (Daniel 6:11)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "These men assembled and found Daniel praying and making supplication before his God",
      "They were informed by one of Daniel's household servants",
      "They heard his prayers from the street below his window",
      "They set a watch on his home immediately after the decree was signed"
    ],
    "correctIndex": 0
  },
  {
    "id": 358,
    "chapter": 6,
    "reference": "6:11",
    "question": "The enemies assembled together when they found Daniel praying. What does this suggest? (Daniel 6:11)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "They discovered his prayer by accident while passing by",
      "They had planned in advance to catch Daniel in the act",
      "One of them happened to see Daniel and called the others",
      "They all lived near Daniel and could hear him from their homes"
    ],
    "correctIndex": 1
  },
  {
    "id": 359,
    "chapter": 6,
    "reference": "6:12",
    "question": "What did Daniel's enemies ask the king to confirm before making their accusation? (Daniel 6:12)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Is it true that Daniel still serves the God of the Hebrews?",
      "Is the law of the Medes and Persians truly unchangeable?",
      "Have you not signed a decree that every man who petitions any god or man within thirty days, except you, O king, shall be cast into the den of lions?",
      "Did you not appoint Daniel over all the provinces of your realm?"
    ],
    "correctIndex": 2
  },
  {
    "id": 360,
    "chapter": 6,
    "reference": "6:12",
    "question": "How did King Darius respond to the confirmation question about the decree? (Daniel 6:12)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "I signed the decree and it stands unless I revoke it",
      "Yes, and no man can change what the king has decreed",
      "It is true, and whoever breaks it must face the consequence",
      "The thing is true, according to the law of the Medes and Persians, which does not alter"
    ],
    "correctIndex": 3
  },
  {
    "id": 361,
    "chapter": 6,
    "reference": "6:13",
    "question": "How did Daniel's enemies describe him to the king when making their accusation? (Daniel 6:13)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Daniel, who is of the captives of Judah, does not regard you, O king, nor the decree you have signed, but makes his petition three times a day",
      "Daniel the Hebrew has been seen worshipping the God of Israel in open defiance",
      "The servant you appointed over the province has broken your new law",
      "One of your three governors has been praying to a foreign god"
    ],
    "correctIndex": 0
  },
  {
    "id": 362,
    "chapter": 6,
    "reference": "6:13",
    "question": "Why did the enemies emphasize that Daniel was 'of the captives of Judah' in their accusation? (Daniel 6:13)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "To inform the king who Daniel was since he had forgotten",
      "To make his disobedience seem like foreign disloyalty rather than personal faith",
      "To show that only foreigners would break such a decree",
      "To remind the king that Daniel held no legitimate claim to power"
    ],
    "correctIndex": 1
  },
  {
    "id": 363,
    "chapter": 6,
    "reference": "6:14",
    "question": "What was the king's reaction when he heard the accusation against Daniel? (Daniel 6:14)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He immediately ordered Daniel brought before him for questioning",
      "He became angry at Daniel for disobeying the royal decree",
      "He was greatly displeased with himself and set his heart on delivering Daniel, and he labored until sunset to rescue him",
      "He tried to repeal the law but found he could not"
    ],
    "correctIndex": 2
  },
  {
    "id": 364,
    "chapter": 6,
    "reference": "6:14",
    "question": "How long did Darius try to find a way to rescue Daniel? (Daniel 6:14)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "For three days without ceasing",
      "Only one hour before the law required him to act",
      "Throughout the night until dawn",
      "Until sunset/going down of the sun"
    ],
    "correctIndex": 3
  },
  {
    "id": 365,
    "chapter": 6,
    "reference": "6:15",
    "question": "What did the men say to the king when they came back to press for Daniel's punishment? (Daniel 6:15)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Know, O king, that it is the law of the Medes and Persians that no decree or statute which the king establishes may be changed",
      "The time has come and Daniel must be punished according to the decree",
      "O king, you cannot show mercy to one who has broken your royal command",
      "Your word is law and must be upheld or all will despise the king"
    ],
    "correctIndex": 0
  },
  {
    "id": 366,
    "chapter": 6,
    "reference": "6:15",
    "question": "The men returned to the king to remind him about the unchangeable nature of the law. What had the king been trying to do before their return? (Daniel 6:15)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Prepare the den of lions for Daniel's punishment",
      "Find a way to deliver Daniel from the decree",
      "Consult his wise men about a new interpretation of the law",
      "Send word to Daniel to flee the kingdom before punishment"
    ],
    "correctIndex": 1
  },
  {
    "id": 367,
    "chapter": 6,
    "reference": "6:16",
    "question": "What did the king say to Daniel before he was cast into the lions' den? (Daniel 6:16)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "I wish I could save you but my hands are bound by the law",
      "Forgive me, for I did not know this decree would harm you",
      "Your God, whom you serve continually, He will deliver you",
      "May your God show you the mercy that I cannot"
    ],
    "correctIndex": 2
  },
  {
    "id": 368,
    "chapter": 6,
    "reference": "6:16",
    "question": "What does the king's statement to Daniel in Daniel 6:16 reveal about Darius? (Daniel 6:16)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "He was certain Daniel would die but wanted to comfort him",
      "He had personally tested Daniel's God and believed in His power",
      "He had heard of the fiery furnace miracle and expected a similar rescue",
      "He believed or hoped that the God Daniel served had power to save him"
    ],
    "correctIndex": 3
  },
  {
    "id": 369,
    "chapter": 6,
    "reference": "6:17",
    "question": "What was done to secure the lions' den after Daniel was cast in? (Daniel 6:17)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "A stone was laid on its mouth and sealed with the king's signet and the signet of his lords so that nothing concerning Daniel might be changed",
      "The entrance was sealed with iron bars and a heavy wooden door",
      "Guards were posted at the entrance with orders to let no one approach",
      "The stone was covered with fire to prevent any escape or rescue"
    ],
    "correctIndex": 0
  },
  {
    "id": 370,
    "chapter": 6,
    "reference": "6:17",
    "question": "Whose signets were used to seal the lions' den? (Daniel 6:17)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The king's signet alone",
      "The king's signet and the signet of his lords",
      "The signet of the chief governor and the law keepers",
      "The signet of all one hundred and twenty satraps"
    ],
    "correctIndex": 1
  },
  {
    "id": 371,
    "chapter": 6,
    "reference": "6:18",
    "question": "What did the king do during the night after Daniel was thrown into the lions' den? (Daniel 6:18)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He stayed near the den in prayer throughout the night",
      "He held a council with his advisers to find a way to free Daniel",
      "He went to his palace, fasted, and no musicians were brought before him; his sleep fled from him",
      "He slept fitfully and had troubling dreams about the lions"
    ],
    "correctIndex": 2
  },
  {
    "id": 372,
    "chapter": 6,
    "reference": "6:18",
    "question": "Why did the king fast and avoid music that night? (Daniel 6:18)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "It was a custom of the Medes and Persians to fast before judgments",
      "He was punishing himself for having signed the decree",
      "He had received a warning from his dream not to eat or celebrate",
      "He was deeply troubled about Daniel and could not eat or find comfort"
    ],
    "correctIndex": 3
  },
  {
    "id": 373,
    "chapter": 6,
    "reference": "6:19",
    "question": "At what time of day did the king go to the lions' den after the night had passed? (Daniel 6:19)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Very early in the morning, at the break of day",
      "At midday when the sun was highest",
      "At midnight when darkness was deepest",
      "At sunset after one full day had passed"
    ],
    "correctIndex": 0
  },
  {
    "id": 374,
    "chapter": 6,
    "reference": "6:19",
    "question": "What does the king's rushing to the den very early in the morning show? (Daniel 6:19)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "He expected to find Daniel alive because of his own faith in God",
      "He was anxious about Daniel's fate and could not wait",
      "He was going to give Daniel's companions the same punishment",
      "He was following the law that required a morning inspection"
    ],
    "correctIndex": 1
  },
  {
    "id": 375,
    "chapter": 6,
    "reference": "6:20",
    "question": "What did the king call out when he reached the lions' den? (Daniel 6:20)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Daniel, are you alive? Has your God heard your prayer?",
      "O servant of the Most High, are the lions at rest or did they overcome you?",
      "O Daniel, servant of the living God, has your God, whom you serve continually, been able to deliver you from the lions?",
      "Daniel, speak to me! Has any miracle happened this night?"
    ],
    "correctIndex": 2
  },
  {
    "id": 376,
    "chapter": 6,
    "reference": "6:20",
    "question": "How does Darius address God in his cry to Daniel at the den? (Daniel 6:20)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The Most High God",
      "The God of the Hebrews",
      "The God of heaven",
      "The living God"
    ],
    "correctIndex": 3
  },
  {
    "id": 377,
    "chapter": 6,
    "reference": "6:21",
    "question": "How did Daniel respond to the king's cry? (Daniel 6:21)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "O king, live forever! My God sent His angel and shut the lions' mouths",
      "I am alive, O king, for the God of heaven has kept me safe",
      "Fear not, O king; no harm has come to me this night",
      "Praise the Most High, for His angel has delivered His servant"
    ],
    "correctIndex": 0
  },
  {
    "id": 378,
    "chapter": 6,
    "reference": "6:21",
    "question": "Daniel's greeting to the king in verse 6:21 is notable because: (Daniel 6:21)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "He rebuked the king for not preventing his unjust punishment",
      "He used the standard court greeting 'O king, live forever' showing respect even after a night with lions",
      "He first praised God before speaking to the king",
      "He asked the king to immediately free him before saying anything else"
    ],
    "correctIndex": 1
  },
  {
    "id": 379,
    "chapter": 6,
    "reference": "6:22",
    "question": "How did God protect Daniel from the lions according to Daniel 6:22? (Daniel 6:22)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "God made Daniel invisible to the lions throughout the night",
      "God sent a mighty wind that drove the lions away from Daniel",
      "My God sent His angel and shut the lions' mouths so that they have not hurt me",
      "God made the lions sleep deeply throughout the entire night"
    ],
    "correctIndex": 2
  },
  {
    "id": 380,
    "chapter": 6,
    "reference": "6:22",
    "question": "What two reasons did Daniel give for his innocence before God and the king? (Daniel 6:22)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He had prayed faithfully and never broken the king's other laws",
      "He had served the king well and honored the God of heaven at all times",
      "He had not broken the decree in spirit and had done nothing to threaten the king",
      "Innocence was found in him before God, and he had done no wrong to the king"
    ],
    "correctIndex": 3
  },
  {
    "id": 381,
    "chapter": 6,
    "reference": "6:23",
    "question": "What was the king's emotional response when Daniel came out of the den unharmed? (Daniel 6:23)",
    "difficulty": "easy",
    "type": "multipleChoice",
    "options": [
      "The king was exceedingly glad",
      "The king was astonished and trembling",
      "The king wept with relief and gratitude",
      "The king fell to his knees in worship"
    ],
    "correctIndex": 0
  },
  {
    "id": 382,
    "chapter": 6,
    "reference": "6:23",
    "question": "Why was no injury found on Daniel when he came out of the lions' den? (Daniel 6:23)",
    "difficulty": "medium",
    "type": "fillBlank",
    "answer": "Because he believed in his God"
  },
  {
    "id": 383,
    "chapter": 6,
    "reference": "6:24",
    "question": "What happened to the men who had accused Daniel? (Daniel 6:24)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "They were exiled from the kingdom as punishment for their treachery",
      "They were imprisoned for life for conspiring against the king's favorite",
      "They were cast into the den of lions — they, their children, and their wives — and the lions overpowered them",
      "They were stripped of their offices and made servants"
    ],
    "correctIndex": 2
  },
  {
    "id": 384,
    "chapter": 6,
    "reference": "6:24",
    "question": "What happened to the lions after Daniel's accusers were thrown in? (Daniel 6:24)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "The lions ignored them since they had just eaten Daniel's enemies",
      "The lions attacked only the chief accusers and left the others",
      "The lions tore them apart slowly as a public punishment",
      "The lions overpowered them and broke all their bones before they reached the floor"
    ],
    "correctIndex": 3
  },
  {
    "id": 385,
    "chapter": 6,
    "reference": "6:25",
    "question": "To whom did Darius address his new proclamation after the miracle in the lions' den? (Daniel 6:25)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "All peoples, nations, and languages that dwell in all the earth",
      "All the governors, satraps, and officials of his kingdom",
      "The people of Babylon and the province of the Medes",
      "All who had witnessed the miracle of the lions' den"
    ],
    "correctIndex": 0
  },
  {
    "id": 386,
    "chapter": 6,
    "reference": "6:25",
    "question": "What greeting did Darius use in his proclamation to all peoples? (Daniel 6:25)",
    "difficulty": "easy",
    "type": "fillBlank",
    "answer": "Peace be multiplied to you"
  },
  {
    "id": 387,
    "chapter": 6,
    "reference": "6:26",
    "question": "What did Darius command regarding the God of Daniel? (Daniel 6:26)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "All people must sacrifice to the God of Daniel at each new moon",
      "No man shall speak against the God of the Hebrews or face death",
      "In every dominion of my kingdom men must tremble and fear before the God of Daniel",
      "The God of Daniel alone is to be worshipped throughout the kingdom"
    ],
    "correctIndex": 2
  },
  {
    "id": 388,
    "chapter": 6,
    "reference": "6:26",
    "question": "How did Darius describe the God of Daniel in Daniel 6:26? (Daniel 6:26)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "He is the Most High God above all gods, and His power has no limit",
      "He is the God of heaven who rules over kingdoms of men",
      "He is the God who answers prayer and delivers from all danger",
      "He is the living God and steadfast forever; His kingdom is the one which shall not be destroyed, and His dominion shall endure to the end"
    ],
    "correctIndex": 3
  },
  {
    "id": 389,
    "chapter": 6,
    "reference": "6:27",
    "question": "What did Darius say God does according to Daniel 6:27? (Daniel 6:27)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "He delivers and rescues, and He works signs and wonders in heaven and on earth",
      "He judges the proud and raises the humble to positions of honor",
      "He reveals secrets and makes known the future of all kingdoms",
      "He protects those who fear Him and destroys those who oppose Him"
    ],
    "correctIndex": 0
  },
  {
    "id": 390,
    "chapter": 6,
    "reference": "6:27",
    "question": "The evidence Darius cited for God's power in Daniel 6:27 was: (Daniel 6:27)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "He destroyed Belshazzar and gave the kingdom to Darius",
      "He delivered Daniel from the power of the lions",
      "He sent signs in the heavens that the Medes could see",
      "He revealed the writing on the wall to Daniel"
    ],
    "correctIndex": 1
  },
  {
    "id": 391,
    "chapter": 6,
    "reference": "6:28",
    "question": "How did things turn out for Daniel during this period of history? (Daniel 6:28)",
    "difficulty": "medium",
    "type": "multipleChoice",
    "options": [
      "Daniel was soon retired from service after the lions' den experience",
      "Daniel returned to Jerusalem and served as a prophet there",
      "Daniel prospered in the reign of Darius and in the reign of Cyrus the Persian",
      "Daniel was honored once but later fell out of favor with Cyrus"
    ],
    "correctIndex": 2
  },
  {
    "id": 392,
    "chapter": 6,
    "reference": "6:28",
    "question": "The ending of Daniel 6:28 shows that Daniel's faithfulness resulted in: (Daniel 6:28)",
    "difficulty": "hard",
    "type": "multipleChoice",
    "options": [
      "Fame throughout all the nations of the known world",
      "Eventually becoming king over all Babylon",
      "Being recognized as a prophet throughout all of Israel",
      "Lasting prosperity and blessing spanning multiple kingdoms"
    ],
    "correctIndex": 3
  }
];

// Group questions by chapter number (1-6)
const daniel1to6QuestionsByChapter = daniel1to6Questions.reduce((acc, q) => {
  if (!acc[q.chapter]) acc[q.chapter] = [];
  acc[q.chapter].push(q);
  return acc;
}, {});

// Group questions by difficulty ('easy' | 'medium' | 'hard')
const daniel1to6QuestionsByDifficulty = daniel1to6Questions.reduce((acc, q) => {
  if (!acc[q.difficulty]) acc[q.difficulty] = [];
  acc[q.difficulty].push(q);
  return acc;
}, {});

// Export for Node/CommonJS
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { daniel1to6Questions, daniel1to6QuestionsByChapter, daniel1to6QuestionsByDifficulty };
}
