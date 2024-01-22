'use client'

import NftForm from "@/components/forms/nft-form";
import Navbar from "@/components/header/navbar";
import ConnectWallets from "@/components/wallets/connect-wallets";
import { useState } from "react";
import upload_icon from "@/public/images/upload_icon.svg";
import Footer from "@/components/footer/footer";

const Home = () => {

  const [showWallets, setShowWallets] = useState(false);
  const [wallets, setWallets] = useState([
    {id: 1, name: 'Metamask'},
    {id: 2, name: 'Portis'},
    {id: 3, name: 'Torus'},
    {id: 4, name: 'Walletlink'}
  ]);

  return (
    <div>
      {/* Navbar */}
      <Navbar
        setShowWallets={setShowWallets}
      />
      {/* Jumbotron */}
      <div className="flex items-center justify-center mt-5 mx-auto w-[1140px] h-[216.14px] top-[113.94px] left-[150px] rounded-lg border border-gray-300 frosted-glass">
        <div className="text-center">
          <h1 className="font-cinzel text-4xl gradient-text">MINT NEW NFT</h1>
          <p className="text-white font-open-sans text-base font-normal leading-[154.023%] opacity-70 w-[560px] h-[52.26px] flex-shrink-0 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem tortor quis amet scelerisque vivamus egestas. </p>
        </div>
      </div>
      
      {/* NFT form */}
      <div className="flex justify-center items-center">
        <NftForm />
      </div>
      
      {/* Right rail */}
      {
        showWallets && (
          <ConnectWallets
            wallets={wallets}
            show={showWallets}
            setShow={setShowWallets}
          />
        )
      }
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;