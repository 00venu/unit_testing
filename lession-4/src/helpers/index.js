export const getLetterMatchCount = (secretWord, guessedWord) => {
  const secretWordSet = new Set(secretWord.split(""));
  const guessedWordSet = new Set(guessedWord.split(""));
  return [...secretWordSet].filter((letter) => guessedWordSet.has(letter))
    .length;
};

/*const data = [
  "Mike",
  "Matt",
  "Nancy",
  "Adam",
  "Jenny",
  "Nancy",
  "Carl",
  "Adam",
];

const [...removeDuplicates] = new Set(data);*/
