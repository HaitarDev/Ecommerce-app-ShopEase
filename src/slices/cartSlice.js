import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartInfo: [
    //  {
    //   id,
    //   title,
    //   image,
    //   price,
    //   quantity,
    //   subPrice: price * quantity,
    // },
  ],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addNewCart: (state, action) => {
      const newItem = action.payload;
      const existingProductIndex = state.cartInfo.findIndex(
        (product) => product.id === newItem.id
      );

      if (existingProductIndex !== -1) {
        // Product already exists in the cart, increase quantity
        state.cartInfo[existingProductIndex].quantity++;
      } else {
        // Product doesn't exist in the cart, add it
        state.cartInfo = [...state.cartInfo, newItem];
      }
    },

    deleteItem: (state, action) => {
      state.cartInfo = state.cartInfo.filter(
        (item) => item.id !== action.payload
      );
    },
    increaseQty: (state, action) => {
      const item = state.cartInfo.find((item) => item.id === action.payload);

      item.quantity++;
      item.subPrice = item.quantity * item.price;

      if (item.quantity < 1) return;
    },
    decreaseQty: (state, action) => {
      const item = state.cartInfo.find((item) => item.id === action.payload);

      if (item.quantity < 1) return;

      item.quantity--;
      item.subPrice = item.quantity * item.price;
    },
  },
});

export const {
  addNewCart,
  increaseQty,
  decreaseQty,
  deleteItem,
  calcTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
