// #1
// Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.

const sortSentence = (str) => {
  return str
    .split(" ")
    .sort((a, b) => a.localeCompare(b))
    .join(" ");
};

// console.log(sortSentence("Lorem ipsum dolor sit amet consectetur"));

// #2
// Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.

const generalElInTwoArr = (arr1, arr2) => {
  let generalArr = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      generalArr.push(arr2[i]);
    }
  }
  return generalArr;
};

// console.log(generalElInTwoArr([1, 2, 3, 4], [1, 4, 5]));

// #3
// Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.

const randomButNotRepeatTwiceNum = () => {
  const randomNum = Math.floor(Math.random() * 10);
  while (randomNum !== lastNum) {
    randomNum = Math.floor(Math.random() * 10);
  }
  const lastNum = randomNum;

  return randomNum;
};

// console.log(randomButNotRepeatTwiceNum()); ??

// #4
// Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент.
// Смотрите пример:
// let arr = [1, 2, 3, 4, 5];
// func(arr, 1); // 2
// func(arr, 4); // 5
// func(arr, 5); // 1

const nextElInArr = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(num)) {
      const el = arr.indexOf(num);
      return arr[el + 1];
    } else {
      return "Element was not found";
    }
  }
};

// console.log(nextElInArr([1, 2, 3, 4, 5], 3));
