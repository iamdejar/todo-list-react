import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem(
    "todoState",
    JSON.stringify(store.getState().tasks.tasks)
  );
});

export { store };
