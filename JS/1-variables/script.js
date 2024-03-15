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

const joined = num2.join(" / ");
console.log(joined);
// Function:
console.log("--------Function--------");
function greeting(name) {
  console.log("name: " + name);
}
function squear(number) {
  return number * number;
}
greeting("ali");
console.log(squear(2));
