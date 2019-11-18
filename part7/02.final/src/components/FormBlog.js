import React from 'react'

const FormBlog = ({
  createNewBlog,
  blogTitle,
  blogAuthor,
  blogUrl
}) => (
  <div>
    <h1>Crate new</h1>
    <form onSubmit={createNewBlog}>
      <p>title: <input {...blogTitle}/></p>
      <p>author: <input {...blogAuthor}/></p>
      <p>url: <input {...blogUrl}/></p>
      <button type="submit">create</button>
    </form>
  </div>
)

export default FormBlog
