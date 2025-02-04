const express = require("express")
const app = express()
const port = 3000
const mysql = require('mysql');

app.use(
    express.urlencoded({
        extended:true,
    })
)

app.use(express.json())

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"treesdb",
    port: 3306
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/', (req, res)=>{
    res.send("Hello world")
});

//@post
//@"/"
app.post("/treesdb", (req, res)=>{
    let sql=`INSERT INTO medziai (name, height, type) VALUES (?,?,?);`;

    connection.query(
        sql,
        [req.body.name, req.body.height, req.body.type],
        (err, result)=>{
            if (err){
                console.error("Error inserting data")
                return res
                .status(500)
                .json({message: "Error inserting data", error: err })
            }
        })

    res.json({message:"OK"})
})

// @GET 
// @'/medziai
app.get("/treesdb", (req, res)=>{
    let sql = `SELECT * FROM medziai;`;

    connection.query(sql,function(err, result){
        if(err){
            throw err
        }
    
        res.json(result);
    })
})

app.get("/tressdb/:id", (req, res)=>{
    let sql = `
        SELECT * FROM medziai;`;

    connection.query(sql,function(err, result){
        if(err){
            console.error()
        }
    
        res.json(result);
    })
})


app.listen(port, ()=>{
    console.log(`Example listening on port ${port}`)
})