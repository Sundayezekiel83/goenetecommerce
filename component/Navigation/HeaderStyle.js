import React from "react";

const HeaderStyle = ({ text, color }) => {
  return (
    <div className={`${color} rounded-t-lg mt-4`}>
      <span className="text-white text-2xl">{text}</span>
    </div>
  );
};

export default HeaderStyle;
