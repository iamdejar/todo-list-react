import { TaskForm } from "../widgets/TaskForm/TaskForm";
import { addTask, editTask } from "../app/store/slice";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "../shared/ui/Button/Button";

export const DetailTask = () => {
  const { state } = useLocation();
  const tasksState = useSelector((state) => state.tasks);

  const getTask = (state) => {
    if (state === null) {
      return undefined;
    }
    return tasksState.tasks.find((item) => item.id === state.id);
  };
  const getAction = (state) => {
    return state === null ? addTask : editTask;
  };

  const taskToEdit = getTask(state);
  const action = getAction(state);

  return (
    <>
      <Button href="/" className="mb20">
        Назад
      </Button>

      <TaskForm action={action} toedit={taskToEdit} />
    </>
  );
};
