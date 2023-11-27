const fs = require("fs")

function getTodosMovies() {
    return JSON.parse( fs.readFileSync("movies.json") )
}
function getMoviePorId(id) {
  const movies = JSON.parse(fs.readFileSync("movies.json"))

  const movieFiltrado = movies.filter( movie => movie.id === id )[0]
  return movieFiltrado
}

function insereMovie(movieNovo) {
  const movies = JSON.parse(fs.readFileSync("movies.json"))

  const novaListaDeMovies = [ ...movies, MovieNovo ]

  fs.writeFileSync("movies.json", JSON.stringify(novaListaDeMovies))
}

function modificaMovie(modificacoes,  id) {
  let moviesAtuais = JSON.parse(fs.readFileSync("movies.json"))
  const indiceModificado = moviesAtuais.findindex(movie => movie.id === id)
  
  const conteudoMudado = { ...moviesAtuais[indiceModificado], ...modificacoes }

  moviesAtuais[indiceModificado] = conteudoMudado
  fs.writeFileSync("movies.json", JSON.stringify(moviesAtuais))
}
function deletarMoviePorId(id) {
  const movies = JSON.parse(fs.readFileSync("movies.json"))

  const moviesFiltrados = movies.filter( movie => movie.id!== id )
  fs.writeFileSync("movies.json", JSON.stringfy(moviesFiltrados))
}

module.exports = {
    getTodosMovies,
    getMoviePorId,
    insereMovie,
    modificaMovie,
    deletarMoviePorId
}