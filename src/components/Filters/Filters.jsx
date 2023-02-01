import styles from './Filters.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../app/reducer';

export const Filters = () => {

  const dispatch = useDispatch();
  const filterState = useSelector(state => state.tasks.activeFilter.value)

  return (
    <div className={styles.filters}>
      <h2 className={styles.title}>Filter tasks by</h2>
      <div className={styles.row}>
        <div className={styles.columnTitle}>status</div>
        <div className={styles.columnTitle}>title</div>
        <div className={styles.columnTitle}>start date</div>
        <div className={styles.columnTitle}>end date</div>
      </div>
      <div className={styles.row}>
        <div className={styles.buttons}>
          <button
            onClick={() => dispatch(setFilter({filter: 'All'}))}
            className={styles.button}
          >
            All
          </button>
          <button 
            onClick={() => dispatch(setFilter({filter: 'Active'}))}
            className={styles.button}
          >
            Active
          </button>
          <button 
            onClick={() => dispatch(setFilter({filter: 'Completed'}))}
            className={styles.button}
          >
            Completed
          </button>
        </div>

        <label>
          <div className={styles.label}>start with:</div>
          <input 
            className={styles.input} 
            type='text' 
            value={filterState}
            onChange={(e) => dispatch(setFilter({filter: 'Title', value: e.target.value.toLowerCase()}))}
          />
        </label>

        <label>
          <div className={styles.label}>not earlier:</div>
          <input className={styles.input} type='date' />
        </label>
        <label>
          <div className={styles.label}>not earlier:</div>
          <input className={styles.input} type='date' />
        </label>
      </div>
    </div>
  )
}
