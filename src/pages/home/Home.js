import "./Home.css";
import "../../components/card/Card.css";
import "../../components/styles/Icons.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InvitationSection from "./sections/InvitationSection";
import { useSelector } from "react-redux";
import ButtonsSection from "./sections/ButtonsSection";
import PopularSection from "./sections/PopularSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import QuestionsSection from "./sections/QuestionsSection";

function Home() {
  const loginstatus = useSelector((state) => state.auth.is_logged);

  return (
    <div>
      <InvitationSection />

      {!loginstatus && <ButtonsSection />}

      <PopularSection />

      <TestimonialsSection />
      <div className="mt-5 w-100">
        <div className="d-flex justify-content-center align-items-center">
          <div className="dashed-line-plane me-2"></div>
          <FontAwesomeIcon icon={["fas", "fa-plane"]} />
        </div>
      </div>
      <QuestionsSection />

      <div className="registration-info">
        <h2 className="text-center">Regístrate para agregar viajes</h2>
        <p>
          Para agregar y gestionar tus viajes, necesitas estar registrado. Al
          registrarte, podrás:
        </p>
        <div className="list-group mb-4">
          <p className="list-group-item">Agregar y gestionar tus viajes</p>
          <p className="list-group-item">Acceder a ofertas exclusivas</p>
          <p className="list-group-item">Recibir asistencia personalizada</p>
        </div>
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
