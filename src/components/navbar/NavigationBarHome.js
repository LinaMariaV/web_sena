import "./Navigation.css";
import NavigationBar from "./NavigationBar";

function NavigationBarHome() {
  return (
    <div className="background-image">
      <NavigationBar enableTitle={false} />
    </div>
  );
}
export default NavigationBarHome;
