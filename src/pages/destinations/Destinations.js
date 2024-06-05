import "./Destinations.css";
import CardI from "../../components/card/Card";
import { getAllCities } from "../../services/cities.service";
import { useEffect, useState } from "react";
import ButtonComponent from "../../components/button/Button";

function Destinations() {
  const [cities, setCities] = useState([]);

  const getAllCitiesRequest = () => {
    getAllCities()
      .then((res) => {
        console.log(res);
        setCities(res.data);
      })
      .catch((e) => {
        console.log("err", e);
      });
  };

  useEffect(() => {
    getAllCitiesRequest();
  }, []);

  return (
    <div className="Destinations">
      <div>
        <h1 className="text-center my-5">
          Conoce algunos los destinos disponibles
        </h1>
      </div>
      <div className="row g-5">
        {cities.map((city) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-12">
            <CardI
              image={city.url_image}
              title={city.name}
              text={city.description}
              button="Reservar"
              onClick={() => {window.location.href = "/login"}}
            />
          </div>
        ))}
      </div>
      <div className="Button-container">
        <ButtonComponent text="Planea tu viaje" 
                onClick={() => {window.location.href = "/login"}}
                />
      </div>
    </div>
  );
}

export default Destinations;
