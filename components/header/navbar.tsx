import React from 'react';
import logo from '../../public/images/logo.svg';
import wallet from '../../public/images/wallet.svg';

interface Props {
  setShowWallets: (showWallets: boolean) => void;
}

const Navbar = ({setShowWallets}: Props) => {
  return (
    <nav className="w-[1140px] h-[70px] flex items-center justify-between mx-auto">
      <div className="flex items-center">
        <img src={`${logo.src}`} alt="Logo" className="w-[199px] h-[70px]" />
      </div>
      <div className="w-[190px] h-[25px] flex items-center">
        <span className="font-open-sans text-base font-semibold leading-[25px] tracking-normal text-left">
          Explore Marketplace
        </span>
        <img onClick={() => setShowWallets(true)} src={`${wallet.src}`} alt="Image" className="ml-2" />
    </div>
    </nav>
  );
};

export default Navbar;
