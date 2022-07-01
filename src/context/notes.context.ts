import { createContext } from 'react';
import { iNote } from '../models/note';

const initialContext: {
    notes: Array<iNote>;
    addNote: Function;
    updateNote: Function;
    deleteNote: (note: iNote) => void;
} = {
    notes: [],
    addNote: () => {},
    updateNote: () => {},
    deleteNote: () => {},
};

export const NotesContext = createContext(initialContext);
