import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { IAccount } from "Pages/AccountsPage";

interface IProps {
  value: IAccount;
}

const AccountCard: React.FC<IProps> = ({ value }) => {
  const navigate = useNavigate();
  return (
    <Card
      style={{ width: "18rem" }}
      onClick={() => navigate(`/accounts/${value.id}`)}
    >
      <Card.Body>
        <Card.Title>account id: {value.userId}</Card.Title>
        <Card.Text>balance: {value.balance}</Card.Text>
        <Card.Text>recent transaction: {value.recentTransaction}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AccountCard;
