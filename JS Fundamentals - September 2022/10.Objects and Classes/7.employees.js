function createPersonalNum(data) {
  class Person {
    constructor(name) {
      this.name = name;
    }
  }

  for (const name of data) {
    let length = name.length;
    let person = new Person(name);

    console.log(`Name: ${person.name} -- Personal Number: ${length}`);
  }
}

createPersonalNum([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
