import styles from "./Task.module.scss";
import classNames from "classnames";
import { Button } from "../Button/Button";

import dayjs from "dayjs";
import "dayjs/locale/ru";
dayjs.locale("ru");

export const Task = ({
  id,
  title,
  start,
  end,
  deleted,
  completed,
  description,
  onDelete,
  onChange,
}) => {
  return (
    <li
      className={classNames(
        styles.row,
        deleted === true ? styles.deleted : null
      )}
    >
      <label className={styles.label}>
        <input
          type="checkbox"
          id={id}
          key={id}
          checked={Boolean(completed)}
          onChange={onChange}
        />

        <div className={styles.title}>{title}</div>
      </label>

      <div className={styles.date}>
        <strong>Start</strong>
        <span>{dayjs(start).format("D MMM YYYY")} г.</span>
      </div>
      <div className={styles.date}>
        <strong>End</strong>
        <span>{dayjs(end).format("D MMM YYYY")} г.</span>
      </div>

      <Button href="/task" linkState={{ id: id }}>
        edit
      </Button>

      <Button onClick={onDelete}>delete</Button>

      <div className={styles.description}>{description}</div>
    </li>
  );
};
