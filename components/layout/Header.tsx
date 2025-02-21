import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Image src="" alt="Logo" className="h-8 w-8" />
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Rooms
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Mansions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Countryside
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <button className="px-4 py-2 text-white bg-blue-600 rounded-md">
          Sign In
        </button>
        <button className="ml-4 px-4 py-2 text-blue-600 border border-blue-600 rounded-md">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
