import { GET_STORAGE_ITEM, SET_STORAGE_ITEM } from "@/Storage/Storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: GET_STORAGE_ITEM("cart") || [],
  cartQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "CartSlice",
  initialState,

  reducers: {
    AddCart: (state, action) => {
      const item = action.payload;
      const exitingItem = state.cart.findIndex(
        (product) => product.id == item.id
      );
      if (exitingItem >= 0) {
        state.cart[exitingItem] = {
          ...state.cart[exitingItem],
          quantity: state.cart[exitingItem].quantity + 1,
        };
      } else {
        state.cart = [item, ...state.cart];
        SET_STORAGE_ITEM("cart", state.cart);
      }
    },

    RemoveCart: (state, action) => {
      const item = state.cart.filter((item) => item.id !== action.payload);
      state.cart = item;
      SET_STORAGE_ITEM("cart", state.cart);
    },

    increaseQ: (state, action) => {
      const cartItems = state.cart.findIndex(
        (cartItem) => cartItem.id == action.payload
      );

      state.cart[cartItems].quantity += 1;

      SET_STORAGE_ITEM("cart", state.cart);
    },

    decreaseQ: (state, action) => {
      const findIndex = state.cart.findIndex(
        (item) => item.id == action.payload
      );

      if (state.cart[findIndex].quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      } else {
        state.cart[findIndex].quantity = state.cart[findIndex].quantity - 1;
      }

      SET_STORAGE_ITEM("cart", state.cart);
    },

    geteachTotals: (state, action) => {
      let { total, quantity } = state.cart.reduce(
        (present, accumulator) => {
          const { productPrice, quantity, deliveryPrice } = accumulator;

          const itemTotal = productPrice * quantity;

          present.total += itemTotal;
          present.quantity += quantity;

          return present;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      total = parseFloat(total.toFixed(2));
      state.cartQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export default cartSlice.reducer;

export const { AddCart, RemoveCart, increaseQ, decreaseQ, geteachTotals } =
  cartSlice.actions;
