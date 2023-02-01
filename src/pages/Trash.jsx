import { TaskList } from "../components/TaskList/TaskList"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFilter, clearDeleted } from "../app/reducer";
import { useEffect } from "react";

export const Trash = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilter({filter: 'Deleted'}))

    return () => {
      dispatch(setFilter({filter: 'All'}))
    }
  }, [])

  return (
    <>
      <Link to='/' className='button mb20'>Назад</Link>
      <TaskList/>
      <button
        className="button mt20"
        onClick={() => {dispatch(clearDeleted('clear'))}}
      >
        Очистить
      </button>
    </>
  )
}