const fs = require('fs');
const url = require('url');
const http = require('http');

// cjs is a commonJS file name extension
// commonJS is a file type used for node.js modules
// the file name extension is there for clarity
const readCSV = require('./modules/readCSV.cjs');
const filterData = require('./modules/filterData.cjs');
const routeParameter = require('./modules/routeParameter.cjs')

// read csv files
const userData = readCSV('../data/user.csv')
const purchaseData = readCSV('../data/userPurchase.csv')

// Create a server
const PORT = '3001';
const HOSTNAME = 'localhost'

const server = http.createServer((req, res)=>{
    const {query, pathname} = url.parse(req.url, true)
    console.log('path:', pathname, 'query', query.id);
    console.log('query', query.id);
    let result, id;
    try {
        switch (routeParameter(pathname, ':id')){
            case '/':
                res.writeHead(200,{
                    'Content-Type':'text/html',
                });
                res.end("<h1>Welcome to the page</h1>");
                break;
            case '/users':
                result = userData
                res.writeHead(200,{
                    'Content-Type':'application/json',
                });
                res.end(JSON.stringify(result));
                break;
            case '/user/:id':
                id = pathname.split('/')[2]
                result = filterData(purchaseData, id);
                res.writeHead(200,{
                    'Content-Type':'application/json',
                });
                res.end(JSON.stringify(result));
                break;
            case '/user/:id/payments':
                id = pathname.split('/')[2]
                result = filterData(purchaseData, id, 'userId');
                
                res.writeHead(200,{
                    'Content-Type':'application/json',
                });
                res.end(JSON.stringify(result));
                break;
            case '/payment/:id':
                id = pathname.split('/')[2]
                result = filterData(purchaseData, id)
                res.writeHead(200,{
                    'Content-Type':'application/json',
                });
                res.end(JSON.stringify(result));
                break;
            default:
                res.writeHead(404,{
                    'Content-Type':'text/html',
                });
                res.end("<h1>Page not found</h1>");
                break;
        }
    } catch (error) {
        res.writeHead(500,{
            'Content-Type':'text/html',
        });
        res.end("<h1>Internal server error</h1>");
    }
})

// Run server
server.listen(PORT, HOSTNAME, ()=>{
    console.log('--------------------------------------------');
    console.log(`The server is running on ${PORT}`);
    console.log(`Link to server -> http://${HOSTNAME}:${PORT}/`);
    console.log('--------------------------------------------');
});