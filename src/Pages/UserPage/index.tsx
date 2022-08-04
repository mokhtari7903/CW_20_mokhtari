import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router";
import { getUser } from "api";

export interface ICard {
  id: number;
  name: string;
  avatar: string;
  email: string;
  balance: number;
  wallet: number;
}
export default function Index() {
  const { id } = useParams();
  const [user, setUser] = useState<ICard>({
    id: 0,
    name: "",
    avatar: "",
    email: "",
    balance: 0,
    wallet: 0,
  });

  useEffect(() => {
    if (id) {
      getUser(id).then((u) => {
        console.log(u);
        setUser(u);
      });
    }
  }, []);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={user.avatar} style={{ width: "120px" }} />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>

          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.wallet}</Card.Text>
          {/* <Button variant="primary">Go to Wallet</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
}
