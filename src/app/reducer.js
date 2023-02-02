import { createSlice, current } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { initialState } from "../shared/initial-state";
import { PAGINATION_SIZE } from "../shared/lib";
import { filter } from "../features/filters";

const preloadedTasks = localStorage.getItem('todoState') ? JSON.parse(localStorage.getItem('todoState')) : undefined;
const preloadedState = preloadedTasks
                      ? {...initialState, tasks: preloadedTasks, filteredTasks: preloadedTasks}
                      : initialState;


export const tasksSlice = createSlice({
  name: 'tasks-reducer',
  initialState: preloadedState,
  reducers: {
    addTask(state, action) {
      state.tasks.push({
        id: nanoid(),
        completed: false, 
        deleted: false,
        ...action.payload
      });
      state.filteredTasks = filter(state.tasks, state.activeFilter);

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
      state.filteredTasks = filter(state.tasks, state.activeFilter);
    },

    changeTaskCompleted(state, action) {
      state.tasks = state.tasks.map(task => {

        if (action.payload === task.id) {
          return {...task, completed: !task.completed}
        }
        return task
      })
      state.filteredTasks = filter(state.tasks, state.activeFilter);
    },

    deleteTask(state, action) {
      state.tasks = state.tasks.map(task => {

        if (action.payload === task.id) {
          return {...task, deleted: true }
        }
        return task
      })
      state.filteredTasks = filter(state.tasks, state.activeFilter);
    },

    setFilter(state, action) {
      state.activeFilter = {...state.activeFilter, ...action.payload};
      state.filteredTasks = filter(state.tasks, state.activeFilter);

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
