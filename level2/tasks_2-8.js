// #1
// Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.

const isStrHaveMoreThanTwoUpperCase = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      count += 1;
    }
  }
  return count > 2
    ? "String has more than 2 UpperCase letter"
    : "String has 2 or less UpperCase letter";
};

// console.log(isStrHaveMoreThanTwoUpperCase("jdDclAkvf"));

// #2
// Дана некоторая строка:'1 22 333 4444 22 5555 1'
// Удалите из этой строки все подстроки, в которых количество символов больше трех.
// В нашем случае должно получится следующее: '1 22 333 22 1'

const deleteIfElMoreThanThree = (str) => {
  let arr = str
    .split(" ")
    .filter((el) => el.length <= 3)
    .join(" ");
  return arr;
};
// console.log(deleteIfElMoreThanThree("1 22 333 4444 22 5555 1"));

// #3
// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// Слейте эти массивы в новый массив следующим образом:
// [1, 2, 'a', 'b', 'c', 3]

const combineTwoArrInOne = (arr1, arr2) => {
  return [...arr1.slice(0, 2), ...arr2, ...arr1.slice(2)];
};

// console.log(combineTwoArrInOne([1, 2, 3], ["a", "b", "c"]));
