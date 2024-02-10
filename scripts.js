// 1 Завдання
// У вас є масив об'єктів fruits, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен

// const ex1 = () => {
//   const fruits = [
//     { id: 0, name: "Apple" },
//     { id: 1, name: "Tomato" },
//     { id: 2, name: "Cherry" },
//     { id: 3, name: "Orange" },
//   ];
  
//   let fruitNames = [];
  
//   for (let fruit of fruits) { fruitNames.push(fruit.name); }
  
//   console.log(fruitNames);
// }

// ex1();


// 2 Завдання
// Виведіть парні числа від 2 до 10, використовуючи цикл for

// const ex2 = () => {
//   for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) { console.log(i); }
//   }
// }

// ex2();


// 3 Завдання
// Замініть кикл "for" на "while"
// for (let i = 0; i < 5; i++) { console.log(`цифра ${i}!`); }

// const ex3 = () => {
//   let i = 0;

//   while (i < 5) {
//     console.log(`цифра ${i}!`);
//     i++;
//   }
// }

// ex3();


// 4 Завдання
// Напишіть цикл, який пропонує prompt ввести число більше за 100.
// Якщо відвідувач введе менше число - попросити ввести ще раз, і так далі.
// Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// const ex4 = () => {
//   while (true) {
//     let userInput = prompt('Введіть чилсло більше за 100');

//     if (userInput) {
//       userInput = parseInt(userInput);
      
//       if (userInput > 100) { break }
//     } else { break; }
//   }
// }

// ex4();


// 5 Завдання
// Вирахуйте середній вік

// const ex5 = () => {
//   const girls = [
//     {age: 23, name: 'Оля'},
//     {age: 29, name: 'Аня'},
//     {age: 10, name: 'Юля'},
//     {age: 20, name: 'Катя'},
//   ];
  
//   let averageAge = 0;

//   for (let girl of girls) { averageAge += girl.age; }
//   averageAge = averageAge / girls.length;
//   console.log(`Середній вік: ${averageAge}`);
// }

// ex5();
