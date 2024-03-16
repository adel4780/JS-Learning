class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get getArea() {
    return Math.PI * this.radius ** 2;
  }
}
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get getArea() {
    return this.width * this.height;
  }
}
module.exports.Circle = Circle;
module.exports.Rectangle = Rectangle;
//
