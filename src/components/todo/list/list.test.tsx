import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoContext } from '../../../context/todo.context';

import { List } from './list';

const mockContext = {
    tasks: [{ id: 1, title: 'Test', responsible: '', isCompleted: false }],
    loading: false,
    addTask: () => {},
    deleteTask: () => {},
    completeTask: () => {},
};

describe('first', () => {
    test('when is loading should render "loading"', () => {
        mockContext.loading = true;
        render(
            <TodoContext.Provider value={mockContext}>
                <List></List>
            </TodoContext.Provider>
        );
        const element = screen.getByText(/Loading/i);
        expect(element).toBeInTheDocument();
    });
    test('when is loaded, should render the list', () => {
        mockContext.loading = false;
        render(
            <TodoContext.Provider value={mockContext}>
                <List></List>
            </TodoContext.Provider>
        );
        const element = screen.getByText(/Test/i);
        expect(element).toBeInTheDocument();
    });
});
