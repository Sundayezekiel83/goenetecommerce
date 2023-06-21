import React from "react";
import ElementThree from "./ElementThree";
import { useRouter } from "next/router";
import logo from "../../asset/brand (2).png";
import Image from "next/image";
import Cart from "../ShoppingCart/Cart";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <div className="bg-appcolor-500 mb-3 ">
        <div className="mx-auto w-full align-middle md:max-w-7xl ">
          <img
            src="https://ng.jumia.is/cms/0-6-anniversary/2023/Brand-day/21-Diageo/JA-diageo-brands-top-strip.gif"
            alt="navimage"
          />
        </div>
      </div>

      <div className="bg-white align-middle p-2 shadow-md">
        <div className="md:max-w-7xl mx-auto flex flex-row justify-between space-x-2">
          <span className="flex  align-middle space-x-2">
            <span className=" md:hidden">
              <ElementThree />
            </span>

            <Image
              src={logo}
              alt="goenet"
              width={100}
              height={100}
              onClick={() => router.push("/")}
            />
          </span>

          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-warning lg:inline hidden md outline-none max-w-md w-full my-auto"
          />

          <button className="btn btn-outline btn-warning hidden md:inline">
            Login/SignUp
          </button>
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Navbar;
