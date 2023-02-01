import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const dayjs = require('dayjs');
require('dayjs/locale/ru');
dayjs.locale('ru');

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [
      { 
        id: nanoid(), 
        title: 'One', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        start: dayjs('2023-01-10'), 
        end: dayjs('2023-02-10'), 
        completed: false, 
        deleted: false 
      },
      { 
        id: nanoid(), 
        title: 'Two', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        start: dayjs('2023-01-20'), 
        end: dayjs('2023-02-05'), 
        completed: false, 
        deleted: false 
      },
      { 
        id: nanoid(), 
        title: 'Three', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        start: dayjs('2023-01-30'), 
        end: dayjs('2023-02-01'), 
        completed: false, 
        deleted: false 
      },
    ],
    activeFilter: {
      filter: 'All',
      titleValue: '',
      startDateValue: '',
      endDateValue: '',
    }
  },
  reducers: {
    addTask: (state, action) => {
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
    editTask: (state, action) => {

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

    completeTask: (state, action) => {
      state.tasks = state.tasks.map(task => {

        if (action.payload === task.id) {
          return {...task, completed: !task.completed}
        }
        return task
      })

    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.map(task => {

        if (action.payload === task.id) {
          return {...task, deleted: true }
        }
        return task
      })
    },

    setFilter: (state, action) => {
      state.activeFilter.filter = action.payload.filter;
      state.activeFilter.titleValue = action.payload.titleValue;
      state.activeFilter.startDateValue = action.payload.startDateValue;
      state.activeFilter.endDateValue = action.payload.endDateValue;
    }
  }
  
})

export const { addTask, editTask, completeTask, deleteTask, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;
