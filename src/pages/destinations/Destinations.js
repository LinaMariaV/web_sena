import "./Destinations.css";
import CardI from "../../components/card/Card";
import { getAllCities } from "../../services/cities.service";
import { useEffect, useState } from "react";
import ButtonComponent from "../../components/button/Button";
import { useSelector } from "react-redux";

function Destinations() {
  const [cities, setCities] = useState([]);
  const loginstatus = useSelector((state) => state.auth.is_logged);
  const user_role = useSelector((state) => state.auth.user.role);

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
        <h1 className="text-center my-">
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
              onClick={() => {
                if (loginstatus) {
                  if (user_role === "client") {
                    window.location.href = "/trips_client";
                  } else {
                    window.location.href = "/trips_admin";
                  }
                } else {
                  window.location.href = "/login";
                }
              }}
            />
          </div>
        ))}
      </div>
      <div className="Button-container">
        <ButtonComponent
          text="Planea tu viaje"
          onClick={() => {
            window.location.href = "/login";
          }}
        />
      </div>
    </div>
  );
}

export default Destinations;
