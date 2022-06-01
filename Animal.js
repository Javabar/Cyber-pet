class Animal {
  health;
  hunger;
  thirst;
  restlessness;
  isAlive = true;
  status;
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hunger = 0;
    this.thirst = 0;
    this.restlessness = 0;
  }
  get restlessness() {
    return this.restlessness;
  }
  restlessness() {
    this.restlessness += num;
    this.health -= 5;
    this.restless += 5;
    if (this._health < 0) this._health = 0;
    return this.checkstats();
  }
  checkStats() {
    if (this._health <= 0) {
      this._isAlive = false;
      this.status = `${this.name} has died from malnutrition, please make sure your next pet has plenty to eat and drink.`;
    }
    if (this._boredom >= 50) {
      this._isAlive = false;
      this.status = `${this.name} has run away to join the circus because they were bored, please play with your pet more next time...`;
    }
  }
  drinks() {
    this.health -= 5;
    this.thirst += 5;
    return this;
  }
  eats() {
    this.health -= 5;
    this.hunger += 10;
    console.log(`${this.name}'s health is ${this.health}`);
    return this;
  }
  sleep() {
    this.health += 5;
    return this;
  }
  stats() {
    return console.table({
      name: this.name,
      health: this.health,
      hunger: this.hunger,
      thirst: this.thirst,
      restlessness: this.restlessness,
    });
  }
}
module.exports = { Animal };
