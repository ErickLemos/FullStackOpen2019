const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

//exec 16
const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        minlenght: 3,
        unique: true
    },
    name: {
        type: String,
        require: true,
        minlenght: 3
    },
    passwordHash: String,
    blogs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Blog'
        }
    ]
})

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        // the passwordHash should not be revealed
        delete returnedObject.passwordHash
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User