import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IWallet } from "Pages/Wallets";
import data from "data/tempWallets.json";
import WalletCard from "Compontnts/Wallet/WalletCard";

const Wallet: React.FC = () => {
  const { id } = useParams();
  const [wallet, setWallet] = useState<IWallet>({
    id: 0,
    userId: 0,
    accountId: 0,
    balance: 0,
    recentTransaction: null,
  });

  useEffect(() => {
    if (id) {
      const userWallet = data.walletList.find((wallet) => wallet.id === +id);
      if (!userWallet) return;
      setWallet(userWallet);
    }
  }, []);
  return (
    <div>
      <WalletCard value={wallet} />
    </div>
  );
};

export default Wallet;
