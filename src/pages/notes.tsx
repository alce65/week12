import { Add } from '../components/notes/add/add';
import { List } from '../components/notes/list/list';

export function Notes() {
    return (
        <>
            <h2>Notes List</h2>
            <Add></Add>
            <List></List>
        </>
    );
}

export default Notes;
