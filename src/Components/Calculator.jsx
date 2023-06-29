import { evaluate } from 'mathjs';
import { useState } from 'react';

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];

export const operations = ['+', '-', '*', '/'];

export const equalSign = '=';

export const Calculator = () => {
  const [value, setvalue] = useState('');

  const createHandlerNumber = (number) => () =>
    setvalue(value.toString().concat(number));

  const evaluateExpression = (value) => () => {
    setvalue(evaluate(value));
  };

  const createHandlerOperation = (operation) => () => {
    setvalue(value.toString().concat(operation));
  };

  const renderRows = () => {
    return rows.map((row, idx) => {
      return (
        <div key={idx} role='row'>
          {renderRowNumbers(row)}
        </div>
      );
    });
  };

  const renderRowNumbers = (row) => {
    return row.map((number) => {
      return (
        <button key={number} onClick={createHandlerNumber(number)}>
          {number}
        </button>
      );
    });
  };

  return (
    <section>
      <input value={value} readOnly />
      <h1>Calculator</h1>
      {renderRows()}
      {operations.map((operation) => (
        <button onClick={createHandlerOperation(operation)} key={operation}>
          {operation}
        </button>
      ))}
      <button onClick={evaluateExpression(value)}>{equalSign}</button>
    </section>
  );
};
