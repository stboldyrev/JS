// #1
// Дана переменная со строкой. Проверьте, что в эта строка представляет собой число, то есть состоит только из цифр.

const isNumHasOnlyDigit = (str) => {
  return str.split("").filter((el) => isNaN(el)).length === 0
    ? "The str only contains num"
    : "The string is not only contain num";
};

// console.log(isNumHasOnlyDigit("12345678"));

// #2
// Дана переменная со строкой. Проверьте, что в эта строка представляет собой дробь.

const isFraction = (str) => {
  if (+str === Math.floor(+str) || !str.includes("/")) {
    return "Num is NOT fraction";
  } else {
    return "Num is fraction";
  }
};

// console.log(isFraction("2/3"));

// #3
// Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число.

const getTheSecondBiggestNumInArr = (arr) => {
  let newArr = arr.sort((a, b) => a - b);
  return newArr[newArr.length - 2];
};

// console.log(getTheSecondBiggestNumInArr([1, 13, 3, 5, 4, 8, 9, 6, 2, 7]));

// #4
// Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, заполненный целыми числами от минимального параметра до максимального.

const createIntegerArray = (num1, num2) => {
  let arr = [];
  const maxNum = num1 > num2 || num1 == num2 ? num1 : num2;
  const minNum = num1 < num2 || num1 == num2 ? num1 : num2;
  for (let i = minNum; i <= maxNum; i++) {
    arr.push(i);
  }
  return arr;
};

// console.log(createIntegerArray(1, 10));

// #5
// Сделайте функцию, которая заполнит массив случайными латинскими буквами.

const getRandomLetter = (length) => {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lettersArr = letters.split("");
  let arr = [];
  for (let i = 0; i < length; i++) {
    const getRandom = Math.floor(Math.random() * lettersArr.length);
    arr.push(lettersArr[getRandom]);
  }
  return arr;
};
// console.log(getRandomLetter(10));

// #6
// Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи.
// ??
