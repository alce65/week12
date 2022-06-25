import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { menuOptionsType } from '../../interfaces/menuoptions';
import { Menu } from './menu';

// gherkins - GWT

describe('Given the component Menu', () => {
    describe('When the component is rendered', () => {
        test('should first', () => {
            const menuOptions: menuOptionsType = [
                { path: 'index', label: 'Home' },
            ];
            render(
                <Router>
                    <Menu menuOptions={menuOptions}></Menu>
                </Router>
            );
            const element = screen.getByText(/Home/i);
            expect(element).toBeInTheDocument();
        });
    });
});
