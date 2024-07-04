// #1
// Дана строка. Проверьте, что эта строка состоит только из цифр.

const isOnlyDigits = (str) => {
  //   let arr = [...str];
  //   let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (isNaN(+arr[i])) {
  //       newArr.push(arr[i]);
  //     }
  //   }
  //   return newArr.length > 0
  //     ? "Not all element in strings is numbers"
  //     : "String contains only numbers";

  //   let arr = [...str];
  //   let newArr = arr.filter((el) => isNaN(+el));
  //   return newArr.length > 0
  //     ? "Not all element in strings is numbers"
  //     : "String contains only numbers";

  //   return arr.map(
  //     (el) =>
  //       +el.forEach((item) =>
  //         !isNaN(item) ? "All element is numbers" : "Not all element is numbers"
  //       )
  //   );

  return str
    .split("")
    .map((el) => +el)
    .filter((el) => isNaN(el)).length > 0
    ? "Not all element in strings are numbers"
    : "String contains only numbers";
};

// console.log(isOnlyDigits("12345"));

// #2
// Дана строка. Проверьте, что эта строка состоит только из четных цифр.

const isOnlyEvenDigits = (str) => {
  //   return str
  //     .split("")
  //     .map((el) => +el)
  //     .filter((el) => isNaN(el)).length > 0
  //     ? "Not all element in strings are numbers"
  //     : str.split("").every((el) => el % 2 === 0)
  //     ? "All numbers in the string even"
  //     : "Not all numbers in the string even";

  return str
    .split("")
    .map((el) => +el)
    .filter((el) => isNaN(el)).length > 0
    ? "Not all element in strings are numbers"
    : str
        .split("")
        .map((el) => +el)
        .filter((el) => el % 2 !== 0).length > 0
    ? "Not all numbers in the string even"
    : "All numbers in the string even";
};

// console.log(isOnlyEvenDigits("2468"));

// #3
// Дан массив со числами. Удалите из него числа, имеющие два и более нуля.

const removeNumsWithTwoOrMoreZeros = (arr) => {
  let newArr = arr.filter((el) => {
    const zeroCounter = el
      .toString()
      .split("")
      .reduce((sum, el) => (el === "0" ? (sum += 1) : sum), 0);

    return zeroCounter < 2;
  });
  return newArr;
};

// console.log(removeNumsWithTwoOrMoreZeros([102, 200, 3001, 4050, 809]));

// #4
// Найдите все числа от 1 до 1000, сумма цифр которых равна 13.

const findNumsWithDigitSum13 = () => {
  let arr = [];
  for (let i = 1; i <= 1000; i++) {
    let splitI = i
      .toString()
      .split("")
      .reduce((sum, el) => {
        return sum + +el;
      }, 0);
    if (splitI === 13) {
      arr.push(i);
    }
  }
  return arr;
};

// console.log(findNumsWithDigitSum13());

// #5
// Сформируйте с помощью циклов следующий массив:
// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]

const createNestedArray2 = () => {
  // let arr = [];
  // for (let i = 0; i < 1; i++) {
  //   let subArr = [];
  //   for (let j = 1; j <= 3; j++) {
  //     subArr.push(j);
  //   }
  //   arr.push(subArr);
  //   let subArr2 = [];
  //   for (let j = 4; j <= 6; j++) {
  //     subArr2.push(j);
  //   }
  //   arr.push(subArr2);
  //   let subArr3 = [];
  //   for (let j = 7; j <= 9; j++) {
  //     subArr3.push(j);
  //   }
  //   arr.push(subArr3);
  // }
  // return arr;
  let arr = [];
  let counter = 1;
  for (let i = 0; i < 3; i++) {
    let subArr = [];
    for (let j = 0; j < 3; j++) {
      subArr.push(counter);
      counter++;
    }
    arr.push(subArr);
  }
  return arr;
};

// console.log(createNestedArray2());
