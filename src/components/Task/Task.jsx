import styles from './Task.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { completeTask, deleteTask } from '../../app/reducer';

export const Task = (props) => {

  const dispatch = useDispatch();

  return (
    <li className={styles.row}>
      <label>
        <input type='checkbox' onChange={() => dispatch(completeTask(props.id))}/>
      </label>

      <div>{props.name}</div>

      <Link to='/edit'>edit</Link>
      <button type='button' onClick={() => dispatch(deleteTask(props.id))}>delete</button>
    </li>
  )
}
