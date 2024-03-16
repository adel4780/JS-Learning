var x = 5;
var y = 10;
var z = x + y;
console.log(z);

z = Math.max(x, y);
console.log(z);

z += x;
console.log(z);

++x;
x++;
--x;
console.log(x);

z *= y + (x - 3) / 4;
console.log(z);

console.log(z % 5);
console.log(y ** 2);

console.log(">= <= == !=");
console.log(x >= 5);
console.log(y <= 11);

console.log(z == 2);
console.log(y != 11);

// strict equality: تایپ هم باید برابر باشد
console.log("=== !==");
console.log(1 === 1);
console.log(1 === "2");
console.log(1 !== "2");

// متغیر سه گانه
var authenticate = true;
var buttonText = authenticate == true ? "dashboard" : "login";
console.log(buttonText);

// false, undefined, null, 0, "", NAN
console.log(!(x >= 5 && (y >= 5 || z == 5)));
console.log(false || "neon");

// 1 = 00000001, 2 = 00000010
console.log(1 | 2);
console.log(1 & 2);
console.log(1 >> 2);
