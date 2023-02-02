import styles from './Task.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeTaskCompleted, deleteTask } from '../../app/reducer';

const dayjs = require('dayjs');
require('dayjs/locale/ru');
dayjs.locale('ru');

export const Task = ({id, title, start, end, deleted, completed, description}) => {

  const dispatch = useDispatch();

  const onChange = () => {
    dispatch(changeTaskCompleted(id))
  }

  return (
    <li className={classNames(styles.row, deleted === true ? styles.deleted : null)}>
      <label className={styles.label}>
        <input 
          type='checkbox' 
          id={id} 
          key={id}
          checked={Boolean(completed)}
          onChange={onChange}/>

        <div className={styles.title}>{title}</div>
      </label>

      <div className={styles.date}>
        <strong>Start</strong>
        <span>{dayjs(start).format('D MMM YYYY')} г.</span>
      </div>
      <div className={styles.date}>
        <strong>End</strong>
        <span>{dayjs(end).format('D MMM YYYY')} г.</span>
      </div>

      <Link to='/task' className='button' state={{ id: id }}>edit</Link>
      <button 
        type='button'
        className='button' 
        onClick={() => {
          const isDelete = window.confirm('Вы действительно хотите удалить задачу?');
          if (isDelete === true) {
            dispatch(deleteTask(id)) 
          }
        }}>
          delete
        </button>

      <div className={styles.description}>
        {description}
      </div>
    </li>
  )
}
