import React from "react";

const HeaderStyle = ({ text, color }) => {
  return (
    <div className={`${color}  mt-4`}>
      <span className="text-black text-lg">{text} Top Deals</span>
    </div>
  );
};

export default HeaderStyle;
