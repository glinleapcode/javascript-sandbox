// 01-11-24 2:39PM

class Shape {
  constructor(name) {
    this.name = name;
  }

  logName() {
    console.log("Shape Name: " + this.name);
  }
}

class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }

  logName() {
    console.log("Rectangle Name: " + this.name);
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  logName() {
    console.log("Circle Name: " + this.name);
  }
}

const rect = new Rectangle("Rect 1", 20, 20);
const circle = new Circle("Cir 1", 30);
console.log(rect);
rect.logName(); // just work
console.log(circle);
circle.logName(); //

console.log(rect instanceof Rectangle); //true
console.log(rect instanceof Shape); //true
