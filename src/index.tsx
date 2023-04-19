import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import router from "./router";
import "./index.css";

function counterReducer(
  oldState = {
    value: 0,
    loading: false,
    todoList: [{ value: "123", completed: false, id: 1 }],
  },
  action: any
) {
  switch (action.type) {
    case "add":
      const newState1 = { ...oldState, value: oldState.value + 1 };
      return newState1;
    case "addT":
      const newState3 = { ...oldState, value: oldState.value + action.payload };
      return newState3;
    case "sub":
      const newState2 = { ...oldState, value: oldState.value - 1 };
      return newState2;
    case "addTodo":
      return { ...oldState, todoList: [...oldState.todoList, action.payload] };
    case "deleteTodo":
      const newTodo = oldState.todoList?.filter(
        (item) => item.id !== action.payload?.id
      );
      return { ...oldState, todoList: newTodo };
    case "editTodo":
      const newTodoEdit = oldState.todoList?.map((item) => {
        if (item.id === action.payload?.id) {
          item = action.payload;
        }
        return item;
      });
      return { ...oldState, todoList: newTodoEdit };
    default:
      return oldState;
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
