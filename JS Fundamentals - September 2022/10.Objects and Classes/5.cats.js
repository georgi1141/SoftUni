function cats(params) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (const iterator of params) {
    let [catName, catAge] = iterator.split(" ");

    let cat = new Cat(catName, catAge);
    cat.meow();
  }
}

cats(["Mellow 2", "Tom 5"]);
