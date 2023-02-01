import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './reducer';

const preloadedState = localStorage.getItem('todoState') 
                      ? JSON.parse(localStorage.getItem('todoState'))
                      : {};

const store = configureStore({
  reducer: {
    tasks: tasksReducer
  },
  preloadedState,
})

store.subscribe(() => {
  localStorage.setItem('todoState', JSON.stringify(store.getState()))
})

export { store }
