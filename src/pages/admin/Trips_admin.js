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
  const [tripEdit, setTripEdit] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (trip) => {
    setTripEdit(trip);
    setShow(true);
  };

  useEffect(() => {
    if (!tokenData || tokenData === "") {
      return;
    }

    getAllUsers(tokenData)
      .then((resusers) => {
        getAllCities()
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

  const putTriprequest = () => {
    putTrip(
      tokenData,
      tripEdit.user_id,
      tripEdit.origin_city_id,
      tripEdit.destination_id,
      tripEdit.start_date,
      tripEdit.end_date,
      tripEdit.number_of_tickets
    )
      .then((res) => {
        console.log(res);
        setTripEdit({});
        handleClose();
        getAllTrips();
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
      <Col xs={12}>
        <div className="card">
          <div className="card-body">
            <h5 className="text-center card-title">Viajes</h5>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Editar usuario</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <FontAwesomeIcon className="me-2" icon="fa-solid fa-user" />
                  <Form.Control
                    type="text"
                    placeholder="Nombre completo"
                    className="w-100"
                    value={tripEdit.name}
                    onChange={(e) =>
                      setTripEdit({ ...tripEdit, name: e.target.value })
                    }
                  />
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <FontAwesomeIcon
                    className="me-2"
                    icon="fa-solid fa-envelope"
                  />
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={tripEdit.email}
                    onChange={(e) =>
                      setTripEdit({ ...tripEdit, email: e.target.value })
                    }
                  />
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <FontAwesomeIcon className="me-2" icon="fa-solid fa-phone" />
                  <Form.Control
                    type="number"
                    placeholder="Telefono"
                    value={tripEdit.phone}
                    onChange={(e) =>
                      setTripEdit({ ...tripEdit, phone: e.target.value })
                    }
                  />
                </div>
                <Form.Select
                  aria-label="Default select example"
                  value={tripEdit.role}
                  onChange={(e) =>
                    setTripEdit({ ...tripEdit, role: e.target.value })
                  }
                >
                  <option>Selecciona el rol</option>
                  <option value="admin">Administrador</option>
                  <option value="client">Cliente</option>
                </Form.Select>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
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
                  <tr key={trip.id}>
                    <th scope="row">{trip.id}</th>
                    <td>{trip.user_id}</td>
                    <td>{trip.origin_city_id}</td>
                    <td>{trip.destination_id}</td>
                    <td>{trip.start_date}</td>
                    <td>{trip.end_date}</td>
                    <td>{trip.number_of_tickets}</td>
                    <div className="flex-row d-flex">
                      <td className="text-center  ">
                        <button
                          className="btn btn-primary me-3"
                          onClick={() => putTriprequest(trip.id)}
                        >
                          <FontAwesomeIcon icon="edit" />
                        </button>
                        <button
                          className="btn btn-danger "
                          onClick={() => deleteTriprequest(trip.id)}
                        >
                          <FontAwesomeIcon icon="trash" />
                        </button>
                      </td>
                    </div>
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
