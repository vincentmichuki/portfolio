import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page header', () => {
  render(<App />);
  const headerSubString = screen.getByText(/Visual Designer/i);
  expect(headerSubString).toBeInTheDocument();
});
