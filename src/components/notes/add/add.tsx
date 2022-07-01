import { useContext, useState } from 'react';
import { NotesContext } from '../../../context/notes.context';

export function Add() {
    const { addNote } = useContext(NotesContext);

    const [formState, setFormState] = useState({
        title: 'Nota nueva por la cara',
        author: 'Ramón',
        isImportant: true,
    });

    return (
        <form
            onSubmit={() => {
                addNote(formState);
            }}
        >
            <button type="submit">Añadir nota</button>
        </form>
    );
}
