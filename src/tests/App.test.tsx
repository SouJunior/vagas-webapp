import { render, screen } from '@testing-library/react';
import App from '../routes/router';

test('renderizar componente Button com texto', () => {
    render(<App />);
    const ButtonText = screen.getByText('Primeiro componente');
    expect(ButtonText).toBeInTheDocument();
});
