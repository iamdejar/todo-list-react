import dayjs from "dayjs";
import "dayjs/locale/ru";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";

dayjs.locale("ru");

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

export const filter = (tasks, { completed, deleted, title, start, end }) => {
  return tasks
    .filter((task) => {
      if (typeof completed === "undefined") return true;
      return task.completed === completed;
    })
    .filter((task) => {
      if (typeof deleted === "undefined") return true;
      return task.deleted === deleted;
    })
    .filter((task) => {
      if (title === "") return true;
      return task.title.toLowerCase().startsWith(title);
    })
    .filter((task) => {
      if (start === "") return true;
      return dayjs(task.start).isSameOrAfter(start);
    })
    .filter((task) => {
      if (end === "") return true;
      return dayjs(task.end).isSameOrBefore(end);
    });
};
