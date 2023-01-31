import { createSlice } from "@reduxjs/toolkit";


export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [
      { id: 1, title: 'One', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', start: '2023-02-10', end: '5 фев 2022 г.', completed: false, deleted: false },

      { id: 2, title: 'Two', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', start: '2023-02-10', end: '5 фев 2022 г.', completed: false, deleted: false },

      { id: 3, title: 'Three', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', start: '2023-02-10', end: '5 фев 2022 г.', completed: false, deleted: false },

    ]
  },
  reducers: {
    addTask: (state, action) => {
      const newId = state.tasks.length + 1;
      let newTask = {
        id: newId, 
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
