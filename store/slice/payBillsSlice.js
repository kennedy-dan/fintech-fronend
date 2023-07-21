import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "utils/axios";
const initialState = {
  bills: null,
  status:'idle'
};

export const payAirtime = createAsyncThunk(
  "payairtime",
  async (payload) => {
    console.log(payload)
    const response = await axios.post("/airtime", payload);
    console.log(response)
    return response;
  }
);

  




export const payBillSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(payAirtime.pending, (state) => {
        state.status = "loading";
      })
      .addCase(payAirtime.fulfilled, (state, { payload }) => {
        console.log(payload)
        state.status = "successful";
        state.wallet = payload;
      });

  },
});

export default payBillSlice.reducer;
