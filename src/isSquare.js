const { primeFactorization } = require('./primeFactorization');
/**
 * @param {number} n
 * @returns {Promise<boolean>}
 */
async function isSquare(n) {
  if (n <= 0) return false;

  const primeFactors = await primeFactorization(n);

  const hashMapOfExponent = {};

  primeFactors.forEach((p) =>
    hashMapOfExponent[`${p}`]
      ? (hashMapOfExponent[`${p}`] = hashMapOfExponent[`${p}`] + 1)
      : (hashMapOfExponent[`${p}`] = 1)
  );

  console.log('hashMapOfExponent', hashMapOfExponent);

  return !Object.values(hashMapOfExponent).some((n) => n % 2 !== 0);
}

module.exports = { isSquare };
