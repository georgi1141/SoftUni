class Animal {
  constructor(type, name, age) {
    this.type = type,
      this.name = name,
      this.age = age

  }

  eat() {
    console.log(`${this.name} - nom nom`);
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super('cat', name, age)

  }

  purr() {
    console.log(`${this.name} - purr`);
  }
}

let myCat = new Cat('Sisa', 6)
myCat.eat()
myCat.purr()
console.log(myCat.age)
