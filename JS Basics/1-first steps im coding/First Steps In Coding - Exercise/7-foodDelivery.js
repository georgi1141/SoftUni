function delivery(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  let c = Number(input[2]);

  let chickenMenu = a * 10.35;
  let fishMenu = b * 12.4;
  let veggieMenu = c * 8.15;
  let sumMenus = chickenMenu + fishMenu + veggieMenu;
  let desert = (20 / 100) * sumMenus;
  let priceDelivery = 2.5;
  let orderPrice = sumMenus + desert + priceDelivery;
  console.log(orderPrice);
}

delivery([2, 4, 3]);
