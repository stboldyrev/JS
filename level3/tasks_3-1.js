// #1
// Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.

const checkIfNumbersAscending = (num) => {
  let newArr = [...num.toString()];
  for (let i = 0; i < newArr.length - 1; i++) {
    if (newArr[i] > newArr[i + 1]) {
      return "Numbers in this digit is not ascending";
    }
  }
  return "Numbers is ascending";
};

// console.log(checkIfNumbersAscending(123456789));

// #2
// Дан массив: [1, '', 2, 3, '', 5]; Удалите из массива все пустые строки.

const deleteEmptyEl = (arr) => {
  return arr.filter((el) => el !== "");
};

// console.log(deleteEmptyEl([1, "", 2, 3, "", 5]));

// #3
// Дан массив:
// [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]
// Отсортируйте элементы в каждом подмассиве.

const sortElInSubarray = (arr) => {
  // for (let a = 0; a < arr.length; a++) {
  //   for (let i = 0; i < arr[a].length; i++) {
  //     for (let j = 0; j < arr[a].length - 1 - i; j++) {
  //       if (arr[a][j] > arr[a][j + 1]) {
  //         let tmp = arr[a][j];
  //         arr[a][j] = arr[a][j + 1];
  //         arr[a][j + 1] = tmp;
  //       }
  //     }
  //   }
  // }
  // return arr;

  return arr.map((el) => el.sort((a, b) => a - b));
};

// console.log(
//   sortElInSubarray([
//     [2, 1, 4, 3, 5],
//     [3, 5, 2, 4, 1],
//     [4, 3, 1, 5, 2],
//   ])
// );

// #4
// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];
// Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.

const alignArr = (arr1, arr2) => {
  // let longestArr = [];
  // if (arr1.length > arr2.length) {
  //   longestArr = arr1;
  // } else {
  //   longestArr = arr2;
  // }
  // for (let i = 0; i < longestArr.length; i++) {
  //   if (arr1.length < arr2.length) {
  //     arr2.pop();
  //   } else if (arr1.length > arr2.length) {
  //     arr1.pop();
  //   }
  // }

  // return { arr1, arr2 };

  if (arr1.length < arr2.length) {
    arr2.splice(arr1.length);
  } else if (arr1.length > arr2.length) {
    arr1.splice(arr2.length);
  }

  return { arr1, arr2 };
};

// console.log(alignArr([1, 2, 3], [1, 2, 3, 4, 5]));
