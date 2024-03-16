// COMMONJS -> Node.js

const { Circle, Rectangle } = require("./commonJS.js");

const c = new Circle(10);
console.log(c.getArea);
const r = new Rectangle(4, 3);
console.log(r.getArea);
