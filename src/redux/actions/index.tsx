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

export const fetchCryptoDetailsPage = (id: string | undefined) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: typesEnums.LOAD_CRYPTO,
        payload: true,
      });
      const cryptoSocialStatus = await axios.get(
        `https://api.coinlore.net/api/coin/social_stats/?id=${id}`
      );
      const topMarketsByVolume = await axios.get(
        `https://api.coinlore.net/api/coin/markets/?id=${id}`
      );
      const getCryptoDetails = await axios.get(
        `https://api.coinlore.net/api/ticker/?id=${id}`
      );

      axios
        .all([cryptoSocialStatus, topMarketsByVolume, getCryptoDetails])
        .then(
          axios.spread((...responses) => {
            dispatch({
              type: typesEnums.GET_CRYPTO_SOCIAL_STATUS,
              payload: responses[0].data,
            });
            dispatch({
              type: typesEnums.GET_CRYPTO_TOP_MARKETS,
              payload: responses[1].data,
            });
            dispatch({
              type: typesEnums.GET_CRYPTO_DETAILS,
              payload: responses[2].data,
            });
            dispatch({
              type: typesEnums.LOAD_CRYPTO,
              payload: false,
            });
          })
        )
        .catch((errors) => {});
    } catch (e) {
      console.error(e);
    }
  };
};
