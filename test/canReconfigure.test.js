import { expect } from 'chai';
import { describe, it } from 'vitest';
import { canReconfigure } from '../src/canReconfigure';

describe('canReconfigure', () => {
  /*   it('should be a function', () => {
    expect(typeof canReconfigure).toBe('function');
  });
 */
  it('should throw if first parameter is missing', () => {
    expect(() => canReconfigure()).toThrow();
  });

  it('should throw if from is not a string', () => {
    expect(() => canReconfigure(2)).toThrow('from should be a string');
  });

  it('should throw if second parameter is not a string', () => {
    expect(() => canReconfigure('a')).toThrow();
  });

  it('should return a boolean', () => {
    expect(canReconfigure('a', 'b')).toBeTypeOf('boolean');
  });

  it('should be false when lengths are different', () => {
    expect(canReconfigure('AA', 'MID')).toBe(false);
  });

  it('return false same character cant be asigned to two different characters', () => {
    expect(canReconfigure('CON', ' JUU')).toBe(false);
  });

  it('should return false if it has different order of transformation', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false);
  });

  it('fine', () => {
    expect(canReconfigure('XBOX', 'XOBX')).toBe(true);
  });
});
