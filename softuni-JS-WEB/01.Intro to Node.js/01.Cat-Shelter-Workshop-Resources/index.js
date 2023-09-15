const http = require("http");
const { homeTemplate } = require("./views/home/home.js");
const { styleCss } = require("./content/styles/site.js");
const { addBreed } = require("./views/addBreed.js");
const { addCat } = require("./views/addCat.js");
const port = 5050;
const { catTemplate } = require("./views/catTemplate.js");

const cats = [
  {
    name: "Pesho",
    image:
      "https://img.freepik.com/free-photo/closeup-shot-beautiful-ginger-domestic-kitten-sitting-white-surface_181624-35913.jpg?size=626&ext=jpg&ga=GA1.2.940455158.1694612180&semt=sph",
    breed: "Persian",
    description: "Cat Cat Cat",
  },
  {
    name: "Pancho",
    image:
      "https://img.freepik.com/premium-photo/closeup-one-cute-gray-cat-lying-table_261761-1810.jpg?size=626&ext=jpg&ga=GA1.2.940455158.1694612180&semt=sph",
    breed: "British",
    description: "Cat Cat Cat",
  },
  {
    name: "Goshko",
    image:
      "https://img.freepik.com/free-photo/closeup-vertical-shot-cute-european-shorthair-cat_181624-34587.jpg?size=626&ext=jpg&ga=GA1.2.940455158.1694612180&semt=sph",
    breed: "Persian",
    description: "Cat Cat Cat",
  },
  {
    name: "Pispis",
    image:
      "https://img.freepik.com/free-photo/lovely-pet-portrait-isolated_23-2149192347.jpg?size=626&ext=jpg&ga=GA1.2.940455158.1694612180&semt=sph",
    breed: "Persian",
    description: "Cat Cat Cat",
  },
];

const server = http.createServer((req, res) => {
  const { url } = req;
  if (url == "/") {
    const catHtml = cats
      .map((cat) =>
        catTemplate
          .replace("{{name}}", cat.name)
          .replace("{{breed}}", cat.breed)
          .replace("{{description}}", cat.description)
          .replace("{{image}}", cat.image)
      )
      .join("");
    const homeHtmlTemplate = homeTemplate.replace("{{cats}}", catHtml);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(homeHtmlTemplate.replace());
  } else if (url == "/content/styles/site.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(styleCss);
  } else if (url == "/cats/add-breed") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(addBreed);
  } else if (url == "/cats/add-cat") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(addCat);
  }

  res.end();
});

server.listen(port);
console.log("Server is listenin on port: " + port);
