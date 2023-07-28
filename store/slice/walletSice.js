import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "utils/axios";
const initialState = {
  wallet: null,
  status: "idle",
  updated: {
    wallet: null,
    status: "idle",
  },
};

export const fetchWalletAmount = createAsyncThunk(
  "category/fetchWalletAmount",
  async () => {
    const response = await axios.get("/wallet/balance");
    // console.log(response)
    return response.data;
  }
);

export const fetchupdatedWallet = createAsyncThunk(
  "category/fetchupdatedWallet",
  async (trasnsaction) => {
    const response = await axios.get(`/update/balance/${trasnsaction}`);
    return response.data;
  }
);

export const getWalletSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWalletAmount.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWalletAmount.fulfilled, (state, { payload }) => {
        state.status = "successful";
        state.wallet = payload;
      });
    builder
      .addCase(fetchupdatedWallet.pending, (state) => {
        state.updated.status = "loading";
      })
      .addCase(fetchupdatedWallet.fulfilled, (state, { payload }) => {
        state.updated.status = "successful";
        state.updated.wallet = payload;
      });
  },
});

export default getWalletSlice.reducer;
