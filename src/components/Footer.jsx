import React, { useState } from "react";
import Icon from "../images/Icon.svg";
import Icon1 from "../images/smile.svg";
import Icon2 from "../images/sended.svg";
import Mention from "../images/mention.svg";

const Footer = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="p-3 px-6 bg-white flex items-center space-x-2 border-t border-gray-300">
      <button
        className="text-[
#666668]"
      >
        <img src={Icon1} alt="emoji" />
      </button>
      <input
        type="text"
        className="flex-1 text-[#666668] text-sm"
        placeholder="Start typing..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="text-gray-500">
        <img src={Mention} alt="mention" />
      </button>
      <button className="text-white p-2 rounded-lg">
        <img src={inputValue ? Icon2 : Icon} alt="send" />
      </button>
    </div>
  );
};

export default Footer;
