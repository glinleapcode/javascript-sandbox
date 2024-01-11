# Modern JavaScript From The Beginning 2.0 - Brad Traversy

## Section 4: Functions, Scopes & Execution Context

### Execution Context

- Execution context is the environment in which JavaScript code is executed. It consists of the variable environment, the scope chain, and the `this` keyword.
- When you run any JavaScript code, a special environment is created to handle the transformation and execution of code. This is called the execution context. It contains the currently running code and everything that aids in its execution.

#### Execution Context Phases

- Memory Creation Phase
  - Create the global object(browser = window, node = global)
  - Create the `this` object and bind it to the global object.(can check `this` in the console, same as window in the browser)
  - Setup memory heap for storing variables and function references
  - Store functions and variables in global execution context and set to "undefined"
- Execution Phase
  - Execute code line by line
  - Create a new execution context for each function call(nested execution context)

Example: (refer to notion notes for pictures)

## Section 10: Asynchronous JavaScript

### Promises

- Most of the time we deal with the response from a promise, not writing them. For example, we use `fetch` to get data from an API and it returns a promise. We need to know what to do with the promise and how to handle it.
- We use `new Promise` to create a promise. It takes in a function with two parameters: `resolve` and `reject`. Inside the function, we perform the asynchronous operation. If the operation is successful, we call `resolve` and pass in the data. If the operation fails, we call `reject` and pass in the error.

```javascript
const promise = new Promise((resolve, reject) => {
  // simulate doing some async task
  const success = Math.random() > 0.5;
  setTimeout(() => {
    if (success) {
      resolve({ name: "John", title: "CEO" });
    } else {
      reject("Something wrong and I can not get the data!");
    }
  }, 1000);
});

promise
  .then((user) => {
    console.log("successfully get the data", user);
  })
  .catch((err) => console.log(err));

console.log("Hello from the global scope");
```

- `setTimeout(callback, time)` is the function that you invoke to register your callback function and specify under what asynchronous conditions it should be invoked.

### Promises vs Callback Hell

## Section 14: OOP - Constructors & Prototypes

### What is OOP?

#### Components of OOP

- Constructor Functions(JS): Creates a blueprint for an object
- Prototypes(JS): a way for objects to inherit properties and methods from anther object
- Classes: Another way to create a blueprint. Introduced in ES6 and it is just syntactic sugar over constructor functions and prototypes. This is different from classes in other languages like Java or C++.
- Instances: Objects created from a blueprint(constructor function or class)

#### 4 Principles of OOP

- Abstraction: Hiding all but the relevant parts of an object in order to reduce complexity and increase efficiency. For example, we don't need to know how a car works to drive it.
  - When we use fetch() or we create an event listener, we don't need to know how it works. We just need to know how to use it.
  - When we look at a public API, we don't know how it works internally or what goes on on the server, we just hit the endpoint and get the data.
  - Reduce complexity and isolate impact of changes. For example, if we change the implementation of a function, we don't need to change the code that uses it.
- Encapsulation: The process of wrapping up data and methods into a unit such as a class or a function. Encapsulation usually includes some kind of data hiding. For example, we can use private variables and methods to hide implementation details. Think about scope and closures in JS, we cannot access variables inside a function from outside.
- Inheritance: The process of inheriting properties and methods from a parent class or constructor. For example, we can create a class called Person and then create another class called Customer that inherits from Person. Customer will have all the properties and methods of Person.
- Polymorphism: The process of changing or overriding methods inherited from a parent class. For example, we can have a method called `getDetails()` in Person and then override it in Customer.

### Object Literals and `this` keyword

- `this` keyword refers to the current instance of the object. It is a reference to the current object.
- The value of `this` is determined by how a function is called. It can be called in four ways:
  - Method: `this` refers to **the object** that the method belongs to. For example, `person.getDetails()` `this` refers to `person`.
  - Function: `this` refers to the global object. In the browser, it is the window object. In node, it is the global object.
  - Constructor: `this` refers to the instance of the object that is created by the constructor.
  - Call and Apply: `this` refers to the first argument passed to `call` or `apply`.
- Object literals means creating an object using `{}`. We can use object literals to create a single object. We can create a method inside the object literal also like the `area` method in the following example.

  ```javascript

  const rectangle = {
  name: "Rectangle 1",
  width: 10,
  height: 10,
  area: function () {
    return this.width * this.height;
  },
  };

  ```

- The disadvantage of object literals is that we cannot create multiple objects with the same properties and methods. For example, if we want to create another rectangle, we have to copy and paste the code and change the values. This is not efficient and not scalable.
- We can use constructor functions to create a blueprint for an object.

