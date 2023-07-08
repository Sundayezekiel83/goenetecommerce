import React from "react";

const Moredetails = ({ specifications, details }) => {
  return (
    <>
      <div className=" md:flex md:justify-between mt-2">
        <div className="bg-white w-full md:w-3/4 rounded-sm px-2  md:mb-4 ">
          <p className="mt-4  font-bold uppercase">Products Details</p>
          <div className="divider"></div>
          <span className="text-sm">
            {" "}
            {specifications} {details}{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default Moredetails;
