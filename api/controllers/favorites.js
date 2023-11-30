import MovieService from "../serviços/favorites.js"

async function getFavorites(req, res) {
    try {
        const livros = await MovieService.getTodosFavorites()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

async function postFavorite(req, res) {
  try {
      const livroNovo = req.body
      MovieService.insereFavorite()
  } catch(error) {
      res.status(500)
      res.send(error.message)
  }
}

async function deleteFavorite(req, res) {
  try {
      const id = req.params.id
      MovieService.deletaFavoritePorId(id)
      res.send("favorite deletado com sucesso")
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}

export default {
  getFavorites,
  postFavorite,
  deleteFavorite
}