import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import router from "./router";
import "./index.css";

function counterReducer(state = { value: 0, loading: false }, action: any) {
  switch (action.type) {
    case "add":
      return { ...state, value: state.value + 1 };
    case "sub":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}
export const store = createStore(counterReducer);

const container = document.getElementById("root")!;
const root = createRoot(container);
store.subscribe(() => console.log(store.getState()));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
