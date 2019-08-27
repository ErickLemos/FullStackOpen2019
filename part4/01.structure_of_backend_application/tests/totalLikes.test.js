const totalLikes = require('../utils/list_helper').totalLikes
const dataBlogs = require('./data.blogs')

test('totalLikes sum', () => {
    const result = totalLikes(dataBlogs)
    expect(result).toBe(dataBlogs.length)
})
