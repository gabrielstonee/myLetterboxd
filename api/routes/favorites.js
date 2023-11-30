import express from "express"
import FavoritesController from "../controllers/favorites.js"

const router = express.Router();

router.get('/', FavoritesController.getFavorites);
router.post('/', FavoritesController.postFavorite);
router.delete('/:id', FavoritesController.deleteFavorite);


export default router;