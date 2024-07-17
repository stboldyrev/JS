// #1
// Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.

const randomNumFromArr = (arr) => {
  if (arr.length === 0) {
    return "Arr is empty";
  }
  const getRandomNum = Math.floor(Math.random() * arr.length);
  return arr[getRandomNum];
};

// console.log(randomNumFromArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// #2
// Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.

const getRandomElFromArr = (arr, n) => {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    const getRandomEl = Math.floor(Math.random() * arr.length);
    newArr.push(arr[getRandomEl]);
  }
  return newArr;
};

// console.log(getRandomElFromArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));

// #3
// Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд.
// ??

// #4
// Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.

const getPrimeNumFromTo = (min, max) => {
  let newArr = [];
  for (let i = min; i <= max; i++) {
    let arr = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        arr.push(j);
      }
    }
    if (arr.length < 3 || arr.length === 1) {
      newArr.push(i);
    }
  }
  return newArr.filter((el) => el !== 1 && el !== 2);
};

// console.log(getPrimeNumFromTo(1, 10));

// #5
// Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвщать их сумму.

const getSumOfAllNum = (...numbers) => {
  return numbers.reduce((sum, num) => sum + num, 0);
};

// console.log(getSumOfAllNum(1, 2, 3, 4, 5));

// #6
// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел.

const fillWithRandomNumThatCannotBeSameInRow = (min, max) => {
  let arr = [];
  while (arr.length !== max) {
    let getRandomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    while (!arr.includes(getRandomNum)) {
      arr.push(getRandomNum);
    }
  }
  return arr;
};

// console.log(fillWithRandomNumThatCannotBeSameInRow(1, 10));

// #7
// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись.

const fillWithRandomNum = (min, max) => {
  let arr = [];
  while (arr.length !== max) {
    let getRandomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    while (!arr.includes(getRandomNum)) {
      arr.push(getRandomNum);
    }
  }
  return arr;
};

// console.log(fillWithRandomNum(1, 10));
