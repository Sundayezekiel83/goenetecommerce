import { ShoppingCart } from "@mui/icons-material";
import React from "react";

const Cart = () => {
  return (
    <>
      <div>
        <ShoppingCart fontSize="large" />
        <sup className="badge badge-warning">2 </sup>
      </div>
    </>
  );
};

export default Cart;
