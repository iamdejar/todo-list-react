import { nanoid } from "nanoid";
import { PAGINATION_SIZE } from "./lib";
const tasks = [
  {
    id: nanoid(),
    title: "One 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    start: "2023-01-10",
    end: "2023-02-10",
    completed: false,
    deleted: false,
  },
  {
    id: nanoid(),
    title: "Two 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    start: "2023-01-20",
    end: "2023-02-05",
    completed: false,
    deleted: false,
  },
  {
    id: nanoid(),
    title: "Three 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    start: "2023-01-30",
    end: "2023-02-01",
    completed: false,
    deleted: false,
  },
  {
    id: nanoid(),
    title: "Four 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    start: "2023-01-10",
    end: "2023-02-10",
    completed: false,
    deleted: false,
  },
  {
    id: nanoid(),
    title: "Five 5",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    start: "2023-01-20",
    end: "2023-02-05",
    completed: false,
    deleted: false,
  },
  {
    id: nanoid(),
    title: "Six 6",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    start: "2023-01-30",
    end: "2023-02-01",
    completed: false,
    deleted: false,
  },
  {
    id: nanoid(),
    title: "Seven 7",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    start: "2023-01-10",
    end: "2023-02-10",
    completed: false,
    deleted: false,
  },
  {
    id: nanoid(),
    title: "Eight 8",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    start: "2023-01-20",
    end: "2023-02-05",
    completed: false,
    deleted: false,
  },
  {
    id: nanoid(),
    title: "Nine 9",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    start: "2023-01-30",
    end: "2023-02-01",
    completed: false,
    deleted: false,
  },
  {
    id: nanoid(),
    title: "Ten 10",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    start: "2023-01-30",
    end: "2023-02-01",
    completed: false,
    deleted: false,
  },

  {
    id: nanoid(),
    title: "One 11",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    start: "2023-01-10",
    end: "2023-02-10",
    completed: false,
    deleted: false,
  },
  {
    id: nanoid(),
    title: "Two 12",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    start: "2023-01-20",
    end: "2023-02-05",
    completed: false,
    deleted: false,
  },
  {
    id: nanoid(),
    title: "Three 13",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    start: "2023-01-30",
    end: "2023-02-01",
    completed: false,
    deleted: false,
  },
  {
    id: nanoid(),
    title: "Four 14",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    start: "2023-01-10",
    end: "2023-02-10",
    completed: false,
    deleted: false,
  },
  {
    id: nanoid(),
    title: "Five 15",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    start: "2023-01-20",
    end: "2023-02-05",
    completed: false,
    deleted: false,
  },
  {
    id: nanoid(),
    title: "Six 16",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    start: "2023-01-30",
    end: "2023-02-01",
    completed: false,
    deleted: false,
  },
  {
    id: nanoid(),
    title: "Seven 17",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    start: "2023-01-10",
    end: "2023-02-10",
    completed: false,
    deleted: false,
  },
  {
    id: nanoid(),
    title: "Eight 18",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    start: "2023-01-20",
    end: "2023-02-05",
    completed: false,
    deleted: false,
  },
  {
    id: nanoid(),
    title: "Nine 19",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    start: "2023-01-30",
    end: "2023-02-01",
    completed: false,
    deleted: false,
  },
  {
    id: nanoid(),
    title: "Ten 20",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    start: "2023-01-30",
    end: "2023-02-01",
    completed: false,
    deleted: false,
  },
];
export const initialFilters = {
  title: "",
  start: "",
  end: "",
  deleted: false,
  completed: undefined,
};

export const initialState = {
  tasks,
  filteredTasks: tasks,
  activeFilter: initialFilters,
  pagination: PAGINATION_SIZE,
};
