import { useSelector } from "react-redux";
import ButtonsSection from "./ButtonsSection";

function RegistrationSection() {
  const loginstatus = useSelector((state) => state.auth.is_logged);
  return (
    <div className="registration-info">
      <h2 className="text-center">Regístrate para reservar viajes</h2>
      <p>
        Para agregar y gestionar tus viajes, necesitas estar registrado. Al
        registrarte, podrás:
      </p>
      <div className="list-group mb-2">
        <p className="list-group-item">Agregar y gestionar tus viajes</p>
        <p className="list-group-item">Acceder a ofertas exclusivas</p>
        <p className="list-group-item">Recibir asistencia personalizada</p>
      </div>
      {!loginstatus && <ButtonsSection onlyRegister={true} />}
    </div>
  );
}

export default RegistrationSection;
