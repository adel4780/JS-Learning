export class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get getArea() {
    return Math.PI * this.radius ** 2;
  }
}
export class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get getArea() {
    return this.width * this.height;
  }
}
