// 01-10-24

// First Letter Capitalize
function Rectangle(name, width, height) {
  this.width = width;
  this.height = height;
  this.name = name;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle("rect1", 30, 40);
console.log(rect1.area());
console.log(rect1 instanceof Rectangle);
console.log(rect1.constructor);
