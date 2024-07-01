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
          <div className="ml-2 bg-[#F2F2F7] p-[6px] rounded-lg flex gap-2 relative messgener">
            <div className="flex flex-col">
              <div className="flex flex-row text-sm gap-[10px] items-center">
                <div className="text-sm font-semibold text-[#2C2C2E]">
                  {message.sender.name}
                </div>
                <div className="text-xs text-[#666668]">
                  {message.sender.profession}
                </div>
              </div>
              <div className="text-sm mt-2 mb-3 text-[#2C2C2E]">
                {message.text}
              </div>
            </div>
            <div className="text-xs text-[#666668] flex  items-end pt-2">
              {message.time}
            </div>
          </div>
        </div>
      )}
      {isUser && (
        <div className="bg-[#007AFF] text-white p-2 rounded-lg max-w-xs text-sm flex gap-4 relative sender">
          <div>{message.text}</div>
          <div className="flex justify-end gap-1 items-center pt-5">
            <div className="text-right text-xs ">{message.time}</div>
            <img src={tick} alt="send" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageItem;
