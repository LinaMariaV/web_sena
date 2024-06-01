import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import parisfrance from "../../../assets/paris-france.jpg";
import bali from "../../../assets/bali.jpg";
import newyork from "../../../assets/new-york.jpg";
import "./PopularSection.css";

function PopularSection() {
  return (
    <div className="popular-destinations-section">
      <div className="container">
        <h2 className="text-center mb-4">Destinos Populares</h2>
        <Row className="g-4">
          <Col xs={12} md={4}>
            <div className="destination-card">
              <img src={parisfrance} className="w-100" alt="París" />
              <h3 className="text-center paris-text">París</h3>
              <p>
                La ciudad del amor, con sus famosos monumentos y deliciosa
                gastronomía.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="destination-card">
              <img src={bali} className="w-100" alt="Bali" />
              <h3 className="text-center bali-text">Balí</h3>
              <p>Un paraíso tropical con playas exóticas y rica cultura.</p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="destination-card">
              <img src={newyork} className="w-100" alt="Nueva York" />
              <h3 className="text-center newyork-text">New York</h3>
              <p>
                La ciudad que nunca duerme, llena de energía y atracciones
                icónicas.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default PopularSection;
