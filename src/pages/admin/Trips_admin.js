import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { deleteTrip, getAllTrips, putTrip } from "../../services/trips.service";
import { getAllCities } from "../../services/cities.service";
import { getAllUsers } from "../../services/users.service";
import { useState, useEffect } from "react";
import { Col, Table } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Button, Row, Form } from "react-bootstrap";

function Trips_admin() {
  const tokenData = useSelector((state) => state.auth.token);
  const [trips, setTrips] = useState([]);
  const [users, setUsers] = useState([]);
  const [cities, setCities] = useState([]);
  const [tripEdit, setTripEdit] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = (trip) => {
    setTripEdit(trip);
    setShow(true);
  };
  const getAllTriprequest = () => {
    getAllUsers(tokenData)
      .then((resusers) => {
        setUsers(resusers.data);
        getAllCities()
          .then((rescities) => {
            setCities(rescities.data);
            getAllTrips(tokenData)
              .then((restrips) => {
                for (let i = 0; i < restrips.data.length; i++) {
                  for (let j = 0; j < resusers.data.length; j++) {
                    if (restrips.data[i].user_id === resusers.data[j].id) {
                      restrips.data[i].user_name = resusers.data[j].name;
                    }
                  }
                }

                for (let i = 0; i < restrips.data.length; i++) {
                  for (let j = 0; j < rescities.data.length; j++) {
                    if (
                      restrips.data[i].origin_city_id === rescities.data[j].id
                    ) {
                      restrips.data[i].origin_city_name =
                        rescities.data[j].name;
                    }
                    if (
                      restrips.data[i].destination_id === rescities.data[j].id
                    ) {
                      restrips.data[i].destination_name =
                        rescities.data[j].name;
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
  };

  useEffect(() => {
    if (!tokenData || tokenData === "") {
      return;
    }
    getAllTriprequest();
  }, [tokenData]);

  const putTriprequest = () => {
    putTrip(
      tokenData,
      tripEdit.id,
      tripEdit.origin_city_id,
      tripEdit.destination_id,
      tripEdit.user_id,
      tripEdit.start_date,
      tripEdit.end_date,
      tripEdit.number_of_tickets
    )
      .then((res) => {
        console.log(res);
        setTripEdit({});
        handleClose();
        getAllTriprequest();
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

  console.log("edit", tripEdit);
  return (
    <Row className="row gx-5 gy-3">
      <Col xs={12}>
        <div className="card">
          <div className="card-body">
            <h5 className="text-center card-title">Viajes</h5>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Editar viaje {tripEdit.id}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <FontAwesomeIcon className="me-2" icon="fa-solid fa-user" />

                  <Form.Select
                    aria-label="Nombre de usuario"
                    onChange={(e) =>
                      setTripEdit({
                        ...tripEdit,
                        user_id: e.target.value,
                      })
                    }
                    value={tripEdit.user_id}
                  >
                    <option>Nombre de usuario</option>
                    {users.map((user) => (
                      <option key={"user-" + user.id} value={user.id}>
                        {user.name}
                      </option>
                    ))}
                  </Form.Select>
                </div>

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
                      <option key={"citi-" + citi.id} value={citi.id}>
                        {citi.name}
                      </option>
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
                      <option key={"citi2-" + citi.id} value={citi.id}>
                        {citi.name}
                      </option>
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
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button variant="primary" onClick={putTriprequest}>
                  Guardar cambios
                </Button>
              </Modal.Footer>
            </Modal>

            <Table striped bordered hover>
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
                  <tr key={"trip-" + trip.id}>
                    <th scope="row">{trip.id}</th>
                    <td>{trip.user_name}</td>
                    <td>{trip.origin_city_name}</td>
                    <td>{trip.destination_name}</td>
                    <td>{trip.start_date}</td>
                    <td>{trip.end_date}</td>
                    <td>{trip.number_of_tickets}</td>
                    <td className="text-center  ">
                      <div className="flex-row d-flex">
                        <button
                          className="btn btn-primary me-3"
                          onClick={() => handleShow(trip)}
                        >
                          <FontAwesomeIcon icon="edit" />
                        </button>
                        <button
                          className="btn btn-danger "
                          onClick={() => deleteTriprequest(trip.id)}
                        >
                          <FontAwesomeIcon icon="trash" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default Trips_admin;
