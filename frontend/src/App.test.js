import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const searchElement = screen.getByText('Search posts:');
  expect(searchElement).toBeInTheDocument();
});
