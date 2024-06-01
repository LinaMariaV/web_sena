import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import { getAllCities, deleteCity } from "../../services/cities.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Citiesadmin() {
  const tokenData = useSelector((state) => state.auth.token);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (!tokenData || tokenData === "") {
      return;
    }

    getAllCities(tokenData)
      .then((rescities) => {
        setCities(rescities.data);
      })
      .catch((e) => {
        console.log("err", e);
      });
  }, [tokenData]);

  return (
    <Row className="row gx-5 gy-3">
      <Col xs={12}>
        <div className="card">
          <div className="card-body">
            <h5 className="text-center card-title">Cities</h5>
            <Table striped bordered hover>
              <thead>
                <tr>
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
                    <td>{city.name}</td>
                    <td>{city.country}</td>
                    <td>{city.description}</td>
                    <td>{city.url_image}</td>
                    <td>
                      <button className="btn btn-primary me-3">
                        <FontAwesomeIcon icon="edit" />
                      </button>
                      <button className="btn btn-danger ">
                        <FontAwesomeIcon icon="trash" />
                      </button>
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
