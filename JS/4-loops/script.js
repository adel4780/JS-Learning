var array = [7, 8, 9, 10, 11];
console.log(" --- for --- ");
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}
console.log(" --- while --- ");
var i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++;
}

console.log(" --- do-while --- ");
i = 0;
do {
  console.log(array[i]);
  i++;
} while (i < array.length);

console.log("--- for .. in: شمارش اندیس ها --- ");
for (const key in array) {
  console.log(key + ": " + array[key]);
}

person = { name: "John", age: 27 };
for (const key in person) {
  console.log(key + ": " + person[key]);
}

console.log("--- for .. of: شمارش عناصر --- ");
var colors = ["red", "green", "blue"];
for (const iterator of colors) {
  console.log(iterator);
}

console.log("--- for .. each: شمارش عناصر --- ");
array.forEach((element) => {
  console.log(element);
});

console.log("break & continue");
for (let i = 0; i < 10; i++) {
  if (i >= 2 && i <= 5) {
    console.log("continue!");
    continue;
  }
  console.log("wait !!");
  if (i == 8) {
    console.log("OK lets Go!");
    break;
  }
}
