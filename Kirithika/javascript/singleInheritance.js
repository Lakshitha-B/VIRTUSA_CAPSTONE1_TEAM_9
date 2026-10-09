
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(this.name + " says Woof!");
    }
}

let dog = new Dog("Tommy", "Labrador");

dog.eat();
dog.bark();
console.log("Breed:", dog.breed);
