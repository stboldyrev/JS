// #1
// Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.

const deleteAllDublicates = (arr) => {
  return Array.from(new Set(arr));
  //   return [...new Set(arr)]
};

// console.log(deleteAllDublicates([1, 1, 2, 3, 4]));

// #2
// Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз.

//??// const deleteMoreThanThreeDublicates = (arr) => {
//   const result = [];
//   arr.forEach((el) => {
//     if (result.includes(el) >= 3) {
//       result.push(el);
//     }
//   });

//   return result;

//};

// console.log(deleteMoreThanThreeDublicates([1, 1, 1, 1, 2, 3, 4, 5, 6, 6, 7]));
// #3
// Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы.

const removeTheSameElNearby = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

// console.log(removeTheSameElNearby([1, 1, 2, 3, 4, 3, 5]));

// #4
// Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта:
// {
// 	max: 9,
// 	min: 1,
// }

const findMinMax = (arr) => {
  let sortedArr = arr.sort((a, b) => a - b);
  let obj = {
    max: sortedArr[sortedArr.length - 1],
    min: sortedArr[0],
  };
  //   obj.max = sortedArr[sortedArr.length - 1];
  //   obj.min = sortedArr[0];
  return obj;
};

// console.log(findMinMax([1, 3, 5, 2, 9, 4]));
