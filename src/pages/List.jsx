import { Task } from '../components/Task/Task';
import { TaskList } from '../components/TaskList/TaskList';
import { Link } from 'react-router-dom';

export const List = () => {
  return (
    <>
    <div className='space-between'>
      <Link to="/add" className='button'>Add a new task</Link>
      <Link to="/trash" className='button'>View deleted tasks</Link>
    </div>
    <TaskList>
      <Task />
      <Task />
      <Task />
    </TaskList>
    </>
  )
}
