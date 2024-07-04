// #1
// Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.

const areAllNumContainsThree = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].toString().includes("3")) {
      return "Not all numbers in arr include 3";
    }
  }
  return "All numbers in arr include 3";
  // return arr.forEach((el) => (el.toString().includes(3) ? "Yes" : "No"));
};

// console.log(areAllNumContainsThree([13, 62, 863, 6893, 423, 3, 1253, 23]));

// #2
// Дана строка в формате: 'kebab-case'
// Преобразуйте ее в формат: 'snake_case'

const kebabToSnakeCase = (str) => {
  return str.replace(/-/g, "_");
};

// console.log(kebabToSnakeCase("kebab-case"));

// #3
// Дана строка в формате: 'snake_case'
// Преобразуйте ее в формат: 'camelCase'

const snakeToCamelCase = (str) => {
  return str
    .split("_")
    .map((el, i) => (i !== 0 ? el.slice(0, 1).toUpperCase() + el.slice(1) : el))
    .join("");
};

// console.log(snakeToCamelCase("snake_case"));

// #4
// Дана строка в формате: 'camelCase'
// Преобразуйте ее в формат: 'snake_case'

const camelToSnakeCase = (str) => {
  return str
    .split(/(?=[A-Z])/)
    .map((el) => el.toLowerCase())
    .join("_");
};

// console.log(camelToSnakeCase("camelCase"));

// #5
// Сформируйте с помощью циклов следующий массив:
// [
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// ]

const createArrViaFor = () => {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    let subArr = [];
    for (let j = 1; j <= 3; j++) {
      subArr.push(j);
    }
    arr.push(subArr);
  }
  return arr;
};

// console.log(createArrViaFor());
