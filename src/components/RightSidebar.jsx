import React from "react";
import { GoDotFill } from "react-icons/go";

const RightSidebar = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-72">
      {/* 🔹 Profile Section */}
      <div className="flex items-center gap-3 mb-4">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="/person1.webp"
          alt="User Avatar"
        />
        <div>
          <h3 className="text-lg font-semibold">Ben Richard</h3>
          <p className="text-sm text-green-500 flex items-center gap-1">
            <GoDotFill className="text-green-500" /> Online
          </p>
        </div>
      </div>
      <p className="text-gray-600 mb-4">Hi there, what's up?</p>

      <hr className="mb-4 opacity-50" />

      {/* 🔹 Media Section */}
      <h4 className="text-md font-semibold mb-3">Shared Media</h4>
      <div className="grid grid-cols-2 gap-3">
        {Array(4)
          .fill("/person1.webp")
          .map((imgSrc, index) => (
            <img
              key={index}
              className="w-28 h-28 rounded-lg object-cover shadow-md cursor-pointer hover:scale-105 transition duration-200"
              src={imgSrc}
              alt="Shared Media"
            />
          ))}
      </div>
    </div>
  );
};

export default RightSidebar;
