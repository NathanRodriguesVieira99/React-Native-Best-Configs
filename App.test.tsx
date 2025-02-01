import { render, screen } from '@testing-library/react-native';

import App from './App';

describe('App component', () => {
  it('should render App component', () => {
    render(<App />);
  });
  it('should render Hello text ', () => {
    render(<App />);

    const helloText = screen.getByText('Hello');

    expect(helloText).toBeTruthy();
  });
});
