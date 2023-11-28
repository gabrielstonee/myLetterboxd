const express = require("express")
const routeMovie = require("./routes/movie.js")
const routeFavorite = require("./routes/favorites.js")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors({origin: "*"}))

const port = 8000

app.use('/movie', routeMovie);
app.use('/favorites', routeFavorite);
app.get('/', (req, res) => {
  res.send("Olá mundo")
})

app.listen(port, () => {
  console.log(`Listening in port ${port}`);
})