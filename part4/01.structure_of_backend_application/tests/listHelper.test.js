const totalLikes = require('../utils/list_helper').totalLikes
const dummy = require('../utils/list_helper').dummy
const favoriteBlog = require('../utils/list_helper').favoriteBlog
const mostBlogs = require('../utils/list_helper').mostBlogs
const mostLikes = require('../utils/list_helper').mostLikes
const dataBlogs = require('./data.blogs')



describe('list helper', () => {

    test('totalLikes sum', () => {
        const result = totalLikes(dataBlogs)
        expect(result).toBe(36)
    })

    test('dummy returns one', () => {
        const blogs = []
        const result = dummy(blogs)
        expect(result).toBe(1)
    })

    test('favoriteBlog', () => {
        const result = favoriteBlog(dataBlogs)
        const compare = {
            title: 'Canonical string reduction',
            author: 'Edsger W. Dijkstra',
            likes: 12
        }
        
        expect(result).toEqual(compare)
    })

    test('mostBlog', () => {
        const result = mostBlogs(dataBlogs)
        const compare = {
            author: 'Robert C. Martin',
            blogs: 3
        }
        expect(result).toEqual(compare)
    })

    test('mostLikes', () => {
        const result = mostLikes(dataBlogs)
        const compare = {
            author: 'Edsger W. Dijkstra',
            likes: 17
        }
        expect(result).toEqual(compare)
    })


})

