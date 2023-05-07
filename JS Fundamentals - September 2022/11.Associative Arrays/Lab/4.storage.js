function calc(data) {
  const storage = {};

  data.forEach((element) => {
    let command = element.split(" ");
    let item = command[0];
    let quantity = Number(command[1]);

    if (storage[item]) {
      storage[item] += quantity;
    } else {
      storage[item] = quantity;
    }
  });

  for (const key in storage) {
    console.log(`${key} -> ${storage[key]}`);
  }
}

calc(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
