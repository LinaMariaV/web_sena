import { Button } from 'react-bootstrap'

function ButtonComponent({ text, onClick, size, className}) {
  return (
    <Button className={className} onClick={onClick} size={size}>{text}</Button>
  )
}

export default ButtonComponent;