import { iNote } from '../models/note';

const url = 'http://localhost:3545/notes/';

export function getAllNotes(): Promise<Array<iNote>> {
    return fetch(url).then((resp) => resp.json());
}
export function addNote(note: iNote): Promise<iNote> {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(note),
        headers: { 'Content-Type': 'application/json' },
    }).then((resp) => resp.json());
}
export function updateNote(note: iNote): Promise<iNote> {
    return fetch(url + note.id, {
        method: 'PATCH',
        body: JSON.stringify(note),
        headers: { 'Content-Type': 'application/json' },
    }).then((resp) => resp.json());
}
export function deleteNote(id: iNote['id']) {
    return fetch(url + id, {
        method: 'DELETE',
    });
}
