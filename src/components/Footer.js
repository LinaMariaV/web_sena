import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 px-5 mx-4 my-4 border-top">
      <div className="col-md-6 d-flex align-items-center">
        
        <span className="mb-3 mb-md-0 text-body-secondary">
          © 2024  Travel Agency. Todos los derechos reservados.
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
