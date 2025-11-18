import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  categoriesId: 0,
  sort: {
    name: "популярности",
    sortProperty: "rating"
  }
}

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      console.log(action);
      state.categoriesId = action.payload;
    },
  },
});

export const {setCategoryId} = filterSlice.actions;

export default filterSlice.reducer;