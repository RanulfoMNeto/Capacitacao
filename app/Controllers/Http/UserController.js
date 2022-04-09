'use strict'

const User = use('App/Models/User')

class UserController {
    async create({request, response}) {
        const data = request.all()

        const user = await User.create(data)

        response.send(user);
    }

    async index({request, response}) {
        const users = await User.all()

        return users
    }
}

module.exports = UserController
