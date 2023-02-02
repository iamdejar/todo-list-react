import styles from './Filters.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../app/store/slice';
import { useEffect } from 'react';
import {initialFilters} from '../../shared/initial-state';
import { Button } from '../../shared/ui/Button/Button';

import dayjs from 'dayjs';
import 'dayjs/locale/ru';
dayjs.locale('ru');

export const Filters = () => {

  const dispatch = useDispatch();
  const filterState = useSelector(state => state.tasks);

  useEffect(() => {
  }, [filterState])
  const onTitleChange = (e) => {
    dispatch(setFilter({
      title: e.target.value.toLowerCase(),
    }))
  }

  const onStartDateChange = (e) => {
    dispatch(setFilter({
      start: e.target.value,
    }))
  }

  const onEndDateChange = (e) => {
    dispatch(setFilter({
      end: e.target.value,
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
          <Button
            onClick={() => dispatch(setFilter(initialFilters))}
            size='small'
          >
            All
          </Button>
          <Button 
            onClick={() => dispatch(setFilter({completed: false, deleted: false}))}
            size='small'
          >
            Active
          </Button>
          <Button 
            onClick={() => dispatch(setFilter({completed: true, deleted: false}))}
            size='small'
          >
            Completed
          </Button>
        </div>

        <label>
          <div className={styles.label}>start with:</div>
          <input 
            className={styles.input} 
            type='text' 
            value={filterState.title}
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
          <div className={styles.label}>not later:</div>
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
