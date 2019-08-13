//string

console.log("STRING");

let string = "some test string";

// 1

console.log("task 1 ", string[0], string[string.length - 1]);

// 2

console.log(
  "task 2 ",
  string[0].toUpperCase(),
  string[string.length - 1].toUpperCase()
);

// 3

console.log("task 3 ", string.indexOf("string"));

// 4

let pos1 = string.indexOf(" ");
let pos2 = string.indexOf(" ", pos1 + 1);

console.log("task 4 ", pos2);

// 5

console.log("task 5 ", string.substr(5, 4));

// 6

console.log("task 6 ", string.substring(5, 10));

// 7

string = string.slice(-0, -6);

console.log("task 7 ", string);

// 8

let a = 20;
let b = 16;

a = (20).toString();
b = (16).toString();

string = a + b;

console.log("task 8 ", string);

// number

console.log("NUMBERS");

// 1

let c = Math.PI;

console.log("task 1 ", +c.toFixed(2));

// 2

let d = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
let e = Math.max(15, 11, 16, 12, 51, 12, 13, 51);

console.log("task 2 ", d, e);

// 3

let f = Math.random();

console.log("task 3 ", +f.toFixed(2), Math.round(f * 10));

// 4

let sum = 0.6 + 0.7;

console.log("task 4 ", +sum.toFixed(1));

sum = (0.6 * 10 + 0.7 * 10) / 10;

console.log("task 4 ", sum);

// 5

console.log("task 5 ", parseInt("100$"));

// if else

console.log("IF ELSE");

// 1

let variable = "hidden";

if (variable === "hidden" && true) {
  variable = "visible";
} else if (variable !== "hidden" && true) {
  variable = "hidden";
}

console.log("task 1 ", variable);

// 2

let var1 = 2;

if (var1 === 0 && true) {
  var1 = 1;
} else if (var1 < 0 && true) {
  var1 = "less then zero";
} else if (var1 > 0 && true) {
  var1 *= 10;
}

console.log("task 2 ", var1);

// 3

let car = {
  name: "Lexus",
  age: 10,
  create: 2008,
  needRepair: false
};

if (car.age >= 5 && true) {
  console.log("need Repair");
  car.needRepair = true;
} else {
  car.needRepair = false;
}

console.log("task 3 ", car);

// 4

let item = {
  name: "Intel core i7",
  price: "100$",
  discount: "15%"
};

if (item.discount.valueOf) {
  item.priceWithDiscount = parseInt(item.price) - ((parseInt(item.price) * parseInt(item.discount)) / 100).toFixed(2);
  console.log('task 4 ', item.priceWithDiscount);
} else {
  console.log('task 4 ', item.price);
};

// 5

let product = {
  name: "Яблоко",
  price: "10$"
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена

if (parseInt(product.price) >= min || parseInt(product.price) <= max) {
  console.log("task 5 ", product.name);
} else {
  console.log("task 5 ", "товаров не найдено");
}

// objects

console.log("OBJECTS");

// 1

const phones = {
  product: "iphone"
};

console.log("task 1 ", phones);

// 2

phones.price = 1000;
phones.currency = "dollar";

console.log("task 2 ", phones);

// 3

phones.details = {
  model: "7",
  color: "black"
};

console.log("task 3 ", phones);

// ? switch case

console.log("? SWITCH CASE");

// 1

let var2 = "block"; //имя не как в задаче, т.к. переменная а уже используется

switch (var2) {
  case "block":
    console.log("task 1 ", var2);
    break;

  case "none":
    console.log("task 1 ", "none");
    break;

  case "inline":
    console.log("task 1 ", "inline");
    break;

  default:
    console.log("task 1 ", "other");
}

// 2

console.log("task 2. ? operator");

variable = "hidden";

variable === "hidden" && true ? (variable = "visible") : (variable = "hidden");

console.log(variable);

var1 = 0;

var1 === 0 && true ? (var1 = 1) : console.log("!0");

var1 = -1;

console.log(var1);

var1 < 0 && true ? (var1 = "less then zero") : console.log("var1 < 0");

console.log(var1);

var1 = 2;

var1 > 0 && true ? (var1 *= 10) : console.log("var1 !* 0");

console.log(var1);

car = {
  name: "Lexus",
  age: 10,
  create: 2008,
  needRepair: false
};

// if (car.age >= 5 && true) {
//   console.log('need Repair');
//   car.needRepair = true;
// }

car.age >= 5 && true ? (car.needRepair = true) : (car.needRepair = false);

car.needRepair === true ? console.log("Need Repair") : (car.needRepair = false);

console.log(car);
