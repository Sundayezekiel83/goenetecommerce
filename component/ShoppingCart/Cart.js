import { ShoppingCart } from "@mui/icons-material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  
  const { cart } = useSelector((state) => state.cartSlice);
  const router = useRouter();
  return (
    <>
        <div>
        <ShoppingCart fontSize="large" onClick={() => router.push("/cart")} />
        <sup className="badge badge-warning">{cart.length}</sup>
      </div>
    </>
  );
};

export default Cart;
