import styles from './Filters.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../app/reducer';

const dayjs = require('dayjs');
require('dayjs/locale/ru');
dayjs.locale('ru');

export const Filters = () => {

  const dispatch = useDispatch();
  const filterState = useSelector(state => state.tasks.activeFilter);

  const onTitleChange = (e) => {
    dispatch(setFilter({
      filter: 'Title', 
      titleValue: e.target.value.toLowerCase(),
      startDateValue: '',
      endDateValue: '',
    }))
  }

  const onStartDateChange = (e) => {
    dispatch(setFilter({
      filter: 'StartDate', 
      titleValue: '',
      startDateValue: e.target.value,
      endDateValue: '',
    }))
  }

  const onEndDateChange = (e) => {
    dispatch(setFilter({
      filter: 'EndDate', 
      titleValue: '',
      startDateValue: '',
      endDateValue: e.target.value,
    }))
  }

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
            value={filterState.titleValue}
            onChange={onTitleChange}
            placeholder='Title'
          />
        </label>

        <label>
          <div className={styles.label}>not earlier:</div>
          <input 
            className={styles.input} 
            type='date' 
            onChange={onStartDateChange}
          />
        </label>
        <label>
          <div className={styles.label}>not earlier:</div>
          <input 
            className={styles.input} 
            type='date' 
            onChange={onEndDateChange}
          />
        </label>
      </div>
    </div>
  )
}
