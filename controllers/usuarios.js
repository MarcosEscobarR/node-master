const { Response }  = require('express')

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
const usuariosPost = (req, res = Response) => {
    const body = req.body
    res.json({
        msg: 'hola desde el Post',
        body
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