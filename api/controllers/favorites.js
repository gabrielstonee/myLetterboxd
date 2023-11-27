const { getTodosFavorites, insereFavorite, deletaFavoritePorId } = require("../serviços/favorites.js")

function getFavorites(req, res) {
    try {
        const livros = getTodosFavorites()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function postFavorite(req, res) {
  try {
      const livroNovo = req.body
      insereFavorite()
  } catch(error) {
      res.status(500)
      res.send(error.message)
  }
}

function deleteFavorite(req, res) {
  try {
      const id = req.params.id
      deletaFavoritePorId(id)
      res.send("favorite deletado com sucesso")
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}

module.exports = {
  getFavorites,
  postFavorite,
  deleteFavorite,
}