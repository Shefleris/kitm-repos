const express = require("express");
const app = express();
const port = 3300;
const mysql = require("mysql");
const cors= require("cors")

app.use(
    cors
);
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const connnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "treesdb",
  multipleStatements: true,
});

connnection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// http://localhost:3300/medziai
//@POST
//@ "/medziai"
app.post("/medziai", (req, res) => {
  let sql = `INSERT INTO trees (name, height, type) VALUES (?,?,?);`;

  connnection.query(
    sql,
    [req.body.name, req.body.height, req.body.type],
    (err, result) => {
      if (err) {
        console.error("Error inserting data ", err);
        return res
          .status(500)
          .json({ message: "Error inserting data.", error: err.message });
      }
    }
  );

  res.json({ message: "Data inserted succesfully" });
});

// @GET 
// @'/medziai
app.get("/medziai", (req, res)=>{
    let sql = `SELECT * FROM medziai;`;

    connection.query(sql,function(err, result){
        if(err){
            throw err
        }
    
        res.json(result);
    })
})

// @GET :id
// @'/medziai/:id
app.get("/medziai/:id", (req, res)=>{
    let sql = `
        SELECT * FROM medziai;`;

    connection.query(sql,function(err, result){
        if(err){
            console.log("error: ", err);
            return res.status(500).json({message:"error: ", err: err.message})
        }
        
        if (result.length === 0){
            return res.status(404).json({message: "TREE not found"})
        }
        res.json(result);
    })
})

app.put("medziai/:id", (req,res)=>{
    let sql=`
    UPDATE trees
    SET name = ?, height = ?, type = ?
    WHERE id = ?
    `
    connnection.query(sql,[req.body.name, req.body.height, req.body.type, req.params.id],
        function(err, result){
            if(err){
                console.log("error: ", err);
                return res.status(500).json({message:"error: ", err: err.message})
            }
            const selectSQL = `SELECT * FROM trees WHERE id = ?;`
            connection.query(selectSQL, [req.body.id], function(err, putResult){
                if (err){
                    console.log("error:",err)
                    return res
                        .status(500)
                        .json({message:"error: ", err:err.message})
                }
            })
            res.json({
                message:"Record update",
                updatedRecord: updatedResult[0],
            });
        }
    )
})

app.delete("/:id"), (req, res)=>{
    let sql;
    sql = `
    DELETE
    FROM trees
    WHERE id = ?
    `
    connection.query(sql, [req.body.id], (err, result)=>{
        if (err){
            console.log("error: ", err);
            return res.status(500).json({message:"error: ", err: err.message})
        }
    })
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});