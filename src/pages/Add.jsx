import { Link } from "react-router-dom";
import { AddTaskForm } from "../components/AddTask/AddTask";
import { addTask } from "../app/reducer";

export const Add = () => {
  return (
    <>
      <Link to='/' className='button mb20'>Назад</Link>
      <AddTaskForm action={addTask} />
    </>
  )
}