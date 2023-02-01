import styles from './Task.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeTaskCompleted, deleteTask } from '../../app/reducer';

const dayjs = require('dayjs');
require('dayjs/locale/ru');
dayjs.locale('ru');

export const Task = (props) => {

  const dispatch = useDispatch();

  const onChange = () => {
    dispatch(changeTaskCompleted(props.id))
  }

  return (
    <li className={classNames(styles.row, props.deleted === true ? styles.deleted : null)}>
      <label className={styles.label}>
        <input 
          type='checkbox' 
          id={props.id} 
          key={props.id}
          checked={props.completed === true ? true : false}
          onChange={onChange}/>

        <div className={styles.title}>{props.title}</div>
      </label>

      <div className={styles.date}>
        <strong>Start</strong>
        <span>{dayjs(props.start).format('D MMM YYYY')} г.</span>
      </div>
      <div className={styles.date}>
        <strong>End</strong>
        <span>{dayjs(props.end).format('D MMM YYYY')} г.</span>
      </div>

      <Link to='/task' className='button' state={{ id: props.id }}>edit</Link>
      <button 
        type='button'
        className='button' 
        onClick={() => {
          const isDelete = window.confirm('Вы действительно хотите удалить задачу?');
          if (isDelete === true) {
            dispatch(deleteTask(props.id)) 
          }
        }}>
          delete
        </button>

      <div className={styles.description}>
        {props.desc}
      </div>
    </li>
  )
}
