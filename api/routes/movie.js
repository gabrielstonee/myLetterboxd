import express from "express"
import MovieController from "../controllers/movie.js"

const router = express.Router();

router.get('/', MovieController.getMovies);
router.get('/:id', MovieController.getMovie);
router.post('/', MovieController.postMovie);
router.patch('/:id', MovieController.patchMovie)
router.delete('/:id', MovieController.deleteMovie)


export default router;