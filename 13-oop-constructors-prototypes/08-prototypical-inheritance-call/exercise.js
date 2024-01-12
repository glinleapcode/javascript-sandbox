function Shape(name) {
  this.name = name;
}

Shape.prototype.logName = function () {
  console.log(`Shape Name: ${this.name}`);
};

function Rectangle(name, width, height) {
  Shape.call(this, name);
  this.width = width;
  this.height = height;
}

// Inherits Shape Prototype, prototypal inheritance
Rectangle.prototype = Object.create(Shape.prototype);

// overwrite the logName in Shape, polymorphism
Rectangle.prototype.logName = function () {
  console.log(`Rectangle Name: ${this.name} Overwrites Shape LogName`);
};

// set the prototype of Rectangle back to Rectangle
Rectangle.prototype.constructor = Rectangle;

const rect = new Rectangle("Rectangle 1", 10, 10);
console.log(rect);
// console.log(rect.name);

// call the logName method of the shape prototype
rect.logName();

// Check the constructor of Rectangle
// console.log(rect.constructor); // Shape
