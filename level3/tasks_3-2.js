// #1
// Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.

const printNumbersWithEvenSecondLastDigit = () => {
  let arr = [];
  for (let i = 10; i <= 1000; i++) {
    let str = i.toString();
    if (str[str.length - 2] % 2 == 0) {
      arr.push(i);
    }
  }
  return arr;
};

// console.log(printNumbersWithEvenSecondLastDigit());

// #2
// Дан массив. Удалите из него каждый пятый элемент.

const deleteAllFifthEl = (arr) => {
  //   let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if ((i + 1) % 5 !== 0) {
  //       newArr.push(arr[i]);
  //     }
  //   }
  //   return newArr;

  return arr.filter((_, i) => (i + 1) % 5 !== 0);
};

// console.log(
//   deleteAllFifthEl([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//   ])
// );

// #3
// Дана некоторая переменная с числом: let num = 5;
// Сделайте строку, содержащую столько нулей, сколько указано в переменной.
// В нашем случае получится такая строка: '00000'

const createStringWithZeros = (num) => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push("0");
  }
  return arr.join("");
};

// console.log(createStringWithZeros(5));

// #4
// Дана некоторая строка со словами: 'aaa bbb ccc eee fff'
// Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее: 'aaa ccc fff'

const deleteAllSecondWords = (str) => {
  return [...str.split(" ")].filter((_, i) => i % 2 == 0).join(" ");
};

// console.log(deleteAllSecondWords("aaa bbb ccc eee fff"));

// #5
//Дан массив:
// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Найдите сумму элементов этого массива.

const sumOfAllElInArr = (arr) => {
  return arr
    .map((el) => el.reduce((sum, item) => sum + item, 0))
    .reduce((sum, item) => sum + item, 0);

  //   return arr.reduce((sum, el) => {
  //     return sum + el.reduce((sum, item) => sum + item, 0);
  //   }, 0);
};

console.log(
  sumOfAllElInArr([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
