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
    console.log(maxObj)
    return maxObj
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}