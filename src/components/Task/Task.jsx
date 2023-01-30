import styles from './Task.module.scss'
import { Link } from 'react-router-dom'

export const Task = (props) => {

  return (
    <li className={styles.row}>
      <label>
        <input type='checkbox' />
      </label>

      <div>Title</div>

      <Link to='/edit'>edit</Link>
      <button type='button'>delete</button>
    </li>
  )
}
