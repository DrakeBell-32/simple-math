const primes = require('./constants/primeNumbers');

/**
 * Разложение на простые множетели числа n
 
    Алгоритм разложения:
    Проверяем делимость n на 2 (наименьшее простое число).
    Проверяем делимость на 3, 5, 7 и так далее (только простые числа).
    Если число делится, записываем множитель и продолжаем разложение для оставшегося числа.
    Если оставшееся число больше 1 и является простым, оно также входит в разложение.
*/
function primeFactorization(num) {
  const res = [];
  let currentIndex = 0;
  while (num > 1) {
    if (num % primes[currentIndex] === 0) {
      num = num / primes[currentIndex];
      res.push(primes[currentIndex]);
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
  }
  return res;
}

module.exports = { primeFactorization };
