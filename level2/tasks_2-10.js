// #1
// Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.

const checkNoMoreThanThree = (str) => {
  let count = 0;
  [...str].forEach((item) => (isNaN(item) ? (count += 1) : count));
  return count <= 3
    ? "string has 3 or less letters"
    : "string has more than 3 letters";
};

// console.log(checkNoMoreThanThree("104827k18x0"));

// #2
// Дано число. Получите первую четную цифру с конца этого числа.

const getFirstEvenDigitFromEnd = (str) => {
  //   let newArr = [...str].reverse();

  //   for (let i = 0; i < newArr.length; i++) {
  //     if (newArr[i] % 2 === 0) {
  //       return newArr[i];
  //     }
  //   }
  return (
    [...str].reverse().find((item) => item % 2 === 0) ||
    "There is no even number"
  );
};

// console.log(getFirstEvenDigitFromEnd("123456789135"));

// #3
// Дана некоторая строка: 'abcde abcde abcde' Замените в ней первый символ каждого слова на '!': '!bcde !bcde !bcde'

const changeFirstLetterToMark = (str) => {
  return (
    str
      .split(" ")
      .map((el) => "!" + el.slice(1))
      // .map((el) => [el].map((item) => ["!", item.slice(1)].join("")).join(""))
      .join(" ")
  );
};

// console.log(changeFirstLetterToMark("abcde abcde abcde"));

// #4
// Дан массив с числами: [1, 2, 3, 3, 4, 5] Проверьте, что в этом массиве есть два одинаковых элемента подряд.

const findTheSameElInArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return "Array has 2 elements in a row";
    }
  }
  return "Array does NOT have 2 elements in a row";
};

// console.log(findTheSameElInArr([1, 2, 3, 3, 4, 5]));
