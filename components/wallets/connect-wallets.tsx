import React from 'react';

interface Wallet {
  id: number;
  name: string;
}

interface ConnectWalletsProps {
  wallets: Wallet[];
}

const ConnectWallets: React.FC<ConnectWalletsProps> = ({ wallets }) => {
  return (
    <div>
      <h2>Connect Wallets</h2>
      <ul>
        {wallets.map((wallet) => (
          <li key={wallet.id}>{wallet.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConnectWallets;
