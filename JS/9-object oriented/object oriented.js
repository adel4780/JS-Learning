// abstracttion method: مخفی کردن ویژگی ها با
// let, var, const
console.log("----------abstraction----------");
function Oval(radius) {
  this.radius = radius;
  var location = { x: 0, y: 0 };
  let computeOptimumLocation = function () {};
  this.draw = function () {
    computeOptimumLocation();
    console.log("drawing...");
  };
}
const oval = new Oval(10);
console.log(oval);

console.log("----------inheritance----------");

// const _color = new Symbol()
// const _color = new WeakMap(); _color. set(this, color);
class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
    //_color.get(this);
  }

  getArea() {
    return "متود getArea در زیر کلاس پیاده‌سازی نشده است.";
  }
  static setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  get getArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  get getArea() {
    return this.width * this.height;
  }
}

const redCircle = new Circle("قرمز", 5);
console.log("مساحت دایره قرمز:", redCircle.getArea);

const blueRectangle = new Rectangle("آبی", 4, 6);
console.log("مساحت مستطیل آبی:", blueRectangle.getArea);

Shape.setColor("زرد");
console.log(Shape);
