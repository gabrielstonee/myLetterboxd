const { Router } = require("express")
const { getFavoritos,  postFavorito, deleteFavorito } = require("../controllers/favoritos.js")

const router = Router();

router.get('/', getFavoritos);
router.post('/', postFavorito);
router.delete('/:id', deleteFavorito);


module.exports = router;