import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  PlusCircleIcon,
  HeartIcon,
  UserGroupIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className="shadow-sm bottom-b bg-white sticky top-0 z-50">
      {/* change the width to max-w-6xl instead of max-w-full, if any issues  */}
      <div className="flex justify-between max-w-7xl mt-5 xl:mx-auto sm:h-14">
        {/* left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            className="object-contain"
            alt="instagram-2.0-logo"
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            src="https://links.papareact.com/ocw"
            priority={true}
          />
        </div>

        <div className="relative lg:hidden flex-shrink-0 w-10 cursor-pointer">
          <Image
            alt="instagram-2.0-logo"
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
            priority={true}
            className="object-contain"
          />
        </div>
        {/* middle */}
        <div className="max-w-xs navbar--search">
          <div className="relative mt-1 rounded-md">
            <div className="absolute inset-y-0 top-0 bottom-3 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="search"
            />
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn--common" />
          <div className="relative navBtn--common navBtn--mobile">
            <PaperAirplaneIcon className="navBtn--mobile rotate-45" />
            <div className="absolute -top-1 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn--common" />
          <UserGroupIcon className="navBtn--common" />
          <HeartIcon className="navBtn--common" />
          {/* <MenuIcon className="navBtn " /> */}

          <Image
            src="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-19/309446348_1397412184000719_4091241073721640753_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=CkAYs8QLSNAAX9T4LjB&tn=MogP6SBV7NyErFmw&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfALZ7RtRb87UWl5GqSAmEWA5nIwEAEvQSxsb_JRRQqVNg&oe=63600E30&_nc_sid=8fd12b"
            alt="user-profile"
            width={32}
            height={24}
            className="rounded-full navBtn--profile"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
