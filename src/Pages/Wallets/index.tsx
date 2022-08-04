import React, { useEffect, useState } from "react";
import data from "data/tempWallets.json";
import WalletCard from "Compontnts/Wallet/WalletCard";

import { Col, Row } from "react-bootstrap";
export interface IWallet {
  id: number;
  userId: number;
  accountId: number;
  balance: number;
  recentTransaction: number | null;
}

export default function Index() {
  const [wallets, setWallets] = useState<IWallet[]>([]);

  useEffect(() => {
    setWallets(data.walletList);
  }, []);

  return (
    <div>
      <Row>
        {wallets.map((wallet) => (
          <Col xs={3}>
            <WalletCard
              value={{
                id: wallet.id,
                userId: wallet.userId,
                accountId: wallet.accountId,
                balance: wallet.balance,
                recentTransaction: wallet.recentTransaction,
              }}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
