import React, { useState, useEffect } from 'react'
import loginService from './services/login'
import blogsService from './services/blogs'
import Blog from './components/Blog'
import FormBlog from './components/FormBlog'
import FormLogin from './components/FormLogin';
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import lodash from 'lodash'

const App = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [user, setUser] = useState(null)
	const [blogs, setBlogs] = useState([])
	const [notification, setNotification] = useState('')

	const [blogTitle, setBlogTitle] = useState('')
	const [blogAuthor, setBlogAuthor] = useState('')
	const [blogUrl, setBlogUrl] = useState('')

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
			const user = await loginService.login({ username, password })
			window.localStorage.setItem('logged', JSON.stringify(user))
			blogsService.setToken(user.token)

			setUser(user)
			setUsername('')
			setPassword('')
			console.log('Happy user', user)
		} catch (error) {
			showNotification('wrong username or password')
			setTimeout(() => {
				console.log('null')
			}, 5000)
		}
	}

	const handleBlogTitle = (event) => {
		setBlogTitle(event.target.value)
	}

	const handleBlogAuthor = (event) => {
		setBlogAuthor(event.target.value)
	}

	const handleBlogUrl = (event) => {
		setBlogUrl(event.target.value)
	}

	const createNewBlog = async (event) => {
		event.preventDefault()
		blogFormRef.current.toggleVisibility()
		const blogObject = {
			title: blogTitle,
			author: blogAuthor,
			url: blogUrl,
			likes: 0
		}

		const blogCreated = await blogsService.create(blogObject)
		showNotification('blog created!')
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

		const blogUpdated = await blogsService.update(blogObject.id ,blogObject)
		console.log(blogUpdated)
		showNotification('blog liked!')
		setBlogs(blogs.filter(
			blog => blog.id !== blogObject.id
		).concat(blogObject))
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
			return <Blog key={blog.id} blog={blog} like={likeInBlog}/>
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
					setUsername={setUsername}
					setPassword={setPassword}
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
						handleBlogTitle={handleBlogTitle}
						handleBlogAuthor={handleBlogAuthor}
						handleBlogUrl={handleBlogUrl}
					/>
				</Togglable>
				{blogFormRows(() => blogsService.getAll())}
				</div>
			}
				
					
		
		</div>
	)
}

export default App
