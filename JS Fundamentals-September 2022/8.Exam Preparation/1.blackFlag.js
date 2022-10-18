function plunderColection(arr) {
  let days = Number(arr.shift());
  let plunderPerDay = Number(arr.shift());
  let expecterPlunder = Number(arr.shift());

  let totalPlunder = 0;
  // iterate the number of days
  for (let i = 1; i <= days; i++) {
    // add dayli plunder to the total plunder
    totalPlunder += plunderPerDay;
    // every third day
    if (i % 3 === 0) {
      totalPlunder += plunderPerDay * 0.5;
    }
    // every fifth day
    if (i % 5 === 0) {
      totalPlunder *= 0.7;
    }
  }
  // if plunder is more or equal or less than the expexted
  totalPlunder >= expecterPlunder
    ? console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
    : console.log(
      `Collected only ${((totalPlunder / expecterPlunder) * 100).toFixed(
        2
      )}% of the plunder.`
    );
}
plunderColection(["5", "40", "100"]);
plunderColection(["10", "20", "380"]);
