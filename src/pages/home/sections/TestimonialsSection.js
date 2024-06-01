import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TestimonialsSection.css";

function TestimonialsSection() {
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
    <div className="testimonials container mt-5">
      <h2 className="text-center mb-4">Lo que dicen nuestros clientes</h2>
      <Row className="g-4">
        {testimonials_array.map((testimonial) => (
          <Col sm={12} md={6} lg={4} key={testimonial.id}>
            <div className="card testimonial">
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="customer-name">
                <div
                  className={"customer-icon-name testimonial-" + testimonial.id}
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
  );
}

export default TestimonialsSection;
