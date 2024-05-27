import { iconsImgs } from "../../utils/images";
import { FaPlus } from "react-icons/fa6";

const Cards = () => {
  return (
    <div
      className=" grid-common 
    flex
    flex-col
    col-start-1
    col-end-3
    md:col-end-1
    "
    >
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Cards</h3>
        <button className="grid-c-title-icon">
          <FaPlus />
        </button>
      </div>

      <div
        className="
        flex-1
        rounded-lg
        p-4
        bg-gradient-to-r from-slate-500 to-slate-900
      "
      >
        <p>Balance</p>
        <div className="lg-value">$ 22,000</div>
        <div className="card-wrapper flex items-center">
          <span className="card-pin-hidden text-lg mr-4">**** **** **** </span>
          <span className="mb-2">1234</span>
        </div>
        <div className="card-logo-wrapper flex justify-between items-center">
          <div>
            <p className="text text-silver-v1 mb-2">Expires</p>
            <p className="text text-sm text-white">12/22</p>
          </div>
          <div className="flex">
            <div className="bg-[#fe1e00] w-[36px] h-[36px] rounded-full mr-[-15px] z-10"></div>
            <div className="bg-yellow w-[36px] h-[36px] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
