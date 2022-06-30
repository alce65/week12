import { useReducer, useEffect } from 'react';
import { iNote } from '../models/note';
import { loadNotesAction } from '../reducers/notes.action.creators';
import { notesReducer } from '../reducers/notes.reducer';
import { NotesContext } from './notes.context';

export function NotesProvider({ children }: { children: JSX.Element }) {
    const initialState: Array<iNote> = [];
    // const [notes, setNotes] = useState(initialState);
    const [notes, dispatch] = useReducer(notesReducer, initialState);

    useEffect(() => {
        // setLoading(true);
        // api.getAllTasks().then((notes: any) => {
        dispatch(loadNotesAction(notes));
        // setTasks(data);
        // setLoading(false);
        //});
    }, []);

    const context = {
        notes,
    };

    return (
        <NotesContext.Provider value={context}>
            {children}
        </NotesContext.Provider>
    );
}
