const express = require("express");

const app = express();

app.use(express.json());

const port = 5000;

const welcome = (req, res) => {
  res.send("Welcome to my favorite users and movie list");
};

app.get("/", welcome);


//* MOVIES ====================================
const movieHandlers = require("./movieHandlers");

app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);

//* USERS ====================================
const usersHandler = require("./usersHandler")

app.get("/api/users", usersHandler.getUsers);
app.get("/api/users/:id", usersHandler.getUsersById);

//* LISTEN ====================================
app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

app.post("/api/movies", movieHandlers.postMovie);
app.post("/api/users", usersHandler.postUser);
