import React from 'react';
import Image from 'next/image';
import {
  MagnifyingGlassIcon as SearchIcon,
  Bars3Icon as MenuIcon,
  PaperAirplaneIcon as MessageIcon,
  PlusCircleIcon as PlusIcon,
  UserGroupIcon as UsersIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import { HomeIcon } from '@heroicons/react/24/solid';

function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png"
            alt="logo"
            layout="fill"
            style={{
              objectFit: 'contain',
            }}
          />
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://1000logos.net/wp-content/uploads/2017/02/insta-logo.png"
            alt="mobile logo"
            layout="fill"
            style={{
              objectFit: 'contain',
            }}
          />
        </div>

        <div className="max-w-xs">
          <div className="relative p-3 mt-1 rounded-md">
            <div className="absolute insert-y-0 pl-3 pt-2 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray border-gray-300 rounded-md focus:ring-black focus:border-black"
              placeholder="Search..."
              type="text"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4 items-center">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />

          <div className="relative navBtn">
            <MessageIcon className="navBtn" />
            <div className="absolute -top-2 -right-3 text-xs w-5 h-5 bg-red-500 rounded-full flex justify-center items-center animate-pulse text-white">
              3
            </div>
          </div>

          <PlusIcon className="navBtn" />
          <UsersIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <img
            className="h-8 cursor-pointer rounded-full hover:scale-125 transition-all duration-150 ease-out"
            src="https://avatars.githubusercontent.com/u/98338078?s=400&v=4"
            alt="user logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
