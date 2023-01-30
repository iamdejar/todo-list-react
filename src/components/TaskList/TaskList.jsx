import styles from './TaskList.module.scss'

export const TaskList = (props) => {

  return (
    <ul className={styles.list}>

      {props.children}

    </ul>
  )
}
