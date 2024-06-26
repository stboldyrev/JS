// #1
// Дана строка со словами. Отсортируйте слова в алфавитном порядке.
const sortWithAlphabet = (str) => {
  return str.toLowerCase().split(" ").sort();
};

// console.log(
//   sortWithAlphabet(
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos earum quidem ut repudiandae quo quaerat deserunt exercitationem delectus, repellat, dolore sapiente necessitatibus consequuntur adipisci, eveniet pariatur hic non aperiam voluptatum."
//   )
// );

// #2
// Дано число. Получите массив делителей этого числа.

const allDividersForNumber = (num) => {
  let newArr = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      newArr.push(i);
    }
  }
  return newArr;
};

// console.log(allDividersForNumber(12));

// #3
// Даны два числа. Получите массив общих делителей этих чисел.

const allDividersForTwoNumbers = (num1, num2) => {
  let newArr = [];
  for (let i = 1; i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      newArr.push(i);
    }
  }
  return newArr;
};

// console.log(allDividersForTwoNumbers(12, 16));

// #4
// Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.

const hasNumOnlyOneDivider = (num) => {
  let newArr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      newArr.push(i);
    }
  }
  if (newArr.length === 3) {
    return "Num has only one divider";
  } else if (newArr.length <= 2) {
    return "Num has less than one or no divider";
  } else {
    return "Num has more than one divider";
  }
};

// console.log(hasNumOnlyOneDivider(9));

// #5
// Через запятую написаны числа. Получите максимальное из этих чисел.

const maxNumber = (num) => {
  return num.sort((a, b) => b - a)[0];
  //   return num.sort((a, b) => a - b)[num.length - 1];
};

// console.log(maxNumber([1, 3, 9, 6, 7, 4, 8, 2, 5]));

// #6
// Дан массив с числами. После каждого однозначного числа вставьте еще такое же.

const duplicateNumWithOneDigit = (arr) => {
  let newArr = [];
  arr.forEach((el) =>
    el.toString().length == 1 ? newArr.push(el, el) : newArr.push(el)
  );
  return newArr;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i].toString().length == 1) {
  //       newArr.push(arr[i], arr[i]);
  //     } else {
  //       newArr.push(arr[i]);
  //     }
  //   }
  //   return newArr;
};

// console.log(duplicateNumWithOneDigit([1, 12, 5, 23, 8, 7, 14, 3, 10]));

// #7
// Дана строка. Удалите из нее все гласные буквы.

const deleteAllVowelsLetterInStr = (str) => {
  return str
    .split("")
    .filter((el) => !el.match(/[aeiouAEIOU]/g))
    .join("");
  //   return str.replace(/[aeiouAEIOU]/g, "");
};

// console.log(deleteAllVowelsLetterInStr("Hello World!"));

// #8
// Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.

const capitaliseLastLetterOfEachWord = (str) => {
  return str
    .split(" ")
    .map((el) => el.slice(0, -1) + el[el.length - 1].toUpperCase());
};

// console.log(
//   capitaliseLastLetterOfEachWord(
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit Ut labore excepturi eos accusantium placeat maxime cumque hic numquam repellat soluta velit iusto nulla animi fuga dolorem est accusamus distinctio corporis"
//   )
// );

// #9
// Дан следующая структура:
// let data = [
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// ];
// Найдите сумму элементов этой структуры.

const sumOfElInData2 = (data) => {
  return data
    .map((el) =>
      Object.values(el).map((el) =>
        el.reduce((sum, value) => (sum += value), 0)
      )
    )
    .map((el) => el.reduce((sum, item) => (sum += item), 0))
    .reduce((sum, item) => (sum += item), 0);
};

// console.log(
//   sumOfElInData2([
//     {
//       1: [1, 2, 3],
//       2: [1, 2, 3],
//       3: [1, 2, 3],
//     },
//     {
//       1: [1, 2, 3],
//       2: [1, 2, 3],
//       3: [1, 2, 3],
//     },
//     {
//       1: [1, 2, 3],
//       2: [1, 2, 3],
//       3: [1, 2, 3],
//     },
//   ])
// );
