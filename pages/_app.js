import "@/styles/globals.css";
import { Provider } from "react-redux";
import { persistor, store } from "../store/index.js";
import { PersistGate } from "redux-persist/integration/react";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
    
        <Component {...pageProps} />
    </Provider>
  );
}
