import { createSlice } from "@reduxjs/toolkit";


export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [
      { id: 1, name: 'One', completed: false },
      { id: 2, name: 'Two', completed: false },
      { id: 3, name: 'Three', completed: false },
    ]
  },
  reducers: {
    addTask: (state, action) => {

      let newTask = {id: 1, name: action.payload, completed: false};
      state.tasks.push(newTask);
    },
    editTask: (state, action) => {

      state.tasks = state.tasks.map(task => {
        if (action.payload.id === task.id) {
          return {...task, title: action.payload.newTitle}
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
      state.tasks = state.tasks.filter((task) => action.payload !== task.id)
    }
  }
  
})

export const { addTask, editTask, completeTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
