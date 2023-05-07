function solve(data) {

  let numHeroes = Number(data.shift());
  let heroesObject = {};

  for (let i = 0; i < numHeroes; i++) {
    let [heroName, HP, MP] = data[i].split(" ");
    if (!heroesObject[heroName]) {
      heroesObject[heroName] = {};
    }
    if (HP > 100) {
      heroesObject[heroName].HP = Number(100);
    } else {
      heroesObject[heroName].HP = Number(HP);
    }

    if (MP > 200) {
      heroesObject[heroName].MP = Number(200);
    } else {
      heroesObject[heroName].MP = Number(MP);
    }
  }

  let commands = data.slice(numHeroes);
  let currentLine = commands.shift();

  while (currentLine !== "End") {
    let [command, heroName, arg1, arg2] = currentLine.split(" - ");

    switch (command) {
      case "CastSpell":
        if (heroesObject[heroName].MP >= Number(arg1)) {
          heroesObject[heroName].MP -= Number(arg1);
          console.log(
            `${heroName} has successfully cast ${arg2} and now has ${heroesObject[heroName].MP} MP!`
          );
        } else {
          console.log(`${heroName} does not have enough MP to cast ${arg2}!`);
        }
        break;
      case "TakeDamage":
        heroesObject[heroName].HP -= Number(arg1);
        if (heroesObject[heroName].HP > 0) {
          console.log(
            `${heroName} was hit for ${arg1} HP by ${arg2} and now has ${heroesObject[heroName].HP} HP left!`
          );
        } else {
          console.log(`${heroName} has been killed by ${arg2}!`);
          delete heroesObject[heroName];
        }
        break;
      case "Recharge":
        if (Number(arg1) + heroesObject[heroName].MP > 200) {
          console.log(
            `${heroName} recharged for ${200 - heroesObject[heroName].MP} MP!`
          );
          heroesObject[heroName].MP = 200;
        } else {
          console.log(`${heroName} recharged for ${Number(arg1)} MP!`);
          heroesObject[heroName].MP += Number(arg1);
        }
        break;
      case "Heal":
        if (Number(arg1) + heroesObject[heroName].HP > 100) {
          console.log(
            `${heroName} healed for ${100 - heroesObject[heroName].HP} HP!`
          );
          heroesObject[heroName].HP = 100;
        } else {
          console.log(`${heroName} healed for ${arg1} HP!`);
          heroesObject[heroName].HP += Number(arg1);
        }
        break;
    }
    currentLine = commands.shift();
  }

  for (const hero in heroesObject) {
    let HP = heroesObject[hero].HP;
    let MP = heroesObject[hero].MP;
    console.log(`${hero}\n HP: ${HP}\n MP: ${MP}`);
  }
}

solve([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
console.log("--------------------");
solve([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);

// You got your hands on the most recent update on the best MMORPG of all time – Heroes of Code and Logic.You want to play it all day long! So cancel all other arrangements and create your party!

// On the first line of the standard input, you will receive an integer n – the number of heroes that you can choose for your party.On the next n lines, the heroes themselves will follow with their hit points and mana points separated by a single space in the following format:

// "{hero name} {HP} {MP}"

//   - HP stands for hit points and MP for mana points
//     - a hero can have a maximum of 100 HP and 200 MP
// After you have successfully picked your heroes, you can start playing the game.You will be receiving different commands, each on a new line, separated by " – ", until the "End" command is given.

// There are several actions that the heroes can perform:

// "CastSpell – {hero name} – {MP needed} – {spell name}"

// • If the hero has the required MP, he casts the spell, thus reducing his MP.Print this message:
// o "{hero name} has successfully cast {spell name} and now has {mana points left} MP!"
// • If the hero is unable to cast the spell print:
// o "{hero name} does not have enough MP to cast {spell name}!"
// "TakeDamage – {hero name} – {damage} – {attacker}"

// • Reduce the hero HP by the given damage amount.If the hero is still alive(his HP is greater than 0) print:
// o "{hero name} was hit for {damage} HP by {attacker} and now has {current HP} HP left!"
// • If the hero has died, remove him from your party and print:
// o "{hero name} has been killed by {attacker}!"
// "Recharge – {hero name} – {amount}"

// • The hero increases his MP.If it brings the MP of the hero above the maximum value(200), MP is increased to 200.(the MP can't go over the maximum value).
// • Print the following message:
//   o "{hero name} recharged for {amount recovered} MP!"
// "Heal – {hero name} – {amount}"

// • The hero increases his HP.If a command is given that would bring the HP of the hero above the maximum value(100), HP is increased to 100(the HP can't go over the maximum value).
// • Print the following message:
//     o "{hero name} healed for {amount recovered} HP!"
// Input
// • On the first line of the standard input, you will receive an integer n
// • On the following n lines, the heroes themselves will follow with their hit points and mana points separated by a space in the following format
// • You will be receiving different commands, each on a new line, separated by " – ", until the "End" command is given
// Output
// • Print all members of your party who are still alive, in the following format(their HP / MP need to be indented 2 spaces):
// "{hero name}

// HP: {current HP }

// MP: {current MP } "

// Constraints
// • The starting HP / MP of the heroes will be valid, 32 - bit integers will never be negative or exceed the respective limits.
// • The HP / MP amounts in the commands will never be negative.
// • The hero names in the commands will always be valid members of your party.No need to check that explicitly.
