class Cat extends Animal {
	constructor(name, content) {
		super(name, content);
		this.content = content;
	}

	playOut() {
		this.restlessness -= 10;
		this.tired += 10;
		console.log(`${this.name} is Playing out`);
		return this;
	}
	
}

const felix = new Cat('Felix', 'Purring');

felix.sleep().playOut().stats();

module.exports = {Cat};


