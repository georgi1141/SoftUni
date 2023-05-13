const http = require("http");
const fs = require("fs");
const formidable = require("formidable");



const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname == "/addCat") {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) throw err;

      const name = fields.name;
      const description = fields.description;
      const upload = files.upload.originalFilename;
      const breed = fields.breed;

      if (fs.existsSync("cats.json")) {
        const catData = JSON.parse(fs.readFileSync("cats.json"));
        catData.push({
          id: catData.length + 1,
          name: name,
          description: description,
          image: upload,
          breed: breed,
        });
        fs.writeFile("cats.json", JSON.stringify(catData), (err) => {
          if (err) throw err;
          console.log("Data written to file");
        });
      } else {
        const catData = [
          {
            id: 1,
            name: name,
            description: description,
            image: upload,
            breed: breed,
          },
        ];
        fs.writeFile("cats.json", JSON.stringify(catData), (err) => {
          if (err) throw err;
          console.log("File created and data written to file");
        });
      }
    });
  }
    // get breed and push it in the array
  else if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString(); // convert Buffer to string
    });
    req.on("end", () => {
      const breed = new URLSearchParams(body).get("breed");
      if (breed) {
        breeds.push(breed);
      }
    });
  }
    //display all cats red from the json file
  if (req.url == "/") {
    fs.readFile("./resources/views/home/index.html", "utf8", (err, data) => {
      if (err) throw err;
      fs.readFile("./cats.json", "utf8", (err, data1) => {
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
  } 
  
  else if (req.url == "/content/styles/site.css") {
    fs.readFile("./resources/content/styles/site.css", "utf8", (err, data) => {
      if (err) throw err;
      res.writeHead(200, {
        "Content-Type": "text/css",
      });
      res.write(data);
      res.end();
    });
  } else if (req.url == "/favicon.ico") {
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
  } else if (req.url == "/addBreed") {
    fs.readFile("./resources/views/addBreed.html", "utf8", (err, data) => {
      if (err) throw err;
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(data);
      res.end();
    });
  } else if (req.url == "/addCat") {
    fs.readFile("./resources/views/addCat.html", "utf8", (err, data) => {
      if (err) throw err;
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      let result = data.replace("{breed}", createBreedHtml(breeds));
      res.write(result);
      res.end();
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
  return `  <li id=${cat.id}>
  <img src="${cat.image.startsWith('http')? cat.image:`resources/views/home${cat.image}`}" alt="pic of a cat">
  <h3>${cat.name}</h3>
  <p><span>Breed: </span>${cat.breed}</p>
  <p><span>Description: </span>${cat.description}</p>
  <ul class="buttons">
      <li class="btn edit"><a href="">Change Info</a></li>
      <li class="btn delete"><a href="">New Home</a></li>
  </ul>
</li>`;
}
