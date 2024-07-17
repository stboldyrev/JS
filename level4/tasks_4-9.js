// #1
// Сделайте функцию, которая будет возвращать сколько дней осталось до ближайшего 29 февраля.

const howManyDateTill29February = () => {
  const date = new Date();
  const year = date.getFullYear();

  let daysINYear;
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  } else year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

// console.log(howManyDateTill29February());
// #2
// Сделайте функцию, которая будет возвращать дату следующей масленницы, которая празднуется в последнее воскресенье зимы.

// #3
// Сделайте функцию, которая будет возвращать случайный цвет.

const getRandomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

// console.log(getRandomColor());
// #4
// Сделайте функцию, которая параметром будет принимать массив чисел и возвращать массив общих делителей всех чисел из переданного массива.

const getGeneralDividersFromNums = (arr) => {
  let renewedArr = arr.map((num) => {
    let newArr = [];

    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        newArr.push(i);
      }
    }
    return newArr;
  });

  let commonElements = [];
  for (let i = 0; i < renewedArr.length; i++) {
    renewedArr[i].forEach((el) => {
      if (renewedArr[i + 1].includes(el)) {
        commonElements.push(el);
      }
    });
    return commonElements;
  }
};

// console.log(getGeneralDividersFromNums([12, 24, 36]));
// #5
// Сделайте функцию, которая параметром будет принимать двухмерный массив чисел и возвращать массив максимальных чисел в каждом подмассиве.

const findMaxNum = (arr) => {
  let newArr = arr.map((el) => el.sort((a, b) => a - b));
  let finalArr = [];
  for (let i = 0; i < newArr.length; i++) {
    finalArr.push(newArr[i][newArr[i].length - 1]);
  }
  return finalArr;
};

// console.log(
//   findMaxNum([
//     [2, 1, 83],
//     [12, 5, 4],
//     [7, 41, 9],
//   ])
// );
