const usersRouter = require('express').Router()
const User = require('../models/user')

const bcrypt = require('bcrypt')


usersRouter.get('/', async (request, response) => {
    const users = await User.find({})
    response.json(users.map(u => u.toJSON()))
})

usersRouter.get('/:id', async (request, response, next) => {
    try {
        const user = await User.findById(request.params.id)

        if (user) {
            response.json(user.toJSON())
        } else {
            response.status(404).end()
        }
    } catch(error) {
        next(error)
    }
})

usersRouter.post('/', async (request, response, next) => {
    try {
        const body = request.body

        const saltRounds = 10
        const passwordHash = await bcrypt.hash(body.password, saltRounds)

        const user = new User({
            username: body.username,
            name: body.name,
            passwordHash
        })

        const savedUser = await user.save()

        response.json(savedUser)
    } catch (error) {
        next(error)
    }
})

module.exports = usersRouter


