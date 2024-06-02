// #1
// Дана некоторая строка. Найдите позицию первого нуля в строке.

const findIndexZero = (str) => {
  return str.indexOf("0") === -1 ? "0 was not found" : str.indexOf("0");
};

// console.log(findIndexZero("12034560789"));

// #2
// Выведите в консоль все числа в промежутке от 1 до 100, сумма первой и второй цифры которых равна пяти.

const sumTwoNumbers = () => {
  let sumArr = [];
  for (let i = 1; i <= 100; i++) {
    let str = i.toString();
    if (+str[0] + +str[1] === 5) {
      sumArr.push(i);
    }
  }
  return sumArr;
};

// console.log(sumTwoNumbers());

// #3
// Дан массив. Удалите из него элементы с заданным значением.

const deleteElementFromArr = (arr, el) => {
  return arr.filter((item) => item !== el);
};

// console.log(deleteElementFromArr(["Ivan", "Petya", "Olya", "Anton"], "Olya"));

// #4
// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]; Найдите сумму первой половины элементов этого массива.

const sumFirstElArr = (arr) => {
  let halfArr = arr.slice(0, Math.ceil(arr.length / 2));
  return halfArr.reduce((sum, item) => (sum += item), 0);
};

// console.log(sumFirstElArr([1, 2, 3, 4, 5, 6]));
