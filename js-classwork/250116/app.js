const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require('slugify');
const replaceTemplate = require('./modules/replaceTemplate');

// Templates
const tempOverview = fs.readFileSync(
    `${__dirname}/templates/template-overview.html`,
    'utf-8'
);

const tempCard = fs.readFileSync(
    `${__dirname}/templates/template-card.html`,
    'utf-8'
);

const tempProduct = fs.readFileSync(
    `${__dirname}/templates/template-product.html`,
    'utf-8'
);

// Products data
const productsFile = fs.readFileSync(
    `${__dirname}/data/products.json`,
    'utf-8'
);
const products = JSON.parse(productsFile)

// Slugs
const slugs = products.map(el => slugify(el.productName, {lower: true}));
console.log(slugs)

// Server
const server = http.createServer((req, res)=>{
    const {query, pathname} = url.parse(req.url, true);

    //Overview page
    if (pathname === '/' || pathname === '/overview'){
        res.writeHead(200, {
            'Content-Type':'text/html'
        });
        const cardsHtml = products.map(el=>{
            replaceTemplate(tempCard, el).join('');
            const output = tempOverview.replace('{%PRODUCTS_CARDS%}', cardsHtml)
            res.end(output)
        });
    } else if(pathname ===  '/product'){
        res.writeHead(200, {
            'Content-Type':'text/html'
        });
        const product = products[query.id]
        const output = replaceTemplate(tempProduct)
        res.end(output)
    }
})

server.listen(8000,'localhost', ()=>{
    console.log('Server up')
    console.log('Link -> http://localhost:8000/')
})