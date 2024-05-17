// #1
// Найдите сумму всех целых чисел от 1 до 100.

const sumOneToHundred = () => {
  let sumOfI = 0;
  for (let i = 1; i <= 100; i++) {
    sumOfI += i;
  }
  return sumOfI;
};

// console.log(sumOneToHundred());

// #2
// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.

const sumOneToHundredNot = () => {
  let sumOfI = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      sumOfI += i;
    }
  }
  return sumOfI;
};

// console.log(sumOneToHundredEven());

// #3
// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.

const sumOneToHundredNotEven = () => {
  let sumOfI = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      sumOfI += i;
    }
  }
  return sumOfI;
};

// console.log(sumOneToHundredNotEven());

// #4
// Даны два целых числа. Найдите остаток от деления первого числа на второе.

const twoNumberRemainder = (num1, num2) => {
  if (num2 === 0) {
    return "Division by zero is not allowed";
  }
  return num1 % num2;
};

// console.log(twoNumberRemainder(3, 2));

// #5
// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

const allElInString = (str) => {
  let strArray = [];
  for (let i = 0; i < str.length; i++) {
    strArray.push(str[i]);
  }
  strArray.reverse();

  strArray.forEach((element) => {
    console.log(element);
  });
};

// allElInString("Hello");
