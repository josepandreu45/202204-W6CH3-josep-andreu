import { configureStore } from "@reduxjs/toolkit";
import phoneReducer from "./features/phoneSlice";

const store = configureStore({
  reducer: { phoneReducer },
});

export default store;
