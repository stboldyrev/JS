// #1
// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.

let findAllNumbersIndex = (str) => {
  const newArr = [];
  [...str].forEach((num, i) => {
    if (!isNaN(num) && num !== " ") {
      newArr.push(i);
    }
  });
  return newArr;
};

// console.log(findAllNumbersIndex("sweo10sk2ju8vj10"));

// #2
// Дан массив с некоторыми числами, например, вот такой: [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу: [321, 654, 987]

const reverseElInArr = (arr) => {
  const newArr = arr.map((el) => [...el.toString()]);
  const renewedArr = newArr.map((item) => {
    return +item.reverse().join("");
  });
  return renewedArr;
  // return arr.map((num) => +num.toString().split("").reverse().join(""));
};

// console.log(reverseElInArr([123, 456, 789]));

// #3
// Дана некоторая строка с числом: '1234567'
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее: '1 234 567'

const divideWithSpace = (str) => {
  let newArr = str.split("").reverse();
  for (let i = 3; i < newArr.length; i += 4) {
    newArr.splice(i, 0, " ");
  }
  return newArr.reverse().join("");
};

// console.log(divideWithSpace("1234567"));

// #4
// Дана некоторая строка: 'AbCdE'
// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее: 'aBcDe'

const changeLetterRegistr = (str) => {
  return [...str]
    .map((el) => (el == el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()))
    .join("");
};

// console.log(changeLetterRegistr("AbCdE"));

// #5
// Дан некоторый массив с числами, например, вот такой: [1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе: [12, 34, 56]

const combinePairOfNum = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    newArr.push(+[arr[i], arr[i + 1]].join(""));
  }
  return newArr;
};

// console.log(combinePairOfNum([1, 2, 3, 4, 5, 6]));

// #6
// Дана некоторая строка со словами: 'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке.
// В нашем случае должно получится следующее: 'aaa Bbb ccc Eee fff'

const makeFirstLetterBigOnEachWord = (str) => {
  return str
    .split(" ")
    .map((el, i) => (i % 2 !== 0 ? el[0].toUpperCase() + el.slice(1) : el))
    .join(" ");
};

// console.log(makeFirstLetterBigOnEachWord("aaa bbb ccc eee fff"));
