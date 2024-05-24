import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { loginAction } from "../../storages/auth";
import { postLogin } from "./Login.service";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import register from "../../assets/image-register.png";

function Login() {
  const loginstatus = useSelector((state) => state.auth.is_logged);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  if (loginstatus) {
    window.location.href = "/";
  }

  const loginRequest = () => {
    setError(false);
    postLogin(email, password)
      .then((res) => {
        dispatch(
          loginAction({ user: res.data.user, token: res.data.access_token })
        );
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
              className=" justify-content-center order-2 order-lg-2 d-flex flex-column align-items-center"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Iniciar sesion
              </p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <FontAwesomeIcon className="me-2" icon="fa-solid fa-user" />
                <Form.Control
                  type="text"
                  placeholder="Email"
                  className="w-100"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <FontAwesomeIcon className="me-2" icon="fa-solid fa-lock" />
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      loginRequest();
                    }
                  }}
                />
              </div>

              <Button
                variant="primary"
                size="lg"
                className="mb-4"
                onClick={loginRequest}
              >
                Iniciar sesion
              </Button>
              {error ? (
                <div class="alert alert-danger" role="alert">
                  {" "}
                  El usuario no se encuentra registrado.{" "}
                </div>
              ) : null}

              <a href="/register"> ¿No tienes cuenta? Regístrate </a>
            </Col>

            <Col
              md={10}
              lg={6}
              className="order-1 order-lg-1 d-flex align-items-center"
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

export default Login;
