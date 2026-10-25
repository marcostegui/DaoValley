// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DaoValley title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DaoValley/i);
    expect(titleElement).toBeInTheDocument();
});
