// #1
// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.

const isFirstAndLastLetterMatched = (word1, word2) => {
  //   if (word1.length === 0 || word2.length === 0) {
  //     return "One or both words are empty";
  //   }
  //   if (word1[word1.length - 1].toLowerCase() === word2[0].toLowerCase()) {
  //     return "Letters matched";
  //   } else {
  //     return "Letters DIDN'T match";
  //   }
  if (word1.length === 0 || word2.length === 0) {
    return "One or both words are empty";
  }
  if (word1.toLowerCase().slice(-1) === word2.toLowerCase().slice(0, 1)) {
    return "Letters matched";
  } else {
    return "Letters DIDN'T match";
  }
};

// console.log(isFirstAndLastLetterMatched("Mother", "RFather"));

// #2
// Дана некоторая строка. Найдите позицию третьего нуля в строке.

const findIndexThirdZero = (str) => {
  // if (str.indexOf("0") === -1) {
  //   return "0 is not found";
  // } else {
  //   let count = 0;
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] === "0") {
  //       count++;
  //       if (count === 3) {
  //         return i;
  //       }
  //     }
  //   }
  // }
  if (str.indexOf("0") === -1) {
    return "0 is not found";
  } else {
    let arrForZero = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "0") {
        // arrForZero.push(str.indexOf("0", i));
        arrForZero.push(i);
      }
    }
    if (arrForZero.length >= 3) {
      return arrForZero[2];
    } else {
      return "0 is less than three in the string";
    }
  }
};

// console.log(findIndexThirdZero("1203456078090"));

// #3
// Даны числа, разделенные запятыми: '12,34,56' Найдите сумму этих чисел.

const FindSumWithComa = (str) => {
  let newStr = str.split(",");
  return newStr.reduce((sum, el) => (sum += +el), 0);
};

// console.log(FindSumWithComa("12,34,56"));

// #4
// Дана дата в следующем формате: '2025-12-31' Преобразуйте эту дату в следующий объект: { year: '2025', month: '12', day: '31', }

const dateToObject = (date) => {
  let arrDate = date.split("-");
  let objectDate = {
    year: arrDate[0],
    month: arrDate[1],
    day: arrDate[2],
  };
  return objectDate;
};

// console.log(dateToObject("2025-12-31"));
