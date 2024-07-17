// #1
// Сделайте функцию, которая параметром будет принимать букву и проверять, это буква кириллицы или латиницы.

const isLetterCyrillicOrLatin = (letter) => {
  const latinAlphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const cyrillicAlphabet =
    "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
  if (latinAlphabet.includes(letter)) {
    return "The letter is Latin";
  } else if (cyrillicAlphabet.includes(letter)) {
    return "The letter is Cyrillic";
  } else {
    return "Element is not a letter or neither latin nor cyrillic";
  }
};

// console.log(isLetterCyrillicOrLatin("s"));

// #2
// Сделайте функцию, которая параметром будет принимать массив и перемешивать элементы этого массива в случайном порядке.

const randomElementsInsideArr = (arr) => {
  return arr.sort(() => Math.random() - 0.5);
};

// console.log(randomElementsInsideArr([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// #3
// Дан текст со словами. Запишите все слова этого текста в специальный объект. Ключами в этом объекте будут буквы, а значениями - массивы слов, начинающихся на эти буквы.

const textInObj = (text) => {
  let arr = text.split(" ");
  let obj = {};

  arr.forEach((word) => {
    let firstLetter = word[0].toLowerCase();
    if (obj[firstLetter] === undefined) {
      obj[firstLetter] = [word];
    } else {
      obj[firstLetter].push(word);
    }
  });
  return obj;
};

// console.log(
//   textInObj(
//     "Lorem ipsum dolor sit amet latas consectetur adipisicing elit. Minima dolor vitae porro doloremque numquam harum atque amet fuga cumque ipsa blanditiis distinctio."
//   )
// );
// #4
// Сделайте функцию, которая параметром будет принимать число, а возвращать это число прописью, то есть словами.

const getNumbersInWord = (num) => {
  let obj = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  let arr = num.toString().split("");
  return arr.map((el) => obj[el]).join(" ");
};

// console.log(getNumbersInWord(13));
// #5
// Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей, являющихся простыми числами.

const allPrimeDividersForNumber = (num) => {
  let newArr = [];
  let arrPrime = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      newArr.push(i);
    }
  }
  newArr.forEach((el) => {
    let arr = [];
    for (let i = 1; i <= el; i++) {
      if (el % i === 0) {
        arr.push(i);
      }
    }
    if (arr.length < 3 || arr.length === 1) {
      arrPrime.push(el);
    }
  });
  return arrPrime.filter((el) => el !== 1);
};

// console.log(allPrimeDividersForNumber(12));
// #6
// Сделайте функцию, которая параметром будет принимать слово и возвращать массив его слогов.

const splitIntoSyllables = (word) => {
  const vowels = "аеёиоуыэюяАЕЁИОУЫЭЮЯ";
  let syllables = [];
  let currentSyllable = "";

  for (let i = 0; i < word.length; i++) {
    currentSyllable += word[i];

    // Если текущая буква - гласная и это не последняя буква в слове
    if (vowels.includes(word[i]) && i + 1 < word.length) {
      // Если следующая буква не гласная, завершить текущий слог
      if (!vowels.includes(word[i + 1])) {
        syllables.push(currentSyllable);
        currentSyllable = "";
      }
    }
  }

  // Добавляем оставшийся слог
  if (currentSyllable.length > 0) {
    syllables.push(currentSyllable);
  }

  return syllables;
};

// console.log(splitIntoSyllables("Молоко"));
