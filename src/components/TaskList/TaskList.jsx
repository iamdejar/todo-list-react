import styles from './TaskList.module.scss';
import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';

export const TaskList = (props) => {

  const state = useSelector(state => state.tasks);
  const sortArr = [...state.tasks];

  const FILTER_FUNCTIONS = {
    'All': state.tasks.filter(() => true),
    'Active': state.tasks.filter((task) => !task.completed),
    'Completed': state.tasks.filter((task) => task.completed),
    'start-ascending': sortArr.sort((a, b) => a.start - b.start),
    'start-descending': sortArr.sort((a, b) => a.start - b.start).reverse(),
  }

  const tasksToRender = FILTER_FUNCTIONS[state.activeFilter]
    .map((task) => (
      <Task 
        id={task.id} 
        key={task.id}
        title={task.title} 
        desc={task.description}
        start={task.start}
        end={task.end}
        completed={task.completed}
      />
    ));

  return (
    <ul className={styles.list}>

      {tasksToRender}

    </ul>
  )
}
