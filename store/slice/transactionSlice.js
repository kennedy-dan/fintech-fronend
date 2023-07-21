import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "utils/axios";
const initialState = {
  wallet: null,
  status:'idle'
};

export const fetchtranSaction = createAsyncThunk(
  "category/fetchtranSaction",
  async () => {
    const response = await axios.get("/response");
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

  },
});

export default gettransactionSlice.reducer;
