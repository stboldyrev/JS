// #1
// Сделайте функцию, которая вернет текущий день недели словом.

const getCurrentDayInWord = () => {
  const date = new Date();
  const dayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = date.getDay();
  return dayArr[currentDay];
};

// console.log(getCurrentDayInWord());

// #2
// Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.

const returnDayOfWeek = (date) => {
  const newDate = new Date(date);
  const dayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = newDate.getDay();
  return dayArr[currentDay];
};

// console.log(returnDayOfWeek("2024-07-21"));

// #3
// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.

const returnQuantityOfDays = (sec) => {
  return Math.floor(sec / 60 / 60 / 24);
};

// console.log(returnQuantityOfDays(2345266));

// #4
// Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.

const cutTheStringWithSecondArg = (num, str) => {
  return num > 0 ? str.slice(0, num) : "Num is less than zero";
};

// console.log(cutTheStringWithSecondArg(3, "Lorem"));

// #5
// Сделайте функцию, которая параметром будет получать дату, а возвращать знак зодиака, соответствующий этой дате.

const getZodiacSign = (date) => {
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

// console.log(getZodiacSign("2024-07-21"));

// #6
// Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.

const sumOfDividersForNumber = (num) => {
  let newArr = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      newArr.push(i);
    }
  }
  return newArr.reduce((sum, el) => sum + el, 0);
};

// console.log(sumOfDividersForNumber(15));
