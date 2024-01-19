import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <>
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <Link to="/trending" className="text-decoration-none">
            TRENDING
          </Link>
          <Link to="/podcast" className="text-decoration-none">
            PODCAST
          </Link>
          <Link to="/moods-and-genres" className="text-decoration-none">
            MOODS AND GENRES
          </Link>
          <Link to="/new-releases" className="text-decoration-none">
            NEW RELEASES
          </Link>
          <Link to="/discover" className="text-decoration-none">
            DISCOVER
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default MyNavbar;
