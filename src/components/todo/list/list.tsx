import { useContext } from 'react';
import { TodoContext } from '../../../context/todo.context';
import { Add } from '../add/add';
import { Task } from '../task/task';

export function List() {
    const { tasks, loading } = useContext(TodoContext);

    return (
        <>
            <p>List</p>
            <Add></Add>
            {loading && <p>Loading</p>}
            <ul>
                {tasks.map((item) => (
                    <li key={item.id}>
                        <Task task={item}></Task>
                    </li>
                ))}
            </ul>
        </>
    );
}
