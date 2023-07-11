import CartItems from "@/component/ShoppingCart/CartItems";
import { geteachTotals } from "@/store/slice/cartSlice";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Naira from "react-naira";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const cartPage = () => {
  const { cart, cartTotalAmount } = useSelector((state) => state.cartSlice);
  const { data: session, status } = useSession({ required: true });
  const [deliverySum, setDeliverySum] = useState();
  const router = useRouter();

  const [formData, setFormData] = useState({
    Phonenumber: "",
    Address: "",
  });

  const handleformChange = () => {
    toast.info("Order Recieved", {
      position: "top-right",
    });

    router.push("/");
  };

  const dispatch = useDispatch();

  const GET_DELIVERY_SUM = () => {
    let sum = 0;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].deliveryPrice) {
        sum += parseInt(cart[i].deliveryPrice);
      }
    }

    setDeliverySum(sum);
  };

  useEffect(() => {
    GET_DELIVERY_SUM();
    dispatch(geteachTotals());
  }, [cart]);

  const CheckCart = () => {
    if (cart.length <= 0) {
      return (
        <div className="flex justify-center flex-col space-y-9 items-center mb-4">
          <span className="font-bold">No items on Cart </span>
          <button
            className="btn btn-warning btn-sm"
            onClick={() => router.push("/")}
          >
            Shop Now
          </button>
        </div>
      );
    }
  };
  if (status === "authenticated") {
    return (
      <>
        <div className="bg-sky-100">
          <div className="md:flex justify-between md:gap-2 px-1 md:px-10">
            <div className="w-full  mx-auto bg-white  md:w-3/4 rounded-sm shadow-md mt-6 mb-4">
              <div className="font-bold ml-4 flex items-center gap-10">
                <span>Carts({cart.length}) </span>
                <span
                  onClick={() => router.back()}
                  className="btn-warning btn btn-sm hover:cursor-pointer mt-2"
                >
                  {" "}
                  Back
                </span>
              </div>
              <span className="divider"></span>
              <CheckCart />
              {cart.map((item, index) => {
                return (
                  <div key={index}>
                    {" "}
                    <CartItems cart={item} />{" "}
                  </div>
                );
              })}
            </div>
            {cart.length >= 1 ? (
              <>
                {" "}
                <div
                  className={`bg-white w-full md:w-1/4 rounded mb-4 xl px-2 shadow-md mt-6 md:max-h-[33rem]`}
                >
                  <p className="text-sm font-semibold uppercase">
                    {" "}
                    Cart Summary{" "}
                  </p>
                  <div className="divider"></div>
                  <p className="uppercase text-sm">
                    Goenet <span className="text-orange-500">Express</span>
                  </p>
                  <p className="text-[0.7rem] mt-2">
                    Free Delivery for Thousands of product from Lagos State and
                    Abuja
                  </p>
                  <div className="divider"></div>
                  <p className="text-lg font-bold">
                    {" "}
                    Sub Total: <Naira>{cartTotalAmount}</Naira>
                  </p>

                  <p className="text-sm mt-3">
                    {" "}
                    Shipping Total: <Naira>{deliverySum}</Naira>
                  </p>

                  <div className="text-base mt-2 p-3 bg-sky-100 rounded-md">
                    {session.user.name}
                  </div>

                  <input
                    type="phone"
                    placeholder="Enter Phone Number"
                    className="input input-bordered input-warning w-full  mt-4"
                    defaultValue={formData.Phonenumber}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        Phonenumber: event.target.value,
                      })
                    }
                  />

                  <textarea
                    className="textarea textarea-warning mt-4 w-full  overflow-hidden"
                    placeholder="Enter address, please add landmark area near you location"
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        Address: event.target.value,
                      })
                    }
                  />

                  <button
                    className="btn-warning btn-block btn btn-lg mt-2"
                    onClick={() => handleformChange()}
                  >
                    Check Out
                  </button>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </>
    );
  }
};

export default cartPage;
