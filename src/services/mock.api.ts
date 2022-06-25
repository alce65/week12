import { iTask, Task } from '../models/task';

export const getTasks = async () => {
    const tasks: Array<iTask> = [
        new Task('Hacer el header', 'Maria'),
        new Task('Hacer el footer', 'Joan'),
        new Task('Hacer el main', 'Javier'),
    ];

    tasks[0].isCompleted = true;
    return tasks;
};
