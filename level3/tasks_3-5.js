// #1
// Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.

const arrWithAllWordsStartsWithA = (str) => {
  //   let arr = str.split(" ");
  //   let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i][0].toLowerCase() === "a") {
  //       newArr.push(arr[i]);
  //     }
  //   }
  //   return newArr;
  return str.split(" ").filter((el) => el[0].toLowerCase() === "a");
};

// console.log(
//   arrWithAllWordsStartsWithA(
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus soluta quia aut quidem voluptates dolore sunt tempore iure qui, repudiandae quibusdam veritatis consectetur alias laudantium quis numquam accusantium odit commodi"
//   )
// );

// #2
// Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.

const numDivideByFive = (arr) => {
  return arr.filter((el) => el % 5 === 0);
};

// console.log(numDivideByFive([1, 5, 26, 75, 34, 90]));

// #3
// Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.

const filterNumbersWithZero = (arr) => {
  //   let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i].toString().includes("0")) {
  //       newArr.push(arr[i]);
  //     }
  //   }
  //   return newArr;
  return arr.filter((el) => el.toString().includes("0"));
};

// console.log(
//   filterNumbersWithZero([3, 10, 15, 22, 30, 45, 50, 63, 70, 85, 90, 100])
// );

// #4
// Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.

const hasArrNumbersWithThree = (arr) => {
  return arr.toString().includes("3")
    ? "Arr has number with 3"
    : "Arr DOES NOT have number with 3";
};

// console.log(
//   hasArrNumbersWithThree([3, 10, 15, 22, 30, 45, 50, 63, 70, 85, 90, 100])
// );

// #5
// Дано некоторое число: 35142
// Отсортируйте цифры этого числа. В нашем случае должно получится следующее: 12345

const sortNumbers = (num) => {
  return [...num.toString()].sort((a, b) => a - b).join("");
};
// console.log(sortNumbers(35142));
// #6
// Напишите программу, которая сформирует следующую строку: '-1-2-3-4-5-'

const programThatFormsStr = () => {
  //   let arr = [];
  //   for (let i = -1; i >= -5; i--) {
  //     arr.push(i);
  //   }
  //   arr.push("-");
  //   return arr.join("");
  let result = "-";
  for (let i = 1; i <= 5; i++) {
    result += i + "-";
  }
  return result;
};

// console.log(programThatFormsStr());

// #7
// Дан следующий объект:
// let obj = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// }
// Найдите сумму элементов этого объекта.

const sumOfElInObj2 = (obj) => {
  const values = Object.values(obj).map((el) =>
    Object.values(el).map((el) =>
      Object.values(el).reduce((sum, value) => (sum += value), 0)
    )
  );
  return values
    .map((el) => el.reduce((sum, item) => (sum += item), 0))
    .reduce((sum, item) => (sum += item), 0);
};

// console.log(
//   sumOfElInObj2({
//     1: {
//       1: {
//         1: 111,
//         2: 112,
//         3: 113,
//       },
//       2: {
//         1: 121,
//         2: 122,
//         3: 123,
//       },
//     },
//     2: {
//       1: {
//         1: 211,
//         2: 212,
//         3: 213,
//       },
//       2: {
//         1: 221,
//         2: 222,
//         3: 223,
//       },
//     },
//     3: {
//       1: {
//         1: 311,
//         2: 312,
//         3: 313,
//       },
//       2: {
//         1: 321,
//         2: 322,
//         3: 323,
//       },
//     },
//   })
// );
