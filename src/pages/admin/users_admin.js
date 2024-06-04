import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { Table, Button, Row, Col, Form } from "react-bootstrap";
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
  const [userEdit, setUserEdit] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    setUserEdit(user);
    setShow(true);
  };

  const getAllUsersrequest= () => {
    getAllUsers(tokenData)
      .then((resusers) => {
        setUsers(resusers.data);
      })
      .catch((e) => {
        console.log("err", e);
      });

  }
  useEffect(() => {
    if (!tokenData || tokenData === "") {
      return;
    }

    getAllUsersrequest()
  }, [tokenData]);

  const putUserrequest = () => {
    putUser(
      tokenData,
      userEdit.id,
      userEdit.name,
      userEdit.email,
      userEdit.phone,
      userEdit.role
    )
      .then((res) => {
        console.log(res);
        setUserEdit({});
        handleClose();
        getAllUsersrequest()
      })

      .catch((e) => {
        console.log("err", e);
      });
  };

  const deleteUserrequest = (id) => {
    deleteUser(tokenData, id)
      .then((res) => {
        console.log(res);
        setUsers(users.filter((user) => user.id !== id));
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
                    value={userEdit.name}
                    onChange={(e) =>
                      setUserEdit({ ...userEdit, name: e.target.value })
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
                    value={userEdit.email}
                    onChange={(e) =>
                      setUserEdit({ ...userEdit, email: e.target.value })
                    }
                  />
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <FontAwesomeIcon className="me-2" icon="fa-solid fa-phone" />
                  <Form.Control
                    type="number"
                    placeholder="Telefono"
                    value={userEdit.phone}
                    onChange={(e) =>
                      setUserEdit({ ...userEdit, phone: e.target.value })
                    }
                  />
                </div>
                <Form.Select aria-label="Default select example"
                value={userEdit.role}
                onChange={(e) =>
                  setUserEdit({ ...userEdit, role: e.target.value })
                }>
                  <option>Selecciona el rol</option>
                  <option value="admin">Administrador</option>
                  <option value="client">Cliente</option>
                </Form.Select>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>
                <Button variant="primary" onClick={putUserrequest}>
                  Guardar cambios
                </Button>
              </Modal.Footer>
            </Modal>
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
                      <button
                        className="btn btn-primary me-3"
                        onClick={() => handleShow(user)}
                      >
                        <FontAwesomeIcon icon="edit" />
                      </button>

                      <button className="btn btn-danger ">
                        <FontAwesomeIcon
                          icon="trash"
                          onClick={() => deleteUserrequest(user.id)}
                        />
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
