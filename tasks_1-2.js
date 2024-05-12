// #1
// Дано число. Выведите в консоль первую цифру этого числа.

const firstNumber = (num) => {
  return "First number is " + num.toString()[0];
};

// console.log(firstNumber(123));

// #2
// Дано число. Выведите в консоль последнюю цифру этого числа.

const lastNumber = (num) => {
  let newNum = num.toString();
  return newNum[newNum.length - 1];
};

// console.log("Last number is " + lastNumber(145269));

// #3
// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

const sumNumber = (num) => {
  let newNum = num.toString();
  return +newNum[0] + +newNum[newNum.length - 1];
};

// console.log("Sum of first and last number = " + sumNumber(139));

// #4
// Дано число. Выведите количество цифр в этом числе.

const quantityNumbers = (num) => {
  let newNum = num.toString();
  return newNum.length;
};

// console.log(quantityNumbers(3423413465648));

// #5
// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

let isNumbersMatched = (num) => {
  if (num.toString()[0] == num.toString()[1]) {
    return "Numbers matched";
  } else {
    return "Numbers DIDN'T match";
  }
};

// console.log(isNumbersMatched(1123));
