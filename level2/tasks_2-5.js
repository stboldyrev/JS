// #1
// Дана некоторая строка, например, вот такая: '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.

const findAllZeroIndex = (str) => {
  if (str.indexOf("0") === -1) {
    return "0 was not found";
  }
  let newArr = [...str];
  let zeroIndexArr = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "0") {
      zeroIndexArr.push(i);
    }
  }
  return zeroIndexArr;
};

// console.log(findAllZeroIndex("023m0df0dfg0"));

// #2
// Дана некоторая строка: 'abcdefg' Удалите из этой строки каждый третий символ.
// В нашем случае должно получится следующее: 'abdeg'

const deleteThirdSymbol = (str) => {
  let newArr = [...str];
  let returnArr = [];
  for (let i = 0; i < newArr.length; i++) {
    if ((i + 1) % 3 !== 0) {
      returnArr.push(newArr[i]);
    }
  }
  return returnArr.join("");
};

// console.log(deleteThirdSymbol("abcdefg"));

// #3
// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.

const divideEvenOnUneven = (arr) => {
  let evenArr = arr
    .filter((num, index) => index % 2 === 0)
    .reduce((sum, num) => (sum += num), 0);
  let unevenArr = arr
    .filter((num, index) => index % 2 !== 0)
    .reduce((sum, num) => (sum += num), 0);
  return evenArr / unevenArr;
};

// console.log(divideEvenOnUneven([1, 2, 3, 4, 5, 6]));
