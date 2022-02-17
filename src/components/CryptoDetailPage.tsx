import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Col, Row, Button } from "react-bootstrap";
import { ReduxStore, Crypto } from "../Typings";
import CryptoCharts from "./CryptoCharts";
import CryptoStatsPage from "./CryptoStats";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { fetchCryptoDetailsPage } from "../redux/actions";
import { ImArrowLeft } from "react-icons/im";
import { BiTrophy } from "react-icons/bi";
import { FcComboChart } from "react-icons/fc";
import { FaChartPie } from "react-icons/fa";

type AppDispatch = ThunkDispatch<ReduxStore, any, AnyAction>;

const CryptoDetailPage = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const cryptoDetails = useSelector<ReduxStore, Crypto[]>(
    (state) => state.crypto.coin_details
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchCryptoDetailsPage(id));
    }
  }, [dispatch, id]);

  return (
    <div className="h-full w-full p-4 ">
      <Container fluid>
        <Row>
          <Col
            md={12}
            className="flex justify-center align-items-center p-2 rounded-lg shadow-sm border-blue-300 border-b-2 "
          >
            <h1 className=" text-indigo-500">
              {cryptoDetails && cryptoDetails[0].name}
            </h1>
            <h4 className=" text-indigo-400">
              ({cryptoDetails && cryptoDetails[0].symbol})
            </h4>
          </Col>
        </Row>
        <Row className="flex flex-wrap bg-blue-900 text-white p-4 my-4">
          <Row className="flex flex-wrap">
            <Col className="text-center text-indigo-200">
              <span>Market Cap</span>
            </Col>
            <Col className="text-center text-indigo-200">
              <span>Total Supply </span>
            </Col>
            <Col className="text-center text-indigo-200">
              <span>Circulating Supply</span>
            </Col>

            <Col className="text-center text-indigo-200">
              <span>Volume 24(H)</span>
            </Col>
          </Row>
          <Row className="flex flex-wrap">
            <Col className="text-center">
              <h6>${cryptoDetails && cryptoDetails[0].market_cap_usd}</h6>
            </Col>
            <Col className="text-center">
              <h6>${cryptoDetails && cryptoDetails[0].tsupply}</h6>
            </Col>

            <Col className="text-center">
              <h6>${cryptoDetails && cryptoDetails[0].csupply}</h6>
            </Col>

            <Col className="text-center">
              <h6>${cryptoDetails && cryptoDetails[0].volume24}</h6>
            </Col>
          </Row>
        </Row>

        <Row className="p-4">
          <h3 className="flex justify-center align-items-center text-indigo-500">
            Top Market Coin Volume
            <span className="mx-2">
              <FaChartPie />
            </span>
          </h3>
          <Col md={6} className=" mx-auto">
            <CryptoCharts />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <CryptoStatsPage />
          </Col>
          <Col md={6} className=" h-full w-full p-4 flex flex-column">
            <h3 className="flex justify-center align-items-center text-indigo-500">
              Price Stats
              <span className="mx-2">
                <FcComboChart />
              </span>
            </h3>

            <div className="flex flex-wrap bg-white rounded-md shadow-2xl p-4">
              <div className="w-1/2">
                <h6>
                  <span className="text-indigo-500">Price: </span>$
                  {cryptoDetails && cryptoDetails[0].price_usd}
                </h6>
              </div>
              <div className="w-1/2">
                <h6>
                  <span className="text-indigo-500">BTC Price: </span>
                  {cryptoDetails && cryptoDetails[0].price_btc}
                </h6>
              </div>
              <div className="w-1/2">
                <span className="text-indigo-500">Percent Change 1h: </span>
                <h6
                  className={
                    parseInt(
                      cryptoDetails && cryptoDetails[0].percent_change_1h
                    ) > 0
                      ? "text-green-500"
                      : "text-red-600"
                  }
                >
                  ${cryptoDetails && cryptoDetails[0].percent_change_1h}
                </h6>
              </div>
              <div className="w-1/2">
                <span className="text-indigo-500">Percent Change 24h: </span>
                <h6
                  className={
                    parseInt(
                      cryptoDetails && cryptoDetails[0].percent_change_24h
                    ) > 0
                      ? "text-green-500"
                      : "text-red-600"
                  }
                >
                  ${cryptoDetails && cryptoDetails[0].percent_change_24h}
                </h6>
              </div>
              <div className="w-1/2">
                <span className="text-indigo-500">Percent Change 7d: </span>
                <h6
                  className={
                    parseInt(
                      cryptoDetails && cryptoDetails[0].percent_change_7d
                    ) > 0
                      ? "text-green-500"
                      : "text-red-600"
                  }
                >
                  ${cryptoDetails && cryptoDetails[0].percent_change_7d}
                </h6>
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-center text-indigo-500">Rank</h3>
              <h1>
                <BiTrophy className="mx-auto text-amber-500 " />
              </h1>
              <h1 className="text-center underline">
                {cryptoDetails && cryptoDetails[0].rank}
              </h1>
            </div>
          </Col>
        </Row>
        <Row className="fixed-bottom p-2">
          <Col md={12} className="flex justify-start">
            <Button onClick={() => navigate(-1)}>
              <ImArrowLeft />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CryptoDetailPage;
