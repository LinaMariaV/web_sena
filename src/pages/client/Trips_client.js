import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Modal from "react-bootstrap/Modal";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllTrips } from "../../services/trips.service";
import { getAllCities } from "../../services/cities.service";
import { deleteTrip } from "../../services/trips.service";
import { postTrip } from "../../services/trips.service";
import { putTrip } from "../../services/trips.service";
import { useState, useEffect } from "react";

function Trips_client() {
  const tokenData = useSelector((state) => state.auth.token);
  const user_id = useSelector((state) => state.auth.user.id);
  const [trips, setTrips] = useState([]);
  const [origin_city_id, setOrigin_city_id] = useState("");
  const [destination_id, setDestination_id] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [number_of_tickets, setNumber_of_tickets] = useState("");
  const [cities, setCities] = useState([]);
  const [errorSave, setErrorSave] = useState(undefined);
  const [errorDelete, setErrorDelete] = useState(undefined);
  const [errorEdit, setErrorEdit] = useState(undefined);
  const [show, setShow] = useState(false);
  const [tripEdit, setTripEdit] = useState({});

  const handleClose = () => {
    setTripEdit({});
    setShow(false);
  };
  const handleShow = (trip) => {
    setTripEdit(trip);
    setShow(true);
  };
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

  useEffect(() => {
    if (!tokenData || tokenData === "") {
      return;
    }
    getAllTripsRequest();
  }, [tokenData]);

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

  const deleteTripRequest = (id) => {
    setErrorDelete(undefined);
    deleteTrip(tokenData, id)
      .then((res) => {
        console.log(res);
        setTrips(trips.filter((trip) => trip.id !== id));
      })
      .catch((e) => {
        console.log("err", e);
        setErrorDelete(
          "Hubo un error al eliminar el viaje: " + e.response.data.message
        );
      });
  };

  const putTripRequest = () => {
    setErrorEdit(undefined);
    putTrip(
      tokenData,
      tripEdit.id,
      tripEdit.origin_city_id,
      tripEdit.destination_id,
      user_id,
      tripEdit.start_date,
      tripEdit.end_date,
      tripEdit.number_of_tickets
    )
      .then((res) => {
        console.log(res);
        getAllTripsRequest();
        handleClose();
      })
      .catch((e) => {
        console.log("err", e);
        setErrorEdit(
          "Hubo un error al editar el viaje debe llenar todos los campos: " + e.response.data.message
        );
      });
  };

  
  return (
    <Row className="row gx-5 gy-3">
      <Col xs={12} md={6}>
        <div className="card">
          <div className="card-body">
            <h2 className="text-center card-title">Mis viajes</h2>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Editar viaje {tripEdit.id}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <FontAwesomeIcon
                    className="me-2"
                    icon="fa-solid fa-plane-departure"
                  />

                  <Form.Select
                    aria-label="Ciudad de origen"
                    onChange={(e) =>
                      setTripEdit({
                        ...tripEdit,
                        origin_city_id: e.target.value,
                      })
                    }
                    value={tripEdit.origin_city_id}
                  >
                    <option>Ciudad de origen</option>
                    {cities.map((citi) => (
                      <option value={citi.id}>{citi.name}</option>
                    ))}
                  </Form.Select>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <FontAwesomeIcon
                    className="me-2"
                    icon="fa-solid fa-plane-arrival"
                  />
                  <Form.Select
                    aria-label="Ciudad de destino"
                    onChange={(e) =>
                      setTripEdit({
                        ...tripEdit,
                        destination_id: e.target.value,
                      })
                    }
                    value={tripEdit.destination_id}
                  >
                    <option>Ciudad de destino</option>
                    {cities.map((citi) => (
                      <option value={citi.id}>{citi.name}</option>
                    ))}
                  </Form.Select>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
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
                    onChange={(e) =>
                      setTripEdit({ ...tripEdit, start_date: e.target.value })
                    }
                    value={tripEdit.start_date}
                  />
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
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
                    onChange={(e) =>
                      setTripEdit({ ...tripEdit, end_date: e.target.value })
                    }
                    value={tripEdit.end_date}
                  />
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <FontAwesomeIcon className="me-2" icon="fa-solid fa-ticket" />
                  <Form.Control
                    type="number"
                    placeholder="Numero de Tickets"
                    className="w-100"
                    onChange={(e) =>
                      setTripEdit({
                        ...tripEdit,
                        number_of_tickets: e.target.value,
                      })
                    }
                    value={tripEdit.number_of_tickets}
                  />
                </div>
                {errorEdit ? (
                  <div class="alert alert-danger mt-2" role="alert">
                    {errorEdit}
                  </div>
                ) : null}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button variant="primary" onClick={putTripRequest}>
                  Guardar cambios
                </Button>
              </Modal.Footer>
            </Modal>
            {errorDelete ? (
              <div class="alert alert-danger mt-2" role="alert">
                {errorDelete}
              </div>
            ) : null}
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
                        <button className="btn btn-primary me-3">
                          <FontAwesomeIcon
                            icon="edit"
                            onClick={() => handleShow(trip)}
                          />
                        </button>
                        <button
                          className="btn btn-danger"
                          variant="danger"
                          onClick={() => deleteTripRequest(trip.id)}
                        >
                          <FontAwesomeIcon icon="trash" />
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
    </Row>
  );
}
export default Trips_client;
