import { RemoveCart, decreaseQ, increaseQ } from "@/store/slice/cartSlice";
import React, { useEffect } from "react";
import Naira from "react-naira";
import { useDispatch, useSelector } from "react-redux";

const CartItems = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-between items-center px-2 ">
        <img src={cart.url} alt="productImage" className="max-w-[5rem]" />
        <p className="flex flex-col">
          {cart.title} {cart.details}
          <span className="mt-2 text-slate-500 text-base">
            {" "}
            {cart.deliveryPrice ? (
              <>
                {" "}
                + shipping Fee: <Naira>{cart.deliveryPrice}</Naira>
              </>
            ) : (
              <span className="text-emerald-600 text-base">
                {" "}
                Free Delivery{" "}
              </span>
            )}
          </span>
        </p>
        <p className="font-bold">
          <Naira>{cart.productPrice}</Naira>
        </p>
      </div>
      <div className="mt-4 px-8 text-center md:text-right flex justify-between items-center">
        <button
          onClick={() => dispatch(RemoveCart(cart.id))}
          className="btn btn-sm px-2 btn-warning"
        >
          Remove cart
        </button>
        <div className="flex items-center space-x-5">
          <button
            className="btn btn-sm btn-warning text-lg"
            onClick={() => dispatch(increaseQ(cart.id))}
          >
            +
          </button>{" "}
          <span> {cart.quantity}</span>
          <button
            className="btn btn-sm btn-warning text-lg"
            onClick={() => dispatch(decreaseQ(cart.id))}
          >
            -
          </button>
        </div>
      </div>

      <div className="divider"></div>
    </>
  );
};

export default CartItems;
