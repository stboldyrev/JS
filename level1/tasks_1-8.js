// #1
// Заполните массив целыми числами от 1 до 10.

const integerNumbersArr = () => {
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    arr.push(i);
  }
  return arr;
};

// console.log(integerNumbersArr());

// #2
// Заполните массив четными числами из промежутка от 1 до 100.

const evenNumbersArr = () => {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    arr.push(i);
  }
  return arr.filter((num) => num % 2 === 0);
};

// console.log(evenNumbersArr());

// #3
// [1.456, 2.125, 3.32, 4.1, 5.34] Округлите эти дроби до одного знака в дробной части.

const fractionNumbersArr = (arr) => {
  return arr.map((num) => num.toFixed(1));
};

// console.log(fractionNumbersArr([1.456, 2.125, 3.32, 4.1, 5.34]));
