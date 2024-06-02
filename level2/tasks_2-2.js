// #1
//Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.

const negativeNum = (arr) => {
  let arrFilter = arr.filter((num) => num < 0);
  return arrFilter.length;
};

// console.log(negativeNum([1, -2, -3, 4, 5, -6, 7, -8, 9]));

// #2
//Дан массив с числами. Оставьте в нем только положительные числа.

const positiveNumFilter = (arr) => {
  return arr.filter((num) => num > 0);
};

// console.log(positiveNumFilter([1, -2, -3, 4, 5, -6, 7, -8, 9]));

// #3
// Дана строка. Удалите предпоследний символ из этой строки.

const deletePenultimateEl = (str) => {
  //   let result = "";
  //   for (let i = 0; i < str.length; i++) {
  //     if (i === str.length - 2) {
  //       continue;
  //     }
  //     result += str[i];
  //   }
  //   return result;
  return str.slice(0, -2) + str.slice(-1);
};

// console.log(deletePenultimateEl("Hello"));

// #4
//Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
//Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.

const sumFirAndSecElArr = (arr) => {
  let halfArrFirst = arr.slice(0, Math.ceil(arr.length / 2));
  let halfArrSecond = arr.slice(Math.ceil(arr.length / 2));
  return (
    halfArrFirst.reduce((sum, item) => (sum += item), 0) /
    halfArrSecond.reduce((sum, item) => (sum += item), 0)
  );
};

// console.log(sumFirAndSecElArr([1, 2, 3, 4, 5, 6]));
