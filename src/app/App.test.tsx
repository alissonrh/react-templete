import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the button with initial count', () => {
    render(<App />);
    expect(
      screen.getByRole('button', { name: /count is 0/i }),
    ).toBeInTheDocument();
  });

  it('increments count when button is clicked', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    fireEvent.click(button);
    expect(
      screen.getByRole('button', { name: /count is 1/i }),
    ).toBeInTheDocument();
    fireEvent.click(button);
    expect(
      screen.getByRole('button', { name: /count is 2/i }),
    ).toBeInTheDocument();
  });
});
