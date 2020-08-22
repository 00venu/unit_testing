import { GUESS_WORD } from "../actions/success";

export default (state = [], action) => {
  switch (action.type) {
    case GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
};
