import { configureStore } from "@reduxjs/toolkit";
import tasksReucer from './reducer'

const store = configureStore({
  reducer: {
    tasks: tasksReucer
  }
})

export { store }
