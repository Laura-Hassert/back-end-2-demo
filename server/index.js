const express = require("express");
const app = express();
const cors = require("cors");

// const ctrl = require('./controller');
const { 
    getMovies, 
    deleteMovie, 
    addMovie, 
    updateMovie 
} = require('./controller')

app.use(cors());
app.use(express.json());

app.get('/api/movies', getMovies);
app.delete('/api/movies/:id', deleteMovie);
app.post('/api/movies', addMovie);
app.put('/api/movies/:id', updateMovie);

const SERVER_PORT = 4004;
app.listen(SERVER_PORT, () => console.log(`Server rocking out on ${SERVER_PORT}`))