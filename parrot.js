const { Animal } = require("./Animal");

class Parrot extends Animal {
  constructor(name, content) {
    super(name, content);
    this.content = content;
  }
  flyOut() {
    this.health -= 10;
    this.hunger += 10;
    this.restlessness -= 10;
    console.log(`${this.name} is Flying out`);
    return this;
  }
  sing() {
    this.restlessness -= 5;
    this.thirst += 10;
    return this;
  }
}

// const Alphie = new Parrot("Alphie", "Purring");

// Alphie.sing().flyOut().stats();

module.exports = { Parrot };
