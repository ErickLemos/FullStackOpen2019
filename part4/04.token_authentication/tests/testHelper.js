const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
    {
        title: 'teste001',
        author: 'author',
        url: 'url',
        likes: 12
    },
    {
        title: 'teste002',
        author: 'author',
        url: 'url',
        likes: undefined
    }
]

const nonExistingId = async () => {
    const blog = new Blog({title: 'testeadd'})
    await blog.save()
    await blog.remove()

    return blog._id.toString()
}

const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
}

module.exports = {
    initialBlogs,
    nonExistingId,
    blogsInDb,
    usersInDb
}