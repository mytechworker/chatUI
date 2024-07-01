import React from "react";
import MessageItem from "./MessageItem";
import data from "../data/data.json";
import Date from "../data/data.json";

const MessageList = () => {
  const { messages } = data;

  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="text-[#666668] text-base pb-5">{Date.date}</div>

      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
