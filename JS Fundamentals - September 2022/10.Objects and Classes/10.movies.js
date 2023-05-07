function movieInfo(data) {
  let movies = [];

  data.forEach((element) => {
    if (element.includes("addMovie ")) {
      let name = element.split("addMovie ")[1];
      movies.push({ name: name });
    } else if (element.includes(" directedBy ")) {
      let name = element.split(" directedBy ")[0];
      let director = element.split(" directedBy ")[1];
      let toFind = movies.find((el) => el.name === name);
      if (toFind) {
        toFind.director = director;
      }
    } else if (element.includes(" onDate ")) {
      let [name, date] = element.split(" onDate ");
      let toFind = movies.find((el) => el.name === name);
      if (toFind) {
        toFind.date = date;
      }
    }
  });

  movies.forEach((movie) => {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  });
}

movieInfo([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
