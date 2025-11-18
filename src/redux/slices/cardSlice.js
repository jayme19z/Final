import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  allPrice: 0,
};

const cartSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addProduct(state, action) {
      const findProduct = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.sizes === action.payload.sizes &&
          obj.widht === action.payload.widht
      );
      if (findProduct) {
        findProduct.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.allPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
    },

    minusProduct(state, action) {
      const findProduct = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.sizes === action.payload.sizes &&
          obj.widht === action.payload.widht
      );
      if (findProduct && findProduct.count > 1) {
        findProduct.count--;
      }
      state.allPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
    },

    removeProduct(state, action) {
      state.items = state.items.filter(
        (obj) =>
          !(
            obj.id === action.payload.id &&
            obj.sizes === action.payload.sizes &&
            obj.widht === action.payload.widht
          )
      );
      state.allPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
    },

    clearProduct(state) {
      state.items = [];
      state.allPrice = 0;
    },
  },
});

export const { addProduct, minusProduct, removeProduct, clearProduct } = cartSlice.actions;
export default cartSlice.reducer;