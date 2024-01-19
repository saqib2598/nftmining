import Navbar from "@/components/header/navbar";
import upload_icon from "@/public/images/upload_icon.svg";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center mt-5 mx-auto w-[1140px] h-[216.14px] top-[113.94px] left-[150px] rounded-lg border border-gray-300 frosted-glass">
        <div className="text-center">
          <h1 className="font-cinzel text-4xl gradient-text">MINT NEW NFT</h1>
          <p className="text-white font-open-sans text-base font-normal leading-[154.023%] opacity-70 w-[560px] h-[52.26px] flex-shrink-0 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem tortor quis amet scelerisque vivamus egestas. </p>
        </div>
      </div>

      <form className="flex justify-center mt-20">
        <label className="w-[544.158px] h-[94px] flex-shrink-0 border rounded-lg border-dashed border-gray-400 bg-gray-700 cursor-pointer text-white text-center flex items-center justify-center">
          <input
            type="file"
            className="hidden"
            // Add any additional attributes or event handlers for the file input here
          />
          <img src={`${upload_icon.src}`} alt="Image" className="mr-2" />
          <span className="w-118 h-26 top-[443.66px] left-[670px] font-open-sans text-base font-normal leading-26 tracking-normal text-left">Upload Image</span>
          {/* <p className="text-sm">File type</p> */}
        </label>
      </form>
    </div>
  );
}

