// Дано слово.
// Получите его последнюю букву.
// Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

let lastLetterWord = "Мать";

let newLastLetterWord = lastLetterWord[lastLetterWord.length - 1];

if (newLastLetterWord !== "ь") {
  console.log(newLastLetterWord);
} else {
  newLastLetterWord = lastLetterWord[lastLetterWord.length - 2];
  console.log(newLastLetterWord);
}
