import React, {useState, useEffect} from 'react'
import loginService from './services/login'
import blogsService from './services/blogs'
import Blog from './components/Blog';

const App = () => {

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [newBlogTitle, setNewBlogTitle] = useState('')
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])

	useEffect(() => {
		const loggedUserJson = window.localStorage.getItem('logged')
		if (loggedUserJson) {
			const user = JSON.parse(loggedUserJson)
			setUser(user)
      blogsService.setToken(user.token)
		}
  }, [])
  
  useEffect(() => {
    const blogs = blogsService.getAll().then(response => setBlogs(response))
    console.log('[BLOGS_DATA]', blogs)
  }, [])

	const handleLogin = async (event) => {
		event.preventDefault()
		try {
			const user = await loginService.login({username, password})
			window.localStorage.setItem('logged', JSON.stringify(user))
      blogsService.setToken(user.token)

			setUser(user)
			setUsername('')
			setPassword('')
			console.log('Happy user', user)
		} catch (error) {
			console.log('Wrong credentials')
			setTimeout(() => {
				console.log('null')
			}, 5000)
		}
	}

	const handleBlogTitleChange = (event) => {
		setNewBlogTitle(event.target.value)
	}

	const loginForm = () => (
		<form onSubmit={handleLogin}>
			<div>
        username
				<input
					type="text"
					value={username}
					name="Username"
					onChange={({ target }) => setUsername(target.value)}
				/>
			</div>

			<div>
        password
				<input
					type="password"
					value={password}
					name="Password"
					onChange={({ target }) => setPassword(target.value)}
				/>
			</div>

			<button type="submit">login</button>
		</form>
  )
  
  const blogFormRows = () => blogs.map(blog => {
    return <Blog key={blog.user.id} blog={blog} />;
  })

	const blogForm = () => (
		<form>
			<input value={newBlogTitle} onChange={handleBlogTitleChange} />
			<button type="submit">save</button>
      {blogFormRows(() => blogsService.getAll())}
		</form>
	)

	return (
    <div>
      {user === null ? (
        loginForm()
      ) : (
        <div>
          <p>{user.name} logged in</p>
          <div>{blogForm()}</div>
        </div>
      )}
    </div>
  );
}

export default App
