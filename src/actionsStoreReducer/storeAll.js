import { configureStore } from "@reduxjs/toolkit";
import {
  mealsReducer,
  categoryValueReducer,
  navNamesReducer,
  footerDataReducer,
} from "./sliceRestaurant";

const store = configureStore({
  reducer: {
    meals: mealsReducer,
    categoryValue: categoryValueReducer,
    navNames: navNamesReducer,
    footerData: footerDataReducer,
  },
});

export default store;
