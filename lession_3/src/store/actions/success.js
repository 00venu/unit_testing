import secrectWord from "../reducers/secrectWord";
import { getLetterMatchCount } from "./../../helpers/index";

export const CORRECT_GUESS = "CORRECT_GUESS";
export const GUESS_WORD = "GUESS_WORD";
export const SET_SECRECT_WORD = "SET_SECRECT_WORD";
import axios from "axios";

/*export const correctGuess = () => {
  return {
    type: CORRECT_GUESS,
  };
};*/

export const guessWord = (guessWord) => {
  return (dispatch, getState) => {
    const secrectWord = getState().secrectWord;
    const letterMatchCount = getLetterMatchCount(secrectWord, guessWord);
    dispatch({
      type: GUESS_WORD,
      payload: { guessedWord: guessWord, letterMatchCount: letterMatchCount },
    });
    if (guessWord === secrectWord) {
      dispatch({
        type: CORRECT_GUESS,
      });
    }
  };
};

export const getSecrectWord = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3030").then((response) => {
      dispatch({ type: SET_SECRECT_WORD, payload: response.data });
    });
  };
};
