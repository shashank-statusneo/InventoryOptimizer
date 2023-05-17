import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store"

import InventoryOptimizer from "./components/InventoryOptimizer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

   <Provider store={store}>
    {/* <React.StrictMode> */}
       {/* <App /> */}
       <InventoryOptimizer/>
    {/* </React.StrictMode> */}
 </Provider>
);
