import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "utils/axios";
const initialState = {
  datatype: null,
  status: "idle",
  cabletype: null,
  powertype: null,
  airtimetype:null,
  payBill: null
};

export const fetchDataCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    const response = await axios.get("/getdata");
    // console.log(response)
    return response.data;
  }
);

export const fetchAirtimeCategories = createAsyncThunk(
  "category/fetchAirtimeCategories",
  async () => {
    const response = await axios.get("/getairtime");
    // console.log(response)
    return response.data;
  }
);
export const fetchCableCategories = createAsyncThunk(
  "category/fetchcableCategories",
  async () => {
    const response = await axios.get("/getcable");
    // console.log(response)
    return response.data;
  }
);
export const fetchPowerCategories = createAsyncThunk(
  "category/fetchPowerCategories",
  async () => {
    const response = await axios.get("/getpower");
    // console.log(response)
    return response.data;
  }
);

export const fetchInternetCategories = createAsyncThunk(
  "category/fetchPowerCategories",
  async () => {
    const response = await axios.get("/getinternet");
    // console.log(response)
    return response.data;
  }
);

export const PayBillCategories = createAsyncThunk(
  "category/paybillCategories",
  async () => {
    const response = await axios.get("/getinternet");
    // console.log(response)
    return response.data;
  }
);

export const getDataSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDataCategories.fulfilled, (state, { payload }) => {
        state.status = "successful";
        state.datatype = payload;
      });
    builder
      .addCase(fetchCableCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCableCategories.fulfilled, (state, { payload }) => {
        state.status = "successful";
        state.cabletype = payload;
      });
    builder
      .addCase(fetchPowerCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPowerCategories.fulfilled, (state, { payload }) => {
        state.status = "successful";
        state.powertype = payload;
      });
    builder
      .addCase(fetchAirtimeCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAirtimeCategories.fulfilled, (state, { payload }) => {
        state.status = "successful";
        state.airtimetype = payload;
      });
  },
});

export default getDataSlice.reducer;
