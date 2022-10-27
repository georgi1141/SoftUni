function createObject(data) {
  for (let i = 0; i < data.length; i++) {
    let [town, latitude, longitude] = data[i].split(" | ");

    let person = {
      town: town,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    };
    console.log(person);
  }
}


//--------------with constructor()--------------//


// function createObject(data) {
//   class Town {
//     constructor(town, latitude, longitude) {
//       this.town = town;
//       this.latitude = Number(latitude).toFixed(2);
//       this.longitude = Number(longitude).toFixed(2);
//     }
//   }

//   for (let i = 0; i < data.length; i++) {
//     let [town, latitude, longitude] = data[i].split(" | ");

//     let newTown = new Town(town, latitude, longitude);
//     console.log(newTown);
//   }
// }

createObject([
  "Sofia | 42.696552 | 23.32601",
  "Beijing | 39.913818 | 116.363625",
]);
