import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navigation.css";
import { logoutAction } from "../../storages/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavigationBar({ className, enableTitle = true }) {
  const loginstatus = useSelector((state) => state.auth.is_logged);
  const user_name = useSelector((state) => state.auth.user.name);
  const user_role = useSelector((state) => state.auth.user.role);

  const dispatch = useDispatch();

  return (
    <Navbar expand="lg" className={className+ ' justify-content-center'}>
      <Container className="container-margin">
        <div className="fw-semibold ">
          <Navbar.Brand href="/">
            {enableTitle ? "Travel Agency" : ""}
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/destinations">Destinos</Nav.Link>
            <Nav.Link href="/info">Info</Nav.Link>
            {loginstatus === true ? (
              <NavDropdown title="Menu" id="basic-nav-dropdown" className="move-nav-dropdown">
                <NavDropdown.ItemText className="fw-bold">
                  <FontAwesomeIcon icon="fa-solid fa-user" className="me-2" />
                  {user_name}
                </NavDropdown.ItemText>

                <NavDropdown.Divider />

                {user_role === "admin" ? (
                  <>
                    <NavDropdown.Item href="/users_admin">Administrar usuarios</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/cities_admin">
                    
                      Administrar ciudades
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/trips_admin">
                      
                      Administrar viajes
                    </NavDropdown.Item>
                  </>
                ) : (
                  <NavDropdown.Item href="/trips_client">
                    Mis viajes
                  </NavDropdown.Item>
                )}

                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => dispatch(logoutAction())}
                  className="text-danger"
                >
                  <FontAwesomeIcon
                    icon="fa-solid fa-right-from-bracket"
                    className="me-2"
                  />
                  Cerrar Sesion
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="/login">Iniciar sesion</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
