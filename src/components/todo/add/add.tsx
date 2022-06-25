import { SyntheticEvent, useContext, useState } from 'react';
import { TodoContext } from '../../../context/todo.context';
import { iTask } from '../../../models/task';

export function Add() {
    const { addTask } = useContext(TodoContext);

    const initialState: Partial<iTask> = { title: '', responsible: '' };
    const [formState, setFormState] = useState(initialState);

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        addTask({
            title: formState.title as string,
            responsible: formState.responsible as string,
            isCompleted: false,
        });
    };

    const handleChange = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={formState.title}
                onChange={handleChange}
                placeholder="Describe la tarea"
                required
            />
            <input
                type="text"
                name="responsible"
                value={formState.responsible}
                onChange={handleChange}
                placeholder="Responsable de la tarea"
                required
            />
            <button type="submit">Guardar</button>
        </form>
    );
}
