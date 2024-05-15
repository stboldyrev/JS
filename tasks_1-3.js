// #1
// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

const moreThanOne = (word) => {
  if (word.length > 1) {
    return word[word.length - 2];
  } else {
    return "Word has 1 or less symbols";
  }
};

// console.log(moreThanOne("abc"));

// #2
// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

const twoNumbers = (num1, num2) => {
  if (num2 === 0) {
    return "Division by zero is not allowed";
  }
  if (num1 % num2 === 0) {
    return "No remainder";
  } else {
    return "There IS a reminder";
  }
};

// console.log(twoNumbers(4, 2));
