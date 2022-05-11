import { createSlice } from "@reduxjs/toolkit";

const phoneSlice = createSlice({
  name: "phone",
  initialState: {
    calling: false,
    phoneNumber: [],
  },
  reducers: {
    addDigit: (state, action) => ({
      ...state,
      phoneNumber: [...state.phoneNumber, action.payload],
    }),
    removeLastDigit: (phone) => ({
      ...phone,
      phoneNumber: [...phone.phoneNumber].slice(
        0,
        phone.phoneNumber.length - 1
      ),
    }),
    resetNumber: (phone) => ({
      ...phone,
      phoneNumber: [],
    }),
  },
});

export const {
  addDigit: addDigitActionCreator,
  removeLastDigit: removeLastDigitActionCreator,
} = phoneSlice.actions;

export default phoneSlice.reducer;
