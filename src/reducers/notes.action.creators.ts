import { Note } from '../models/note';
import { actionTypes } from './notes.action.types';

export interface iAction<T> {
    type: actionTypes;
    payload: T;
}

export const loadNotesAction = (notes: Array<Note>): iAction<Array<Note>> => ({
    type: actionTypes['notes@load'],
    payload: notes,
});

export const addNoteAction = (note: Note): iAction<Note> => ({
    type: actionTypes['notes@add'],
    payload: note,
});

export const updateNoteAction = (note: Note): iAction<Note> => ({
    type: actionTypes['notes@update'],
    payload: note,
});

export const deleteNoteAction = (note: Note): iAction<Note> => ({
    type: actionTypes['notes@delete'],
    payload: note,
});
