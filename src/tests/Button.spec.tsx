import { render, screen } from '@testing-library/react';
import { Button } from '../components/Button';

test('componente Button permite cliques', () => {
    render(<Button />);
    const ButtonElement = screen.getByRole('button');
    expect(ButtonElement).toBeEnabled();
});

test('renderizar componente Button', () => {
    render(<Button />);
    const ButtonElement = screen.getByRole('button');
    expect(ButtonElement).toBeInTheDocument();
});
