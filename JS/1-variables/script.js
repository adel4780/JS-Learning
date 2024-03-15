// Primitive types:
console.log("--------Primitive types--------");
let name = "test";
name = "reza";
console.log("name: " + name);

var value = 2;
console.log("value: " + value);

var admin = false;
var email = undefined; //  مقدار دهی نشود
var password = null; // هیچی انتخاب نشه

const last = "Karimi";

var test = "ali";
console.log("Old test: " + typeof test);

test = 2;
console.log("New test: " + typeof test);

// Reference Types:
/*
    Object 
    Array
    Function
*/
console.log("--------Primitive types--------");
// Object:
console.log("--------Object--------");
var person = {
  name: "mamad",
  age: 27,
  admin: false,
};
console.log(person);
console.log(person.name);
console.log(person["age"]);

// Array:
console.log("--------Array--------");
var users = ["reza", "ali", 2, true];
users.push("adel", "majid");
users.pop();
users.shift();
users.splice(2, 0, "Azar");
users.splice(3, 1);
console.log(users);
console.log(users[0]);
console.log(users[3]);
console.log(users.length);
console.log(users.indexOf("Azar"));
console.log(users.includes(2));
users.splice(0, users.length);

var courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

console.log(
  courses.find((course) => (courses.id == 1 ? course.name : "Failed!"))
);

// Array Concatenation
console.log("--Array Concatenation--");
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);
const temp = ["a", ...first, "b", ...second, "c"];

console.log(combined);
console.log(temp);
const slicer = combined.slice(2);
console.log(slicer);

const num1 = [{ id: 1, name: "ab" }];
const num2 = [4, 5, 6];
const combine = num1.concat(num2);
num1[0].id = 20;
console.log(combine);

combine.forEach((element, index) => console.log(index + ": " + element));

// Array Join
console.log("--Array Join--");
const joined = num2.join(" / ");
console.log(joined);

const message = "Neon codeing is cool";
const parts = message.split(" ");
console.log(parts);
const com = parts.join("-");
console.log(com); /* URL: neonlearn.ir/articles/Neon-codeing-is-cool*/

// Array Sorting
console.log("--Array Sorting--");
const num3 = [5, 4, 3, 2, 1];
num3.sort();
console.log(num3);

const lessons = [
  { id: 1, name: "html" },
  { id: 2, name: "css" },
  { id: 3, name: "js" },
];
lessons.sort(function (a, b) {
  let nameA = a.name.toLowerCase();
  let nameB = b.name.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(lessons);

// Element Testing
console.log("--Element Testing--");
const arr1 = [1, 2, -1, 3, 4, 5];
const allPositive = arr1.every(function (value, index, array) {
  return value >= 0;
});
console.log(allPositive);

const someNegative = arr1.some(function (value, index, array) {
  return value < 0;
});
console.log(someNegative);

// Array Filtering
console.log("--Array Filtering--");
const arr2 = [1, 2, -1, 3, 4];
const filtered = arr2.filter(function (value, index, array) {
  return value >= 0;
});
console.log(filtered);

const terpaper = [
  { name: "ali", age: 20 },
  { name: "reza", age: 21 },
  { name: "adel", age: 22 },
  { name: "mahshid", age: 23 },
  { name: "maryam", age: 20 },
];
const tempo = terpaper.filter((value) => value.age > 20);
console.log(tempo);

// Array Mapping
console.log("--Array Mapping --");
const tempoo = [1, 3, 5, 7];
const result = tempoo.map(function (value, index) {
  return value * 2;
});
console.log(result);

const products = ["html", "json", "css", "js"];
const items = products.map(function (product, index) {
  return `<li>${product}</li>`;
});
console.log(items);
const html = `<ul>${items.join("")}</ul>`;
console.log(html);

const templates = products.map((product) => ({ value: product }));
console.log(templates);

const numm = [1, -1, 2, 3];
const mmp = numm.filter((value) => value >= 0).map((n) => ({ value: n }));
console.log(mmp);

const arr3 = [1, 2, 3, 4, 5, 6];
var sum2 = arr3.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
// accumulator = 0 , currentValue = arr3[0]; then accumulator + currentValue
console.log(sum2);

// Function:
console.log("--------Function--------");

// Function Declaration: قبل از تعریفش میتونی صداش بزنی
greeting("Reza");

function greeting(name) {
  console.log("name: " + name);
}
function squear(number) {
  return number * number;
}
greeting("ali");
console.log(squear(2));

// Function Expression: قبل از تعریفش نمیتونی صداش بزنی
//run();
let run = function () {
  console.log("run");
};

let move = run;
run();
move();

// arguments
console.log("----arguments----");
var sum = function suming() {
  var total = 0;
  for (const iterator of arguments) {
    total += iterator;
  }
  return total;
};
console.log(sum(5, 4, 3, 2, 1));

var sum2 = (...args) => {
  var total = 0;
  for (const iterator of args) {
    total += iterator;
  }
  return total;
};

console.log(sum2(1, 2, 3, 4));

function interest(principal, rate, years = 5){
  return ((principal * rate) / 100) * years;
}
console.log(interest(100000, 3.5));