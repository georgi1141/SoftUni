const http = require("http");
const fs = require("fs");
const formidable = require("formidable");
const urll = require("url");
const path = require("path");
const editCat = require('./utils')

const server = http.createServer(async (req, res) => {
  const url = urll.parse(req.url).pathname;

  if (url == "/addCat") {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) throw err;

      const name = fields.name;
      const description = fields.description;
      const upload = files.upload._writeStream.path;
      const breed = fields.breed;

      const fileName = `newFile${Math.floor(Math.random() * 100)}.jpg`;
      const newFilePath = "./resources/content/images/" + fileName;

      fs.rename(upload, newFilePath, (err) => {
        if (err) throw err;

        if (fs.existsSync("cats.json")) {
          const catData = JSON.parse(fs.readFileSync("cats.json"));
          catData.push({
            id: catData.length + 1,
            name: name,
            description: description,
            image: fileName,
            breed: breed,
          });
          fs.writeFile("cats.json", JSON.stringify(catData), (err) => {
            if (err) throw err;
            console.log("Data written to file");

            res.writeHead(302, { Location: "/" });
            res.end();
          });
        } else {
          const catData = [
            {
              id: 1,
              name: name,
              description: description,
              image: fileName,
              breed: breed,
            },
          ];
          fs.writeFile("cats.json", JSON.stringify(catData), (err) => {
            if (err) throw err;
            console.log("File created and data written to file");

            res.writeHead(302, { Location: "/" });
            res.end();
          });
        }
      });
    });
  }

  // get breed and push it in the array
  else if (req.method === "POST" && req.url === "/addCat") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString(); // convert Buffer to string
    });
    req.on("end", () => {
      const breed = new URLSearchParams(body).get("breed");
      if (breed) {
        breeds.push(breed);
      }
      res.writeHead(302, { Location: "/addCat" });
      res.end();
    });
  }
  //display all cats red from the json file
  if (url == "/") {
    fs.readFile("./resources/views/home/index.html", "utf8", (err, data) => {
      if (err) throw err;
      fs.readFile("./cats.json", (err, data1) => {
        const cats = JSON.parse(data1);
        let result = "";
        cats.forEach((cat) => {
          result += createCat(cat);
        });

        let final = data.replace("{{cats}}", result);

        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        res.write(final);
        res.end();
      });
    });
  } else if (url == "/content/styles/site.css") {
    fs.readFile("./resources/content/styles/site.css", "utf8", (err, data) => {
      if (err) throw err;
      res.writeHead(200, {
        "Content-Type": "text/css",
      });
      res.write(data);
      res.end();
    });
  } else if (url == "/favicon.ico") {
    fs.readFile(
      "./resources/content/images/pawprint.ico",
      "utf8",
      (err, data) => {
        if (err) throw err;
        res.writeHead(200, {
          "Content-Type": "image/svg+xml",
        });
        res.write(data);
        res.end();
      }
    );
  } else if (url == "/addBreed") {
    fs.readFile("./resources/views/addBreed.html", "utf8", (err, data) => {
      if (err) throw err;
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(data);
      res.end();
    });
  } else if (url == "/addCat") {
    fs.readFile("./resources/views/addCat.html", "utf8", (err, data) => {
      if (err) throw err;
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      let result = data.replace("{breed}", createBreedHtml(breeds));
      res.write(result);
      res.end();
    });
  } else if (url.includes("/catEdit")) {
    const id = Number(url.split("/").pop());

    fs.readFile(
      "./resources/views/editCat.html",
      "utf8",
      function (err, htmlData) {
        if (err) throw err;

        fs.readFile("./cats.json", "utf8", function (err, cats) {
          if (err) throw err;
          const parseCats = JSON.parse(cats);

          let catToEdit = parseCats.filter((x) => x.id === id);

          const htmlEdit = editCat(catToEdit[0]);
          const final = htmlData.replace("{{catInfo}}", htmlEdit);

          res.writeHead(200, { "Content-Type": "text/html" });

          res.write(final);

          res.end();
        });
      }
    );
  } else if (url.includes("/catToEdit") && req.method == "POST") {
    const id = Number(url.split("/").pop());

    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) throw err;

      const name = fields.name;
      const description = fields.description;
      const breed = fields.breed;

      fs.readFile("./cats.json", "utf8", (err, data) => {
        if (err) throw err;
        const cats = JSON.parse(data);

        let final = [];
        cats.forEach((cat) => {
          if (Number(cat.id) == Number(id)) {
            cat.name = name;
            cat.description = description;
            cat.breed = breed;
          }
          final.push(cat);
        });

        fs.writeFile("./cats.json", JSON.stringify(final), (err) => {
          if (err) throw err;

          console.log("File updated successfully");

          res.writeHead(302, { Location: "/" });
          res.end();
        });
      });
    });
  } else if (url.includes("/catFindNewHome")) {
    const id = Number(url.split("/").pop());

    fs.readFile("./cats.json", (err, data) => {
      const cats = JSON.parse(data);
      let filteredCats = [];
      for (let i = 0; i < cats.length; i++) {
        if (cats[i].id != id) {
          filteredCats.push(cats[i]);
        }
      }

      fs.writeFile("cats.json", JSON.stringify(filteredCats), (err) => {
        if (err) throw err;
        console.log("Data written to file");

        res.writeHead(302, { Location: "/" });
        res.end();
      });
    });
  } else {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write("<h1>404</h1>");
    res.end();
  }
});

server.listen(5000);
console.log("listening on port 5000...");

const breeds = [
  "Bombay Cat",
  "American Bobtail Cat",
  "Bengal Cat",
  "British Shorthair Cat",
  "Unknown",
];

function createBreedHtml(args) {
  let result = "";
  for (let i = 0; i < args.length; i++) {
    result += `<option value="${args[i]}">${args[i]}</option>` + "\n";
  }
  return result;
}

function createCat(cat) {
  const absolute = path.resolve(__dirname, "resources", "content", "images");
  return `  <li id=${cat.id}>
  <img src="${absolute}" alt="${cat.name}">
  <h3>${cat.name}</h3>
  <p><span>Breed: </span>${cat.breed}</p>
  <p><span>Description: </span>${cat.description}</p>
  <ul class="buttons">
      <li class="btn edit"><a href="/catEdit/${cat.id}">Change Info</a></li>
      <li class="btn delete"><a href="/catFindNewHome/${cat.id}">New Home</a></li>
  </ul>
</li>`;
}

