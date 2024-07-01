import React from "react";
import { FaSmile, FaAt, FaArrowRight } from "react-icons/fa";
import Icon from "../images/Icon.svg";
const Footer = () => {
  return (
    <div className="p-4 bg-white flex items-center space-x-2 border-t border-gray-300">
      <button className="text-gray-500">
        <FaSmile size={16} />
      </button>
      <input
        type="text"
        className="flex-1 border rounded-lg p-2"
        placeholder="Start typing..."
      />
      <button className="text-gray-500">
        <FaAt size={16} />
      </button>
      <button className=" text-white p-2 rounded-lg">
        <img src={Icon} alt="send" />
      </button>
    </div>
  );
};

export default Footer;
