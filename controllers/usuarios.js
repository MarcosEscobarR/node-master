const { Response }  = require('express')
const Usuario = require('../models/usuario')
const usuariosGet = (req, res = Response) => {
    const { name, id, age, pageIndex = 0, pageSize = 10} = req.query;

    res.json({
        msg: 'hola desde el Get',
        name,
        id,
        age,
        pageIndex,
        pageSize
    })
}
const usuariosPost = async (req, res = Response) => {
    const body = req.body
    const usuario = new Usuario(body);
    await usuario.save();
    res.json({
        msg: 'hola desde el Post',
        usuario
    })
}
const usuariosPut = (req, res = Response) => {
    const {id} = req.params
    res.json({
        msg: 'hola desde el Put',
        id
    })
}
const usuariosDelete = (req, res = Response) => {
    res.json({
        msg: 'hola desde el delete'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}