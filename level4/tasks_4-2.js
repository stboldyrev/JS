// #1
// Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.

const sumOfDigit = (num) => {
  const arr = num.toString().split("");
  return arr.reduce((sum, el) => sum + +el, 0);
};

// console.log(sumOfDigit(12));

// #2
// Сделайте функцию, которая параметром будет принимать число и удалять из него нули.

const deleteAllZeroFromDigit = (num) => {
  //   const arr = num
  //     .toString()
  //     .split("")
  //     .filter((el) => +el !== 0)
  //     .join("");
  //   return +arr;
  //   const newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] !== "0") {
  //       newArr.push(arr[i]);
  //     }
  //   }
  //   return +newArr.join("");
  const arr = +num.toString().replace(/0/g, "");
  return arr;
};

// console.log(deleteAllZeroFromDigit(123049021));

// #3
// Сделайте функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году,
// в зависимости от того, была уже эта дата или нет.

const howManyDaysHavePassed = (date) => {
  const newDate = new Date(date);
  const currentDate = new Date();

  if (newDate > currentDate) {
    return `${Math.floor(
      (newDate - currentDate) / (1000 * 60 * 60 * 24)
    )} day/s have passed`;
  } else if (newDate < currentDate) {
    return `${Math.floor(
      (currentDate - newDate) / (1000 * 60 * 60 * 24)
    )} day/s left`;
  } else {
    return `0 days`;
  }
};

// console.log(howManyDaysHavePassed("2024-08-07"));

// #4
// Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.

const isLeapYear = (year) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
    ? "Year is leap"
    : "Year isn't leap";
};

// console.log(isLeapYear(2024));

// #5
// Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.

const allLeapYear = () => {
  let arr = [];
  for (let year = 1924; year <= 2024; year++) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      arr.push(year);
    }
  }
  return arr;
};

// console.log(allLeapYear());

// #6
// Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.
const howManyDaysTillEndOfTheMonth = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  return new Date(year, month + 1, 0).getDate() - date.getDate();
};

// console.log(howManyDaysTillEndOfTheMonth());
// #7
// Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:
// {
// 	next: 'пн',
// 	curr: 'вс',
// 	prev: 'сб',
// }

const getSurroundingDays = () => {
  const dayArr = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
  let obj = {};
  const date = new Date();
  const currentDay = date.getDay();
  const pastDay = date.getDay() - 1;
  const futureDay = date.getDay() + 1;
  obj.next = dayArr[futureDay];
  obj.curr = dayArr[currentDay];
  obj.prev = dayArr[pastDay];
  return obj;
};

// console.log(getSurroundingDays());
