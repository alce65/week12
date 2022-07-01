import { useContext } from 'react';
import { NotesContext } from '../../../context/notes.context';

export function List() {
    const { notes, deleteNote } = useContext(NotesContext);

    return (
        <ul>
            {notes.map((item) => (
                <li key={item.id}>
                    {item.title}
                    <span
                        onClick={() => {
                            deleteNote(item);
                        }}
                    >
                        🗑️
                    </span>
                </li>
            ))}
        </ul>
    );
}
