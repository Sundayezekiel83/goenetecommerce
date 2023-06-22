import React from "react";
import RightSide from "./RightSide";
import MiddleSide from "./MiddleSide";
import LeftSide from "./LeftSide";

const Header = () => {
  return (
    <>
      <div className="p-2 space-x-5 align-middle mx-auto flex justify-between">
        <LeftSide />
        <MiddleSide />
        <RightSide />
      </div>
    </>
  );
};

export default Header;
