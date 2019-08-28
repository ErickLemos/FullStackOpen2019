const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./testHelper')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')

beforeEach(async () => {
    await Blog.deleteMany({})
    
    const blogObjects = helper.initialBlogs.map(blog => new Blog(blog))
    const promiseArray = blogObjects.map(blog => blog.save())
    await Promise.all(promiseArray)

    // for (let note of helper.initialNotes) {
    //     let noteObject = new Note(note)
    //     await noteObject.save()
    // }
})

test('blogs list GET', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('blogs list Likes', async () => {
    const response = await api.get('/api/blogs')
    let blogsZero = await response.body.filter(blog => blog.likes === undefined)
    blogsZero = await blogsZero.map(blog => blog.likes = 0)
    expect(blogsZero[0]).toBe(0)
})

test('blogs list ID', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body[0].id).toBeDefined()
})

test('blogs list POST', async () => {
    const newBlog = {
        title: 'testeAdd',
        author: 'author',
        url: 'url',
        likes: 12
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd.length).toBe(helper.initialBlogs.length + 1)

    const title = blogsAtEnd.map(blog => blog.title)
    const author = blogsAtEnd.map(blog => blog.author)
    const url = blogsAtEnd.map(blog => blog.url)
    const likes = blogsAtEnd.map(blog => blog.likes)
    // exec 12
    expect(title).toContain('testeAdd')
    expect(author).toContain('author')
    expect(url).toContain('url')
    expect(likes).toContain(12)
})

test('a specific blog can be viewed', async () => {
    const blogAtStart = await helper.blogsInDb()
    const blogToView = blogAtStart[0]

    const resultBlog = await api
        .get(`/api/blogs/${blogToView.id}`)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    expect(resultBlog.body).toEqual(blogToView)
})

test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body.length).toBe(helper.initialBlogs.length)
})

test('a specific blog is within the returned blogs', async () => {
    const response = await api.get('/api/blogs')
    const contents = response.body.map(blog => blog.title)
    expect(contents).toContain('teste002')
}) 

test('a note can be deleted', async () => {
    const blogsAtStart = await helper.blogsInDb()
    const blogToDelete = blogsAtStart[0]

    await api
        .delete(`/api/blogs/${blogToDelete.id}`)
        .expect(204)
    
    const blogsAtEnd = await helper.blogsInDb()

    expect(blogsAtEnd.length).toBe(helper.initialBlogs.length - 1)

    const contents = blogsAtEnd.map(blog => blog.title)
    expect(contents).not.toContain(blogToDelete.title)
})

afterAll(() => {
    mongoose.connection.close()
})
