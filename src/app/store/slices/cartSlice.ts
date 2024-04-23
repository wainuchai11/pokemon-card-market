import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../type";

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const { id, name, image, price } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.qty += 1;
        existingItem.sum = existingItem.qty * price;
      } else {
        state.push({ ...action.payload, qty: 1, sum: price });
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
    clearCart: () => {
      return [];
    },
    increaseQty: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.qty += 1;
        existingItem.sum = existingItem.qty * existingItem.price;
      }
    },
    decreaseQty: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.qty === 1) {
          state = state.filter((item) => item.id !== id);
        } else {
          existingItem.qty -= 1;
          existingItem.sum = existingItem.qty * existingItem.price;
        }
      }
    },
    totalQty: (state) => {
      const total = state.reduce((acc, item) => acc + item.qty, 0);
      return void total;
    },
    totalPrice: (state) => {
      const total = state.reduce((acc, item) => acc + item.sum, 0);
      return void total;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
