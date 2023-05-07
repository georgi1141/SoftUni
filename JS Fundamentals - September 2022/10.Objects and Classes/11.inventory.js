function heroRegister(list) {
  let heroObjects = [];

  class Hero {
    constructor(heroheroName, level, items) {
      this.name = heroheroName;
      this.level = Number(level);
      this.items = items;
    }
  }

  list.forEach((heroLine) => {
    let [name, lvl, item] = heroLine.split(" / ");
    heroObjects.push(new Hero(name, lvl, item));
  });

  heroObjects.sort((a, b) => a.level - b.level);
  for (const hero of heroObjects) {
    console.log(
      `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`
    );
  }
}

heroRegister([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
