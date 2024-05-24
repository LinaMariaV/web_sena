import Carousel from "react-bootstrap/Carousel";
import suiza from "../assets/suiza.jpg";
import machuPicchu from "../assets/machu-picchu.jpg";
import llama from "../assets/llama.jpg";
import "./Carrousel.css";

function Carrousel() {
  return (
    <Carousel className="carrousel-container">
      <Carousel.Item>
        <img className="carrousel-img d-block w-100" src={machuPicchu} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carrousel-img d-block w-100" src={suiza} alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carrousel-img d-block w-100" src={llama} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;
