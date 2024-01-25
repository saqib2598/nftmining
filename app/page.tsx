'use client'

import NftForm from "@/components/forms/nft-form";
import Navbar from "@/components/header/navbar";
import ConnectWallets from "@/components/wallets/connect-wallets";
import { useState } from "react";
import Footer from "@/components/footer/footer";
import Loader from "@/components/loaders/circular-loader";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [showWallets, setShowWallets] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
      
      {/* Loader */}
      {
        loading && (
          <Loader />
        )
      }
      
      {/* Messages */}
      <div className="mt-8 flex justify-center items-center">
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      </div>
      {/* NFT form */}
      <div className="flex justify-center items-center">
        <NftForm
          setLoading={setLoading}
          setSuccessMessage={setSuccessMessage}
          setErrorMessage={setErrorMessage}
        />
      </div>
      
      {/* Right rail */}
      {
        showWallets && (
          <ConnectWallets
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