import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { IWallet } from "Pages/Wallets";

interface IProps {
  value: IWallet;
}
const WalletCard: React.FC<IProps> = ({ value }) => {
  const navigate = useNavigate();
  return (
    <Card
      style={{ width: "18rem" }}
      onClick={() => navigate(`/wallets/${value.accountId}`)}
    >
      <Card.Body>
        <Card.Title>account id: {value.accountId}</Card.Title>
        <Card.Text>balance: {value.balance}</Card.Text>
        <Card.Text>recent transaction: {value.recentTransaction}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WalletCard;
