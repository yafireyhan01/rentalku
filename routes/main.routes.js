const user = require('./user/user.routes')

const api = '/api'

const router = (app) => {
    app.use(`${api}/user`, user)
}

module.exports = router