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
    return {
        title: maxObj.title,
        author: maxObj.author,
        likes: maxObj.likes
    }
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

const mostLikes = (blogs) => {
    let blogsFormatted = []
    // const mostLikes = {
    //     author: '',
    //     likes: 0
    // }

    blogs = lodash.groupBy(blogs, 'author')
    
    lodash.map(blogs, authorTemp => {
        let likesCont = 0
        
        authorTemp.map(blog => likesCont += blog.likes)
        blogsFormatted.push({
            author: authorTemp[0].author,
            likes: likesCont
        }) 
    })

    blogsFormatted = lodash.maxBy(blogsFormatted, author => author.likes)

    console.log(blogsFormatted)
    return blogsFormatted}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}