import styles from './Task.module.scss';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { changeTaskCompleted, deleteTask } from '../../app/reducer';
import { Button } from '../../shared/ui/Button/Button';

import dayjs from 'dayjs';
import 'dayjs/locale/ru';
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

      <Button
        href='/task'
        linkState={{ id: id }}
      >
        edit
      </Button>

      <Button
        onClick={() => {
        const isDelete = window.confirm('Вы действительно хотите удалить задачу?');
        if (isDelete === true) {
          dispatch(deleteTask(id)) 
        }
      }}
      >
        delete
      </Button>

      <div className={styles.description}>
        {description}
      </div>
    </li>
  )
}
