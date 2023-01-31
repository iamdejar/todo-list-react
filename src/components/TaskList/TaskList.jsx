import styles from './TaskList.module.scss';
import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';

export const TaskList = (props) => {

  const state = useSelector(state => state.tasks);

  const tasksToRender = state.tasks
    // .filter(FILTER_FUNCTIONS[activeFilter])
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
