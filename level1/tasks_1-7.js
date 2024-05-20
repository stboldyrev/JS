// #1
// 'abcde' Получите массив букв этой строки.

// const arrLetter = (str) => {
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     arr.push(str[i]);
//   }
//   return arr;
// };

const arrLetter = (str) => [...str];

// console.log(arrLetter("abcde"));

// #2
// 12345 Получите массив цифр этого числа.

const arrNumber = (num) => [...num.toString()];

// console.log(arrNumber(12345));

// #3
// 12345 Переверните его: 54321

const arrNumberReverse = (num) => [...num.toString()].reverse();

// console.log(arrNumberReverse(12345));

// #4
// 12345 Найдите сумму цифр этого числа.

const sumArrNumbers = (num) => {
  let sumArr = [...num.toString()];
  return sumArr.reduce((sum, num) => (sum += +num), 0);
};

// console.log(sumArrNumbers(12345));
