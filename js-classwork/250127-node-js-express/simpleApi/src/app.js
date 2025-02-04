const express = require('express');
const app = express()
const port = 3000;

// Middleware for parsing JSON
app.use(express.json())

// Data
let movies = [
  {id:1, title:"Inception", director:"Christopher Nolan", year: 2010},
  {id:2, title:"The Matrix", director:"Some director", year: 2015},
  {id:3, title:"1984", director:"Stephen King", year: 2022},
]

//GET 
app.get('/', (req, res)=>{
	res.json(JSON.stringify('temporary'));
})

//GET All movies
app.get('/movies', (req, res)=>{
	res.json(movies);
})

//GET Movie by id

app.get('/movies/:id',(req,res)=>{
	const id = parseInt(req.params.id);
	const movie = movies.find(movie => movie.id === id);
	if (!movie){
		res.status(404).send('Movie not found');
	}
	res.json(movie)
})

// POST movie
app.post('/movies',(req,res)=>{
	const {title, director, year} = req.body;
	console.log(req.body)
	if (!title||!director||!year){
		return res.status(400).json(
			{
				message:"All fields are required (title, director, year)"
			}
		)
	}
	const newMovie = {
		id: movies.length>0 ? movies[movies.length -1].id+1:1,
		title,
		director,
		year,
	}
	movies.push(newMovie)
	res.status(201).json(newMovie)
})

//Update Movie
app.put('/movies/:id', (req,res)=>{
	const id = parseInt(req.params.id);
	const {title, director, year} = req.body;
	
	const movieIndex = movies.findIndex(movie => movie.id === id)
	
	if (movieIndex === -1){
		return res.status(404).json({
			message: "Movie not found"
		});
	};

	if (!title||!director||!year){
		return res.status(400).json(
			{
				message:"All fields are required (title, director, year)"
			}
		);
	};

	movies[movieIndex] = {id, title, director, year};
	res.status(201).json(movies[movieIndex])

})

// Delete movie
app.delete('/movies/:id', (req,res)=>{
	const id = parseInt(req.params.id);
	const movieIndex = movies.findIndex(movie => movie.id === id);

	if (movieIndex === -1){
		return res.status(404).json({
			message:"Movie not found"
		});
	};

	const deleteMovie = movies.splice(movieIndex, 1);
	res.json(deleteMovie[0]);
})

//Start server
app.listen(port, () => {
	console.group('--------');
  	console.log(`Example app listening on port ${port}`);
  	console.log(`http://localhost:${port}`);
	console.groupEnd();
	console.log('--------');
})