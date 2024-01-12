// 01-11-24 4:31PM

class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = this.capitalizeName(value);
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = this.capitalizeName(value);
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}

const person1 = new Person("john", "doe");
// we don't need a parenthesis to call the getter
console.log(person1.firstName); // john, getter
console.log(person1.lastName); // doe, getter
person1.firstName = "jane"; // we don't need a parenthesis to call the setter
person1.lastName = "Zoe";
console.log(person1.firstName); // Jane, getter
console.log(person1.lastName); // Zoe, getter
console.log(person1.fullName); // Jane Doe, getter
