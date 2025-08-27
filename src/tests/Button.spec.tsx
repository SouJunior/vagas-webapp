import { render, screen } from '../setupTests';
import { Button } from '../components/Button';

describe('Button Component', () => {
  test('deveria permitir cliques', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeEnabled();
  });

  test('deveria renderizar corretamente', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
