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
  username: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired
}

export default FormLogin
