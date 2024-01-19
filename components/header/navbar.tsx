import React from 'react';
import logo from '../../public/images/logo.svg';

const Navbar: React.FC = () => {
  return (
    <nav className="w-[1140px] h-[70px] flex items-center justify-between mx-auto">
      <div className="flex items-center">
        <img src={`${logo.src}`} alt="Logo" className="w-[199px] h-[70px]" />
      </div>
      <div className="w-[159px] h-[25px]">
        <span className="font-open-sans text-base font-semibold leading-[25px] tracking-normal text-left">
          Explore Marketplace
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
