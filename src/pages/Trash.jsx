import { TaskList } from "../components/TaskList/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, clearDeleted } from "../app/reducer";
import { useEffect } from "react";
import { initialFilters } from "../shared/initial-state";
import { Button } from "../shared/ui/Button/Button";

export const Trash = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state.tasks);
  const tasks = state.tasks.filter(task => task.deleted);

  return (
    <>

      <Button
        href='/'
        className='mb20'
      >
        Назад
      </Button>

      <TaskList tasks={tasks}/>

      <Button
        className='mt20'
        onClick={() => {
          dispatch(clearDeleted('clear'))
          }}
      >
        Очистить
      </Button>
    </>
  )
}