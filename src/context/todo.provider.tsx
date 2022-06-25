import { useEffect, useState } from 'react';
import { iTask } from '../models/task';
import * as api from '../services/http-tasks';
import { TodoContext } from './todo.context';

export function TodoProvider({ children }: { children: JSX.Element }) {
    // Model

    const initialState: Array<iTask> = [];
    const [tasks, setTasks] = useState(initialState);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        api.getAllTasks().then((data) => {
            setTasks(data);
            setLoading(false);
        });
    }, []);

    // Controller

    const addTask = (task: iTask) => {
        // Backend
        api.addTask(task).then((data) =>
            // estado
            setTasks([...tasks, data])
        );
    };

    const deleteTask = (id: number) => {
        api.deleteTask(id).then((resp) => {
            if (resp.ok) {
                setTasks(tasks.filter((item) => item.id !== id));
            }
        });
    };

    const completeTask = (task: iTask) => {
        task.isCompleted = !task.isCompleted;
        api.updateTask(task).then((data) =>
            setTasks(tasks.map((item) => (item.id === task.id ? data : item)))
        );
    };

    const context = {
        tasks,
        loading,
        addTask,
        deleteTask,
        completeTask,
    };
    return (
        <TodoContext.Provider value={context}>{children}</TodoContext.Provider>
    );
}
