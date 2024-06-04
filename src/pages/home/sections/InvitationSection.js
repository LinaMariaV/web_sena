import "./InvitationSection.css";
import travel_image from "../../../assets/travel-with-us.png";
import { useSelector } from "react-redux";
import ButtonsSection from "../sections/ButtonsSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InvitationSection() {
  const loginstatus = useSelector((state) => state.auth.is_logged);
  return (
    <div className="invitation-home">
      <div className="row row-invitation">
        <div className="col-12 col-sm-6 justify-content-center d-flex flex-column">
          <h1 className="text-center fw-bold title-invitation">
            ¡Planea tu proximo viaje con nosotros!
          </h1>
          <div className="text-center mb-2 mt-2 fs-4">
            Tenemos los mejores destinos y precios para ti.
          </div>
          <div className="text-center mb-5 fs-4">
            Estamos a solo un click de distancia.
          </div>
          {!loginstatus && <ButtonsSection />}
        </div>
        <div className="col-12 col-sm-6 justify-content-center d-flex flex-column">
          <img
            src={travel_image}
            alt="Travel with us"
            className="travel-with-us"
          />
        </div>
      </div>
      <div>
        <a href="#read-more" className="text-decoration-none">
          <h2 id="read-more" className="text-center d-flex flex-column mb-2">
            <span className="fs-6">Leer mas</span>
            <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
          </h2>
        </a>
      </div>
    </div>
  );
}

export default InvitationSection;
