import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { NotesProvider } from '../../context/notes.provider';
import { TodoProvider } from '../../context/todo.provider';
import { menuOptionsType } from '../../interfaces/menuoptions';

import { Layout } from '../layout/layout';

const Home = React.lazy(() => import('../../pages/home'));
const Todo = React.lazy(() => import('../../pages/todo'));
const Notes = React.lazy(() => import('../../pages/notes'));
const About = React.lazy(() => import('../../pages/about'));

function App() {
    const appTitle = 'Learning React';
    const company = 'ISDI Coders';
    const menuOptions: menuOptionsType = [
        { path: 'index', label: 'Home' },
        { path: 'tasks', label: 'Tasks' },
        { path: 'notes', label: 'Notes' },
        { path: 'about', label: 'About' },
    ];

    return (
        <NotesProvider>
            <TodoProvider>
                <Layout
                    appTitle={appTitle}
                    company={company}
                    menuOptions={menuOptions}
                >
                    <Routes>
                        <Route
                            path=""
                            element={
                                <React.Suspense>
                                    <Home />
                                </React.Suspense>
                            }
                        ></Route>
                        <Route
                            path="tasks"
                            element={
                                <React.Suspense>
                                    <Todo />
                                </React.Suspense>
                            }
                        ></Route>
                        <Route
                            path="notes"
                            element={
                                <React.Suspense>
                                    <Notes />
                                </React.Suspense>
                            }
                        ></Route>
                        <Route
                            path="about"
                            element={
                                <React.Suspense>
                                    <About />
                                </React.Suspense>
                            }
                        ></Route>
                        <Route
                            path="*"
                            element={<Navigate replace to="" />}
                        ></Route>
                    </Routes>
                </Layout>
            </TodoProvider>
        </NotesProvider>
    );
}

export default App;
