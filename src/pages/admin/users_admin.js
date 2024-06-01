import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table, Button, Row, Col } from "react-bootstrap";
import {
  getAllUsers,
  putUser,
  deleteUser,
  getUser,
  postUser,
} from "../../services/users.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Useradmin() {
  const tokenData = useSelector((state) => state.auth.token);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!tokenData || tokenData === "") {
      return;
    }

    getAllUsers(tokenData)
      .then((resusers) => {
        setUsers(resusers.data);
      })
      .catch((e) => {
        console.log("err", e);
      });
  }, [tokenData]);

  const getUserrequest = (id) => {
    getUser(tokenData, id)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log("err", e);
      });
  };

  const putUserrequest = (id) => {
    putUser(tokenData, id)
      .then((res) => {
        console.log(res);
      })

      .catch((e) => {
        console.log("err", e);
      });
  };

  const deleteUserrequest = (id) => {
    deleteUser(tokenData, id)
      .then((res) => {
        console.log(res);
        getUser(users.filter((user) => user.id !== id));
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
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.role}</td>
                    <td className="text-center">
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

export default Useradmin;
