import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  setCurrentUserIdAction,
  setSessionTokenAction
} from '../../redux/slices/usersSlice'
import { useNavigate } from 'react-router-dom'
import StyledLogin from './styled/StyledLogin'
import { TextField } from '@mui/material'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = () => {
    axios
      .post('https://twocanapiserver.azurewebsites.net/twocan/login', {
        username,
        password
      })
      .then((res) => {
        localStorage.setItem('sessionToken', res.data.session.token)
        dispatch(setSessionTokenAction(res.data.session.token))
        dispatch(setCurrentUserIdAction(res.data.session.userId))
        navigate('/posts')
      })
      .catch(() => {
        alert('Login failed')
      })
  }

  return (
    <StyledLogin>
      <h1>Twocan</h1>
      <h2>Login</h2>
      <TextField
        id='outlined-basic'
        label='username'
        variant='standard'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='password'
        variant='standard'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div id='buttons'>
        <button onClick={handleLogin}>Login</button>
        <button onClick={() => navigate('/register')}>Create Account</button>
      </div>
    </StyledLogin>
  )
}

export default Login
