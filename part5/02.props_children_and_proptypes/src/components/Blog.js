import React from 'react'
import Togglable from './Togglable'

const blogStyle = {
  backgroundColor: 'gray'
}

const Blog = ({ blog, like }) => (
  <Togglable buttonLabel={blog.title}>
    <div style={blogStyle}>
      <p>{blog.title}</p>
      <p>{blog.author}</p>
      <p>Likes: {blog.likes} <button onClick={() => like(blog)}>Like</button></p>
      <p>{blog.url}</p>
    </div>
  </Togglable>
)

export default Blog