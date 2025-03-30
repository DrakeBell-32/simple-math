/**
 * Генерирует массив из первых n простых чисел.
 *
 * @param {number} n - Количество простых чисел, которые необходимо получить.
 * @returns {number[]} Массив, содержащий первые n простых чисел.
 */
function setOfPrimes(n) {
  /**
   * Массив с начальными значениями простых чисел.
   * Минимальное расстояние между соседними простыми числами, начиная с 3, равно 2.
   */
  const baseOfP = [2, 3];
  if (n <= 2) return baseOfP;

  let simpleTwins = 2;

  while (baseOfP.length < n) {
    let lastP = baseOfP[baseOfP.length - 1];
    const intermediateNumber = lastP + simpleTwins;

    if (baseOfP.every((p) => intermediateNumber % p !== 0)) {
      baseOfP.push(lastP + simpleTwins);
      /**Минимальное растояние между соседнями простыми числами, начиная с 3, равно  2 (двум) */
      // значит нет смысла всегда прибавлять +1
      simpleTwins = 2;
    } else {
      simpleTwins += 1;
    }
  }

  return baseOfP;
}

module.exports = { setOfPrimes };
