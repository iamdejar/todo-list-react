import styles from './Task.module.scss'
import { useState } from 'react'

export const Task = (props) => {

  const [name, setName] = useState(props.task);
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className={styles.row} onSubmit={onSubmit}>
      <label>
        <input type='checkbox' />
      </label>

      <input type='text' />

      <button type='button'>edit</button>
      <button type='button'>delete</button>
    </form>
  )
}
