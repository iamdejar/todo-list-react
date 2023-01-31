import { Link } from "react-router-dom";
import { AddTaskForm } from "../components/AddTask/AddTask";
import { editTask } from "../app/reducer";
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";

export const Edit = () => {

  const { state } = useLocation();
  const tasksState = useSelector(state => state.tasks);
  const getTask = (id) => {
    return tasksState.tasks.find(item => item.id === id)
  }
  const taskToEdit = getTask(state.id)
  
  return (
    <>
      <Link to='/' className='button mb20'>Назад</Link>
      <AddTaskForm action={editTask} toedit={taskToEdit} />
    </>
  )
}