//01-10-24 Section 14: 2:12PM

class Rectangle {
  constructor(name, width, height) {
    this.width = width;
    this.height = height;
    this.name = name;
  }

  area() {
    return this.height * this.width;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  isSquare() {
    return this.height === this.width;
  }

  logArea() {
    // return this.area();
    console.log("Rectangle Area: " + this.area());
  }
}

const square = new Rectangle("Square", 20, 20);
console.log(square);
console.log(square.area());
console.log(Object.getPrototypeOf(square));
console.log(square.logArea());
