import Atentionsection from "./section_info/atention";  

function Info  ()  {
  return (
    <div className="container mt-5">
      <h1 className="mb-4" >
        Información sobre la gestion de Viajes 
      </h1>
      <p className="lead" >
        Bienvenido a nuestra aplicación de viajes turísticos. Aquí podrás
        explorar una variedad de destinos y planificar tu viaje de manera
        sencilla.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2 className="mt-4" >Destinos</h2>
          <p>
            En nuestra sección de destinos, podrás explorar una amplia gama de
            lugares turísticos disponibles. Cada destino incluye una breve descripción
             y foto para ayudarte a elegir tu próximo viaje.
          </p>
          <img
            alt="Imagen de destino turístico"
            className="img-fluid mb-3"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mt-4" >Planificación del Viaje</h2>
          <h3>Dentro de las cosas que podras gestionar estan:</h3>
          <ul className="list-group mb-4">
            <li className="list-group-item">Ciudad de Origen</li>
            <li className="list-group-item">Ciudad de Destino</li>
            <li className="list-group-item">Fecha del Vuelo</li>
            <li className="list-group-item">Número de Tiquetes</li>
          </ul>
        </div>
      </div>

      <h2 className="mt-4" >Detalles de Alojamiento</h2>
      <p>
        Para  agregar y personalizar los detalles de tu alojamiento u otros servicios
        adicionales, por favor contacta a nuestro equipo de atención al cliente.
        Estaremos encantados de asistirte para crear una experiencia de viaje a
        tu medida.
      </p>

      <Atentionsection/>
    </div>
  );
};

export default Info;
