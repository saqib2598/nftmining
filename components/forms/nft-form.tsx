import React, { useState } from 'react';
import upload_icon from "@/public/images/upload_icon.svg";
import axios from 'axios';
import FormData from 'form-data';

interface Props {
  setLoading: (loading: boolean) => void;
  setSuccessMessage: (message: string) => void;
  setErrorMessage: (message: string) => void;
}

const NftForm = ({setLoading, setSuccessMessage, setErrorMessage}: Props) => {
  
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('');
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
    setLoading(true);

    const title = e.target.title.value;
    const description = e.target.description.value;
    const fileInput = e.target.image.files[0]; // Access file from file input

    if (!fileInput) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append('file', fileInput); // Append the file object directly

    // Add metadata and options
    const pinataMetadata = JSON.stringify({ name: title });
    formData.append('pinataMetadata', pinataMetadata);

    const pinataOptions = JSON.stringify({ cidVersion: 0 });
    formData.append('pinataOptions', pinataOptions);

    try {
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PINATA_API_KEY}`
        }
      });
      console.log(res.data);
      if (res) {
        setSuccessMessage('NFT minted successfully');
      } else {
        setErrorMessage('Error minting NFT');
      }
    } catch (error: any) {
      console.error(error);
      setErrorMessage(`Error minting NFT. ${error.message}`);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="mx-auto justify-center mt-8">
      <div className="mb-5">
        <label className="w-[544.158px] h-[94px] flex-shrink-0 border rounded-lg border-dashed border-gray-400 bg-gray-700 cursor-pointer text-white text-center flex items-center justify-center">
          <input
            id="image"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <img src={`${upload_icon.src}`} alt="Image" className="mr-2" />
          {fileName ? (
            <span className="font-open-sans text-base font-normal leading-26 tracking-normal">
              {fileName}
            </span>
          ) : (
            <span className="font-open-sans text-base font-normal leading-26 tracking-normal">
              Upload Image
            </span>
          )}
          {/* <p className="text-sm">File type</p> */}
        </label>
      </div>
      <div className="mb-5">
        <input type="text" id="title" className="placeholder-white font-open-sans text-base font-normal leading-[154.023%] text-gray-300 w-[544.157px] h-[59.29px] flex-shrink-0 rounded-lg border border-gray-400 bg-gray-700 px-3 py-2" placeholder="NFT Title" required />
      </div>
      <div className="mb-5">
        <textarea id="description" className="placeholder-white font-open-sans text-base font-normal w-[544.157px] h-[157.939px] flex-shrink-0 rounded-lg border border-gray-400 bg-gray-700 px-3 py-2" placeholder="Description" required />
      </div>
      <button className="w-[262.08px] h-[63.078px]">Mint without listing</button>
      <button className="ml-16 w-[220px] h-[63.078px] rounded-3px bg-gradient-to-r from-[#B23DEB] via-[#DE8FFF] to-[#B23DEB] shadow-md">Mint and list immediately</button>
    </form>
  );
};

export default NftForm;
