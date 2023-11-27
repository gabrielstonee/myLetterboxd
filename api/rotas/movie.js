const { Router } = require("express")
const { getMovies, getMovie, postMovie, patchMovie, deleteMovie } = require("../controllers/movie.js")

const router = Router();

router.get('/', getMovies);
router.get('/:id', getMovie);
router.post('/', postMovie);
router.patch('/:id', patchMovie)
router.delete('/:id', deleteMovie)


module.exports = router;