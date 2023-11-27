const { getTodosFavoritos, insereFavorito, deletaFavoritoPorId } = require("../serviços/favoritos.js")

function getFavoritos(req, res) {
    try {
        const livros = getTodosFavoritos()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function postFavorito(req, res) {
  try {
      const livroNovo = req.body
      insereFavorito()
  } catch(error) {
      res.status(500)
      res.send(error.message)
  }
}

function deleteFavorito(req, res) {
  try {
      const id = req.params.id
      deletaFavoritoPorId(id)
      res.send("favorito deletado com sucesso")
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}

module.exports = {
  getFavoritos,
  postFavorito,
  deleteFavorito,
}