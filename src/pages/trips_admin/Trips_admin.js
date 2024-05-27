import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { getAllTrips } from "../../services/trips.service";
import { getAllCities } from "../../services/cities.service";
import { getAllUsers } from "../../services/users.service";
import { useState, useEffect } from "react";

function Trips_admin() {
  const tokenData = useSelector((state) => state.auth.token);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    if (!tokenData || tokenData === "") {
      return;
    }

    getAllUsers(tokenData)
      .then((resusers) => {
        getAllCities(tokenData)
          .then((rescities) => {
            getAllTrips(tokenData)
              .then((restrips) => {
                for (let i = 0; i < restrips.data.length; i++) {
                  for (let j = 0; j < resusers.data.length; j++) {
                    if (restrips.data[i].user_id === resusers.data[j].id) {
                      restrips.data[i].user_id = resusers.data[j].name;
                    }
                  }
                }

                for (let i = 0; i < restrips.data.length; i++) {
                  for (let j = 0; j < rescities.data.length; j++) {
                    if (
                      restrips.data[i].origin_city_id === rescities.data[j].id
                    ) {
                      restrips.data[i].origin_city_id = rescities.data[j].name;
                    }
                    if (
                      restrips.data[i].destination_id === rescities.data[j].id
                    ) {
                      restrips.data[i].destination_id = rescities.data[j].name;
                    }
                  }
                }
                console.log(restrips.data);
                setTrips(restrips.data);
              })
              .catch((e) => {
                console.log("err", e);
              });
          })
          .catch((e) => {
            console.log("err", e);
          });
      })
      .catch((e) => {
        console.log("err", e);
      });
  }, [tokenData]);

  return (
    <div class="bd-example">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id Viaje</th>
            <th scope="col">Nombre de Usuario</th>
            <th scope="col">Ciudad Origen</th>
            <th scope="col">Ciudad Destino</th>
            <th scope="col">Fecha ida</th>
            <th scope="col">Fecha regreso</th>
            <th scope="col"># tiquetes</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip) => (
            <tr key={trip.id}>
              <th scope="row">{trip.id}</th>
              <td>{trip.user_id}</td>
              <td>{trip.origin_city_id}</td>
              <td>{trip.destination_id}</td>
              <td>{trip.start_date}</td>
              <td>{trip.end_date}</td>
              <td>{trip.number_of_tickets}</td>
              <td>
                <button className="btn btn-primary">
                  <FontAwesomeIcon icon="edit" />
                </button>
                <button className="btn btn-danger">
                  <FontAwesomeIcon icon="trash" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Trips_admin;
