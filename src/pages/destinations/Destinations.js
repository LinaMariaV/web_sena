import "./Destinations.css";
import "../../components/Card.css"
import CardI from "../../components/Card";
import suiza from "../../assets/suiza.jpg";
import paris from "../../assets/paris.jpg";
import bali from "../../assets/bali.jpg";
import cali from "../../assets/cali.jpg";
import grecia from "../../assets/grecia.jpg";
import medellin from "../../assets/medellin.jpg";
import barranquilla from "../../assets/barranquilla.jpg";
import monteria from "../../assets/monteria.jpg";
import santamarta from "../../assets/santa-marta.jpg";
import newyork from "../../assets/newyork.jpg"; 
import bogota from "../../assets/bogota.jpg";


import machupichu from "../../assets/machu-picchu.jpg";
import ButtonComponent from "../../components/Button";

function Destinations() {
  return (
    <div className="Destinations">

      <div>   
        <h1 className="text-center">Conoce algunos los destinos disponibles</h1>
      </div>
      <div className="    Cards-container">
        <CardI
          image={newyork}
          title="NEW YORK"
          text=""
          button="Ver detalles"
        />
        <CardI
          image={medellin}
          title="MEDELLIN"
          text=""
          button="Ver detalles"
        />
        <CardI
          image={bogota}
          title="BOGOTA"
          text=""
          button="Ver detalles"
        />
      </div>
      <div className="Cards-container">
        <CardI
          image={bali}
          title="BALÍ"
          text=""
          button="Ver detalles"
        />

        <CardI
          image={santamarta}
          title="SANTA MARTA"
          text=""
          button="Ver detalles"
        />
        <CardI
          image={monteria}
          title="MONTERIA"
          text=""
          button="Ver detalles"
        />
      </div>
      
      <div className="Cards-container">
        <CardI
          image={suiza}
          title="SUIZA"
          text="Descubre la gran belleza natural que Suiza tiene para ti.."
          button="Ver detalles"
        />
        <CardI
          image={paris}
          title="PARÍS"
          text="Descubre la magia envolvente de París, la ciudad del amor."
          button="Ver detalles"
        />
        <CardI
          image={machupichu}
          title="MACHU PICCHU"
          text="Explora las ruinas antiguas de Machu Picchu."
          button="Ver detalles"
        />
      </div>
      <div className="    Cards-container">
        <CardI
          image={grecia}
          title="GRECIA"
          text=""
          button="Ver detalles"
        />
        <CardI
          image={cali}
          title="CALI"
          text=""
          button="Ver detalles"
        />
        <CardI
          image={barranquilla}
          title="BARRANQUILLA"
          text=""
          button="Ver detalles"
        />
      </div>    
      <div className="Button-container">
        <ButtonComponent text="Planea tu viaje" />
      </div>
    </div>
  );
}

export default Destinations;
