import React from "react";
import "./section_info/info.css";
import { Row, Col } from "react-bootstrap";
import imagenppal from "../../assets/imagen_principal.jpg";

function Info() {
  return (
    <div className="info-container container mt-5">
      <h1 className=" font-tittle mb-4">Gestión de Viajes Turísticos</h1>
      <p className="lead text-center">
        ¡Bienvenido a nuestra aplicación de viajes turísticos. Explora destinos,
        planifica tu viaje y disfruta de una experiencia inolvidable!
      </p>

      <Row>
        <Col className="col justify-content-center d-flex flex-column">
          <h2 className=" text-center ">Destinos</h2>
          <p className="text-justify">
            Descubre una amplia variedad de destinos turísticos. Cada destino
            incluye una breve descripción y fotos para ayudarte a elegir tu
            próximo viaje.
          </p>
        </Col>

        <Col>
          <img
            src={imagenppal}
            alt="Imagen de destino turístico"
            className="img-fluid mb-5 mx-auto d-block"
          />
        </Col>
      </Row>
      <div className="card">
      <Row>
        <Col >
          <div className="info-section px-3">
            <h2 className="text-center mt-5">Planificación del Viaje</h2>
            <p className="text-justify">
              Gestiona todos los aspectos de tu viaje, desde la ciudad de origen
              hasta el número de tiquetes.
            </p>
            <ul className="list-group mb-5">
              <li className="list-group-item">Ciudad de Origen</li>
              <li className="list-group-item">Ciudad de Destino</li>
              <li className="list-group-item">Fecha del Vuelo</li>
              <li className="list-group-item">Número de Tiquetes</li>
            </ul>
          </div>
        </Col>
        <Col >
        
          <div className="info-section px-3">
            <h2 className="text-center mt-5">Detalles de Alojamiento</h2>
            <p className="text-justify">
              Personaliza los detalles de tu alojamiento y otros servicios
              adicionales contactando a nuestro equipo de atención al cliente.
              Aunque en nuestra pagina web no disponemos de esta funcionalidad,
              puedes contactarnos a través de los medios de contacto que se
              encuentran en la parte inferior de esta página. Nuestro equipo
              estará encantado de ayudarte. Una que hayas reservado tus vuelos
              uno de nuestros asesores se pondrá en contacto contigo para
              ofrecerte las mejores opciones de alojamiento.
            </p>
          </div>
        </Col>
      </Row>
      </div>

      <div className="faq-section mt-5">
        <h2 className="text-center mb-4">Preguntas Frecuentes</h2>
        <div className="faq-item mb-3">
          <h3>¿Cómo puedo reservar un viaje?</h3>
          <p>
            Puedes reservar tu viaje fácilmente a través de nuestra plataforma
            en línea. Solo elige tu destino, selecciona las fechas y sigue los
            pasos indicados.
          </p>
        </div>
        <div className="faq-item mb-3">
          <h3>¿Qué métodos de pago aceptan?</h3>
          <p>
            Aceptamos todas las principales tarjetas de crédito, PayPal y
            transferencias bancarias.
          </p>
        </div>
        <div className="faq-item mb-3">
          <h3>¿Puedo cancelar o modificar mi reserva?</h3>
          <p>
            Sí, ofrecemos opciones flexibles para cancelar o modificar tu
            reserva. Consulta nuestra política de cancelación para más detalles.
          </p>
        </div>
      </div>
      <div className="atention-section mt-5">
        <h2 className="text-center">Atención al Cliente</h2>
        <ul className="list-group mb-4">
          <li className="list-group-item">
            <strong>Teléfono:</strong> 123-456-7890
          </li>
          <li className="list-group-item">
            <strong>Correo Electrónico:</strong> contacto@viajesturisticos.com
          </li>
          <li className="list-group-item">
            <strong>Chat de WhatsApp:</strong> 3176190286
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Info;
