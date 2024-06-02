// #1
// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.

const firstNumInStr = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      return i;
    }
  }
  return "No numbers in the string";
};

// console.log(firstNumInStr("vfsid12vmai46"));

// #2
// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.

const separateObject = (obj) => {
  let arrForKeys = Object.keys(obj);
  let arrForValues = Object.values(obj);
  return { keys: arrForKeys, values: arrForValues };
};

// console.log(
//   separateObject({
//     name: "Vasya",
//     surname: "Vasan",
//     age: 31,
//   })
// );

// #3
// Дано число. Выведите в консоль количество четных цифр в этом числе.

const quantityOfEvenNum = (num) => {
  //   let count = 0;
  //   const arrNum = num.toString().split("");
  //   for (let i = 0; i < arrNum.length; i++) {
  //     if (+arrNum[i] % 2 === 0) {
  //       count += 1;
  //     }
  //   }
  //   return count;
  const arrNum = num
    .toString()
    .split("")
    .filter((item) => +item % 2 === 0);
  return arrNum.length;
};

// console.log(quantityOfEvenNum(123456789));

// #4
// Дана некоторая строка: 'abcde'
// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее: 'AbCdE'

const unevenUpperLetter = (str) => {
  return str
    .split("")
    .map((item, index) => (index % 2 === 0 ? item.toUpperCase() : item))
    .join("");

  //   const arrForStr = [...str];
  //   const newArr = arrForStr.map((item, index) =>
  //     index % 2 === 0 ? item.toUpperCase() : item
  //   );
  //   return newArr.join("");
  //   let newStr = "";
  //   for (let i = 0; i < str.length; i++) {
  //     if (i % 2 === 0) {
  //       newStr += str[i].toUpperCase();
  //     } else {
  //       newStr += str[i];
  //     }
  //   }
  //   return newStr;
};

// console.log(unevenUpperLetter("abcde"));

// #5
// Дана некоторая строка со словами: 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее: 'Aaa Bbb Ccc'

const firstLetterToUpperCase = (str) => {
  let newArr = str.split(" ");
  let renewedArr = [];
  let newItem = [];

  for (let i = 0; i < newArr.length; i++) {
    renewedArr.push(newArr[i].split(""));
  }

  renewedArr.forEach((item) => {
    item[0] = item[0].toUpperCase();
    newItem.push(item.join(""));
  });

  return newItem.join(" ");
};
// console.log(firstLetterToUpperCase("aaa bbb ccc"));
