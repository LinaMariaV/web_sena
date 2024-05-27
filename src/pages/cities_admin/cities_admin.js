import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import { getAllCities, getCity, postCity } from "../../services/cities.service";
import { deleteCity } from "../../services/cities.service";

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

    getCity(tokenData, id)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log("err", e);
      });

    deleteCity(tokenData, id)
      .then((res) => {
        console.log(res);
        setCities(cities.filter((city) => city.id !== id));
      })
      .catch((e) => {
        console.log("err", e);
      });
  }, [tokenData]);

  return (
    <Row className="row gx-5 gy-3">
      <Col xs={12} md={6}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Cities</h5>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cities.map((city) => (
                  <tr key={city.id}>
                    <td>{city.name}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => deleteCityrequest(city.id)}
                      >
                        Delete
                      </Button>
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
