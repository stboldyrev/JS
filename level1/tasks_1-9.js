// #1
// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

const httpArr = (arr) => {
  return arr.filter((el) => el.startsWith("http://"));
};

// console.log(
//   httpArr([
//     "http://instagram.com",
//     "http://facebook.com",
//     "mama",
//     "http://x.com",
//     "hello",
//   ])
// );
// #2
// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.

const htmlArr = (arr) => {
  return arr.filter((el) => el.endsWith(".html"));
};

// console.log(
//   htmlArr([
//     "http://instagram.com",
//     "http://facebook.com",
//     "mama.html",
//     "http://x.com",
//     "hello.html",
//   ])
// );
// #3
// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

const multiply10 = (arr) => {
  let percent = 10;
  return arr.map((el) => el + (el * percent) / 100);
};

// console.log(multiply10([100, 300, 4, 13, 247]));
