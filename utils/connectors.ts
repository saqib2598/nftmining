import { InjectedConnector } from '@web3-react/injected-connector';
import { PortisConnector } from '@web3-react/portis-connector';
import { TorusConnector } from '@web3-react/torus-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { Web3ReactHooks, initializeConnector } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { WalletLink } from '@web3-react/walletlink'

// Define your connectors
const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] });
const portis = new PortisConnector({
  dAppId: 'YOUR_PORTIS_DAPP_ID',
  networks: [1, 3, 4, 5, 42],
});
const torus = new TorusConnector({ chainId: Number(process.env.NEXT_PUBLIC_CHAIN_ID) });
const walletlink = new WalletLinkConnector({
  url: 'https://mainnet.infura.io/v3/YOUR_INFURA_KEY',
  appName: 'Linum Labs Finance',
  supportedChainIds: [1, 3, 4, 5, 42],
});

const connectors = {
  injected,
  portis,
  torus,
  walletlink,
};

export default connectors;