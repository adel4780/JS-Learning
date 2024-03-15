// create object
console.log("------Create Object------");
var circle1 = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function (params) {
    console.log(params);
  },
};
console.log(circle1);
circle1.draw("circle1");

console.log("------Object------");
var circleKeys = Object.keys(circle1);
console.log(circleKeys);
circleKeys.forEach(function (key) {
  console.log(key);
});

var circleValues = Object.values(circle1);
console.log(circleValues);

// Array of Arrays
var circleEntries = Object.entries(circle1);
console.log(circleEntries);
for (const iterator of circleEntries) {
  console.log(iterator);
}

// Factory Function
console.log("------Factory Function------");
function createCircle(radius, location, isVisible) {
  return {
    radius: radius,
    location,
    isVisible,
    draw: function () {
      console.log(location["x"] + " " + location["y"]);
    },
    coloring() {
      console.log("Pushing...");
    },
  };
}
var circle2 = createCircle(2, { x: 2, y: 2 }, true);
console.log(circle2);
circle2.draw();
circle2.coloring();
console.log();

// Constructor function
console.log("------Constructor Function------");
function Circle(radius, location, isVisible) {
  this.radius = radius;
  this.location = location;
  this.isVisible = isVisible;

  this.draw = function () {
    console.log("draw");
  };
  this.coloring = function () {};
}

var circle3 = new Circle(3, { x: 3, y: 3 }, true);
console.log(circle3);
circle3.draw();
console.log();

Circle.call({}, 9, { x: 3, y: 3 }, true); // == new Circle(...)
Circle.apply({}, [9, { x: 3, y: 3 }, true]); // == new Circle(...)

// Object function
console.log("------Object Function------");
var circle4 = new Function(
  "radius",
  "location",
  "isVisible",
  `this.radius = radius;
    this.location = location;
    this.isVisible = isVisible;
  
    this.draw = function () {
      console.log("draw");
    };
    this.coloring = function () {};`
);

var circle5 = new circle4(5, { x: 5, y: 5 }, true);
console.log(circle5);
console.log();

// Clone Object: مستقل کردن اشیا از هم /کپی کردن شی
console.log("------Object Clone------");
var circle6 = {
  radius: 6,
  location: {
    x: 6,
    y: 6,
  },
  isVisible: true,
  draw: function (params) {
    console.log(params);
  },
};

var another = Object.assign({ color: "red" }, circle6);
console.log(another);

another = { background: "green", ...circle6 };
console.log(another);

// Math Object
console.log("------Math Object------");
var min = 10;
var max = 50;
var rand = Math.floor(Math.random() * (max - min) + min);
console.log(rand);

// String Object
console.log("--------String Object--------");
const str = "   Hello, world!   ";
const anotherString = new String("Hi, I'm neon");
console.log(str.trim());
console.log(str.split(","));
console.log(anotherString.replace(",", ""));
console.log(str.includes("ld"));
console.log(anotherString.toLowerCase());
console.log(anotherString.indexOf("Hi, I"));

// ` جایگزینی برای \n
const message = `Hi,
I\'m in the world!
you have a nice name baby.`;
console.log(message);

let name = "ali";
let msg = `hi ${name}, thanks for your success!`;
console.log(msg);

// Date Object
console.log("--------Date Object--------");
const now = new Date();
const date1 = new Date("May 11 2018 09:00");
const date2 = new Date(2018, 4, 11, 9, 0);
console.log(now.toUTCString());
console.log(date1.toDateString());
console.log(date2.toISOString());
console.log(date1.getMonth());
console.log(date2.getHours());
