import React from "react";
import BreadCumb from "../BreadCumb/BreadCumb";
import Naira from "react-naira";
import SelectFunction from "./SelectState";
import Moredetails from "./Moredetails";
import { toggleState } from "@/store/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = ({ response }) => {
  const { toggle } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  console.log("the toggle", toggle);
  return (
    <>
      <BreadCumb
        title={response.title}
        brand={response.brand}
        category={response.categories}
      />
      <div className=" md:flex justify-between md:gap-2">
        <div className="w-full bg-white  md:w-3/4 rounded-sm shadow-md mb-4">
          <div className=" md:flex justify-between  mx-2">
            <img
              src={response.url}
              alt="productImage"
              className="mt-5 rounded-lg px-4 md:max-w-md md:max-h-[20rem] max-h-[10rem] max-w-sm mx-auto"
            />
            <div className="flex flex-col gap-2 mt-4">
              <span className="text-base font-semibold">
                {response.details}
              </span>
              <span className="text-sm">
                Brand: {response.brand} || {"  "}
                <span className="text-sky-500 hover:underline hover:cursor-pointer">
                  Similar Products from {response.brand}
                </span>
              </span>
              <div className="divider"></div>
              <span className="font-bold text-lg mt-0">
                <Naira>{response.productPrice}</Naira>
              </span>
              <p className="text-sm text-red-500">
                {response.units >= 1 ? (
                  <span>{response.units} units left </span>
                ) : (
                  <span>0 units left</span>
                )}
              </p>
              <p className="text-sm font-bold">
                {response.deliveryPrice !== "" ? (
                  <span>
                    Shipping Fee Cost <Naira>{response.deliveryPrice}</Naira>
                  </span>
                ) : (
                  <span>Free Delivery</span>
                )}
              </p>
              <div className="divider"></div>
              <button
                className="btn btn-warning px-2 btn-block mt-5 mb-2"
                onClick={() => dispatch(toggleState())}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white w-full md:w-1/4 rounded mb-4 xl px-2 shadow-md">
          <p className="text-sm font-semibold uppercase">
            {" "}
            Delivery & Returns{" "}
          </p>
          <div className="divider"></div>
          <p className="uppercase text-sm">
            Goenet <span className="text-orange-500">Express</span>
          </p>
          <p className="text-[0.7rem] mt-2">
            Free Delivery for Thousands of product from Lagos State and Abuja
          </p>
          <div className="divider"></div>
          <p className="text-base mt-0"> Choose you Location</p>
          <SelectFunction />
        </div>
      </div>

      <Moredetails
        specifications={response.specifications}
        details={response.details}
      />
    </>
  );
};

export default ProductDetails;
