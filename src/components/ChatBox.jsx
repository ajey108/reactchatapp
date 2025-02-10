import React from "react";
import { GoDotFill } from "react-icons/go";
import { IoHelpCircleOutline } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { IoIosSend } from "react-icons/io";

const ChatBox = () => {
  return (
    <div className="h-screen w-1/2 bg-white shadow-lg rounded-lg flex flex-col">
      {/* 🔹 Chat Header */}
      <div className="flex justify-between items-center p-4 border-b bg-gray-100">
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="/person1.webp"
            alt="User Avatar"
          />
          <div>
            <p className="text-lg font-semibold">Kyle Ben</p>
            <p className="text-sm text-green-500 flex items-center gap-1">
              <GoDotFill className="text-green-500" /> Online
            </p>
          </div>
        </div>
        <IoHelpCircleOutline className="text-xl cursor-pointer text-gray-600 hover:text-gray-900 transition duration-200" />
      </div>

      {/* 🔹 Chat Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
        {/* Sender's Message */}
        <div className="flex justify-end">
          <div className="bg-green-500 text-white rounded-lg p-3 max-w-xs shadow-md">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="text-xs text-right mt-1 opacity-75">2:30 PM</div>
          </div>
        </div>

        {/* Receiver's Message */}
        <div className="flex items-start gap-3">
          <img
            className="w-8 h-8 rounded-full object-cover"
            src="/person1.webp"
            alt="User Avatar"
          />
          <div className="bg-gray-200 text-gray-800 rounded-lg p-3 max-w-xs shadow-md">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="text-xs text-left mt-1 opacity-75">2:30 PM</div>
          </div>
        </div>
      </div>

      {/* 🔹 Message Input Box */}
      <div className="p-4 bg-white border-t flex items-center gap-3">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-green-400"
        />
        <input type="file" id="image" accept="image/png, image/jpeg" hidden />
        <label
          htmlFor="image"
          className="cursor-pointer text-gray-600 hover:text-gray-900 transition duration-200"
        >
          <GrGallery className="text-2xl" />
        </label>
        <button className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600 transition duration-200">
          <IoIosSend className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
