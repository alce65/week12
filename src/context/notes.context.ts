import { createContext } from 'react';
import { iNote } from '../models/note';

const initialContext: { notes: Array<iNote> } = {
    notes: [],
};

export const NotesContext = createContext(initialContext);
