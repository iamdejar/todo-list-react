import { TaskList } from "../widgets/TaskList/TaskList";
import { Filters } from "../widgets/Filters/Filters";
import { Button } from "../shared/ui/Button/Button";
import { useSelector } from "react-redux";

export const List = () => {
  const state = useSelector((state) => state.tasks);
  const filteredTasks = state.filteredTasks.filter((task) => !task.deleted);

  return (
    <>
      <div className="top-buttons">
        <Button href="/task">Add a new task</Button>

        <Button href="/trash">View deleted tasks</Button>
      </div>

      <Filters />

      <TaskList tasks={filteredTasks} />
    </>
  );
};
