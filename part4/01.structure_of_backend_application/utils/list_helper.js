var lodash = require('lodash')
const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const likes = blogs.map(blog => blog.likes)
    return likes.reduce(reducer)
}

const favoriteBlog = (blogs) => {
    let maxObj = { likes: 0}
    blogs.map(person => {
        if(person.likes > maxObj.likes) {
            maxObj = person
        }
    })
    return maxObj
}

const mostBlogs = (blogs) => {
    let maxAuthor = []
    const array = lodash.groupBy(blogs, 'author')
    lodash.map(array, author => {
        if(author.length > maxAuthor.length) {
            maxAuthor = author
        }
    })
    return {
        author: maxAuthor[0].author,
        blogs: maxAuthor.length
    }
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
}