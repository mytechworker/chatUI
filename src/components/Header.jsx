import React from "react";
import data from "../data/data.json";
import Menu from "../images/kebab-horizontal.svg";
const Header = () => {
  const teamMembers = data.messages
    .map((message) => message.sender)
    .filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.name === value.name)
    );

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative -mr-3">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-8 h-8 rounded-full"
            />
            {/* {member.isActive && (
              <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
            )} */}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-sm font-semibold">🦄 Team Unicorns</h1>
        <div className="text-gray-500 text-[12px]">
          last seen 45 minutes ago
        </div>
      </div>
      <img src={Menu} alt="" />
    </div>
  );
};

export default Header;
