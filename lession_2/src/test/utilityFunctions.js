import chekPropTypes from "check-prop-types";
import { createStore, combineReducers } from "redux";
import SuccessReducer from "../store/reducers/success";

const rootReducer = combineReducers({
  success: SuccessReducer,
});

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};

export const findByTestAttr = (component, val) => {
  return component.find(`[data-test="${val}"]`);
};

export const checkProp = (component, exptProps) => {
  return chekPropTypes(component.propTypes, exptProps, "prop", component.name);
};
