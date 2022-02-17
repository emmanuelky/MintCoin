import { useSelector } from "react-redux";
import { ReduxStore, CryptoSocialStatus } from "../Typings";
import { Col, Container, Row } from "react-bootstrap";
import { FcReddit } from "react-icons/fc";
import { FiTwitter } from "react-icons/fi";

const CryptoStatsPage = () => {
  const cryptoSocialStatus = useSelector<ReduxStore, CryptoSocialStatus>(
    (state) => state.crypto.crypto_social_status
  );

  return (
    <div className="h-full w-full p-4 ">
      <Container fluid>
        <Row>
          <Col className="flex align-items-center">
            <h3 className="text-indigo-500 mx-2">Social Status</h3>
            <FcReddit className="mx-2" />
            <FiTwitter />
          </Col>
        </Row>
        <div className="bg-white p-4 rounded-lg">
          <Row>
            <Col className="flex flex-column">
              <h6 className="text-center text-indigo-500">
                Twitter Followers:
              </h6>
              <pre className="mx-2 text-green-700 text-center">
                {cryptoSocialStatus &&
                cryptoSocialStatus.twitter.followers_count === null
                  ? 0
                  : cryptoSocialStatus &&
                    cryptoSocialStatus.twitter.followers_count}
              </pre>
            </Col>
          </Row>
          <Row>
            <Col className="flex flex-column">
              <h6 className="text-center text-indigo-500">
                Twitter Status Count:
              </h6>
              <pre className="mx-2 text-green-700 text-center">
                {cryptoSocialStatus &&
                cryptoSocialStatus.twitter.status_count === null
                  ? 0
                  : cryptoSocialStatus &&
                    cryptoSocialStatus.twitter.status_count}
              </pre>
            </Col>
          </Row>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <Row>
            <Col className="flex flex-column">
              <h6 className="text-center text-indigo-500">
                Reddit Subscribers:
              </h6>
              <pre className="mx-2 text-green-700 text-center">
                {cryptoSocialStatus &&
                cryptoSocialStatus.reddit.subscribers === null
                  ? 0
                  : cryptoSocialStatus && cryptoSocialStatus.reddit.subscribers}
              </pre>
            </Col>
          </Row>
          <Row>
            <Col className="flex flex-column">
              <h6 className="text-center text-indigo-500">
                Reddit Active Users:
              </h6>
              <pre className="mx-2 text-green-700 text-center">
                {cryptoSocialStatus &&
                cryptoSocialStatus.reddit.avg_active_users === null
                  ? 0
                  : cryptoSocialStatus &&
                    cryptoSocialStatus.reddit.avg_active_users}
              </pre>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default CryptoStatsPage;
