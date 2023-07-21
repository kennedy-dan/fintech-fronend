import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "store/slice/authSlice";
import getDataSlice from "./slice/getDataSlice";
import walletSice from "./slice/walletSice";
import transactionSice from "./slice/transactionSlice";
import payBillsSlice from "./slice/payBillsSlice";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistConfig = {
  key: "fintech",
  storage,
};
const persistedReducer = persistReducer(persistConfig, authSlice);
const rootReducer = combineReducers({
  auth: persistedReducer,
  data: getDataSlice,
  wallet: walletSice,
  transaction: transactionSice,
  paybills: payBillsSlice
});
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
