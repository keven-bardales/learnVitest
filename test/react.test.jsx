import { render, screen, cleanup } from '@testing-library/react';
import { afterEach, describe, it, expect } from 'vitest';
import { fireEvent } from '@testing-library/react/dist/pure';
import {
  Calculator,
  numbers,
  operations,
  equalSign,
} from '../src/Components/Calculator';

describe('Calculator', () => {
  afterEach(cleanup);
  it('should render', () => {
    render(<Calculator></Calculator>);
  });

  it('should render title', () => {
    render(<Calculator />);
    screen.getByText('Calculator');
  });

  it('should render numbers', () => {
    render(<Calculator />);
    numbers.forEach((number) => {
      screen.getByText(number);
    });
  });

  it('should render 4 rows', () => {
    render(<Calculator />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(4);
  });

  it('should render operations', () => {
    render(<Calculator />);
    operations.forEach((operation) => {
      screen.getByText(operation);
    });
  });

  it('should render equal "=" sign', () => {
    render(<Calculator />);
    screen.getByText('=');
  });

  it('should render an input', () => {
    render(<Calculator />);
    screen.getByRole('textbox');
  });

  it('should show number after clicking a number', () => {
    render(<Calculator />);
    const one = screen.getByText('1');
    fireEvent.click(one);
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('1');
  });

  it('should show numbers after clicking several numbers', () => {
    render(<Calculator />);
    const one = screen.getByText('1');
    fireEvent.click(one);

    const two = screen.getByText('2');
    fireEvent.click(two);

    const three = screen.getByText('3');
    fireEvent.click(three);
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('123');
  });

  it('should show user input after clicking number and operators', () => {
    render(<Calculator />);
    const one = screen.getByText('1');
    fireEvent.click(one);

    const plus = screen.getByText('+');
    fireEvent.click(plus);
    fireEvent.click(one);

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('1+1');
  });

  it('should execute operation when clicking equal sign', () => {
    render(<Calculator />);
    const one = screen.getByText('1');
    fireEvent.click(one);

    const plus = screen.getByText('+');
    fireEvent.click(plus);
    fireEvent.click(one);

    const equal = screen.getByText(equalSign);

    fireEvent.click(equal);
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('2');
  });

  it('should be able to concat value after equal is pressed', () => {
    render(<Calculator />);
    const one = screen.getByText('1');
    fireEvent.click(one);

    const plus = screen.getByText('+');
    fireEvent.click(plus);
    fireEvent.click(one);

    const equal = screen.getByText(equalSign);

    fireEvent.click(equal);

    fireEvent.click(plus);
    fireEvent.click(one);

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('2+1');
  });

  /*  it('should do operation with itself if no value next to it', () => {
    render(<Calculator />);
    const one = screen.getByText('1');
    fireEvent.click(one);

    const plus = screen.getByText('+');
    fireEvent.click(plus);
    fireEvent.click(one);

    const equal = screen.getByText(equalSign);

    fireEvent.click(equal);

    fireEvent.click(plus);

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('4');
  }); */
});
