import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="flex my-5 ">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loading;
