import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import SuccessReducer from "./store/reducers/success";
import GuessWordReducer from "./store/reducers/guessWord";
import ReduxThunk from "redux-thunk";
import secrectWordReducer from "./store/reducers/secrectWord";

const middlewares = [ReduxThunk];

const applyWithMiddlewares = applyMiddleware(...middlewares)(createStore);

const rootReducer = combineReducers({
  success: SuccessReducer,
  guessedWords: GuessWordReducer,
  secrectWord: secrectWordReducer,
});

const store = applyWithMiddlewares(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
