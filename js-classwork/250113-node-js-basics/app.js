const fs = require('fs');
const http = require('http');
const url = require('url');
const findProductByName = require('./modules/findProductByName');
const findProductsByVendor = require('./modules/findProductsByVendor');
const createProduct = require('./modules/createProduct');

// Read data
const data = fs.readFileSync(`${__dirname}/data/products.json`, 'utf-8')
const products = JSON.parse(data);


// Create server
const hostname = 'localhost';
const port = '8888';

const server = http.createServer((req, res)=>{
    const {query, pathname} = url.parse(req.url, true);
    console.log('path', pathname);
    console.log('query', query.id);
    let result
    switch(pathname){
        case '/':
            res.writeHead(200, {
                'Content-type' :'text/html'
            });
            res.end("<h1>Welcome to basics of node.js</h1>");
            break;
        case '/api/products':
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(data)
            break;
        case '/api/product':
            res.writeHead(200, {
                'Content-Type':'application/json'
            });
            res.end(JSON.stringify(products[query.id]))
            break;
        case '/api/search/name':
            result = findProductByName(products, query.name);
            res.writeHead(200, {
                'Content-Type': 'application/json',
            });
            res.end(JSON.stringify(resultName));
            break;
        case '/api/search/vendor':
            result = findProductsByVendor(products, query.vendor);
            res.writeHead(200, {
                'Content-Type': 'application/json',
            });
            res.end(JSON.stringify(resultVendor));
            break;
        case '/api/add/product':
            if (req.method === 'POST'){
                let body = ''
                req.on('data', (chunk)=>{
                    try{
                        const newProduct = JSON.parse(body);
                        const data = await createProduct(products, newProduct, path);
                        res.writeHead(201, {
                            'Content-Type': 'application/json',
                        })
                        res.end(JSON.stringify(newProduct))
                    } catch (err){
                        console.log(err)
                    }
                })
                console.log(body)
            }
            console.log(body)
            break;
        default:
            res.writeHead(404, {
                'Content-Type':'text/html',
                'my-header':'I like node'
            });
            res.end('<h1>Page not found</h1>');
            break;
    }
});

server.listen(port, hostname => {
    console.log('---------------------')
    console.log(`server is on ${port}`)
    console.log(`Link to server:  http://localhost:${port}/`)
    console.log('---------------------')
});