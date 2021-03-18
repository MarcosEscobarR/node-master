const express = require('express');
const cors = require('cors')

class Server {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.start();
        this.port = process.env.PORT;
    }

    //middlewares
    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
    }
    routes() {
        this.app.use('/api/usuarios', require('../routes/usuarios.js'))
    }

    start() {
        this.app.listen(this.port, () => {
            console.log('server is running', this.port)
        })
    }
}

module.exports = Server;