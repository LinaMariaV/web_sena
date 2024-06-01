import ButtonComponent from "../../../components/button/Button";
import "./ButtonsSection.css";

function ButtonsSection() {
  return (
    <div className="buttons-section">
      <div className="d-flex justify-content-center">
        <ButtonComponent
          className="home-button me-2"
          text="Iniciar sesion"
          onClick={() => (window.location.href = "/login")}
        />

        <ButtonComponent
          className="home-button"
          text="Registrate"
          onClick={() => (window.location.href = "/register")}
        />
      </div>
    </div>
  );
}

export default ButtonsSection;
