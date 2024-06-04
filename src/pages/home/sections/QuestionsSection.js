import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./QuestionsSection.css";

function QuestionsSection() {
  return (
    <div className="container">
      <div className="mt-5 pt-4">
        <Row>
          <Col>
            <h2 className="text-center mb-5">¿Por qué viajar con nosotros?</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="card-questions-icons">
              <FontAwesomeIcon
                className="icons-question"
                icon="fa-solid fa-dollar-sign"
              />
              <h3 className="text-center">¡Los mejores precios!</h3>
            </Card>
          </Col>

          <Col>
            <Card className="card-questions-icons">
              <FontAwesomeIcon
                className="icons-question"
                icon="fa-solid fa-map-location-dot"
              />
              <h3 className="text-center">¡Los mejores destinos!</h3>
            </Card>
          </Col>

          <Col>
            <Card className="card-questions-icons">
              <FontAwesomeIcon
                className="icons-question"
                icon="fa-solid fa-people-line"
              />
              <h3 className="text-center">¡La mejor atención!</h3>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default QuestionsSection;
