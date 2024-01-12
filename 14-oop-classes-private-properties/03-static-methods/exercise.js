// 01-11/24 02:55PM
class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  logName() {
    console.log("Rectangle Name: " + this.name);
  }

  static getClass() {
    return `Rectangle`;
  }
}

const rect = new Rectangle("Rect 1", 20, 20);
console.log(rect.logName());
//console.log(rect.getClass()); // Uncaught TypeError: rect.getClass is not a function
console.log(Rectangle.getClass()); // Rectangle
