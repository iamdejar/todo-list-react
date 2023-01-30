import styles from './AddTask.module.scss'
import { useState } from 'react'

export const AddTaskForm = () => {

  const [value, setValue] = useState('');
  const onChange = (e) => {
    setValue(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (value.length) {
      setValue('');
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
        value={value} 
        onChange={onChange}
      />
    </form>
  )
}
