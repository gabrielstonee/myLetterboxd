const fs = require("fs")

class Favorites{

}
function getTodosFavorites() {
    return JSON.parse( fs.readFileSync("favorites.json") )
}

function insereFavorite(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"))

  const favorites = JSON.parse( fs.readFileSync("favorites.json") )
  const livroInserido = livros.find(livro => livro.id === id)
  const novaListaDeFavorites = [ ...favorites, livroInserido ]

  fs.writeFileSync("favorites.json", JSON.stringify(novaListaDeFavorites))
}

function deletaFavoritePorId(id){
  const livros = JSON.parse( fs.readFileSync("favorites.json") )
  
  const livrosFiltrados = livros.filter( livro => livro.id !== id)
  fs.writeFileSync("favorites.json", JSON.stringify(livrosFiltrados))
}

module.exports = {
  getTodosFavorites,
  insereFavorite,
  deletaFavoritePorId
}