import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// eslint-disable-next-line no-unused-vars
import App from "../App";

describe('App', () => {
    it('renders the app correctly', () => {
        render(<App />);

        const element = screen.getByText(/PiaZadora/i);
        expect(element).toBeInTheDocument();
    });
});
