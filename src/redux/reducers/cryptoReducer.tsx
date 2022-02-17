import { initialState } from "../store";
import { typesEnums } from "../../Typings/enums";
import { AnyAction } from "redux";

export const cryptoReducer = (
  state = initialState.crypto,
  action: AnyAction
) => {
  switch (action.type) {
    case typesEnums.FETCH_CRYPTO:
      return {
        ...state,
        data: action.payload,
      };
    case typesEnums.NEXT_PAGE:
      return {
        ...state,
        pagination: state.pagination + 100,
      };
    case typesEnums.PREV_PAGE:
      return {
        ...state,
        pagination: state.pagination - 100,
      };
    case typesEnums.GET_CRYPTO_SOCIAL_STATUS:
      return {
        ...state,
        crypto_social_status: action.payload,
      };
    case typesEnums.GET_CRYPTO_TOP_MARKETS:
      return {
        ...state,
        coin_top_markets: action.payload,
      };
    case typesEnums.GET_CRYPTO_DETAILS:
      return {
        ...state,
        coin_details: action.payload,
      };
    default:
      return state;
  }
};
