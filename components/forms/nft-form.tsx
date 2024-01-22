import React from 'react';
import upload_icon from "@/public/images/upload_icon.svg";

const NftForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className="mx-auto justify-center mt-16">
      <div className="mb-5">
        <label className="w-[544.158px] h-[94px] flex-shrink-0 border rounded-lg border-dashed border-gray-400 bg-gray-700 cursor-pointer text-white text-center flex items-center justify-center">
          <input
            type="file"
            className="hidden"
          />
          <img src={`${upload_icon.src}`} alt="Image" className="mr-2" />
          <span className="w-118 h-26 top-[443.66px] left-[670px] font-open-sans text-base font-normal leading-26 tracking-normal text-left">Upload Image</span>
          {/* <p className="text-sm">File type</p> */}
        </label>
      </div>
      <div className="mb-5">
        <input type="text" id="email" className="placeholder-white font-open-sans text-base font-normal leading-[154.023%] text-gray-300 w-[544.157px] h-[59.29px] flex-shrink-0 rounded-lg border border-gray-400 bg-gray-700 px-3 py-2" placeholder="NFT Title" required />
      </div>
      <div className="mb-5">
        <textarea className="placeholder-white font-open-sans text-base font-normal w-[544.157px] h-[157.939px] flex-shrink-0 rounded-lg border border-gray-400 bg-gray-700 px-3 py-2" placeholder="Description" required />
      </div>
      <button type="submit" className="w-[262.08px] h-[63.078px]">Mint without listing</button>
      <button type="submit" className="ml-16 w-[220px] h-[63.078px] rounded-3px bg-gradient-to-r from-[#B23DEB] via-[#DE8FFF] to-[#B23DEB] shadow-md">Mint and list immediately</button>
    </form>
  );
};

export default NftForm;
