import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Row, Col, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllTrips } from "../../services/trips.service";
import { getAllCities } from "../../services/cities.service";
import { deleteTrip } from "../../services/trips.service";
import { postTrip } from "../../services/trips.service";
import { useState, useEffect } from "react";

function Trips_client() {
  const tokenData = useSelector((state) => state.auth.token);
  const [trips, setTrips] = useState([]);
  const [origin_city_id, setOrigin_city_id] = useState("");
  const [destination_id, setDestination_id] = useState("");
  const [user_id, setUser_id] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [number_of_tickets, setNumber_of_tickets] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (!tokenData || tokenData === "") {
      return;
    }
    getAllCities(tokenData)
      .then((rescities) => {
        setCities(rescities.data);
        getAllTrips(tokenData)
          .then((restrips) => {
            for (let i = 0; i < restrips.data.length; i++) {
              for (let j = 0; j < rescities.data.length; j++) {
                if (restrips.data[i].origin_city_id === rescities.data[j].id) {
                  restrips.data[i].origin_city_id = rescities.data[j].name;
                }
                if (restrips.data[i].destination_id === rescities.data[j].id) {
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
  }, [tokenData]);

  const postTriprequest = () => {
    postTrip(
      tokenData,
      origin_city_id,
      destination_id,
      user_id,
      start_date,
      end_date,
      number_of_tickets
    )
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log("err", e);
      });
  };

  const deleteTriprequest = (id) => {
    deleteTrip(tokenData, id)
      .then((res) => {
        console.log(res);
        setTrips(trips.filter((trip) => trip.id !== id));
      })
      .catch((e) => {
        console.log("err", e);
      });
  };

  return (
    <Row className="row gx-5 gy-3">
      <Col xs={12} md={6}>
        <div className="card">
          <div className="card-body">
            <h2 className="text-center card-title">Mis viajes</h2>
            <div className="overflow-x-auto">
              <table className="table w-100">
                <thead>
                  <tr>
                    <th scope="col">Id Viaje</th>
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
                      <td>{trip.origin_city_id}</td>
                      <td>{trip.destination_id}</td>
                      <td>{trip.start_date}</td>
                      <td>{trip.end_date}</td>
                      <td>{trip.number_of_tickets}</td>

                      <td>
                        <button
                          className="btn btn-primary me-3"
                          variant="danger"
                          onClick={() => deleteTriprequest(trip.id)}
                        >
                          <FontAwesomeIcon icon="trash" />
                        </button>
                        <button className="btn btn-danger">
                          <FontAwesomeIcon icon="edit" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Col>

      <Col xs={12} md={6}>
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-3">Agregar nuevo viaje</h2>
            <div className="d-flex flex-row flex-wrap align-items-center justify-content-center">
              <div className="d-flex flex-row align-items-center flex-fill mb-3 me-xl-3">
                <FontAwesomeIcon
                  className="me-2"
                  icon="fa-solid fa-plane-departure"
                />

                <Form.Select aria-label="Default select example">
                  <option>Ciudad de origen</option>
                  {cities.map((citi) => (
                    <option value={citi.id}>{citi.name}</option>
                  ))}
                </Form.Select>
              </div>
              <div className="d-flex flex-row align-items-center flex-fill mb-3">
                <FontAwesomeIcon
                  className="me-2"
                  icon="fa-solid fa-plane-arrival"
                />
                <Form.Select aria-label="Default select example">
                  <option>Ciudad destino</option>
                  {cities.map((citi) => (
                    <option value={citi.id}>{citi.name}</option>
                  ))}
                </Form.Select>
              </div>
              <div className="d-flex flex-row align-items-center flex-fill mb-3 me-xl-3">
                <span className="fa-layers fa-fw fa-lg me-2">
                  <FontAwesomeIcon icon="fa-solid fa-calendar" />
                  <FontAwesomeIcon
                    icon="fa-solid fa-square"
                    transform="shrink-12 left-3 down-1"
                    inverse
                  />
                </span>
                <Form.Control
                  type="date"
                  placeholder="Fecha ida"
                  className="w-100"
                />
              </div>
              <div className="d-flex flex-row align-items-center flex-fill mb-3">
                <span className="fa-layers fa-fw fa-lg me-2">
                  <FontAwesomeIcon icon="fa-solid fa-calendar" />
                  <FontAwesomeIcon
                    icon="fa-solid fa-square"
                    transform="shrink-12 right-3 down-5"
                    inverse
                  />
                </span>
                <Form.Control
                  type="date"
                  placeholder="Fecha regreso"
                  className="w-100"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-3 flex-fill">
                <FontAwesomeIcon className="me-2" icon="fa-solid fa-ticket" />
                <Form.Control
                  type="number"
                  placeholder="Numero de Tickets"
                  className="w-100"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center mt-2">
              <Button variant="primary" onClick={postTriprequest}>
                <FontAwesomeIcon className="me-2" icon="fa-solid fa-save" />
                Agregar Viaje
              </Button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default Trips_client;
