import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import "./index.css"
import { CartContextProvider } from "./context/Cart";
import { NavigationProvider } from "./context/Navigation";


const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<NavigationProvider><CartContextProvider><App /></CartContextProvider></NavigationProvider>);