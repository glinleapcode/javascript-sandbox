function Player(name, lvl = 1, points = 0) {
  this.name = name;
  this.lvl = lvl;
  this.points = points;
}

Player.prototype.gainXp = function (number) {
  this.points += number;
  if (this.points >= 10) {
    this.lvl += 1;
    this.points -= 10;
  }
};

Player.prototype.describe = function () {
  console.log(`Player Stats: `);
  console.log(`${this.name}: level = ${this.lvl}, points = ${this.points}`);
};

let player1 = new Player("Bob");
let player2 = new Player("Alice");

player1.gainXp(5);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(2);
player1.gainXp(8);
player2.gainXp(4);

console.log("************Player1*************");
console.log(player1.describe());
console.log("************Player2*************");
console.log(player2.describe());
