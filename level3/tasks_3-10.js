// #1
// Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.
const duplicateElements = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i], arr[i]);
  }
  return newArr;
};

// console.log(duplicateElements([1, 2, 3, 4]));

// #2
// Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.

const keepDivisors = (arr, num) => {
  return arr.filter((el) => num % el === 0);
};

// console.log(keepDivisors([1, 2, 3, 4, 5, 6], 12));

// #3
// Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.

const commonDigits = (num1, num2) => {
  //   let num1Arr = num1.toString().split("");
  //   let num2Arr = num2.toString().split("");
  //   let findSameNum = num1Arr.filter((el) => num2Arr.includes(el));
  //   return findSameNum.map((el) => +el);

  let num1Arr = new Set(num1.toString().split(""));
  let num2Arr = new Set(num2.toString().split(""));
  let findSameNum = [...num1Arr].filter((el) => num2Arr.has(el));
  return findSameNum.map((el) => +el);
};

// console.log(commonDigits(123, 345));

// #4
// Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.

const positionsOfDigitThree = (num) => {
  let arrForIndex = [];
  let newArr = [...num.toString()];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "3") {
      arrForIndex.push(i);
    }
  }

  if (arrForIndex.length > 2) {
    return arrForIndex.slice(1, -1);
  }
  return arrForIndex;
};

// console.log(positionsOfDigitThree(313435637));

// #5
// Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.

const filterUniqueDigitNumbers = (arr) => {
  let returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    let newArr = arr[i].toString().split("");
    if (newArr.length == new Set(newArr).size) {
      returnArr.push(+newArr.join(""));
    }
  }
  return returnArr;
};

// console.log(filterUniqueDigitNumbers([123, 456, 789, 112, 223]));

// #6
// Дан массив:
// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Слейте элементы этого массива в один одномерный массив:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

const flattenArray = (arr) => {
  return arr.join(",").split(",");
  //   return arr.reduce((result, current) => {
  //     return result.concat(current);
  //   }, []);
};

// console.log(
//   flattenArray([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
