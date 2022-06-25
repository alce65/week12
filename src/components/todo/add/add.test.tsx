import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MemoryRouter as Router } from 'react-router-dom';
import { TodoContext } from '../../../context/todo.context';
import { Add } from './add';

// gherkins - GWT

const mockContext = {
    tasks: [],
    loading: false,
    addTask: jest.fn(),
    deleteTask: () => {},
    completeTask: () => {},
};

describe('Given the component Menu', () => {
    describe('When the component is rendered', () => {
        test('Then it should have ....', () => {
            // const handleAddMock = jest.fn();
            render(
                <Router>
                    <TodoContext.Provider value={mockContext}>
                        <Add></Add>
                    </TodoContext.Provider>
                </Router>
            );
            const inputs = screen.getAllByRole('textbox');
            expect(inputs[0]).toBeInTheDocument();
            expect(inputs[1]).toBeInTheDocument();
            userEvent.type(inputs[0], 'Tarea');
            userEvent.type(inputs[1], 'Pepe');
            const button = screen.getByRole('button');
            expect(button).toBeInTheDocument();
            userEvent.click(button);
            expect(mockContext.addTask).toHaveBeenCalledWith({
                title: 'Tarea',
                responsible: 'Pepe',
                isCompleted: false,
            });
        });
    });
});
