import "./Home.css";
import "../../components/card/Card.css";
import "../../components/styles/Icons.css";
import parisfrance from "../../assets/paris-france.jpg";
import bali from "../../assets/bali.jpg";
import newyork from "../../assets/new-york.jpg";
import ButtonComponent from "../../components/button/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import suiza from "../../assets/suiza.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InvitationSection from "./sections/InvitationSection";
import { useSelector } from "react-redux";

function Home() {
  const loginstatus = useSelector((state) => state.auth.is_logged);
  const testimonials_array = [
    {
      id: 1,
      text: "¡Un servicio increíble! Todo fue perfecto y fácil de planear. ¡Definitivamente volveré a usarlo!",
      customer_name: "Juan Pérez",
    },
    {
      id: 2,
      text: "Los mejores precios y destinos. Mi viaje a Suiza fue inolvidable gracias a ellos.",
      customer_name: "María García",
    },
    {
      id: 3,
      text: "La atención al cliente fue excelente. Me ayudaron en cada paso del camino.",
      customer_name: "Luis Rodríguez",
    },
    {
      id: 4,
      text: "Viajar con ellos fue la mejor decisión. Todo estuvo perfectamente organizado y sin complicaciones.",
      customer_name: "Ana López",
    },
    {
      id: 5,
      text: "Gracias a su servicio, pude disfrutar de unas vacaciones increíbles a un precio inigualable.",
      customer_name: "Carlos Mendoza",
    },
    {
      id: 6,
      text: "La experiencia fue fantástica, desde la reserva hasta el regreso. ¡Totalmente recomendable!",
      customer_name: "Sofía Fernández",
    },
  ];
  return (
    <div className="container">
      <InvitationSection />

      <div className="container">
        <Row className="g-5">
          <Col xs={12} md={4}>
            <img className="w-100" src={suiza} />
          </Col>
          <Col xs={12} md={4}>
            <img className="w-100" src={suiza} />
          </Col>
          <Col xs={12} md={4}>
            <img className="w-100" src={suiza} />
          </Col>
        </Row>
      </div>

      {loginstatus ? null : (
        <div>
          <div className="text-center">
            <ButtonComponent
              className="home-button"
              text="Iniciar sesion"
              onClick={() => (window.location.href = "/login")}
            />
          </div>

          <div className="text-center">
            <ButtonComponent
              className="home-button"
              text="Registrate"
              onClick={() => (window.location.href = "/register")}
            />
          </div>
        </div>
      )}

      <div className="popular-destinations">
        <h2 className="text-center">Destinos Populares</h2>
        <Row className="g-4">
          <Col xs={12} md={4}>
            <div className="destination-card">
              <img src={parisfrance} className="w-100" alt="París" />
              <h3 className="text-center">París</h3>
              <p>
                La ciudad del amor, con sus famosos monumentos y deliciosa
                gastronomía.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="destination-card">
              <img src={bali} className="w-100" alt="Bali" />
              <h3 className="text-center">Bali</h3>
              <p>Un paraíso tropical con playas exóticas y rica cultura.</p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="destination-card">
              <img src={newyork} className="w-100" alt="Nueva York" />
              <h3 className="text-center">Nueva York</h3>
              <p>
                La ciudad que nunca duerme, llena de energía y atracciones
                icónicas.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="testimonials">
        <h2 className="text-center">Lo que dicen nuestros clientes</h2>
        <Row className="g-4">
          {testimonials_array.map((testimonial) => (
            <Col sm={12} md={6} lg={4} key={testimonial.id}>
              <div className="card testimonial">
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="customer-name">
                  <div
                    className={
                      "customer-icon-name testimonial-" + testimonial.id
                    }
                  >
                    {testimonial.customer_name.charAt(0)}
                  </div>
                  {testimonial.customer_name}
                  <FontAwesomeIcon
                    icon="fa-solid fa-star"
                    className="text-warning ms-2"
                  />
                  <FontAwesomeIcon
                    icon="fa-solid fa-star"
                    className="text-warning"
                  />
                  <FontAwesomeIcon
                    icon="fa-solid fa-star"
                    className="text-warning"
                  />
                  <FontAwesomeIcon
                    icon="fa-solid fa-star"
                    className="text-warning"
                  />
                  <FontAwesomeIcon
                    icon="fa-solid fa-star"
                    className="text-warning"
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div className="cont-home">
        <Row>
          <Col>
            <h1 className="text-center">¿Por qué viajar con nosotros?</h1>
          </Col>
        </Row>
        <br />

        <Row>
          <Col>
            <Card className="card-questions-icons">
              <FontAwesomeIcon
                className="icons-home"
                icon="fa-solid fa-dollar-sign"
              />
              <h3 className="text-center">¡Los mejores precios!</h3>
            </Card>
          </Col>

          <Col>
            <Card className="card-questions-icons">
              <FontAwesomeIcon
                className="icons-home"
                icon="fa-solid fa-map-location-dot"
              />
              <h3 className="text-center">¡Los mejores destinos!</h3>
            </Card>
          </Col>

          <Col>
            <Card className="card-questions-icons">
              <FontAwesomeIcon
                className="icons-home"
                icon="fa-solid fa-people-line"
              />
              <h3 className="text-center">¡La mejor atención!</h3>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="faq-section">
        <h2 className="text-center">Preguntas Frecuentes</h2>
        <div className="faq-item">
          <h3>¿Cómo puedo reservar un viaje?</h3>
          <p>
            Puedes reservar tu viaje fácilmente a través de nuestra plataforma
            en línea. Solo elige tu destino, selecciona las fechas y sigue los
            pasos indicados.
          </p>
        </div>
        <div className="faq-item">
          <h3>¿Qué métodos de pago aceptan?</h3>
          <p>
            Aceptamos todas las principales tarjetas de crédito, PayPal y
            transferencias bancarias.
          </p>
        </div>
        <div className="faq-item">
          <h3>¿Puedo cancelar o modificar mi reserva?</h3>
          <p>
            Sí, ofrecemos opciones flexibles para cancelar o modificar tu
            reserva. Consulta nuestra política de cancelación para más detalles.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
