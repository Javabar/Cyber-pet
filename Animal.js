class Animal {
	constructor(name) {
		this.name = name;
		this.health = 100;
		this.hunger = 0;
        this.thirst = 0;
        this.restlessness = 0;
        // this.mood = moodFunc
	}
    restlessness(){
        this.health -= 5;
        this.restless += 5;
        return this;
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
   sleep (){
       this.health += 5;
       return this;
   }
	stats() {
		return console.table({
			name: this.name,
			health: this.health,
			hunger: this.hunger,
            thirst: this.thirst,
            mood: this.mood,
		});
	}
}
module.exports = {Animal};