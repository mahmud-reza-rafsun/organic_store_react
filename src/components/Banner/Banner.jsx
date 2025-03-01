import BannerBg from "../../assets/images/bannerbg.png";
import { BsBagCheckFill } from "react-icons/bs";
import "../../App.css";

const Banner = () => {
  return (
    <div classNameName="">
      <div className="w-full h-full bg-body bg-opacity-90">
        <div className="lg:w-9/12 mx-auto py-16 flex sm:flex-row flex-col items-center gap-10">
          <div className="flex-1">
            <img src={BannerBg} alt="" />
            <span className="box-2"></span>
          </div>

          <div className="flex-1 sm:text-left text-center">
            <h4 className="text-md font-semibold my-2 text-[#A6ADBB]">
              Best Quality Products
            </h4>
            <h1 className="lg:text-5xl text-3xl text-[#A6ADBB] font-semibold leading-tight">
              Join The Organic Movement!
            </h1>
            <span className="box"></span>
            <p className="my-3 text-sm  text-[#A6ADBB]">
              Embrace a healthier lifestyle with organic products that are free
              from harmful chemicals, pesticides, and artificial additives. By
              choosing organic.
            </p>
            <div className="flex sm:justify-start justify-center">
              <button className="flex items-center text-sm cursor-pointer hover:bg-[#8CE723] text-white gap-2 bg-[#8BC34A] px-6 py-3 rounded-md transition duration-300">
                <span className="text-base">
                  <BsBagCheckFill />
                </span>
                <span>Shop Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
