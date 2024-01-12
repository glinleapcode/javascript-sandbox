// 01-11-24 4:51PM

// constructor function
function Person(firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;

  //   Object.defineProperty(this, "firstName", {
  //     get: function () {
  //       // don't forget the this keyword before capitalizeName
  //       return this.capitalizeName(this._firstName);
  //     },
  //     set: function (value) {
  //       this._firstName = this.capitalizeName(value);
  //     },
  //   });

  //   Object.defineProperty(this, "lastName", {
  //     get: function () {
  //       return this.capitalizeName(this._lastName);
  //     },
  //     set: function (value) {
  //       this._lastName = this.capitalizeName(value);
  //     },
  //   });

  //   Object.defineProperty(this, "fullName", {
  //     get: function () {
  //       // firstName and lastName are getters here
  //       return `${this.firstName}  ${this.lastName}`;
  //     },
  //   });
}

Person.prototype.capitalizeName = function (name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

// Object Literal

const PersonObj = {
  _firstName: "jane",
  _lastName: "Zak",

  get firstName() {
    return Person.prototype.capitalizeName(this._firstName);
  },

  set firstName(value) {
    this._firstName = value;
  },

  get lastName() {
    return Person.prototype.capitalizeName(this._lastName);
  },
  set lastName(value) {
    // we don't need to use this.prototype.capitalizeName here because when we access the getter, we are calling the capitalizeName function from the prototype
    this._lastName = value;
  },

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// constructor function
// const person1 = new Person("zoe", "don");
// console.log(person1.firstName); // Zoe, getter
// console.log(person1.lastName); // Don, getter
// console.log(person1.fullName); // Zoe Don, getter

// Object literal
const person2 = Object.create(PersonObj);
console.log(person2.firstName); // Jane, getter
console.log(person2.lastName); // Zak, getter
console.log(person2.fullName); // Jane Zak, getter
