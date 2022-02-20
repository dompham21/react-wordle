import { describe, expect, test } from 'vitest';
import App from './App';
import { render, screen } from './test/test-utils';


describe('App', () => {
    test('the title is visible', () => {
        render(<App />);
        // @ts-expect-error
        expect(screen.getByText(/test/i)).toBeInTheDocument();
      });
})