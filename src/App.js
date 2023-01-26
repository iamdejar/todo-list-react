import './App.scss'
import { AddTaskForm } from './AddTask/AddTask'
import { Task } from './Task/Task';
import { TaskList } from './TaskList/TaskList';

const App = () => {

  return (

    <div className="todolist-body">

      <h1 className='h1'>Easy tasks</h1>

      <AddTaskForm/>

      <TaskList>
        <Task />
        <Task />
        <Task />
      </TaskList>
      
    </div>
    
  );
}

export default App;
