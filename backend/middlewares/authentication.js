const { User } = require('../models')
const { decryption } = require("../helpers/jwt")

const isLoggedIn = async (req, res, next) => {
    try {
        const { access_token } = req.headers
        if (!access_token) throw { name: 'Unauthorized' }
        const payload = decryption(access_token)
        const user = await User.findOne({
            id: payload.id
        })
        if (!user) throw { name: 'Unauthorized' }
        req.user = payload
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = isLoggedIn