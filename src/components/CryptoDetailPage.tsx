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
            className="flex justify-center align-items-center p-2 rounded-lg shadow-md border-blue-300 border-b-2 "
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
          <Row>
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
          <Row>
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
          <h3 className=" text-indigo-500 text-center">Top Market Volume</h3>
          <Col md={6} className=" mx-auto">
            <CryptoCharts />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <CryptoStatsPage />
          </Col>
          <Col md={6} className="flex">
            <h5 className="text-center text-indigo-500">Other Information</h5>
          </Col>
        </Row>

        <Button onClick={() => navigate(-1)}>back</Button>
      </Container>
    </div>
  );
};

export default CryptoDetailPage;
