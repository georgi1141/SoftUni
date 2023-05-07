function sum(data) {
  let Obj = {};

  for (let i = 0; i < data.length; i += 2) {
    if (Obj[data[i]]) {
      Obj[data[i]] += Number(data[i + 1]);
    } else {
      Obj[data[i]] = Number(data[i + 1]);
    }
  }

  for (const key in Obj) {
    console.log(`${key} -> ${Obj[key]}`);
  }
}

sum(["Gold", "155", "Silver", "10", "Copper", "17", "Gold", "155"]);

// A Miner Task
// You are given an array of strings.Every odd string is representing a resource(e.g.Gold, Silver, Copper, and so on), and every even – quantity.Your task is to collect the resources and print them each on a new line.

// Print the resources and their quantities in the format:

// { resource } –> { quantity }

// The quantities inputs will be in the range[1 … 2 000 000 000].
