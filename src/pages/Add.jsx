import { Link } from "react-router-dom"
import { AddTaskForm } from "../components/AddTask/AddTask"

export const Add = () => {
  return (
    <>
      <Link to='/' className='button'>Назад</Link>
      <AddTaskForm />
    </>
  )
}