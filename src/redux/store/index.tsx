import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { cryptoReducer } from "../reducers/cryptoReducer";
import { ReduxStore } from "../../Typings";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

// INITIAL STATE
export const initialState: ReduxStore = {
  crypto: {
    data: [],
    loading: false,
    pagination: 0,
  },
};

//REDUCER
const reducer = combineReducers({
  crypto: cryptoReducer,
});

//STORE
export const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
