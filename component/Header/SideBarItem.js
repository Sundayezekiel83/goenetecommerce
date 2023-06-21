import React from "react";

const SideBarItem = ({ icon, linkName, link, active }) => {
  return (
    <>
      <div className="hoverEffect flex justify-start space-x-2 items-center hover:text-white hover:rounded-box hover:p-2 hover:bg-warning hover:cursor-pointer align-middle">
        <span className="text-[0.1rem] ">{icon}</span>
        <span
          className={`${
            active && "font-bold"
          } text-[0.8rem] inline  font-light`}
        >
          {linkName}
        </span>
      </div>
    </>
  );
};

export default SideBarItem;
