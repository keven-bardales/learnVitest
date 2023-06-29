export function canReconfigure(from, to) {
  if (typeof from !== 'string') throw new Error('from should be a string');
  if (typeof to !== 'string') throw new Error('to should be a string');

  const itsNotSameLength = from.length !== to.length;
  if (itsNotSameLength) return false;
  // ¡No olvides compartir tu solución en redes!

  const hasRepeatedLetters = new Set(from).size !== new Set(to).size;
  if (hasRepeatedLetters) return false;

  const transformations = {};

  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i];
    const toLetter = to[i];
    const storedLetter = transformations[fromLetter];
    if (storedLetter && storedLetter !== toLetter) return false;

    transformations[fromLetter] = toLetter;
  }

  return true;
}
