<<<<<<< HEAD
# Node Farm

Node Farm is a small product-catalog website built with Node.js's built-in HTTP
module. It renders a product overview and individual product pages from JSON
data using HTML templates, and also exposes the product data as a JSON endpoint.

## Features

- Product overview page with product cards
- Individual product detail pages with origin, nutrients, quantity, price, and
  description
- Organic product labeling
- JSON API for the product catalog
- File-based product data and HTML templates; no third-party packages required

## Requirements

- [Node.js](https://nodejs.org/) (no npm packages are required)

## Installation

Clone the repository and change into the project directory:

```bash
git clone <repository-url>
cd <repository-directory>
```

Replace `<repository-url>` and `<repository-directory>` with your GitHub
repository URL and the cloned folder name.

## Run the application

Start the server from the project root:

```bash
node index.js
```

The server listens on `127.0.0.1:8000`. Open
[http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser. Press `Ctrl+C`
in the terminal to stop the server.

## Routes

| Route | Description |
| --- | --- |
| `/` or `/home` | Product overview |
| `/product?id=<id>` | Details for the product at the specified data index |
| `/api` | Product catalog as JSON |

For example, `/product?id=0` displays the first product in the catalog.

## Folder structure

```text
.
├── index.js                          # HTTP server and template rendering
├── project-files/
│   ├── dev-data/
│   │   └── data.json                 # Product catalog data
│   └── templates/
│       ├── card.html                 # Product card template
│       ├── overview.html             # Product overview page template
│       └── product.html              # Product detail page template
└── README.md
```
=======
# node-farm
Node Farm is a server-rendered web app built with vanilla Node.js (no frameworks). It reads product data from JSON, fills HTML templates dynamically, and serves overview and product detail pages through a custom-built router.
>>>>>>> ccb00a2e8f3acc10c6c15577473ca3852dc7a16c
