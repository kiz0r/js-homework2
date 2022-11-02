// Якщо користувач введе число 10 => виводити "Вірно", інакше виводити "Невірно"
const userInput = Number(prompt("Уведіть число : "));
if (userInput === 10) {
  console.log("Вірно.");
} else {
  console.log("Невірно.");
}

let test = true;
if (test) {
  console.log("Вірно.");
} else {
  console.log("Невірно.");
}

test = false;
if (!test) {
  console.log("Вірно.");
} else {
  console.log("Невірно.");
}

// Завдання на покупки
const userPrice = Number(prompt("Введіть суму покупки"));
let discount = 0;
if (Number.isFinite(userPrice)) {
  if (userPrice > 500 && userPrice < 800) {
    discount = userPrice * 0.03;
    console.log(
      "Кінцева ціна з урахуванням знижки 3% = ",
      userPrice - discount
    );
  } else if (userPrice > 800) {
    discount = userPrice * 0.05;
    console.log(
      "Кінцева ціна з урахуванням знижки 5% = ",
      userPrice - discount
    );
  } else {
    console.log("Кінцева ціна = ", userPrice);
  }
} else {
  console.log("Ви ввели некоректні дані");
}

// Виведення від 25 до 0
console.log("ВІД 25 ДО 0");
for (let num = 25; num >= 0; num--) {
  console.log(num);
}

// Виведення від 10 до 50 (кожен раз збільшити попереднє значення на 5)
console.log("ВІД 10 ДО 50 (КОЖЕН РАЗ +5)");
const numberCounter = 5;
for (let startNumber = 10; startNumber <= 50; startNumber += numberCounter) {
  console.log(startNumber);
}

// Сумма чисел від 1 до 100
let result = 0;
for (let startPoint = 1; startPoint <= 100; startPoint++) {
  result += startPoint;
}
console.log("Сумма чисел від 1 до 100 =", result);

/*Реализация заданий с циклами через while*/

//  console.log("ВІД 25 ДО 0");
// let num = 25;
// while(num >= 0) {
//   console.log(num);
//   num--;
// }

// // Виведення від 10 до 50 (кожен раз збільшити попереднє значення на 5)
// console.log("ВІД 10 ДО 50 (КОЖЕН РАЗ +5)");
// const numberCounter = 5;
// let startNumber = 10;
// while(startNumber <= 50) {
//   console.log(startNumber);
//   startNumber += numberCounter;
// }

// // Сумма чисел від 1 до 100
// let result = 0;
// let startPoint = 1;
// while(startPoint <= 100) {
//   result += startPoint;
//   startPoint++;
// }
// console.log("Сумма чисел від 1 до 100 =", result);
