import React from "react";
import  {createRoot} from "react-dom/client";
import App from "./app.js";
import {Provider} from "react-redux";
import store from "./redux/store/index.js";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>        
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>

);
