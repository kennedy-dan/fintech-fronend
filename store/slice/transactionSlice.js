import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "utils/axios";
const initialState = {
  wallet: null,
  status: "idle",
  billtrans: {
    bill: null,
    status: "idle",
  },
  gettrans: {
    bill: null,
    status: "idle",
  },
};

export const fetchtranSaction = createAsyncThunk(
  "category/fetchtranSaction",
  async () => {
    const response = await axios.get("/response");
    // console.log(response)
    return response.data;
  }
);

export const fetchbillTransactions = createAsyncThunk(
  "category/fetchbillTransactions",
  async () => {
    const response = await axios.get("/airtime");
    // console.log(response)
    return response.data;
  }
);

export const fetchTransactions = createAsyncThunk(
  "fetchTransactions",
  async () => {
    const response = await axios.get("/gettransaction");
    // console.log(response)
    return response.data;
  }
);

export const gettransactionSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchtranSaction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchtranSaction.fulfilled, (state, { payload }) => {
        state.status = "successful";
        state.wallet = payload;
      });
    builder
      .addCase(fetchbillTransactions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchbillTransactions.fulfilled, (state, { payload }) => {
        state.billtrans.status = "successful";
        state.billtrans.bill = payload;
      });
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTransactions.fulfilled, (state, { payload }) => {
        state.gettrans.status = "successful";
        state.gettrans.bill = payload;
      });
  },
});

export default gettransactionSlice.reducer;
