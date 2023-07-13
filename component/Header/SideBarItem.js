import Link from "next/link";
import React from "react";

const SideBarItem = ({ icon, linkName, link, active }) => {
  return (
    <>
      <div className="hoverEffect flex  items-center hover:rounded-box hover:text-warning hover:cursor-pointer ">
        <Link href={`/categories/${link}`}>
          <span className="text-[0.1rem] mb-2">{icon}</span>
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
