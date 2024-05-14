"use client";

import { useState } from "react";
import { personsImgs } from "../../utils/images";
import { navigationLinks } from "../data/data";
import { useContext } from "react";
import { SidebarContext } from "../context/sidebarContext";
import Link from "next/link";

const Sidebar = () => {
  const [activeLinkIdx] = useState(1);
  const { isSidebarOpen } = useContext(SidebarContext);

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
          w-[48px] h-[48px] overflow-hidden rounded-full shadow-md shadow-black/50
        "
        >
          <img src={personsImgs.person_two} alt="profile image" />
        </div>
        <span className="font-semibold hidden xl:block text-base text-white uppercase">
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
                href={`/${navigationLink.title.toLowerCase() === 'home' ? '/' : navigationLink.title.toLowerCase()}`}
                className={`
                flex 
                items-center 
                justify-center
                gap-x-3
                p-0
                w-min-[35px]
                h-[35px]
                hover:rounded-full
                hover:border-2 
                hover:border-primaryLight
                border-1 border-transparent
                ease-in duration-300
                xl:justify-start
                xl:rounded-lg
                xl:py-2 xl:px-3
                xl:h-[45px]
                 ${
                   navigationLink.id === activeLinkIdx
                     ? "active:bg-pumpkin  active:shadow-lg active:rounded-full"
                     : null
                 }`}
              >
                <img
                  src={navigationLink.image}
                  className="w-[25px] h-[25px]"
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
