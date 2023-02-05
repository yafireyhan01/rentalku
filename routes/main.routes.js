const userRoutes = require('./user/user.routes')
const adminRoutes = require('./admin/admin.routes')

const api = '/api'
const admin = `${api}/admin`

const router = (app) => {
    app.use(`${api}/user`, userRoutes)
    app.use(`${admin}`, adminRoutes)
}

module.exports = router