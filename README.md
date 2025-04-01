![simple-math](https://raw.githubusercontent.com/yourusername/simple-math/main/misc/img/simple-math-logo.png)

[https://github.com/yourusername/simple-math](https://github.com/yourusername/simple-math)

**simple-math** — это легковесная математическая библиотека для работы с числами, включающая алгоритмы разложения числа на простые множители и генерации массива простых чисел. Идеально подходит для небольших математических вычислений в JavaScript и Node.js.

[![Version](https://img.shields.io/npm/v/simple-math.svg)](https://www.npmjs.com/package/simple-math)
[![Downloads](https://img.shields.io/npm/dm/simple-math.svg)](https://www.npmjs.com/package/simple-math)
[![Build Status](https://github.com/yourusername/simple-math/workflows/Node.js%20CI/badge.svg)](https://github.com/yourusername/simple-math/actions)
[![License](https://img.shields.io/github/license/yourusername/simple-math.svg)](https://github.com/yourusername/simple-math/blob/master/LICENSE)

## Features

- Разложение натурального числа на простые множители с использованием кэширования.
- Генерация массива из первых N простых чисел.
- Поддержка асинхронного обновления кэша простых чисел.
- Простота использования и легкая интеграция с другими проектами.
- Совместимость с Node.js и современными браузерами.

## Установка

Установите библиотеку с помощью [npm](https://www.npmjs.com/package/simple-math):

````bash
npm install simple-math


## Usage

**simple-math** можно использовать как в Node.js, так и в браузере. Ниже приведены примеры использования основных функций:

### 1. `primeFactorization`

Функция для разложения натурального числа на простые множители.

#### Пример использования:

```javascript
const { primeFactorization } = require('simple-math');

async function runExample() {
  try {
    const factors = await primeFactorization(60);
    console.log(factors);  // Ожидаемый вывод: [2, 2, 3, 5]
  } catch (err) {
    console.error(err);
  }
}

runExample();

### Описание: `primeFactorization`

- **Параметры:** Натуральное число.
- **Возвращаемое значение:** Промис, который разрешается в массив простых множителей.
- **Алгоритм:**
  - Проверяется делимость числа на 2.
  - Затем проверяются делители среди последующих простых чисел.
  - При необходимости происходит асинхронное обновление кэша простых чисел.

---

### 2. `setOfPrimes`

Функция для генерации массива из первых N простых чисел.

#### Пример использования:

```javascript
const { setOfPrimes } = require('simple-math');

const primesArray = setOfPrimes(10);
console.log(primesArray);  // Ожидаемый вывод: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

### Описание: `setOfPrimes`

- **Параметры:** Число `n` — количество простых чисел для генерации.
- **Возвращаемое значение:** Массив, содержащий первые N простых чисел.
- **Алгоритм:**
  - Начинается с базового массива `[2, 3]`.
  - Последовательно проверяются кандидаты на простоту.
  - Добавляются числа, удовлетворяющие условию простоты.
````
