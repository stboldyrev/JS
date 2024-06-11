// #1
// Дана некоторая строка: 'a bc def ghij'
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем.
// В нашем случае должно получится следующее: 'A BC DEF ghij'

const changeToUpperCaseIfThreeOrLess = (str) => {
  let arr = str
    .split(" ")
    .map((el) => (el.length <= 3 ? el.toUpperCase() : el))
    .join(" ");
  return arr;
};

// console.log(changeToUpperCaseIfThreeOrLess("a bc def ghij"));

// #2
// Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.

const isSymbolUpperOrLowerCase = (symbol) => {
  return symbol === symbol.toUpperCase()
    ? "Symbol is toUpperCase"
    : "Symbol is toLowerCase";
};

// console.log(isSymbolUpperOrLowerCase("s"));

// #3
// Дано некоторое число, например, такое: 123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат: 28

const deleteUnevenNumbers = (num) => {
  return +[...num.toString()].filter((item) => item % 2 === 0).join("");
};

// console.log(deleteUnevenNumbers(123789));
