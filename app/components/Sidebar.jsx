"use client";

import { useState } from "react";
import { personsImgs } from "../../utils/images";
import { navigationLinks } from "../data/data";
import { useContext } from "react";
import { SidebarContext } from "../context/sidebarContext";
import Link from "next/link";

const Sidebar = () => {
  const [activeLinkIdx, setActiveLinkIdx] = useState(1);
  const { isSidebarOpen } = useContext(SidebarContext);

  const handleLinkIdx = (currentIdx, currentPage) => {
    setActiveLinkIdx(currentIdx);
  };

  return (
    <div
      className={`
    bg-primary
    ease-in duration-300
    px-2
    py-5
    w-[72px]
    xl:w-[260px]

    ${isSidebarOpen ? " -ml-[72px] xl:-ml-[260px]" : ""}
    `}
    >
      <div className="flex justify-start items-center gap-x-4">
        <div
          className="
          w-[48px] h-[48px] overflow-hidden rounded-full shadow-md shadow-white/50
        "
        >
          <img src={personsImgs.person_two} alt="profile image" />
        </div>
        <span className="font-semibold hidden xl:block text-base text-slate-100 uppercase">
          alice-doe
        </span>
      </div>

      <nav
        className="
      mt-7
      h-[600px]
      "
      >
        <ul>
          {navigationLinks.map((navigationLink) => (
            <li className="mb-2 mr-2" key={navigationLink.id}>
              <Link
                href={`/${
                  navigationLink.title.toLowerCase() === "home"
                    ? "/"
                    : navigationLink.title.toLowerCase()
                }`}
                className={`
                flex
                items-center 
                justify-center
                gap-x-3
                p-0
                w-min-[35px]
                h-[35px]
                hover:rounded-xl
                hover:border-2 
                hover:border-primaryLight
                border-1 border-transparent
                ease-in duration-300
                text-slate-100
                xl:justify-start
                xl:rounded-lg
                xl:py-2 xl:px-3
                xl:h-[45px]
                 ${
                   navigationLink.id === activeLinkIdx
                     ? "bg-pumpkin shadow-lg rounded-xl"
                     : null
                 }`}
                onClick={() => handleLinkIdx(navigationLink.id, navigationLink.title)}
              >
                <img
                  src={navigationLink.image}
                  className="text-slate-100 w-[25px] h-[25px]"
                  alt={navigationLink.title}
                />
                <span
                  className="
                capitalize
                hidden
                xl:block
                "
                >
                  {navigationLink.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
