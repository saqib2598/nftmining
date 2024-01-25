import React from 'react';
import metamask from '../../public/images/metamask.svg';
import portis from '../../public/images/portis.svg';
import torus from '../../public/images/Torus.svg';
import walletlink from '../../public/images/walletlink.svg';
import { useConnect } from 'wagmi';

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
}

const ConnectWallets = ({ show, setShow}: Props) => {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  return (
    <div className={`fixed top-0 right-0 w-900 h-full bg-black text-white p-4 transform transition-transform duration-300 ease-in-out ${show ? 'translate-x-0' : 'translate-x-full'}`}>
      <button onClick={() => setShow(false)} className="absolute top-2 right-2 text-2xl">
        &times;
      </button>
      <h2 className="w-[243px] h-[47px] mt-[35.38px] font-sans text-[32px] font-bold leading-[47px] tracking-normal text-left text-white">Connect Wallet</h2>
      <ul>
        {connectors.map((connector) => (
          <div className='flex mt-6 w-[281px] h-[56px] px-[32px] py-[16px] pl-[24px] rounded-[10px] border border-solid gap-[10px] bg-custom-gradient-list'>
            <img src={`${metamask.src}`} alt="Logo" className="" />
            <li  className="">
              <button
                disabled={!connector.ready}
                key={connector.id}
                onClick={() => connect({ connector })}
              >
                Connect {connector.name}
                {!connector.ready && ' (unsupported)'}
                {isLoading &&
                  connector.id === pendingConnector?.id &&
                  ' (connecting)'}
              </button>
            </li>
          </div>
        ))}
      </ul>
      {error && <div>{error.message}</div>}
      <div className='flex mt-8'>
        <h2>Dont have a wallet?</h2>
        <h2 className='ml-2 text-learn-more text-center font-sans font-bold'>Learn more</h2>
      </div>
    </div>
  );
};

export default ConnectWallets;
