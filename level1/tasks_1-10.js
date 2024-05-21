// #1
//Заполните массив случайными числами из промежутка от 1 до 100.

const randomNumbers = (count) => {
  const numbersArr = [];
  for (let i = 1; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    numbersArr.push(randomNumber);
  }
  return numbersArr;
};

// console.log(randomNumbers(10));
// #2
//Дано некоторое число: 12345; Выведите в консоль все его символы с конца.

// const printSymbolsFromEnd = (num) => {
//   const arr = [];
//   const str = num.toString();
//   for (let i = 0; i < str.length; i++) {
//     arr.push(str[i]);
//   }

//   return arr.reverse();
// };

// console.log(printSymbolsFromEnd(12345));

// const printSymbolsFromEnd = (num) => {
//   const str = num.toString();
//   for (let i = str.length - 1; i >= 0; i--) {
//     console.log(str[i]);
//   }
// };

// printSymbolsFromEnd(12345);

const printSymbolsFromEnd = (num) => {
  const str = num.toString();
  const arr = str.split("").reverse();

  return arr;
};

// console.log(printSymbolsFromEnd(12345));
// #3
// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]; По очереди выведите в консоль подмассивы из двух элементов нашего массива:[1, 2] [3, 4] [5, 6]

const subArr = (arr) => {
  //   const arr1 = arr.slice(0, 2);
  //   const arr2 = arr.slice(2, 4);
  //   const arr3 = arr.slice(4, 6);
  //   const mainArr = [arr1, arr2, arr3];
  //   return mainArr;
  const mainArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    mainArr.push([arr[i], arr[i + 1]]);
  }
  return mainArr;
};

// console.log(subArr([1, 2, 3, 4, 5, 6]));
// #4
//Даны два массива: let arr1 = [1, 2, 3]; let arr2 = [4, 5, 6]; Слейте эти массивы в новый массив: [1, 2, 3, 4, 5, 6]

const combineArr = () => {
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  //   arr1.push(...arr2);
  //   return arr1;
  //   return arr1.concat(arr2);
  return [...arr1, ...arr2];
};

// console.log(combineArr());
