import { SET_SECRECT_WORD } from "../actions/success";

export default (state = "telephone", action) => {
  switch (action.type) {
    case SET_SECRECT_WORD:
      return action.payload;
    default:
      return state;
  }
};
