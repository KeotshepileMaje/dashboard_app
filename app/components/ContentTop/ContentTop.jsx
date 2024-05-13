import { iconsImgs } from "../../../utils/images";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center">
        <button
          type="button"
          className="flex items-center mr-3"
          onClick={() => toggleSidebar()}
        >
          <img src={iconsImgs.menu} alt="" className="w-5" />
        </button>
        <h3 className="text-white text-xl font-semibold">Home</h3>
      </div>
      <div className="flex">
        <button type="button" className="mr-4">
          <img src={iconsImgs.search} alt="" className="w-6" />
        </button>
        <button className="relative">
          <img src={iconsImgs.bell} alt="" className="w-6" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </div>
  );
};

export default ContentTop;
