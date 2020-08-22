import chekPropTypes from "check-prop-types";
import { createStore, combineReducers, applyMiddleware } from "redux";
import SuccessReducer from "../store/reducers/success";
import GuessWordReducer from "../store/reducers/guessWord";
import ReduxThunk from "redux-thunk";
import secrectWordReducer from "../store/reducers/secrectWord";

const middlewares = [ReduxThunk];

const applyWithMiddlewares = applyMiddleware(...middlewares)(createStore);

const rootReducer = combineReducers({
  success: SuccessReducer,
  guessedWords: GuessWordReducer,
  secrectWord: secrectWordReducer,
});

export const storeFactory = (initialState) => {
  return applyWithMiddlewares(rootReducer, initialState);
};

export const findByTestAttr = (component, val) => {
  return component.find(`[data-test="${val}"]`);
};

export const checkProp = (component, exptProps) => {
  return chekPropTypes(component.propTypes, exptProps, "prop", component.name);
};
