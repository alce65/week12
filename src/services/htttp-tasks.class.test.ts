import { Task } from '../models/task';
import { HttpTasks as HttpStoreTasks } from './http-tasks.class';

//import axios from "axios";
//jest.mock("axios")

describe('Given HttpStoreTasks', () => {
    describe('When we instantiate', () => {
        describe('And we use method getTasks', () => {
            test('Then it should return a array of two tasks', async () => {
                // arrange
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest
                        .fn()
                        .mockResolvedValue([
                            new Task('Task1', 'Pepe'),
                            new Task('Task2', 'Luisa'),
                        ]),
                });
                // act
                const result = await new HttpStoreTasks().getAllTasks();
                //
                // assert
                expect(fetch).toBeCalled();
                expect(result.length).toBe(2);
            });
        });
        // describe('And we use method getTask', () => {
        //     test('Then it should return a task', async () => {
        //         // arrange
        //         const taskId = 1;
        //         global.fetch = jest.fn().mockResolvedValue({
        //             json: jest
        //                 .fn()
        //                 .mockResolvedValue(new Task('Task1', 'Pepe')),
        //         });
        //         // act
        //         const result = await new HttpStoreTasks().getTask(taskId);
        //         // assert
        //         expect(fetch).toBeCalled();
        //         expect(result.title).toBe('Task1');
        //     });
        // });

        describe('And we use method setTask', () => {
            test('Then it should return the added task', async () => {
                // arrange
                const task = new Task('Task1', 'Pepe');
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest
                        .fn()
                        .mockResolvedValue(new Task('Task1', 'Pepe')),
                });
                // act
                const result = await new HttpStoreTasks().setTask(task);
                // assert
                expect(fetch).toBeCalled();
                expect(result.title).toBe('Task1');
            });
        });
        describe('And we use method updateTask', () => {
            test('Then it should return the updated task', async () => {
                // arrange
                const task = new Task('Task1', 'Pepe');
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest
                        .fn()
                        .mockResolvedValue(new Task('Task1', 'Pepe')),
                });
                // act
                const result = await new HttpStoreTasks().updateTask(task);
                // assert
                expect(fetch).toBeCalled();
                expect(result.title).toBe('Task1');
            });
        });
        describe('And we use method deleteTask', () => {
            test('Then it should return a status ok', async () => {
                // arrange
                const deleteId = 1;
                global.fetch = jest.fn().mockResolvedValue({
                    status: 200,
                });
                // act
                const result = await new HttpStoreTasks().deleteTask(deleteId);
                expect(fetch).toBeCalled();
                expect(result.status).toBe(200);
            });
        });
    });
});
