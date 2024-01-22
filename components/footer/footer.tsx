import React from 'react';
import logo from '../../public/images/logo.svg';
import wallet from '../../public/images/wallet.svg';

const Footer = () => {
  return (
    <nav className="mt-32 w-[1140px] h-[70px] flex items-center justify-between mx-auto">
      <div className="flex items-center">
        <img src={`${logo.src}`} alt="Logo" className="w-[199px] h-[70px]" />
      </div>

      <div className="text-white text-sm font-normal leading-[146.523%]">
        <h1>NFT Sea 2022 © All right reserved</h1>
      </div>

      <div className="w-[190px] h-[25px] flex items-center">
        <button type="submit" className="footer-btn-custom w-[199px] h-[63.078px] flex-shrink-0">Explore Marketplace</button>
      </div>
    </nav>
  );
};

export default Footer;
