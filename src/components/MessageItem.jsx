import React from "react";
import tick from "../images/Frame 2882.svg";
const MessageItem = ({ message }) => {
  const isUser = message.sender.name === "You";
  console.log("message ===== ", message);
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      {!isUser && (
        <div className="flex items-start">
          <div className="relative">
            <img
              src={message.sender.avatar}
              alt={message.sender.name}
              className="w-10 h-10 rounded-full"
            />
            {message.sender.isActive === true ? (
              <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
            ) : (
              ""
            )}
          </div>
          <div className="ml-2 bg-gray-200 p-2 rounded-lg flex gap-2">
            <div className="flex flex-col">
              <div className="flex flex-row text-sm gap-[10px] items-center">
                <div className="text-sm font-semibold">
                  {message.sender.name}
                </div>
                <div className="text-xs text-gray-500">
                  {message.sender.profession}
                </div>
              </div>
              <div className="text-sm mt-2 text-[#2C2C2E]">{message.text}</div>
            </div>
            <div className="text-xs text-[#666668] flex  items-end pt-2">
              {message.time}
            </div>
          </div>
        </div>
      )}
      {isUser && (
        <div className="bg-[#007AFF] text-white p-2 rounded-lg max-w-xs text-sm">
          <div>{message.text}</div>
          <div className="flex justify-end gap-1 items-center">
            <div className="text-right text-xs mt-2 ">{message.time}</div>
            <img src={tick} alt="send" srcset="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageItem;
