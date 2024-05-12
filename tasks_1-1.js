// #1
// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

const isNegativeNumber = (num) => {
  if (num < 0) {
    console.log("Number " + num + " is negative");
  } else {
    console.log("Number " + num + " is positive");
  }
};

// console.log(isNegativeNumber(7));

// #2
// Дана строка. Выведите в консоль длину этой строки.

const printStrLength = (myString) => {
  return myString.length;
};

// console.log(printStrLength("Hello world!"));

// #3
// Дана строка. Выведите в консоль последний символ строки.

const printLastStrEl = (myString) => {
  let lastSymbol = myString[myString.length - 1];
  return lastSymbol;
};

// console.log(printLastStrEl("Hello world!"));

// #4
// Дано число. Проверьте, четное оно или нет.

const isEvenNumber = (num) => {
  if (num % 2 === 0) {
    return "Number " + num + " is even";
  } else {
    return "Number " + num + " is NOT even";
  }
};

// console.log(isEvenNumber(13));

// #5
// Даны два слова. Проверьте, что первые буквы этих слов совпадают.

const isLetterMatched = (word1, word2) => {
  if (word1.length === 0 || word2.length === 0) {
    return "One or both words are empty";
  }
  if (word1[0] === word2[0]) {
    return "First letters matched";
  } else {
    return "First letters DIDN'T MATCH";
  }
};

// console.log(isLetterMatched("Nihao", "Never"));

// #6
// Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

const lastElement = (word) => {
  if (word.length === 0) {
    return "Error, no word";
  }
  let renewedWord = word[word.length - 1];
  if (renewedWord !== "ь") {
    return renewedWord;
  } else {
    renewedWord = word[word.length - 2];
    return renewedWord;
  }
};

// console.log(lastElement("Мать"));
