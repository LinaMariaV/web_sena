import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table, Button, Row, Col } from "react-bootstrap";
import { getAllUsers } from "../../services/users.service";



function Useradmin() {

    const tokenData = useSelector((state) => state.auth.token);
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        if (!tokenData || tokenData === "") {
            return;
        }
    
        getAllUsers(tokenData)
            .then((resusers) => {
            setUser(resusers.data);
            })
            .catch((e) => {
            console.log("err", e);
            });
    
        
        }, [tokenData]);


  return (
    <Row className="row gx-5 gy-3">
      <Col xs={12} >
        <div className="card">
          <div className="card-body">
            <h5 className="text-center card-title">usuarios</h5>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {user.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.role}</td>
                    <td>
                      <Button
                      
                        variant="danger"
                        //onClick={() => deleteCityrequest(city.id)}
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

export default Useradmin;