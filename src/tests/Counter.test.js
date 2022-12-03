import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterText = screen.getByText(/Counter/i);
  expect(counterText).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
	const plusButton = screen.getByRole('button',{name:'+'});
	const counterText = screen.getByTestId('count');
	fireEvent.click(plusButton);
	expect(counterText).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
	const minusButton = screen.getByRole('button',{name:'-'});
	const counterText = screen.getByTestId('count');
	fireEvent.click(minusButton);
	expect(counterText).toHaveTextContent('-1');
});
