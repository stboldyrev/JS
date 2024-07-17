// #1
// Сделайте функцию, которая параметром будет принимать число, а количество его делителей.

const allDividersInNum = (num) => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr.length;
};

// console.log(allDividersInNum(6));

// #2
// Сделайте функцию, которая параметром будет принимать дату, а возвращать знак зодиака, соответствующий этой дате.

const getZodiacSign2 = (date) => {
  const newDate = new Date(date);
  const month = newDate.getMonth();
  const day = newDate.getDate();
  switch (month) {
    case 1: // January
      if (day >= 20) return "Aquarius";
      else return "Capricorn";
    case 2: // February
      if (day >= 19) return "Pisces";
      else return "Aquarius";
    case 3: // March
      if (day >= 21) return "Aries";
      else return "Pisces";
    case 4: // April
      if (day >= 20) return "Taurus";
      else return "Aries";
    case 5: // May
      if (day >= 21) return "Gemini";
      else return "Taurus";
    case 6: // June
      if (day >= 21) return "Cancer";
      else return "Gemini";
    case 7: // July
      if (day >= 23) return "Leo";
      else return "Cancer";
    case 8: // August
      if (day >= 23) return "Virgo";
      else return "Leo";
    case 9: // September
      if (day >= 23) return "Libra";
      else return "Virgo";
    case 10: // October
      if (day >= 23) return "Scorpio";
      else return "Libra";
    case 11: // November
      if (day >= 22) return "Sagittarius";
      else return "Scorpio";
    case 12: // December
      if (day >= 22) return "Capricorn";
      else return "Sagittarius";
    default:
      return "Not defined";
  }
};

// console.log(getZodiacSign2("2024-07-21"));

// #3
// Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.

const arrAllDividersInNum = (num) => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr;
};

// console.log(arrAllDividersInNum(12));

// #4
// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.

const isNumPrimeOrNot = (num) => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr.length < 3 || arr.length === 1
    ? "Num is prime"
    : "num is NOT prime";
};

// console.log(isNumPrimeOrNot(7));

// #5
// Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.

const deleteAllEvenDigitFromNum = (num) => {
  return +num
    .toString()
    .split("")
    .filter((el) => el % 2 !== 0)
    .join("");
};

// console.log(deleteAllEvenDigitFromNum(123));

// #6
// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.

const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// console.log(getRandomNum(1, 10));
