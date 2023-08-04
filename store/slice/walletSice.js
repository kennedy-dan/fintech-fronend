import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import axios from "utils/axios";

const initialState = {
  walletAmount: null,
  status: "idle",
  updated: {
    wallet: null,
    status: "idle",
  },
  check:{
    wallet: null,
    status: "idle",
  }
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
    console.log(trasnsaction)

    console.log(trasnsaction.trasnsaction)
    console.log(trasnsaction.user)
    const response = await axios.get(`/update/balance/${trasnsaction.transaction}/${ trasnsaction.mail}`);
    return response.data;
  }
);

export const getWalletSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    clearWallet: (state) => {
      state.status = "idle";
      state.walletAmount = null;

		}
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWalletAmount.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWalletAmount.fulfilled, (state, { payload }) => {
        state.status = "successful";
        state.walletAmount = payload;
      });
    builder
      .addCase(fetchupdatedWallet.pending, (state) => {
        state.check.status="loading"
      })
      .addCase(fetchupdatedWallet.fulfilled, (state, { payload }) => {
        state.updated.status = "successful";
        state.check.status="done"

        state.updated.wallet = payload;
        
      });
  },
});
export const { clearWallet } =
getWalletSlice.actions;
export default getWalletSlice.reducer;
