function solve(data) {
  let num = Number(data.shift());

  let pattern =
    /((\|)(?<boss>[A-Z]{4,})\2\:(\#)(?<title>(?<title1>[A-Za-z]+) (?<title2>[A-Za-z]+))\4)/gm;

  for (let i = 0; i < num; i++) {
    let currentLine = data[i];
    let ifMatch = currentLine.match(pattern);

    if (ifMatch === null) {
      console.log("Access denied!");
      continue;
    }

    let toStr = ifMatch.shift();
    let matches = toStr.matchAll(pattern);

    for (const match of matches) {
      console.log(`${match.groups.boss}, The ${match.groups.title}
>> Strength: ${match.groups.boss.length}
>> Armor: ${match.groups.title.length}`);
    }
  }
}

solve([
  "3",

  "|PETER|:#Lead architect#",

  "|GEORGE|:#High Overseer#",

  "|ALEX|:#Assistant Game Developer#",
]);
