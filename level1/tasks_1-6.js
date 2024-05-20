// #1
// Дан массив с числами. Найдите сумму квадратов элементов этого массива.

// const sumArray = (arr) => {
//   let sumArr = 0;
//   arr.forEach((num) => {
//     sumArr += num ** 2;
//   });
//   return sumArr;
// };

const sumArraySquare = (arr) => {
  return arr.reduce((sum, num) => sum + num ** 2, 0);
};

// console.log(sumArraySquare([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// #2
// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

const sumArrayRoot = (arr) => {
  return arr.reduce((sum, num) => sum + Math.sqrt(num), 0);
};

// console.log(sumArrayRoot([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// #3
// Дан массив с числами. Найдите сумму положительных элементов этого массива.

const sumArraySqurePositive = (arr) => {
  return arr.filter((num) => num >= 0).reduce((sum, num) => sum + num ** 2, 0);
};

// console.log(sumArraySqurePositive([1, -2, 3, 4, 5, -6, 7, -8, 9]));

// #4
// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

const sumArray0to10 = (arr) => {
  return arr
    .filter((num) => num > 0 && num < 10)
    .reduce((sum, num) => sum + num, 0);
};

// console.log(sumArray0to10([1, 7, -2, 3, 4, 5, -6, 7, -8, 9, 15, 24]));
