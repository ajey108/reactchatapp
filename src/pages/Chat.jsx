import React from "react";
import ChatBox from "../components/ChatBox";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";

const Chat = () => {
  return (
    <div className="bg-blue-500 h-full  flex">
      <LeftSidebar />
      <ChatBox />
      <RightSidebar />
    </div>
  );
};

export default Chat;
