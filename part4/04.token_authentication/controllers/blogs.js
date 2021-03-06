const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const jwt = require('jsonwebtoken')
const User = require('../models/user')



blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({}).populate('user', {username: 1, name: 1})
    response.json(blogs.map(blog => blog.toJSON()))
})

blogsRouter.get('/:id', async (request, response, next) => {
    try {
        const blog = await Blog.findById(request.params.id)
        
        if(blog) {
            response.json(blog.toJSON())
        } else {
            response.status(404).end()
        }

    } catch (error) {
        next(error)
    }
})

blogsRouter.post('/', async (request, response, next) => {
    const body = request.body
    console.log('[TOKEN]', request.token)

    try {
        const decodedToken = jwt.verify(request.token, process.env.SECRET)
        console.log('[DECODED_TOKEN]', decodedToken)
        if (!request.token || !decodedToken.id) {
            return response
                .status(401)
                .json({ error: 'token missing or invalid' })
        }

        const user = await User.findById(decodedToken.id)
        const blog = new Blog({
            title: body.title,
            author: body.author,
            url: body.url,
            likes: body.likes,
            user: user._id
        })

        const savedBlog = await blog.save()
        user.blogs = user.blogs.concat(savedBlog._id)
        await user.save()
        response.json(savedBlog.toJSON())
    } catch (error) {
        next(error)
    }
})

blogsRouter.delete('/:id', async (request, response, next) => {
    try {
        console.log('delete')
        const decodedToken = jwt.verify(request.token, process.env.SECRET)
        const decokedTokenId = decodedToken.id
        const user = await User.findById(decokedTokenId)
        const blog = await Blog.findById(request.params.id)

      
        console.log('[DECODED_TOKEN]', decokedTokenId)
        console.log('[USER]', user)
        console.log('[BLOG]', blog)
       

        if (!request.token || !decodedToken.id) {
            return response
                .status(401)
                .json({ error: 'token missing or invalid' })
        }

        if(blog.user.toString() !== user._id.toString()) {
            return response
                .status(401)
                .json({ error: 'not your blog'})
        }
       

        await Blog.findByIdAndRemove(request.params.id)
        response.status(204).end()   
    } catch (error) {
        next(error)
    }
})

blogsRouter.put('/:id', (request, response, next) => {
    const body = request.body

    const blog = {
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes
    }

    Blog.findByIdAndUpdate(request.params.id, blog, {new: true})
        .then(updatedBlog => {
            response.json(updatedBlog.toJSON())
        })
        .catch(error => next(error))
})

module.exports = blogsRouter