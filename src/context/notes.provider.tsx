import { useReducer, useEffect } from 'react';
import { iNote } from '../models/note';
import * as act from '../reducers/notes.action.creators';
import { notesReducer } from '../reducers/notes.reducer';
import { NotesContext } from './notes.context';
import * as api from '../services/http-notes';

export function NotesProvider({ children }: { children: JSX.Element }) {
    const initialState: Array<iNote> = [];
    // const [notes, setNotes] = useState(initialState);
    const [notes, dispatch] = useReducer(notesReducer, initialState);

    useEffect(() => {
        api.getAllNotes().then((notes: Array<iNote>) => {
            dispatch(act.loadNotesAction(notes));
            // setTasks(data);
        });
    }, []);

    const addNote = (note: iNote) => {
        // Backend
        api.addNote(note).then(
            (data) =>
                // estado
                dispatch(act.addNoteAction(data))
            // setTasks([...tasks, data])
        );
    };

    const updateNote = (note: iNote) => {
        api.updateNote(note).then((data) =>
            dispatch(act.updateNoteAction(data))
        );
    };

    const deleteNote = (note: iNote) => {
        api.deleteNote(note.id).then((resp) => {
            if (resp.ok) {
                dispatch(act.deleteNoteAction(note));
            }
        });
    };

    const context = {
        notes,
        addNote,
        updateNote,
        deleteNote,
    };

    return (
        <NotesContext.Provider value={context}>
            {children}
        </NotesContext.Provider>
    );
}
