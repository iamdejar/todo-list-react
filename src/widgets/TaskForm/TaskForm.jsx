import styles from "./TaskForm.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/Button/Button";

export const TaskForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formValues, setformValues] = useState({
    title: props.toedit === undefined ? "" : props.toedit.title,
    description: props.toedit === undefined ? "" : props.toedit.description,
    start: props.toedit === undefined ? "" : props.toedit.start,
    end: props.toedit === undefined ? "" : props.toedit.end,
  });

  const getController = (name) => {
    return (e) => {
      setformValues((prev) => {
        const newFormValues = { ...prev };
        newFormValues[name] = e.target.value;
        return newFormValues;
      });
    };
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (formValues.title.length) {
      if (props.toedit === undefined) {
        dispatch(props.action(formValues));
      } else {
        dispatch(
          props.action({
            ...formValues,
            id: props.toedit.id,
          })
        );
      }

      setformValues({ title: "", description: "", start: "", end: "" });
      navigate("/");
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        type="text"
        className={styles.input}
        value={formValues.title}
        onChange={getController("title")}
        placeholder="Title"
        required
      />
      <textarea
        type="text"
        className={styles.input}
        value={formValues.description}
        onChange={getController("description")}
        placeholder="Description"
      />
      <input
        type="date"
        className={styles.inputDate}
        value={formValues.start}
        onChange={getController("start")}
        required
      />
      <input
        type="date"
        className={styles.inputDate}
        value={formValues.end}
        onChange={getController("end")}
        required
      />

      <Button>Save</Button>
    </form>
  );
};
