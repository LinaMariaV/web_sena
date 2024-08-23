import {  Col, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { postTrip } from "../../services/trips.service";
import { useSelector } from "react-redux";
import { getAllTrips } from "../../services/trips.service";
import { getAllCities } from "../../services/cities.service";


function Add_trips() {
    const tokenData = useSelector((state) => state.auth.token);
  const user_id = useSelector((state) => state.auth.user.id);

  const [cities, setCities] = useState([]);
  
  const [origin_city_id, setOrigin_city_id] = useState("");
  const [destination_id, setDestination_id] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [number_of_tickets, setNumber_of_tickets] = useState("");
  const [errorSave, setErrorSave] = useState(undefined);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getAllTripsRequest();
  }, []); 

  const getAllTripsRequest = () => {
    getAllCities()
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
  };
  

  const postTripRequest = () => {
    setErrorSave(undefined);
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
        getAllTripsRequest();
        setDestination_id("");
        setEnd_date("");
        setNumber_of_tickets("");
        setOrigin_city_id("");
        setStart_date("");
      })
      .catch((e) => {
        console.log("err", e);
        setErrorSave(
          "Hubo un error al guardar el viaje: " + e.response.data.message
        );
      });
  };
  return (
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

              <Form.Select
                aria-label="Ciudad de origen"
                onChange={(e) => setOrigin_city_id(e.target.value)}
                value={origin_city_id}
              >
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
              <Form.Select
                aria-label="Ciudad de destino"
                onChange={(e) => setDestination_id(e.target.value)}
                value={destination_id}
              >
                <option>Ciudad de destino</option>
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
                title="Fecha ida"
                placeholder="Fecha ida"
                className="w-100"
                onChange={(e) => setStart_date(e.target.value)}
                value={start_date}
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
                title="Fecha regreso"
                placeholder="Fecha regreso"
                className="w-100"
                onChange={(e) => setEnd_date(e.target.value)}
                value={end_date}
              />
            </div>

            <div className="d-flex flex-row align-items-center mb-3 flex-fill">
              <FontAwesomeIcon className="me-2" icon="fa-solid fa-ticket" />
              <Form.Control
                type="number"
                placeholder="Numero de Tickets"
                className="w-100"
                onChange={(e) => setNumber_of_tickets(e.target.value)}
                value={number_of_tickets}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <Button variant="primary" onClick={postTripRequest}>
              <FontAwesomeIcon className="me-2" icon="fa-solid fa-save" />
              Agregar Viaje
            </Button>
          </div>
          {errorSave ? (
            <div class="alert alert-danger mt-2" role="alert">
              {errorSave}
            </div>
          ) : null}
        </div>
      </div>
    </Col>
  );
}

export default Add_trips;
