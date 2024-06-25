// #1
// Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.

const showNumbersWithEvenFirstDigit = () => {
  let newArr = [];
  for (let i = 10; i <= 1000; i++) {
    if (+i.toString()[0] % 2 === 0) {
      newArr.push(i);
    }
  }
  return newArr;
};

// console.log(showNumbersWithEvenFirstDigit());

// #2
// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Поменяйте местами пары элементов этого массива: [2, 1, 4, 3, 6, 5]

const swapElInArr = (arr) => {
  for (let i = 0; i < arr.length; i += 2) {
    let tmp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = tmp;
  }
  return arr;
};

// console.log(swapElInArr([1, 2, 3, 4, 5, 6]));

// #3
// Дан следующий объект:
// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }
// Найдите сумму элементов этого объекта.

const sumOfElInObj = (obj) => {
  //   let sum = 0;

  //   for (let key1 in obj) {
  //     for (let key2 in obj[key1]) {
  //       sum += obj[key1][key2];
  //     }
  //   }
  //   return sum;
  const values = Object.values(obj).map((el) =>
    Object.values(el).reduce((sum, value) => (sum += value), 0)
  );
  return values.reduce((sum, item) => (sum += item), 0);
};

// console.log(
//   sumOfElInObj({
//     1: {
//       1: 11,
//       2: 12,
//       3: 13,
//     },
//     2: {
//       1: 21,
//       2: 22,
//       3: 23,
//     },
//     3: {
//       1: 24,
//       2: 25,
//       3: 26,
//     },
//   })
// );
