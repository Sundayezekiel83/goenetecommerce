import React from "react";
import RightSide from "./RightSide";
import MiddleSide from "./MiddleSide";
import LeftSide from "./LeftSide";

const Header = () => {
  return (
    <>
      <div className="pt-2 px-2 w-full md:space-x-3 flex md:px-10">
        <LeftSide />
        <MiddleSide />
        <RightSide />
      </div>
    </>
  );
};

export default Header;
