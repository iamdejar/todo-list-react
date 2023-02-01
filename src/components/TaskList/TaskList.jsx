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
    startAscending: sortArr.sort((a, b) => {
      console.log(Number(a.start), Number(b.start));
      return Number(a.start) - Number(b.start)}),
    startDescending: sortArr.sort((a, b) => Number(a.start) - Number(b.start)).reverse(),
    'end-ascending': sortArr.sort((a, b) => a.end - b.end),
    'end-descending': sortArr.sort((a, b) => a.end - b.end).reverse(),
    'start-default': state.tasks.filter(() => true),
    'end-default': state.tasks.filter(() => true),
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
