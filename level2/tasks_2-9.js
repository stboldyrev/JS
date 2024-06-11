// #1
// Дано некоторое число: 123456
// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее: 12 + 34 + 56

const sumOfPairedNum = (num) => {
  let newArr = [];
  let arr = [...num.toString()];
  for (let i = 0; i < arr.length; i += 2) {
    newArr.push(+[arr[i], arr[i + 1]].join(""));
  }
  return newArr.reduce((sum, num) => (sum += num), 0);
};

// console.log(sumOfPairedNum(123456));

// #2
// Дан массив с числами: [1, 2, 3, 4, 5]. Выведите в консоль элементы этого массива в обратном порядке.

const reverseElemetsInArr = (arr) => {
  return arr.reverse();
};

// console.log(reverseElemetsInArr([1, 2, 3, 4, 5]));
