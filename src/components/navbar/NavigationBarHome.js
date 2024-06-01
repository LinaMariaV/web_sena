import "./Navigation.css";
import NavigationBar from "./NavigationBar";


function NavigationBarHome() {
  
  return (
    <div className="background-image">
      <NavigationBar enableTitle={false} />

      <div >
        <div className="title-home ">
          <h1 className="zize-title">¡Planea tu proximo viaje con nosotros!</h1>
        </div>
        
        

      </div>
    </div>
  );
}
export default NavigationBarHome;
