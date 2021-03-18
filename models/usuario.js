const {Schema, model} = require('mongoose')

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    correo: {
        type: String,
        required: [true, 'El correo es requerido'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'El password es requerido']
    },
    rol: {
        type: String,
        required: [true, 'El rol es requerido'],
        enum: ['Admin', 'User']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: String,
        default: false
    }
})

module.exports = model('Usuario', UsuarioSchema);