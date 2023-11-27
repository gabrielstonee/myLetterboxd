const { getTodosMovies, getMoviePorId, insereMovie, modificaMovie } = require("../serviços/movie.js")

function getMovies(req, res) {
    try {
        const movies = getTodosMovies()
        res.send(movies)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}
function getMovie(req, res) {
  try {
      const id = req.params.id
      const movie = getMoviePorId(id)
      res.send(movie)
      } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}

function postMovie(req, res) {
  try {
      const movieNovo = req.body
      insereMovie(movieNovo)
  } catch(error) {
      res.status(500)
      res.send(error.message)
  }
}
function patchMovie(req, res) {
  try {
      const id = req.params.id
      const body = req.body
      
      modificaMovie(body, id)
      res.send("Item modificado com sucesso")
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}
function deleteMovie(req, res) {
  try {
      const id = req.params.id
      deletaMoviePorId(id)
      res.send("movie deletado com sucesso")
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}

module.exports = {
  getMovies,
  getMovie,
  postMovie,
  patchMovie,
  deleteMovie
}