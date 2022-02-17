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
    crypto_social_status: {
      reddit: {
        avg_active_users: 0,
        subscribers: 0,
      },
      twitter: {
        followers_count: 0,
        status_count: 0,
      },
    },
    coin_top_markets: [],
    coin_details: [
      {
        id: "",
        symbol: "",
        name: "",
        nameid: "",
        rank: 0,
        price_usd: "",
        percent_change_24h: "",
        percent_change_1h: "",
        percent_change_7d: "",
        market_cap_usd: "",
        volume24: "",
        volume24_native: "",
        csupply: "",
        price_btc: "",
        tsupply: "",
        msupply: "",
      },
    ],
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
