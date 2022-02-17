import { useSelector } from "react-redux";
import { ReduxStore, CryptoSocialStatus } from "../Typings";

import { Col, Container, Row } from "react-bootstrap";

const CryptoStatsPage = () => {
  const cryptoSocialStatus = useSelector<ReduxStore, CryptoSocialStatus>(
    (state) => state.crypto.crypto_social_status
  );

  console.log(cryptoSocialStatus);
  return (
    <div className="h-full w-full p-4 ">
      <Container fluid>
        <Row>
          <Col>
            <h3 className="text-indigo-500">Social Status</h3>
          </Col>
        </Row>
        <div className="bg-white p-4 rounded-lg">
          <Row>
            <Col className="flex">
              <h5 className="text-center text-indigo-500">
                Twitter Followers:
              </h5>
              <h4 className="mx-2 text-green-700">
                {cryptoSocialStatus &&
                  cryptoSocialStatus.twitter.followers_count}
              </h4>
            </Col>
          </Row>
          <Row>
            <Col className="flex">
              <h5 className="text-center text-indigo-500">
                Twitter Status Count:
              </h5>
              <h4 className="mx-2 text-green-700">
                {cryptoSocialStatus && cryptoSocialStatus.twitter.status_count}
              </h4>
            </Col>
          </Row>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <Row>
            <Col className="flex">
              <h5 className="text-center text-indigo-500">
                Reddit Subscribers:
              </h5>
              <h4 className="mx-2 text-green-700">
                {cryptoSocialStatus &&
                cryptoSocialStatus.reddit.subscribers === null
                  ? 0
                  : cryptoSocialStatus && cryptoSocialStatus.reddit.subscribers}
              </h4>
            </Col>
          </Row>
          <Row>
            <Col className="flex">
              <h5 className="text-center text-indigo-500">
                Reddit Active Users:
              </h5>
              <h4 className="mx-2 text-green-700">
                {cryptoSocialStatus &&
                cryptoSocialStatus.reddit.avg_active_users === null
                  ? 0
                  : cryptoSocialStatus &&
                    cryptoSocialStatus.reddit.avg_active_users}
              </h4>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default CryptoStatsPage;
