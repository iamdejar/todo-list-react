import styles from './TaskList.module.scss';
import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';

const dayjs = require('dayjs');
require('dayjs/locale/ru');
dayjs.locale('ru');

const isSameOrAfter = require('dayjs/plugin/isSameOrAfter');
dayjs.extend(isSameOrAfter);

export const TaskList = (props) => {

  const state = useSelector(state => state.tasks);

  const FILTER_FUNCTIONS = {
    All: state.tasks.filter(() => true),
    Active: state.tasks.filter((task) => !task.completed),
    Completed: state.tasks.filter((task) => task.completed),
    Title: state.tasks.filter((task) => task.title.toLowerCase().startsWith(state.activeFilter.titleValue)),
    StartDate: state.tasks.filter((task) => task.start.isSameOrAfter(state.activeFilter.startDateValue)),
    EndDate: state.tasks.filter((task) => task.end.isSameOrAfter(state.activeFilter.endDateValue)),
  }

  const tasksToRender = FILTER_FUNCTIONS[state.activeFilter.filter]
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
