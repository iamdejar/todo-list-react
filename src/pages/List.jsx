import { TaskList } from '../components/TaskList/TaskList';
import { Link } from 'react-router-dom';
import { Filters } from '../components/Filters/Filters';

export const List = () => {

  return (
    <>
    <div className='space-between'>
      <Link to="/task" className='button'>Add a new task</Link>
      <Link to="/trash" className='button'>View deleted tasks</Link>
    </div>

    <Filters/>    

    <TaskList/>
    </>
  )
}
