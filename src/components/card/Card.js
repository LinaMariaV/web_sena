import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardI({ image, title, text, button }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        {button ? <Button variant="primary">{button}</Button> : null}
      </Card.Body>
    </Card>
  );
}

export default CardI;
