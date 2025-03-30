let primes = require('./constants/primeNumbers');
const { setOfPrimes } = require('./setOfPrimes');

/**
 * Разложение на простые множетели числа n
 * @param {*} num Натуральное число
 * @returns Promise => массив из простых множителей числа n (согласно основной теореме арифметики)
 * @description
    Алгоритм разложения:
    Проверяем делимость n на 2 (наименьшее простое число).
    Проверяем делимость на 3, 5, 7 и так далее (только простые числа).
    Если число делится, записываем множитель и продолжаем разложение для оставшегося числа.
    Если оставшееся число больше 1 и является простым, оно также входит в разложение.
*/
async function primeFactorization(num) {
  if (typeof num !== 'number' || num <= 0) {
    throw new Error('Некорректный тип входных данных');
  }

  let coefficient = 2;
  let currentIndex = 0;
  const res = [];

  do {
    if (!primes[currentIndex]) {
      await generatePrimesIfNeeded((currentIndex + 1) * coefficient);
      coefficient += 1;
    }

    if (num % primes[currentIndex] === 0) {
      num /= primes[currentIndex];
      res.push(primes[currentIndex]);
      currentIndex = 0; // Сбрасываем индекс, чтобы проверять деление сначала
    } else {
      currentIndex += 1;
    }
  } while (num > 1);

  return res;
}

/**
 * Генерирует простые числа асинхронно и кэширует их.
 */
async function generatePrimesIfNeeded(n) {
  if (primes.length >= n) return; // Если простые числа уже есть, выходим

  console.log(`Обновляем простые числа... до ${n}`);

  primes = await new Promise((resolve) => {
    setTimeout(() => resolve(setOfPrimes(n)), 0); // Асинхронный запуск
  });

  console.log(`Обновлено: ${primes.length} простых чисел`);
}

module.exports = { primeFactorization };
