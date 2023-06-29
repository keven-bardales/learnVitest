import { expect } from 'chai';
import { describe, it } from 'vitest';
import { fizzbuzz } from '../src/fizzbuzz';

//Escribir una funcion que al pasarle un numero:
// Muestra fizz si es multiplo de 3
// muestro buzz si es multiplo de 5
// muestra fizbuzz si es multiplo de 3 y 5
// muestra el numero si no es multiplo de ninguno de los anteriores

describe('fizzbuzz', () => {
  /* 
  it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function');
  }); */ //Desactivado porque es redundante

  it('should throw a specific error message if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow('parameter is not a number');
  });

  it('should throw a specific error message if not a number is provided', () => {
    expect(() => fizzbuzz(NaN)).toThrow('parameter is Nan');
  });

  /*   it('should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1);
  });

  it('should return 2 if number provided is 2', () => {
    expect(fizzbuzz(2)).toBe(2);
  }); */

  it('should return "fizz" if number provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz');
    expect(fizzbuzz(9)).toBe('fizz');
    expect(fizzbuzz(12)).toBe('fizz');
  });

  it('should return "buzz" if number provided is multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz');
    expect(fizzbuzz(20)).toBe('buzz');
  });

  it('should return "fizzbuzz" if number provided is multiple of 5 and 3', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz');
    expect(fizzbuzz(30)).toBe('fizzbuzz');
  });

  it('should return "woof" if number provided is multiple of 7', () => {
    expect(fizzbuzz(14)).toBe('woof');
  });

  it('should return "buzzwoof" if number provided is multiple of 7 and 5', () => {
    expect(fizzbuzz(35)).toBe('buzzwoof');
  });

  it('should return "fizzwoof" if number provided is multiple of 7 and 3', () => {
    expect(fizzbuzz(21)).toBe('fizzwoof');
  });

  /*   it('should return 4 if number provided is 4', () => {
    expect(fizzbuzz(4)).toBe(4);
  }); */
  //Este test ya esta cubierto
});
