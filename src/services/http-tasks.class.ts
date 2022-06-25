import { iTask } from '../models/task';

export class HttpTasks {
    url: string;
    constructor() {
        this.url = 'http://localhost:3545/tasks/';
    }
    getAllTasks(): Promise<Array<iTask>> {
        return fetch(this.url).then((resp) => resp.json());
    }
    setTask(task: iTask): Promise<iTask> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: { 'Content-Type': 'application/json' },
        }).then((resp) => resp.json());
    }
    updateTask(task: iTask): Promise<iTask> {
        return fetch(this.url + task.id, {
            method: 'PATCH',
            body: JSON.stringify(task),
            headers: { 'Content-Type': 'application/json' },
        }).then((resp) => resp.json());
    }
    deleteTask(id: iTask['id']) {
        return fetch(this.url + id, {
            method: 'DELETE',
        });
    }
}
