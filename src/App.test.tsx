import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders Post component with image and text', () => {
    render(<App />);
    expect(screen.getByText(/Olha só que legal minha miniatura do Batmóvel./i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringContaining('batmovel-1989'));
  });
});
