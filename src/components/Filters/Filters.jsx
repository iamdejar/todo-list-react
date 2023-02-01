import styles from './Filters.module.scss';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../app/reducer';

export const Filters = () => {

  const dispatch = useDispatch();

  return (
    <div className={styles.row}>
      <div className={styles.buttons}>
        <button
          onClick={() => dispatch(setFilter('All'))}
          className={styles.item}
        >
          All
        </button>
        <button 
          onClick={() => dispatch(setFilter('Active'))}
          className={styles.item}
        >
          Active
        </button>
        <button 
          onClick={() => dispatch(setFilter('Completed'))}
          className={styles.item}
        >
          Completed
        </button>
      </div>

      <select 
        className={styles.item}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      >
        <option value='start-default'>Default</option>
        <option value='startAscending'>Ascending</option>
        <option value='startDescending'>Descending</option>
      </select>

      <select 
        className={styles.item}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      >
        <option value='end-default'>Default</option>
        <option value='end-ascending'>Ascending</option>
        <option value='end-descending'>Descending</option>
      </select>
    </div>
  )
}
