import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCryptoData, nextPage, prevPage } from "../redux/actions";
import { ReduxStore, Crypto } from "../Typings";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { TiArrowUpThick } from "react-icons/ti";
import { VscArrowSmallLeft, VscArrowSmallRight } from "react-icons/vsc";

type AppDispatch = ThunkDispatch<ReduxStore, any, AnyAction>;

const CryptoMarket = () => {
  const dispatch: AppDispatch = useDispatch();
  const cryptoData = useSelector<ReduxStore, Crypto[]>(
    (state) => state.crypto.data
  );
  const loading = useSelector<ReduxStore, boolean>(
    (state) => state.crypto.loading
  );
  const pagination = useSelector<ReduxStore, number>(
    (state) => state.crypto.pagination
  );

  useEffect(() => {
    dispatch(fetchAllCryptoData(pagination));
  }, [dispatch, pagination]);

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="h-full w-full p-5 bg-blue-50">
      <Container fluid>
        <Row className="sticky-top">
          <Row className="mt-2 mx-auto p-2 text-gray-800 bg-blue-100">
            <Col md={1}>Rank</Col>

            <Col md={2} className="text-left">
              Coin Name
            </Col>
            <Col md={2}>Symbol</Col>
            <Col md={1} className="text-center">
              Price ($)
            </Col>

            <Col md={3} className="text-center">
              Market Cap ($)
            </Col>
            <Col md={1} className="flex align-items-center text-center">
              1h
              <CgArrowsExchangeAltV />
            </Col>
            <Col md={1} className="flex align-items-center text-center">
              24h
              <CgArrowsExchangeAltV />
            </Col>
            <Col md={1} className="flex align-items-center text-center">
              7d
              <CgArrowsExchangeAltV />
            </Col>
          </Row>
        </Row>

        {loading ? (
          <Loading />
        ) : (
          cryptoData &&
          cryptoData
            .sort((a, b) => parseInt(b.price_usd) - parseInt(a.price_usd))
            .map((crypto) => (
              <div key={crypto.id} className="mb-4 hover:bg-blue-100">
                <Row className="my-2 mx-auto align-items-center border-b border-gray-800  rounded p-1">
                  <Col md={1}>{crypto.rank}</Col>
                  <Col md={2} className="text-left">
                    <Link
                      to={`/crypto/${crypto.id}`}
                      className="no-underline hover:text-blue-900"
                    >
                      {crypto.name}
                    </Link>
                  </Col>
                  <Col md={2} className="text-gray-500">
                    ({crypto.symbol.toUpperCase()})
                  </Col>

                  <Col md={1} className="text-center">
                    ${crypto.price_usd}
                  </Col>

                  <Col md={3} className="text-center">
                    ${crypto.market_cap_usd.toLocaleString()}
                  </Col>
                  <Col
                    md={1}
                    className={
                      Number(crypto.percent_change_1h) > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {crypto.percent_change_1h}
                  </Col>
                  <Col
                    md={1}
                    className={
                      Number(crypto.percent_change_24h) > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {crypto.percent_change_24h}
                  </Col>
                  <Col
                    md={1}
                    className={
                      Number(crypto.percent_change_7d) > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {crypto.percent_change_7d}
                  </Col>
                </Row>
              </div>
            ))
        )}
        <div className="fixed-bottom p-4">
          <div className="flex justify-between">
            <div>
              <Button
                className="mx-2 text-white cursor-pointer"
                onClick={() => {
                  if (pagination === 0) return;
                  dispatch(prevPage());
                }}
                disabled={pagination === 0 ? true : false}
                variant="info"
              >
                <VscArrowSmallLeft />
              </Button>

              <Button
                className="mx-2 text-white cursor-pointer"
                onClick={() => dispatch(nextPage())}
                disabled={
                  cryptoData.length > 0 && cryptoData.length < 100
                    ? true
                    : false
                }
                variant="info"
              >
                <VscArrowSmallRight />
              </Button>
            </div>
            <div>
              <button onClick={() => scrollTop()} className=" cursor-pointer ">
                <TiArrowUpThick className="text-2xl rounded bg-blue-900 text-pink-50" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CryptoMarket;
