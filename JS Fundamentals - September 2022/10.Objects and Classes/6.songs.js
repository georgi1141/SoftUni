function songs(data) {
  let numSongs = data.shift();
  let typeSong = data.pop();
  let songs = [];

  class Song {
    constructor(typeList, name, time) {
      this.type = typeList;
      this.name = name;
      this.time = time;
    }
  }

  for (let i = 0; i < numSongs; i++) {
    let [type, name, time] = data[i].split("_");
    let song = new Song(type, name, time);
    songs.push(song);
  }

  if (typeSong === "all") {
    songs.forEach((element) => {
      console.log(element.name);
    });
  } else {
    let filtered = songs.filter((i) => i.type === typeSong);

    filtered.forEach((element) => console.log(element.name));
  }
}

songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);

console.log("----------------------");

songs([
  4,

  "favourite_DownTown_3:14",

  "listenLater_Andalouse_3:24",

  "favourite_In To The Night_3:58",

  "favourite_Live It Up_3:48",

  "listenLater",
]);
console.log("----------------------");

songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
