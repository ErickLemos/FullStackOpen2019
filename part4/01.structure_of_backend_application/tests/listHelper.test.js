const totalLikes = require('../utils/list_helper').totalLikes
const dummy = require('../utils/list_helper').dummy
const favoriteBlog = require('../utils/list_helper').favoriteBlog
const dataBlogs = require('./data.blogs')


describe('list helper', () => {

    test('totalLikes sum', () => {
        const result = totalLikes(dataBlogs)
        expect(result).toBe(dataBlogs.length + 1)
    })

    test('dummy returns one', () => {
        const blogs = []
        const result = dummy(blogs)
        expect(result).toBe(1)
    })

    test('favoriteBlog', () => {
        const result = favoriteBlog(dataBlogs)
        const compare = 
            {
                _id: '5a422a851b54a676234d17f7',
                title: 'React patterns',
                author: 'Michael Chan',
                url: 'https://reactpatterns.com/',
                likes: 2,
                __v: 0
            }
        
        expect(result).toEqual(compare)
    })


})

