/**
 * Разложение на простые множители
 * @param num Натуральное число
 * @returns Promise с массивом простых множителей
 */
export function primeFactorization(num: number): Promise<number[]>;

/**
 * Возвращает массив простых чисел до `n`
 * @param n Верхняя граница
 * @returns Массив простых чисел
 */
export function setOfPrimes(n: number): number[];

/**
 * Проверяет, является ли число полным квадратом
 * @param n Число
 * @returns true, если число — полный квадрат
 */
export function isSquare(n: number): Promise<boolean>;
