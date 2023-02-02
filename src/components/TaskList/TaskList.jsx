import styles from './TaskList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import { useEffect, useState } from 'react';
import { loadTasks } from '../../app/reducer';
import dayjs from 'dayjs';
import 'dayjs/locale/ru'

dayjs.locale('ru');

export const TaskList = ({tasks}) => {

  const dispatch = useDispatch();
  const state = useSelector(state => state.tasks);
  const [loading, setLoading] = useState(false);

  const scrollHandler = (e) => {
    const scrollBottom = e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop - window.innerHeight;

    if (scrollBottom < 50) {
      setLoading(true)
    }
  }

  useEffect(() => {
    if (loading) {
      dispatch(loadTasks('load'))
    }
  }, [loading])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  // const filteredTasks = state.filteredTasks;
  const tasksWithPagination = tasks.filter((task, index) => index < state.pagination);

  const tasksToRender = tasksWithPagination
    .map((task) => (
      <Task 
        {...task}
        key={task.id}
      />
    ));

  if (tasks.length > 0) {
    return (
      <>
        <div>Showing {tasksWithPagination.length} / {tasks.length} tasks</div>
        <ul className={styles.list}>
    
          {tasksToRender}
    
        </ul>
        {tasksWithPagination.length === tasks.length ? <div className={styles.listEnd}>Конец списка</div> : null}
      </>
    )
  }

  return (
    <div>There's nothing here...</div>
  )
}
