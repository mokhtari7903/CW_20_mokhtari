import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export interface ICard {
  id: number;
  name: string;
  avatar: string;
  email: string;
  balance: number;
  wallet: number;
}

function UserCard(param: ICard) {
  return (
    <Link to={`/users/${param.id}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={param.avatar} style={{ width: "120px" }} />
        <Card.Body>
          <Card.Title>{param.name}</Card.Title>

          <Card.Text>{param.email}</Card.Text>
          <Card.Text>{param.wallet}</Card.Text>
          {/* <Button variant="primary">Go to Wallet</Button> */}
        </Card.Body>
      </Card>
    </Link>
  );
}

export default UserCard;
