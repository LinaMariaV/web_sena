import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Card.css";

function CardI({ className, image, title, text, button }) {
  return (
    <Card className={className}>
      <Card.Img variant="top" src={image} className="img-card" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        {button ? <Button variant="primary">{button}</Button> : null}
      </Card.Body>
    </Card>
  );
}

export default CardI;
