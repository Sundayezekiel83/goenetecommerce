import Link from "next/link";
import React from "react";

const SideBarItem = ({ icon, linkName, link, active }) => {
  return (
    <>
      <div className="hoverEffect flex justify-start space-x-2 items-center hover:text-white hover:rounded-box hover:bg-warning hover:cursor-pointer align-middle">
        <Link href={`/categories/${link}`}>
          <span className="text-[0.1rem] ">{icon}</span>
          <span
            className={`${
              active && "font-bold"
            } text-[0.8rem] inline  font-light`}
          >
            {linkName}
          </span>
        </Link>
      </div>
    </>
  );
};

export default SideBarItem;
