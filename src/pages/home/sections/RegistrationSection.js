import { useSelector } from "react-redux";
import ButtonsSection from "./ButtonsSection";
import support_image from "../../../assets/support-travel.png";
import modify_image from "../../../assets/modify-travels.png";
import discounts_image from "../../../assets/discounts-plane.png";
import "./RegistrationSection.css";

function RegistrationSection() {
  const loginstatus = useSelector((state) => state.auth.is_logged);
  return (
    <div className="container mt-5 pt-4">
      <div className="registration-info">
        <h2 className="text-center mb-4">Regístrate para reservar viajes</h2>
        <p>
          Para agregar y gestionar tus viajes, necesitas estar registrado. Al
          registrarte, podrás:
        </p>
        <div className="list-group mb-2">
          <div className="list-group-item d-flex flex-row justify-content-around align-items-center">
            <img
              className="image-registration"
              src={modify_image}
              alt="Modify travel"
            />
            <span className="fw-bold fs-5">
              Reservar nuevos viajes y modificar los existentes
            </span>
          </div>
          <div className="list-group-item d-flex flex-row justify-content-around align-items-center">
            <span className="fw-bold fs-5">Acceder a ofertas exclusivas</span>
            <img
              className="image-registration"
              src={discounts_image}
              alt="Discounts"
            />
          </div>
          <div className="list-group-item d-flex flex-row justify-content-around align-items-center">
            <img
              className="image-registration"
              src={support_image}
              alt="Support"
            />
            <span className="fw-bold fs-5">
              Recibir asistencia personalizada
            </span>
          </div>
        </div>
        {!loginstatus && <ButtonsSection onlyRegister={true} />}
      </div>
    </div>
  );
}

export default RegistrationSection;
