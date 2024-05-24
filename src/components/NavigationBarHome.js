import { useSelector} from "react-redux";
import ButtonComponent from "./Button";
import NavigationBar from "./NavigationBar";

function NavigationBarHome() {
  const loginstatus = useSelector((state) => state.auth.is_logged);
  return (
    <div className="background-image">
      <NavigationBar enableTitle={false} />

      <div style={{ marginTop: "56px" }}>
        <div className="title-home">
          <h1>¡Planea tu proximo viaje con nosotros!</h1>
        </div>
        <div className="text-center button-navigation">
        {loginstatus ? null : <ButtonComponent className="text-center" text="Unete" />}
        </div>
        

      </div>
    </div>
  );
}
export default NavigationBarHome;
