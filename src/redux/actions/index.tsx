import axios from "axios";
import { typesEnums } from "../../Typings/enums";
import { Dispatch } from "redux";

export const fetchAllCryptoData = (pagination: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: typesEnums.LOAD_CRYPTO,
        payload: true,
      });
      const fetchedCryptoData = await axios.get(
        ` https://api.coinlore.net/api/tickers/?start=${pagination}&limit=100`
      );

      if (fetchedCryptoData) {
        console.log(fetchedCryptoData);
        dispatch({
          type: typesEnums.FETCH_CRYPTO,
          payload: fetchedCryptoData.data.data,
        });
        dispatch({
          type: typesEnums.LOAD_CRYPTO,
          payload: false,
        });
      }
    } catch (e) {
      console.error(e);
    }
  };
};

export const nextPage = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: typesEnums.NEXT_PAGE,
    });
  };
};

export const prevPage = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: typesEnums.PREV_PAGE,
    });
  };
};
