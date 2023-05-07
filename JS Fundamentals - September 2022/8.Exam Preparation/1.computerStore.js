function calcPrice(array) {
  let totalNoTax = 0;
  let totalWithDiscount = 0;

  for (let i = 0; i < array.length; i++) {
    let command = array[i];
    if (command == "special") {
      totalWithDiscount = totalNoTax * 1.2 * 0.9;
      break;
    }
    if (command == "regular") {
      totalWithDiscount = totalNoTax * 1.2;
      break;
    }

    command = Number(command);

    if (command < 0) {
      console.log(`Invalid price!`);
      continue;
    }
    totalNoTax += command;
  }
  if (totalWithDiscount > 0) {
    console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${totalNoTax.toFixed(2)}$
Taxes: ${(totalNoTax * 0.2).toFixed(2)}$
-----------
Total price: ${totalWithDiscount.toFixed(2)}$`);
  } else {
    console.log(`Invalid order!`);
  }
}

calcPrice(["regular"]);

// calcPrice(["1050", "200", "450", "2", "18.50", "16.86", "special"]);

// calcPrice([
//   "1023",
//   "15",
//   "-20",
//   "-5.50",
//   "450",
//   "20",
//   "17.66",
//   "19.30",
//   "regular",
// ]);

// Write a program that prints you a receipt for your new computer.You will receive the parts' prices (without tax) until you receive what type of customer this is - special or regular. Once you receive the type of customer you should print the receipt.
// The taxes are 20 % of each part's price you receive.
// If the customer is special, he has a 10 % discount on the total price with taxes.
// If a given price is not a positive number, you should print "Invalid price!" on the console and continue with the next price.
// If the total price is equal to zero, you should print "Invalid order!" on the console.
//   Input
// • You will receive numbers representing prices(without tax) until command "special" or "regular":
// Output
// • The receipt should be in the following format:
// "Congratulations you've just bought a new computer!
// Price without taxes: {total price without taxes } $
// Taxes: {total amount of taxes } $
// -----------
//   Total price: {total price with taxes}$"
// Note: All prices should be displayed to the second digit after the decimal point! The discount is applied only on the total price.Discount is only applicable to the final price!
