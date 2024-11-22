import React from "react";
import { CiSearch } from "react-icons/ci";
import { Bell, Megaphone } from "lucide-react";
import { FaRegUserCircle } from "react-icons/fa";

type Props = {};

function NavBar({}: Props) {
  return (
    <div className="sticky top-0 z-50 w-full text-black dark:text-white border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-800 px-2">
          <CiSearch size={25} />
          <input
            type="text"
            placeholder="Search..."
            className="w-[100px] sm:w-[200px] p-2 bg-transparent outline-none"
          />
        </div>
        <div className="flex items-center gap-4 text-gray-400 justify-end w-full">
          <div className="rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
            <Bell size={25} />
          </div>
          <div className="rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
            <Megaphone size={25} />
            <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full flex items-center justify-center text-white bg-purple-500 ">
              1
            </div>
          </div>
          <div className=" flex gap-3 ml-2">
            <div className="flex flex-col">
              <span className="text-sm leading-3 font-medium text-[#fafafa]">
                Some Name
              </span>
              <span className="text-xs text-gray-300 text-right">Admin</span>
            </div>
            <div className="rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
              <FaRegUserCircle size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
