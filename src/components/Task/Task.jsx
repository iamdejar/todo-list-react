import styles from './Task.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { completeTask, deleteTask } from '../../app/reducer';

const dayjs = require('dayjs');
require('dayjs/locale/ru');
dayjs.locale('ru')

export const Task = (props) => {

  const dispatch = useDispatch();

  return (
    <li className={styles.row}>
      <label className={styles.label}>
        <input type='checkbox' onChange={() => dispatch(completeTask(props.id))}/>

        <div className={styles.title}>{props.title}</div>
      </label>

      <div className={styles.date}>
        <strong>Start</strong>
        <span>{dayjs(props.start).format('D MMM YYYY')} г.</span>
      </div>
      <div className={styles.date}>
        <strong>End</strong>
        <span>{dayjs(props.start).format('D MMM YYYY')} г.</span>
      </div>

      <Link to='/edit' className='button'>edit</Link>
      <button 
        type='button'
        className='button' 
        onClick={() => dispatch(deleteTask(props.id))}>
          delete
        </button>

      <div className={styles.description}>
        {props.desc}
      </div>
    </li>
  )
}
