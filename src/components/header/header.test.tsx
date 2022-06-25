import { render, screen } from '@testing-library/react';
import { Header } from './header';

// gherkins - GWT

describe('Given the component Header', () => {
    describe('When the component is rendered', () => {
        test('Then screen should have an image alt', () => {
            render(
                <Header appTitle={''}>
                    <p></p>
                </Header>
            );
            const img = screen.getByAltText(/logo/i);
            expect(img).toBeInTheDocument();
        });
        test('Then screen should have a title received by props', () => {
            const expectedTitle = 'Learning React';
            render(
                <Header appTitle={expectedTitle}>
                    <p></p>
                </Header>
            );
            const element = screen.getByText(/Learning React/i);
            expect(element).toBeInTheDocument();
        });
        test('Then screen should have a child content', () => {
            const expectedChild = 'Test';
            render(
                <Header appTitle={''}>
                    <p>{expectedChild}</p>
                </Header>
            );
            const children = screen.getByText(/Test/i);
            expect(children).toBeInTheDocument();
        });
    });
});