### Constructor Functions

- Constructor functions are functions that create objects. We can use `new` keyword to create an instance of an object. When we use `new` keyword, it does four things:
  - Creates a new empty object
  - The constructor function is called with the arguments that we passed in
  - The `this` keyword is set to the new object
  - The new object is returned from the constructor function

```javascript
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

```

- We first create a constructor function called `Rectangle`. It's a convention to capitalize the first letter of a constructor function.
- We pass in three parameters: `name`, `width`, and `height`. Inside the constructor function, we use `this` keyword to set the properties of the object. We also create a method called `area` inside the constructor function. - We use `new` keyword to create an instance. We pass in the arguments to the constructor function. We can access the properties and methods of the object using dot notation.
- We can use `instanceof` to check if an object is an instance of a constructor function. We can use `constructor` to check the constructor of an object.

### Literals vs Built-in Constructors

- When we use a property of method of an object, JS engine first looks for the property or method in the object itself. If it cannot find it, it looks for it in the prototype of the object. If it cannot find it in the prototype, it looks for it in the prototype of the parent object. This is called the prototype chain. The prototype chain is used to implement inheritance in JS.

```javascript
// 1-10-24

// strLit is literal
const strLit = "Hello";
// strObj is an object
const strObj = new String("Hello");

console.log(strLit, typeof strLit); // hello string
console.log(strObj, typeof strObj); // [String: 'Hello'] object

// Boxing: literal to object
console.log(strLit.toUpperCase()); // HELLO
console.log(strLit[0]); // H

// Unboxing: object to literal
console.log(strObj.valueOf(), typeof strObj.valueOf()); // valueOf is the Object's prototype(inherited)

// constructor
console.log(strLit.constructor); // same constructor function returned
console.log(strObj.constructor); // same constructor function returned

// instance
console.log(strLit instanceof String); // false
console.log(strObj instanceof String); // true

// Other types Number, Boolean, Array

const numLit = 20;
const numObj = new Number(20);

console.log(numLit, typeof numLit); // 20 number
console.log(numObj, typeof numObj); //[Number: 20] object

const boolLit = true;
const boolObj = new Boolean(true);

console.log(boolLit, typeof boolLit); // true boolean
console.log(boolObj, typeof boolObj); // [Boolean: true] object

const arrLit = [1, 2, 3, 4, 5]; // object
const arrObj = new Array(1, 2, 3, 4, 5); //object
console.log(arrLit, typeof arrLit); // same
console.log(arrObj, typeof arrObj); //same

// weird stuff

const funcLit = function (x) {
  return x * x;
};

console.log(funcLit, typeof funcLit); // [Function: funcLit] function
console.log(funcLit(10)); // 100

const funcObj = new Function("x", "return x * x"); // create a function
console.log(funcObj(8)); // 64

// both ways are the same to create a Object instance
const obj1 = {};
const obj2 = new Object();
console.log(obj1, typeof obj1); // {} object
console.log(obj2, typeof obj2); // {} object
```

- `valueOf()` is a method that returns the primitive value of the object. It is inside the prototype of the object. When we call `strObj.valueOf()`, the JS engine first looks for `valueOf()` in the object itself. Since it cannot find it, it looks for it in the prototype of the object and this is where it finds it. It then calls `valueOf()` and returns the primitive value of the object.
- When creating a string, number, or boolean using literals, when we check the type, it returns the primitive type. When we create a string, number, or boolean using the constructor, when we check the type, it returns object. Arrays are always objects.

### Working With Object Properties

- We can use dot notation or bracket notation to access properties of an object. We can also use bracket notation to access properties dynamically. For example, we can use a variable to access a property of an object.
- We can add properties to an object using dot notation or bracket notation. We can also add properties dynamically using bracket notation.
- We can add methods to an object.
- We can delete properties using `delete` keyword. We can also use `delete` keyword to delete methods.
- We can check if an object has a property using `hasOwnProperty()` method. It returns `true` if the object has the property and `false` if it doesn't.
- We can get all the keys of an object using `Object.keys()` method. It returns an array of all the keys of the object.
- We can get all values of an object using `Object.values()` and all entries of an object using `Object.entries()`. We can also filter out the methods of an object using `Object.entries()` and `typeof` operator `typeof value !== "function"`

