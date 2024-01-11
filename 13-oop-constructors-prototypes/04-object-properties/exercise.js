//01-10-24

function Rectangle(name, width, height) {
  this.width = width;
  this.height = height;
  this.name = name;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle("Rectangle 1", 10, 10);
const rect2 = new Rectangle("Rectangle 2", 20, 20);

console.log(rect1.name, rect1.width); // 1 10
console.log(rect2["width"]); // 20

// add a property color
rect1.color = "red";

// add a method

rect2.perimeter = () => 2 * (rect2.width + rect2.height); // 80
console.log(rect2.perimeter());

// check the instances with new added method and property
console.log(rect1);
console.log(rect2);

// delete a property

delete rect2.perimeter;
console.log(rect2);

// check property
console.log(rect2.hasOwnProperty("color")); // false
console.log(rect1.hasOwnProperty("color")); // true

// get keys
console.log(Object.keys(rect1)); // [ 'width', 'height', 'name', 'area', 'color' ]

//get values
console.log(Object.values(rect2)); // [ 20, 20, 'Rectangle 2', [Function (anonymous)] ]

// get entries

console.log(Object.entries(rect1));

for (let [key, value] of Object.entries(rect1)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`); // only log the properties
  }
}
