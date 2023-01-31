import styles from './TaskForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const TaskForm = (props) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [titleValue, setTitleValue] = useState(
    props.toedit === undefined ? '' : props.toedit.title
  );
  const [descValue, setDescValue] = useState(
    props.toedit === undefined ? '' : props.toedit.description
  );
  const [startValue, setStartValue] = useState(
    props.toedit === undefined ? '' : props.toedit.start
  );
  const [endValue, setEndValue] = useState(
    props.toedit === undefined ? '' : props.toedit.end
  );

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

    if (titleValue.length) {

      if (props.toedit === undefined) {
        dispatch(props.action({
          title: titleValue, 
          desk: descValue,
          start: startValue,
          end: endValue,
        }));
      } else {
        dispatch(props.action({
          id: props.toedit.id,
          title: titleValue, 
          desk: descValue,
          start: startValue,
          end: endValue,
        }));
      }
      

      setTitleValue('');
      setDescValue('');
      setStartValue('');
      setEndValue('');

      navigate('/');
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

      <input type='submit' value='Save' className='button'/>
    </form>
  )
}
