import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { initialState } from "./initial-state";

const PAGINATION_SIZE = 15;

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push({
        id: nanoid(),
        completed: false, 
        deleted: false,
        ...action.payload
      });
    },

    editTask(state, action) {

      state.tasks = state.tasks.map(task => {
        if (action.payload.id === task.id) {
          return {...task, 
            title: action.payload.title,
            description: action.payload.desk,
            start: action.payload.start,
            end: action.payload.end,
          }
        }
        return task
      })
    },

    changeTaskCompleted(state, action) {
      state.tasks = state.tasks.map(task => {

        if (action.payload === task.id) {
          return {...task, completed: !task.completed}
        }
        return task
      })
    },

    deleteTask(state, action) {
      state.tasks = state.tasks.map(task => {

        if (action.payload === task.id) {
          return {...task, deleted: true }
        }
        return task
      })
    },

    setFilter(state, action) {
      state.activeFilter = {...action.payload};

      state.pagination = PAGINATION_SIZE;
    },

    loadTasks(state) {
      if (state.pagination + PAGINATION_SIZE < state.tasks.length) {
        state.pagination = state.pagination + PAGINATION_SIZE
      } else {
        state.pagination = state.tasks.length
      }
    },

    clearDeleted(state) {
      state.tasks = state.tasks.filter((task) => !task.deleted)
    }
  }
})

export const { addTask, editTask, changeTaskCompleted, deleteTask, setFilter, loadTasks, clearDeleted } = tasksSlice.actions;
export default tasksSlice.reducer;
