export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('parameter is not a number');

  if (Number.isNaN(number)) throw new Error('parameter is Nan');

  const multiples = { 3: 'fizz', 5: 'buzz', 7: 'woof' };

  let output = '';

  Object.entries(multiples).forEach(([multiplier, word]) => {
    if (number % multiplier === 0) output += word;
  });
  /* 
  Object.keys(multiples) */

  /*   if (number === 3) return 'fizz'; */
  /*   if (number % 15 === 0) return 'fizzbuzz';
  if (number % 3 === 0) return 'fizz';
  if (number % 5 === 0) return 'buzz'; */

  return output === '' ? number : output;
};

/**
 *   let entries =  Object.entries(multiples)
  
  entries.forEach(([key, value]) =>{
     console.log(key, value);
    if (number % key === 0) output = value;
  })
 */
