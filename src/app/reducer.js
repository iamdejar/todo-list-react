import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { initialState } from "./initial-state";

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask(state, action) {
      let newTask = {
        id: nanoid(), 
        title: action.payload.title, 
        description: action.payload.desk, 
        start: action.payload.start, 
        end: action.payload.end, 
        completed: false, 
        deleted: false 
      };

      state.tasks.push(newTask);
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

    completeTask(state, action) {
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
      state.activeFilter.filter = action.payload.filter;
      state.activeFilter.titleValue = action.payload.titleValue;
      state.activeFilter.startDateValue = action.payload.startDateValue;
      state.activeFilter.endDateValue = action.payload.endDateValue;
      state.pagination = 15;
    },

    loadTasks(state, action) {
      if (state.pagination + 15 < state.tasks.length) {
        state.pagination = state.pagination + 15
      } else {
        state.pagination = state.tasks.length
      }
    },

    clearDeleted(state, action) {
      state.tasks = state.tasks.filter((task) => !task.deleted)
    }
  }
})

export const { addTask, editTask, completeTask, deleteTask, setFilter, loadTasks, clearDeleted } = tasksSlice.actions;
export default tasksSlice.reducer;
