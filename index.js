import React from "react";
import { CreateRoot } from "react-dom/client";
import App from "./App";

const container = document.querySelector("#app");
const root = CreateRoot(container);

root.render(App)