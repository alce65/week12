export interface iNote {
    id?: number;
    title: string;
    author: string;
    isImportant: boolean;
}

export class Note implements iNote {
    isImportant: boolean;
    constructor(public title: string, public author: string) {
        this.isImportant = false;
    }
}
