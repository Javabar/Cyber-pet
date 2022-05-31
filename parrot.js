

class Parrot extends Animal {
	constructor(name, content) {
		super(name, content);
		this.content = content;
	}

	flyOut() {
		this.health -= 10;
		this.hunger += 10;
		console.log(`${this.name} is Flying out`);
		return this;
	}

}

module.exports = {Parrot};



