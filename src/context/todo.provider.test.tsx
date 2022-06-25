import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useContext } from 'react';
import { mockComponent } from 'react-dom/test-utils';
import { iTask } from '../models/task';

import * as api from '../services/http-tasks';
import { TodoContext } from './todo.context';
import { TodoProvider } from './todo.provider';

// Mock de un módulo
jest.mock('../services/http-tasks');

describe('Given the context TodoContext', () => {
    describe('When it is used by a component', () => {
        // Arrange
        let TestComponent: () => JSX.Element;
        let mockTask: iTask;

        beforeEach(() => {
            TestComponent = () => {
                const { tasks, addTask } = useContext(TodoContext);
                mockTask = {
                    title: 'Test Task',
                    responsible: '',
                    isCompleted: false,
                };
                return (
                    <>
                        <h1>Test Component</h1>
                        {tasks.map((item) => (
                            <p key={item.id}>{item.title}</p>
                        ))}
                        <button onClick={() => addTask(mockTask)}>
                            AddTask
                        </button>
                    </>
                );
            };
        });

        describe('first', () => {
            test('should first', async () => {
                (api.getAllTasks as jest.Mock).mockResolvedValue([]);
                (api.addTask as jest.Mock).mockResolvedValue({
                    ...mockTask,
                    id: 56,
                });
                let button;
                render(
                    <TodoProvider>
                        <TestComponent></TestComponent>
                    </TodoProvider>
                );
                button = screen.getByText(/AddTask/i);
                userEvent.click(button);
                expect(api.addTask).toHaveBeenCalledWith(mockTask);
                const element = await screen.findByText(mockTask.title);
                expect(element).toBeInTheDocument();
            });
        });
    });
});
