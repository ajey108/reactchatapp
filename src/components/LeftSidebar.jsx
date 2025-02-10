import React from "react";
import { BiMenu } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoChatboxEllipses } from "react-icons/io5";

const LeftSidebar = () => {
  return (
    <div className="bg-green-700 text-white h-[80vh] w-[300px]  shadow-lg rounded-lg overflow-hidden">
      {/* Header Section */}
      <div className="p-4 flex justify-between items-center border-b border-green-500">
        <div className="flex items-center gap-2">
          <IoChatboxEllipses className="text-2xl" />
          <span className="text-lg font-semibold">ChatApp</span>
        </div>

        <div className="relative">
          {/* 🔹 Menu Icon */}
          <div className="group">
            <BiMenu className="text-3xl cursor-pointer hover:text-gray-700 transition duration-200" />

            {/* 🔹 Dropdown Menu (Visible on Hover) */}
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <p className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">
                Edit Profile
              </p>
              <hr className="border-gray-200 my-1" />
              <p className="px-4 py-2 text-red-500 hover:bg-red-100 rounded-md cursor-pointer">
                Logout
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-3 flex items-center gap-2 bg-green-800">
        <CiSearch className="text-xl text-gray-300" />
        <input
          type="text"
          placeholder="Search here..."
          className="bg-transparent border border-gray-400 rounded-md px-3 py-1 text-white w-full focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Chat List */}
      <div className="p-3 overflow-y-auto h-full">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-md hover:bg-green-800 cursor-pointer transition duration-200"
            >
              <img
                src={`/person${index + 1}.webp`}
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-md font-semibold">Ben Stokes</p>
                <span className="text-sm text-gray-300">Hey, there!</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
