import { iTask } from '../models/task';

const url = 'http://localhost:3545/tasks/';

export function getAllTasks(): Promise<Array<iTask>> {
    return fetch(url).then((resp) => resp.json());
}
export function addTask(task: iTask): Promise<iTask> {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: { 'Content-Type': 'application/json' },
    }).then((resp) => resp.json());
}
export function updateTask(task: iTask): Promise<iTask> {
    return fetch(url + task.id, {
        method: 'PATCH',
        body: JSON.stringify(task),
        headers: { 'Content-Type': 'application/json' },
    }).then((resp) => resp.json());
}
export function deleteTask(id: iTask['id']) {
    return fetch(url + id, {
        method: 'DELETE',
    });
}
