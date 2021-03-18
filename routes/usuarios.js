const {usuariosGet, usuariosDelete, usuariosPut, usuariosPost} = require("../controllers/usuarios");
const { Router } = require('express')

const router = Router();

router.get('/', usuariosGet)

router.post('/', usuariosPost)
router.put('/:id', usuariosPut)
router.delete('/', usuariosDelete)


module.exports = router;