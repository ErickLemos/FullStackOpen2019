import React from 'react'
import PropTypes from 'prop-types'

const FormLogin = ({ handleLogin, username, password }) => (
  <form onSubmit={handleLogin}>
    <div>
            username
      <input {...username}/>
    </div>

    <div>
            password
      <input {...password}/>
    </div>

    <button type="submit">login</button>
  </form>
)

FormLogin.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default FormLogin
