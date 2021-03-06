const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const config = require('../utils/config')
console.log('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true})
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })
mongoose.set('useFindAndModify', false)

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true
    },

    likes: {
        type: Number
    },
    id: Number
})

blogSchema.plugin(uniqueValidator)
blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Blog', blogSchema)