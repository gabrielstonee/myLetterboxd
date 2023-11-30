import MovieRepository from "../repositories/movieInfo.repository.js"

async function getTodosMovies() {
    return await MovieRepository.findAll()
}

async function getMoviePorId(id) {
  const movies = await MovieRepository.findAll()

  const movieFiltrado = movies.filter( movie => movie.id === id )[0]
  return movieFiltrado
}

async function insereMovie(movieNovo) {
  await MovieRepository.createMovieInfo(movieNovo);
}

async function modificaMovie(movieInfo) {
  await MovieInfoRepository.updateMovieInfo(movieInfo);
}
async function deletarMoviePorId(id) {
  await MovieInfoRepository.deleteMovieInfo(movieId);
}

export default {
    getTodosMovies,
    getMoviePorId,
    insereMovie,
    modificaMovie,
    deletarMoviePorId
}