```javascript

function Rectangle(name, width, height) {
  this.width = width;
  this.height = height;
  this.name = name;
  this.area = function () {
    return this.width * this.height;
  };
}

// create an instance
const rect1 = new Rectangle("Rectangle 1", 10, 10);
const rect2 = new Rectangle("Rectangle 2", 20, 20);

// access properties
console.log(rect1.name, rect1.width); // 1 10
console.log(rect2["width"]); // 20

// add a property color
rect1.color = "red";

// add a method perimeter
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

```

### Prototypes

- Prototype is a special object where additional properties and methods can be attached and shared among all instances of its constructor function.
- The reason why you always see `Object.prototype` at the end of the prototype chain is because Object.prototype is the end of the prototype chain. In JavaScript, `Object.prototype` is the only object that doesn't have a prototype. It provides properties and methods that **are common to all objects**, which is why they are available to any object you create.

- This is part of JavaScript's inheritance model. When you try to access a property or method of an object, JavaScript will first look at the object's own properties. If it doesn't find it there, it will look at the properties of the object's prototype, and so on up the prototype chain, until it gets to Object.prototype. If the property or method isn't found there, `undefined` is returned.
- When we create a new object using a constructor function, the object has access to all the properties and methods defined in the constructor prototype.
- We can use `Object.getPrototypeOf()` to get the prototype of an object. We can also use `__proto__` to get the prototype of an object. We can use `Object.getPrototypeOf()` to set the prototype of an object. We can also use `__proto__` to set the prototype of an object.

```javascript
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}
// Object literal
const user = {
  name: "jack",
  age: 22,
};

const rect = new Rectangle("Rect", 10, 10);
console.log(user instanceof Object); // true
console.log(rect instanceof Object); // true

console.log(rect);

 // Rectangle.prototype inherits from Object.prototype. That's why we can use toString(), valueOf(), etc
console.log(rect.toString());

// To get the prototype of an object, both ways are the same
console.log(Object.getPrototypeOf(rect));
console.log(rect.__proto__); //same as above

```

- The `area()` function of the Rectangle constructor is always the same and it is not efficient to create it for every instance. We can move it to the prototype of the constructor so that all instances can share it and there is only one copy of it, rather than being duplicated for each instance. This can save memory and improve performance.

### Adding Methods to Prototypes

![prototype model](images/prtotype.png)

- We can add methods to the prototype of a constructor function. Let's try to move the `area()` method to the prototype of the Rectangle constructor.

```javascript

function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

const rect = new Rectangle("Rect", 10, 10);
console.log(rect);
console.log(rect.area());

```

- We can add more functions to the prototype of the Rectangle constructor and all instances will have access to them.

```javascript
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};

Rectangle.prototype.changeName = function (newName) {
  return (this.name = newName);
};

const rect = new Rectangle("Rect", 10, 10);
console.log(rect);
console.log(rect.area()); // 100

console.log(rect.perimeter()); // 40
console.log(rect.isSquare()); // true
rect.changeName("testrect");
console.log(rect.name); // testrect

```

### `Object.create`

- Object.create() is a method in JavaScript that is used to **create a new object with the specified prototype object and properties**. It's a more direct way of setting up inheritance and allows you to initialize object properties from within the same call.

```javascript

const rectanglePrototype = {
  area: function () {
    return this.width * this.height;
  },
  perimeter: function () {
    return 2 * (this.width * this.height);
  },
  isSquare: function () {
    return this.width === this.height;
  },
};

function createRectangle(height, width) {
  return Object.create(rectanglePrototype, {
    height: {
      value: height,
    },
    width: {
      value: width,
    },
  });
}

const rect = createRectangle(10, 20);
console.log(rect);
console.log(rect.area());
console.log(rect.perimeter());
console.log(rect.isSquare());

const rect2 = createRectangle(30, 30);
console.log(rect2);
console.log(rect2.area());
console.log(rect2.perimeter());
console.log(rect2.isSquare());

```

- `rectanglePrototype` is an object that serves as a prototype for all the objects created using `createRectangle()` function. It has three methods: `area()`, `perimeter()`, and `isSquare()`.
- `Object.create()` takes in two arguments: the prototype object and the properties of the new object. We can use `Object.create()` to create a new object with rectanglePrototype as its prototype and set the properties of the new object. `Object.create()` returns a new object with the specified prototype and properties.

Another Example:

```javascript
let carPrototype = {
  getDetails: function() {
    return `${this.brand} ${this.model} (${this.year})`;
  }
};

let myCar = Object.create(carPrototype);
myCar.brand = "Toyota";
myCar.model = "Corolla";
myCar.year = 2005;

console.log(myCar.getDetails()); // Outputs: Toyota Corolla (2005)
```
