import React, { useEffect } from "react";
import UserCard from "../../Compontnts/UserCard";
import { ICard } from "../../Compontnts/UserCard";
import data from "data/tempAccounts.json";
import AccountCard from "Compontnts/Account/AccountCard";
import { Col, Row } from "react-bootstrap";

export interface IAccount {
  id: number;
  userId: number;
  walletId: number;
  balance: number;
  recentTransaction: number | null;
  accountNumber: number;
}

function AccountPage() {
  const [accounts, setAccounts] = React.useState<IAccount[]>([]);

  useEffect(() => {
    setAccounts(data.accountList);
  }, []);
  return (
    <>
      <Row>
        {accounts.map((account) => (
          <Col xs={3}>
            <AccountCard value={account} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default AccountPage;
