import styles from './AddTask.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../app/reducer';

export const AddTaskForm = () => {

  const dispatch = useDispatch();
  const [titleValue, setTitleValue] = useState('');
  const [descValue, setDescValue] = useState('');
  const [startValue, setStartValue] = useState('');
  const [endValue, setEndValue] = useState('');

  const onTitleChange = (e) => {
    setTitleValue(e.target.value);
  }
  const onDescChange = (e) => {
    setDescValue(e.target.value);
  }
  const onStartDateChange = (e) => {
    setStartValue(e.target.value);
  }
  const onEndDateChange = (e) => {
    setEndValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(titleValue, descValue, startValue, endValue);

    if (titleValue.length) {
      dispatch(addTask({
        title: titleValue, 
        desk: descValue,
        start: startValue,
        end: endValue,
      }));

      setTitleValue('');
      setDescValue('');
      setStartValue('');
      setEndValue('');
    }
  }

  return (
    <form 
      className={styles.form}
      onSubmit={onSubmit}
    >
      <input 
        type="text" 
        className={styles.input} 
        value={titleValue} 
        onChange={onTitleChange}
        placeholder='Title'
        required
      />
      <textarea 
        type="text" 
        className={styles.input} 
        value={descValue} 
        onChange={onDescChange}
        placeholder='Description'
      />
      <input 
        type="date" 
        className={styles.inputDate} 
        value={startValue} 
        onChange={onStartDateChange}
        placeholder='Start'
      />
      <input 
        type="date" 
        className={styles.inputDate} 
        value={endValue} 
        onChange={onEndDateChange}
        placeholder='End'
      />

      <input type='submit' value='Add' className='button'/>
    </form>
  )
}
