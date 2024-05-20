// #1
// Выведите в консоль все целые числа от 1 до 100.

const fromOneToHundred = () => {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
};

// // fromOneToHundred()
// console.log(fromOneToHundred());

// #2
// Выведите в консоль все целые числа от -100 до 0.

const fromMinusToZero = () => {
  for (let i = -100; i <= 0; i++) {
    console.log(i);
  }
};

// fromMinusToZero();
// console.log(fromMinusToZero());

// #3
//Выведите в консоль все целые числа от 100 до 1.
const fromHundredToOne = () => {
  for (let i = 100; i >= 1; i--) {
    console.log(i);
  }
};

// fromHundredToOne();
// console.log(fromHundredToOne);

// #4
// Выведите в консоль все четные числа из промежутка от 1 до 100.
const fromOneToHundredEven = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

// fromOneToHundredEven();
// console.log(fromOneToHundredThree());

// #5
// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.

const fromOneToHundredThree = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
};

// fromOneToHundredThree();
// console.log(fromOneToHundredThree());
