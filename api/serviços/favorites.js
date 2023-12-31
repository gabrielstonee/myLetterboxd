import fs from "fs"

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

export default {
  getTodosFavorites,
  insereFavorite,
  deletaFavoritePorId
}