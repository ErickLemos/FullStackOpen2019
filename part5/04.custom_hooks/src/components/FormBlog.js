import React from 'react'

const FormBlog = ({
  createNewBlog,
  blogTitle,
  blogAuthor,
  blogUrl,
  handleBlogTitle,
  handleBlogAuthor,
  handleBlogUrl
}) => (
  <div>
    <h1>Crate new</h1>
    <form onSubmit={createNewBlog}>
      <p>title: <input value={blogTitle} onChange={handleBlogTitle}/></p>
      <p>author: <input value={blogAuthor} onChange={handleBlogAuthor}/></p>
      <p>url: <input value={blogUrl} onChange={handleBlogUrl}/></p>
      <button type="submit">create</button>
    </form>
  </div>
)

export default FormBlog