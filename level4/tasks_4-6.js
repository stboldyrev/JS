// #1
// Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день, и определять, существует ли такая дата или нет.

const isDateReal = (date) => {
  const [year, month, day] = date.split("-").map((el) => +el);
  const newDate = new Date(year, month - 1, day);

  return newDate.getFullYear() === year &&
    newDate.getMonth() === month - 1 &&
    newDate.getDate() === day
    ? "The date exists"
    : "The date does NOT exist";
};

// console.log(isDateReal("2012-12-30"));

// #2
// Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами.

const getRandomLetter2 = (length) => {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lettersArr = letters.split("");
  let arr = [];
  for (let i = 0; i < length; i++) {
    const getRandom = Math.floor(Math.random() * lettersArr.length);
    arr.push(lettersArr[getRandom]);
  }
  return arr;
};
// console.log(getRandomLetter2(10));

// #3
// Сделайте функцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов.

const getUpperCaseLetterFromEachWord = (str) => {
  return str
    .split(" ")
    .map((el) => el[0].toUpperCase())
    .join("");
};

// console.log(
//   getUpperCaseLetterFromEachWord(
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit"
//   )
// );

// #4
// Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей.

const changeAllNumInArrToDividers = (arr) => {
  let lastArr = [];
  arr.map((el) => {
    let newArr = [];
    for (let i = 1; i <= el; i++) {
      if (el % i === 0) {
        newArr.push(i);
      }
    }
    lastArr.push(newArr);
  });
  return lastArr;
};

// console.log(changeAllNumInArrToDividers([2, 4, 6, 8, 9, 12, 14, 20]));

// #5
// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде следующего объекта:

// {
// 	d: 12,
// 	h: 10,
// 	m: 59,
// 	s: 59,
// }

const convertSec = (sec) => {
  const obj = {
    d: Math.floor(sec / 60 / 60 / 24),
    h: Math.floor(sec / 60 / 60),
    m: Math.floor(sec / 60),
    s: Math.floor(sec),
  };
  return obj;
  //   const obj = {};
  //   obj.d = Math.floor(sec / 60 / 60 / 24);
  //   obj.h = Math.floor(sec / 60 / 60);
  //   obj.m = Math.floor(sec / 60);
  //   obj.s = Math.floor(sec);
};

// console.log(convertSec(1000000));
