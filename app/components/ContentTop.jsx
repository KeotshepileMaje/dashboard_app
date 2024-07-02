"use client"

import { SidebarContext } from "@/app/context/sidebarContext";
import { useContext } from "react";
import { FaBell } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import HamburgerMenu from "./HamburgerMenu";
import { usePathname } from "next/navigation";

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);

  const pathname = usePathname();

  const firstPathSegment = pathname.split("/")[1];
  console.log(firstPathSegment);

  return (
    <div className="flex justify-between items-center mb-8 text-primary">
      <div className="flex items-center">
        <button
          type="button"
          className="flex items-center mr-3"
          onClick={() => toggleSidebar()}
        >
          <span className="w-12">
            <HamburgerMenu />
          </span>
        </button>
        <h3 className="heading-3">
          {firstPathSegment.length === 0
            ? "Home"
            : `${firstPathSegment
                .charAt(0)
                .toUpperCase()}${firstPathSegment.slice(1)}`}
        </h3>
      </div>
      <div className="flex">
        <button type="button" className="mr-4">
          <FaSearch size={20} />
        </button>
        <button className="relative">
          <FaBell size={20} />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </div>
  );
};

export default ContentTop;
