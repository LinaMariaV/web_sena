import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Table, Button, Row, Col, Form } from "react-bootstrap";
import {
  getAllCities,
  deleteCity,
  putCity,
} from "../../services/cities.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-bootstrap/Modal";

function Citiesadmin() {
  const tokenData = useSelector((state) => state.auth.token);
  const [cities, setCities] = useState([]);
  const [cityEdit, setCityEdit] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (city) => {
    setCityEdit(city);
    setShow(true);
  };

  const getAllCitiesrequest = () => {
    getAllCities()
      .then((rescities) => {
        setCities(rescities.data);
      })
      .catch((e) => {
        console.log("err", e);
      });
  };

  useEffect(() => {
    if (!tokenData || tokenData === "") {
      return;
    }

    getAllCitiesrequest();
  }, [tokenData]);

  const putCityrequest = () => {
    putCity(
      tokenData,
      cityEdit.id,
      cityEdit.name,
      cityEdit.country,
      cityEdit.description,
      cityEdit.url_image
    )
      .then((res) => {
        console.log(res);
        setCityEdit({});
        handleClose();
        getAllCitiesrequest();
      })

      .catch((e) => {
        console.log("err", e);
      });
  };

  const deleteCityrequest = (id) => {
    deleteCity(tokenData, id)
      .then((res) => {
        console.log(res);
        setCities(cities.filter((city) => city.id !== id));
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
            <h5 className="text-center card-title">Cities</h5>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Editar ciudad {cityEdit.id}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <FontAwesomeIcon className="me-2" icon="fa-solid fa-city" />
                  <Form.Control
                    type="text"
                    placeholder="Nombre de la ciudad"
                    className="w-100"
                    value={cityEdit.name}
                    onChange={(e) =>
                      setCityEdit({ ...cityEdit, name: e.target.value })
                    }
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <FontAwesomeIcon
                    className="me-2"
                    icon="fa-solid fa-map-marker-alt"
                  />
                  <Form.Control
                    type="text"
                    placeholder="País"
                    value={cityEdit.country}
                    onChange={(e) =>
                      setCityEdit({ ...cityEdit, country: e.target.value })
                    }
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <FontAwesomeIcon
                    className="me-2"
                    icon="fa-solid fa-file-alt"
                  />
                  <Form.Control
                    type="text"
                    placeholder="Descripcion"
                    value={cityEdit.description}
                    onChange={(e) =>
                      setCityEdit({ ...cityEdit, description: e.target.value })
                    }
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <FontAwesomeIcon className="me-2" icon="fa-solid fa-link" />
                  <Form.Control
                    type="text"
                    placeholder="Url de imagen"
                    value={cityEdit.url_image}
                    onChange={(e) =>
                      setCityEdit({ ...cityEdit, url_image: e.target.value })
                    }
                  />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>
                <Button variant="primary" onClick={putCityrequest}>
                  Guardar cambios
                </Button>
              </Modal.Footer>
            </Modal>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Country</th>
                  <th>Description</th>
                  <th>Url imagen</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cities.map((city) => (
                  <tr key={city.id}>
                    <td>{city.id}</td>
                    <td>{city.name}</td>
                    <td>{city.country}</td>
                    <td>{city.description}</td>
                    <td>{city.url_image}</td>
                    <td>
                      <div className=" text-center">
                      <button
                        className="btn btn-primary me-3"
                        onClick={() => handleShow(city)}
                      >
                        <FontAwesomeIcon icon="edit" />
                      </button>
                      <button
                        className="btn btn-danger "
                        onClick={() => deleteCityrequest(city.id)}
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
export default Citiesadmin;
