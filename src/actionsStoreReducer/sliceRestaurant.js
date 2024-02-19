import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*  ------------ fetching meals -------------- */

export const fetchMealsData = createAsyncThunk(
  "meals/fetchMealsData",
  async () => {
    const res = await axios
      .get("https://api-data-ex.onrender.com/api/products")
      .catch((err) => {
        console.log("Error", err);
      });
    return res;
  }
);

const sliceMeals = createSlice({
  name: "meals",
  initialState: {
    isLoading: false,
    dataMeals: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMealsData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchMealsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataMeals = action.payload;
      })
      .addCase(fetchMealsData.rejected, (state, action) => {
        state.error = true;
      });
  },
});

// -------------- getting categories -------------------

export const getMenuCategory = createAsyncThunk(
  "category/getMenuCategory",
  async (menuCategoryValue) => {
    return menuCategoryValue;
  }
);

const sliceMenuCategoryValue = createSlice({
  name: "category",
  initialState: {
    categoryValue: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getMenuCategory.fulfilled, (state, action) => {
      state.categoryValue = action.payload;
    });
  },
});

// -------------- getting nav names -------------------

export const getNavLinkNames = createAsyncThunk(
  "navNames/getNavLinkNames",
  async (initialNavLinkNames) => {
    return initialNavLinkNames;
  }
);

const sliceNavLinkNames = createSlice({
  name: "navNames",
  initialState: {
    navNames: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getNavLinkNames.fulfilled, (state, action) => {
      state.navNames = action.payload;
    });
  },
});

// -------------- getting footer data -----------------

export const getFooterData = createAsyncThunk(
  "footerData/getFooterData",
  async (initialFooterData) => {
    return initialFooterData;
  }
);

const sliceFooterData = createSlice({
  name: "footerData",
  initialState: {
    footerData: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getFooterData.fulfilled, (state, action) => {
      state.footerData = action.payload;
    });
  },
});

// -----------------------------------------------------

export const mealsReducer = sliceMeals.reducer;
export const categoryValueReducer = sliceMenuCategoryValue.reducer;
export const navNamesReducer = sliceNavLinkNames.reducer;
export const footerDataReducer = sliceFooterData.reducer;
