import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: [],
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.selectedItems.push(action.payload);
    },

    DELETE_FROM_CART: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const newstate = state.selectedItems.filter(
        (item) => item.title != action.payload.title
      );
      state.selectedItems = newstate;
    },

    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { ADD_TO_CART, DELETE_FROM_CART } = restaurantSlice.actions;

export default restaurantSlice.reducer;
