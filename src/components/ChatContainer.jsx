import React from "react";
import MessageList from "./MessageList";
import data from "../data/data.json";
import Header from "./Header";
import Footer from "./Footer";

const ChatContainer = () => {
  const teamMembers = data.messages
    .map((message) => message.sender)
    .filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.name === value.name)
    );

  return (
    <div className="flex flex-col h-screen ">
      {/* <div className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-8 h-8 rounded-full"
              />
              {member.isActive && (
                <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
              )}
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-xl font-semibold">🦄 Team Unicorns</h1>
          <span className="text-gray-500">last seen 45 minutes ago</span>
        </div>
      </div> */}
      <Header />
      <MessageList />
      <Footer />
    </div>
  );
};

export default ChatContainer;
