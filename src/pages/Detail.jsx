import { Link } from "react-router-dom";
import { TaskForm } from "../components/TaskForm/TaskForm";
import { addTask, editTask } from "../app/reducer";
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";

export const DetailTask = () => {

  const { state } = useLocation();
  const tasksState = useSelector(state => state.tasks);

  const getTask = (state) => {
    if (state === null) {
      return undefined
    }
    return tasksState.tasks.find(item => item.id === state.id)
  }
  const getAction = (state) => {
    return state === null ? addTask : editTask
  }

  const taskToEdit = getTask(state)
  const action = getAction(state)
  
  return (
    <>
      <Link to='/' className='button mb20'>Назад</Link>
      <TaskForm action={action} toedit={taskToEdit} />
    </>
  )
}