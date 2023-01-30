import { Link } from "react-router-dom"
import { AddTaskForm } from "../components/AddTask/AddTask"

export const Add = () => {
  return (
    <>
      <Link to='/'>Назад</Link>
      <AddTaskForm />
    </>
  )
}