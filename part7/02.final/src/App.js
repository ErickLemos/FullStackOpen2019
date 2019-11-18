import React, { useEffect, useState } from 'react'
import loginService from './services/login'
import blogsService from './services/blogs'
import Blog from './components/Blog'
import FormBlog from './components/FormBlog'
import FormLogin from './components/FormLogin'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import lodash from 'lodash'
import { useField } from './hooks'

const App = () => {
  const username = useField('text')
  const password = useField('password')
  //const [username, setUsername] = useState('')
  //const [password, setPassword] = useState('')

  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [notification, setNotification] = useState('')

  // BLOG FORM
  const blogTitle = useField('text')
  const blogAuthor = useField('text')
  const blogUrl = useField('text')
  //const [blogTitle, setBlogTitle] = useState('')
  //const [blogAuthor, setBlogAuthor] = useState('')
  //const [blogUrl, setBlogUrl] = useState('')

  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem('logged')
    if (loggedUserJson) {
      const user = JSON.parse(loggedUserJson)
      setUser(user)
      blogsService.setToken(user.token)
    }
  }, [])

  useEffect(() => {
    const blogs = blogsService.getAll().then(response => {

      setBlogs(lodash.sortBy(response, ['likes']))
    })
    console.log('[BLOGS_DATA]', blogs)
  }, [])

  const handleLogin = async event => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: username.value,
        password: password.value
      })
      window.localStorage.setItem('logged', JSON.stringify(user))
      blogsService.setToken(user.token)

      setUser(user)
      username.onSubmit()
      password.onSubmit()

      console.log('Happy user', user)
    } catch (error) {
      showNotification('wrong username or password')
      setTimeout(() => {
        console.log('null')
      }, 5000)
    }
  }

  const createNewBlog = async (event) => {
    event.preventDefault()
    blogFormRef.current.toggleVisibility()
    const blogObject = {
      title: blogTitle.value,
      author: blogAuthor.value,
      url: blogUrl.value,
      likes: 0
    }

    const blogCreated = await blogsService.create(blogObject)
    showNotification('blog created!')
    blogTitle.onSubmit()
    blogAuthor.onSubmit()
    blogUrl.onSubmit()
    setBlogs(blogs.concat(blogCreated))
  }

  const likeInBlog = async (newObject) => {
    console.log('liked')
    const blogObject = {
      id: newObject.id,
      author: newObject.author,
      title: newObject.title,
      url: newObject.url,
      likes: newObject.likes + 1
    }
    console.log(blogObject)

    const blogUpdated = await blogsService.update(blogObject.id, blogObject)
    console.log(blogUpdated)
    showNotification('blog liked!')
    setBlogs(blogs.filter(
      blog => blog.id !== blogObject.id
    ).concat(blogObject))
  }

  const deleteBlog = async (event, blog) => {
    event.preventDefault()
    if (window.confirm(`remove blog ${blog.title} by ${blog.author}`)) {
      blogsService.remove(blog.id).then(response => {
        if(response !== 401) {
          setBlogs(blogs.filter(blogTemp => blogTemp !== blog))
        }

      })
    }
  }

  const showNotification = async (message) => {
    setNotification(message)
    setTimeout(() => {
      setNotification('')
    }, 3000)
  }

  const logout = () => {
    window.localStorage.removeItem('logged')
    setUser(null)
  }

  const blogFormRows = () =>
    blogs.map(blog => {
      return <Blog key={blog.id} blog={blog} like={likeInBlog} deleteBlog={deleteBlog}/>
    })

  const blogFormRef = React.createRef()

  return (
    <div>
      <Notification message={notification}/>
      <h1>Blogs</h1>
      {user === null
        ? <FormLogin
          handleLogin={handleLogin}
          username={username}
          password={password}
        />
        :
        <div>
          <p>
            {user.name} logged in <button onClick={logout}>Logout</button>
          </p>
          <Togglable buttonLabel='new blog' ref={blogFormRef}>
            <FormBlog
              createNewBlog={createNewBlog}
              blogTitle={blogTitle}
              blogAuthor={blogAuthor}
              blogUrl={blogUrl}
            />
          </Togglable>
          {blogFormRows(() => blogsService.getAll())}
        </div>
      }



    </div>
  )
}

export default App
