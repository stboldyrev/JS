// #1
// Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.

const deleteWordsMoreThanThree = (arr) => {
  return arr.filter((el) => el.length <= 3);
};

// console.log(
//   deleteWordsMoreThanThree(["Hi", "world", "my", "name", "is", "Stefan"])
// );

// #2
// Дано некоторое число: 1357
// Проверьте, что все цифры этого числа являются нечетными.

const checkIfNumIsUneven = (num) => {
  let newArr = [...num.toString()];
  for (let i = 0; i < newArr.length; i++) {
    if (+newArr[i] % 2 === 0) {
      return `Numbers has even number - ${newArr[i]}`;
    }
  }
  return "All numbers is uneven";
};

// console.log(checkIfNumIsUneven(1357));

// #3
// Дано некоторое слово: 'abcba'
// Проверьте, что это слово читается одинаково с любой стороны.

const isSymmetricalWord = (str) => {
  return str === [...str].reverse().join("")
    ? "Это слово читается одинаково с любой стороны"
    : "Это слово НЕ читается одинаково с любой стороны.";
};

// console.log(isSymmetricalWord("abcba"));

// #4
// Дан массив:
// [
// 	[
// 		[11, 12, 13],
// 		[14, 15, 16],
// 		[17, 17, 19],
// 	],
// 	[
// 		[21, 22, 23],
// 		[24, 25, 26],
// 		[27, 27, 29],
// 	],
// 	[
// 		[31, 32, 33],
// 		[34, 35, 36],
// 		[37, 37, 39],
// 	],
// ]
// Найдите сумму элементов этого массива.

const sumOfAllElInArr2 = (arr) => {
  return arr
    .map((el) =>
      el
        .map((elInside) => elInside.reduce((sum, item) => sum + item, 0))

        .reduce((sum, item) => sum + item, 0)
    )
    .reduce((sum, item) => sum + item, 0);
};

// console.log(
//   sumOfAllElInArr2([
//     [
//       [11, 12, 13],
//       [14, 15, 16],
//       [17, 17, 19],
//     ],
//     [
//       [21, 22, 23],
//       [24, 25, 26],
//       [27, 27, 29],
//     ],
//     [
//       [31, 32, 33],
//       [34, 35, 36],
//       [37, 37, 39],
//     ],
//   ])
// );
