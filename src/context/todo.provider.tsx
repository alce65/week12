import { useTask } from '../hooks/use-tasks';

import { TodoContext } from './todo.context';

export function TodoProvider({ children }: { children: JSX.Element }) {
    const context = useTask();
    return (
        <TodoContext.Provider value={context}>{children}</TodoContext.Provider>
    );
}
