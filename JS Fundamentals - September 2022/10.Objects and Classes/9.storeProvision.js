function printStock(param1, param2) {

  let storedItems = {}

  for (let i = 0; i < param1.length; i += 2) {
    let item = param1[i]
    let num = Number(param1[i + 1])

    storedItems[item] = num
  }
  for (let j = 0; j < param2.length; j += 2) {
    let item = param2[j]
    let num = Number(param2[j + 1])

    if (!storedItems.hasOwnProperty(item)) {
      storedItems[item] = 0
    }
    storedItems[item] += num
  }

  for (const iterator in storedItems) {
    console.log(`${iterator} -> ${storedItems[iterator]}`);
  }
}


printStock([
  'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
  [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
  ]);