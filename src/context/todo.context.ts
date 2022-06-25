import { createContext } from 'react';
import { iTask } from '../models/task';

const initialContext: {
    tasks: Array<iTask>;
    loading: boolean;
    addTask(task: iTask): void;
    deleteTask(id: number): void;
    completeTask(task: iTask): void;
} = {
    tasks: [],
    loading: false,
    addTask: (task) => {},
    deleteTask: (id) => {},
    completeTask: (task) => {},
};

export const TodoContext = createContext(initialContext);
