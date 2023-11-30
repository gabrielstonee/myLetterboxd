import MovieService from "../serviços/movie.js"

async function getMovies(req, res) {
    try {
        const movies = await MovieService.getTodosMovies()
        res.send(movies)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}
async function getMovie(req, res) {
  try {
      const id = req.params.id
      const movie = await MovieService.getMoviePorId(id)
      res.send(movie)
      } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}

async function postMovie(req, res) {
  try {
      const movieNovo = req.body
      res.send(await MovieService.insereMovie(movieNovo))
  } catch(error) {
      res.status(500)
      res.send(error.message)
  }
}
async function patchMovie(req, res) {
  try {
      const id = req.params.id
      const body = req.body
      
      res.send(await MovieService.modificaMovie(body, id))
      res.send("Item modificado com sucesso")
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}
async function deleteMovie(req, res) {
  try {
      const id = req.params.id
      res.send(await MovieService.deletaMoviePorId(id))
      res.send("movie deletado com sucesso")
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}

export default {
  getMovies,
  getMovie,
  postMovie,
  patchMovie,
  deleteMovie
}