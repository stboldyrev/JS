// #1
// Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.

const deleteNumMoreThanThree = (arr) => {
  return arr.filter((el) => el.toString().length <= 3);
};

// console.log(deleteNumMoreThanThree([164, 2173, 31, 4, 1350, 16, 7, 58, 92]));

// #2
// Дано число, например, вот такое: let num = 12345;
// Проверьте, что все цифры этого числа больше нуля.

const allNumMoreThanZero = (num) => {
  let arr = [...num.toString()];
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] <= 0) {
      return "NOT all numbers in arr is more than 0";
    }
  }
  return "All numbers in arr more than 0";
};

// console.log(allNumMoreThanZero(12345));

// #3
// Дан некоторый массив, например, вот такой: [123, 456, 789]
// Слейте все элементы этого массива в один массив, разбив их посимвольно: [1, 2, 3, 4, 5, 6, 7, 8, 9]

const combineAllElInArr = (arr) => {
  return arr
    .toString()
    .split("")
    .filter((el) => !isNaN(el))
    .map((el) => +el);
};

// console.log(combineAllElInArr([123, 456, 789]));

// #4
// Дан следующая структура:
// let data = [
// 	{
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	{
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	{
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// ];
// Найдите сумму элементов этой структуры.

const sumOfElInData = (data) => {
  return data
    .map((el) => Object.values(el).reduce((sum, value) => (sum += value), 0))
    .reduce((sum, item) => (sum += item), 0);
};

// console.log(
//   sumOfElInData([
//     {
//       1: 11,
//       2: 12,
//       3: 13,
//     },
//     {
//       1: 21,
//       2: 22,
//       3: 23,
//     },
//     {
//       1: 24,
//       2: 25,
//       3: 26,
//     },
//   ])
// );
