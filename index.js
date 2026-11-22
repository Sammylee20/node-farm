const fs = require("fs");
const http = require("http");
const url = require("url");

//API_FILES

const tempReplace = (productCard, product) => {
  let output = productCard.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%PRODUCTIMAGE%}/g, product.image);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENT%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%PRODUCTDESCRIPTION%}/g, product.description);
  output = output.replace("{%ID%}", product.id);
  // IS ORGANIC
  if (!product.organic)
    output = output.replace(/{%NOTORGANIC%}/g, "not-organic");

  return output;
};

const productCard = fs.readFileSync(
  `${__dirname}/project-files/templates/card.html`,
  "utf-8",
);
const productOverview = fs.readFileSync(
  `${__dirname}/project-files/templates/overview.html`,
  "utf-8",
);
const productItems = fs.readFileSync(
  `${__dirname}/project-files/templates/product.html`,
  "utf-8",
);

const data = fs.readFileSync(
  `${__dirname}/project-files/dev-data/data.json`,
  "utf-8",
);
const dataObj = JSON.parse(data);

//SERVER

server = http.createServer((req, res) => {
  // const pathname = req.url;

  ////// DEPRECATED METHOD /////////////
  // const { query, pathname } = url.parse(req.url, true);
  // console.log(pathname);
  // console.log(query);

  ////// NEW METHOD /////////////

  const myURL = new URL(req.url, `http://${req.headers.host}`);
  const pathname = myURL.pathname;
  const query = Object.fromEntries(myURL.searchParams);

  //HOMEPAGE

  if (pathname === "/home" || pathname === "/") {
    res.writeHead(200, { "content-type": "text/html" });

    const cardHtml = dataObj.map((el) => tempReplace(productCard, el)).join("");
    output = productOverview.replace("{%CARDS%}", cardHtml);

    res.end(output);
  }

  //PRODUCT PAGE
  else if (pathname === "/product") {
    res.writeHead(200, { "content-type": "text/html" });
    product = dataObj[query.id];
    // console.log("Query:", query);
    // console.log("Query ID:", query.id);
    // console.log("Data object:", dataObj);
    // console.log("Selected product:", dataObj[query.id]);
    output = tempReplace(productItems, product);

    res.end(output);
  }

  //API
  else if (pathname === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  }
  //NOT FOUND
  else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.end("<h1>Page not found</h1> ");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server running on port 8000");
});
