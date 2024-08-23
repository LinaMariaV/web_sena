import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import register from "../../assets/image-register.png";
import React, { useState } from "react";
import { postRegister } from "../../services/auth.service";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const registerRequest = () => {
    setError(false);
    setSuccess(false);
    postRegister(name, email, password, phone)
      .then((res) => {
        console.log("res", res);
        setSuccess(true);
        // dispatch(
        //  loginAction({ user: res.data.user, token: res.data.access_token })
        //);
      })
      .catch((e) => {
        console.log("err", e);
        setError(true);
      });
  };

  return (
    <Container fluid>
      <Card className="text-black m-5" style={{ borderRadius: "25px" }}>
        <Card.Body>
          <Row>
            <Col
              md={10}
              lg={6}
              className="order-2 order-lg-1 d-flex flex-column align-items-center justify-content-center"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Registrarse
              </p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <FontAwesomeIcon className="me-2" icon="fa-solid fa-user" />
                <Form.Control
                  type="text"
                  placeholder="Nombre completo"
                  className="w-100"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <FontAwesomeIcon className="me-2" icon="fa-solid fa-envelope" />
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <FontAwesomeIcon className="me-2" icon="fa-solid fa-phone" />
                <Form.Control
                  type="telefono"
                  placeholder="Telefono"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <FontAwesomeIcon className="me-2" icon="fa-solid fa-lock" />
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <FontAwesomeIcon className="me-2" icon="fa-solid fa-key" />
                <Form.Control
                  type="password"
                  placeholder="Repita la contraseña"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                />
              </div>

              <Button
                variant="primary"
                size="lg"
                className="mb-4"
                onClick={registerRequest}
              >
                Registrarse
              </Button>

              {password === password2 ? null : (
                <div class="alert alert-warning" role="alert">
                  {" "}
                  Las contraseñas no coinciden.{" "}
                </div>
              )}

              {error ? (
                <div class="alert alert-danger" role="alert">
                  {" "}
                  El usuario ya se encuentra registrado.{" "}
                </div>
              ) : null}

              {success ? (
                <div class="alert alert-info" role="alert">
                  {" "}
                  Usuario registrado correctamente, ya puede iniciar sesion.{" "}
                </div>
              ) : null}

              <a href="/login"> ¿Ya tienes cuenta? Inicia sesion </a>
            </Col>

            <Col
              md={10}
              lg={6}
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <img
                className="w-100"
                src={register}
                alt="image to form register"
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default Register;
