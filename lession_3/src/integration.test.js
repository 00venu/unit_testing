import { storeFactory } from "./test/utilityFunctions";
import { guessWord } from "./store/actions/success";

describe("guess word action dispatcher", () => {
  const secrectWord = "party";
  const unsuccessfulGuess = "train";
  describe("no guess word", () => {
    let store;
    const initialState = { secrectWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("update state corectly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
    test("update state corectly for successful guess", () => {
      store.dispatch(guessWord(secrectWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          {
            guessedWord: secrectWord,
            letterMatchCount: 5,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
  describe("some guess word", () => {
    const guessedWords = [{ guessedWord: "aglie", letterMatchCount: 1 }];
    const initialState = { guessedWords, secrectWord };
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("update state corectly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        secrectWord,
        success: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: unsuccessfulGuess, letterMatchCount: 3 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
    test("update state corectly for successful guess", () => {
      store.dispatch(guessWord(secrectWord));
      const newState = store.getState();
      const expectedState = {
        secrectWord,
        success: true,
        guessedWords: [
          ...guessedWords,
          { guessedWord: secrectWord, letterMatchCount: 5 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
