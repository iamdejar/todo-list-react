import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [
      { 
        id: nanoid(), 
        title: 'One 1', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        start: '2023-01-10', 
        end: '2023-02-10', 
        completed: false, 
        deleted: false 
      },
      { 
        id: nanoid(), 
        title: 'Two 2', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        start: '2023-01-20', 
        end: '2023-02-05', 
        completed: false, 
        deleted: false 
      },
      { 
        id: nanoid(), 
        title: 'Three 3', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        start: '2023-01-30', 
        end: '2023-02-01', 
        completed: false, 
        deleted: false 
      },
      { 
        id: nanoid(), 
        title: 'Four 4', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        start: '2023-01-10', 
        end: '2023-02-10', 
        completed: false, 
        deleted: false 
      },
      { 
        id: nanoid(), 
        title: 'Five 5', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        start: '2023-01-20', 
        end: '2023-02-05', 
        completed: false, 
        deleted: false 
      },
      { 
        id: nanoid(), 
        title: 'Six 6', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        start: '2023-01-30', 
        end: '2023-02-01', 
        completed: false, 
        deleted: false 
      },
      { 
        id: nanoid(), 
        title: 'Seven 7', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        start: '2023-01-10', 
        end: '2023-02-10', 
        completed: false, 
        deleted: false 
      },
      { 
        id: nanoid(), 
        title: 'Eight 8', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        start: '2023-01-20', 
        end: '2023-02-05', 
        completed: false, 
        deleted: false 
      },
      { 
        id: nanoid(), 
        title: 'Nine 9', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        start: '2023-01-30', 
        end: '2023-02-01', 
        completed: false, 
        deleted: false 
      },
      { 
        id: nanoid(), 
        title: 'Ten 10', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        start: '2023-01-30', 
        end: '2023-02-01', 
        completed: false, 
        deleted: false 
      },

      { 
        id: nanoid(), 
        title: 'One 11', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        start: '2023-01-10', 
        end: '2023-02-10', 
        completed: false, 
        deleted: false 
      },
      { 
        id: nanoid(), 
        title: 'Two 12', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        start: '2023-01-20', 
        end: '2023-02-05', 
        completed: false, 
        deleted: false 
      },
      { 
        id: nanoid(), 
        title: 'Three 13', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        start: '2023-01-30', 
        end: '2023-02-01', 
        completed: false, 
        deleted: false 
      },
      { 
        id: nanoid(), 
        title: 'Four 14', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        start: '2023-01-10', 
        end: '2023-02-10', 
        completed: false, 
        deleted: false 
      },
      { 
        id: nanoid(), 
        title: 'Five 15', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        start: '2023-01-20', 
        end: '2023-02-05', 
        completed: false, 
        deleted: false 
      },
      { 
        id: nanoid(), 
        title: 'Six 16', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        start: '2023-01-30', 
        end: '2023-02-01', 
        completed: false, 
        deleted: false 
      },
      { 
        id: nanoid(), 
        title: 'Seven 17', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        start: '2023-01-10', 
        end: '2023-02-10', 
        completed: false, 
        deleted: false 
      },
      { 
        id: nanoid(), 
        title: 'Eight 18', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        start: '2023-01-20', 
        end: '2023-02-05', 
        completed: false, 
        deleted: false 
      },
      { 
        id: nanoid(), 
        title: 'Nine 19', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        start: '2023-01-30', 
        end: '2023-02-01', 
        completed: false, 
        deleted: false 
      },
      { 
        id: nanoid(), 
        title: 'Ten 20', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
        start: '2023-01-30', 
        end: '2023-02-01', 
        completed: false, 
        deleted: false 
      },
    ],
    activeFilter: {
      filter: 'All',
      titleValue: '',
      startDateValue: '',
      endDateValue: '',
    },
    pagination: 15,
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
    },

    loadTasks: (state, action) => {
      if (state.pagination + 15 < state.tasks.length) {
        state.pagination = state.pagination + 15
      } else {
        state.pagination = state.tasks.length
      }
    }
  }
  
})

export const { addTask, editTask, completeTask, deleteTask, setFilter, loadTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
