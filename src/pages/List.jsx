import { Task } from '../components/Task/Task';
import { TaskList } from '../components/TaskList/TaskList';

export const List = () => {
  return (
    <TaskList>
      <Task />
      <Task />
      <Task />
    </TaskList>
  )
}
