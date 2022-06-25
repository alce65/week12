export interface iTask {
    id?: number;
    title: string;
    responsible: string;
    isCompleted: boolean;
}

export class Task implements iTask {
    isCompleted: boolean;
    constructor(public title: string, public responsible: string) {
        this.isCompleted = false;
    }
}
