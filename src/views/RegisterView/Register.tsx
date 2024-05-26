import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField } from '@mui/material'
import StyledRegister from './styled/StyledRegister'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [bio, setBio] = useState('')
  const navigate = useNavigate()

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    axios
      .post('https://twocanapiserver.azurewebsites.net/twocan/register', {
        username,
        password,
        displayName,
        bio
      })
      .then(() => {
        alert('Account created successfully')
        navigate('/')
      })
      .catch((err) => {
        alert(err.response.data)
      })
  }

  return (
    <StyledRegister>
      <h1>Twocan</h1>
      <h2>Register</h2>
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
      <TextField
        id='outlined-basic'
        label='confirm password'
        variant='standard'
        type='password'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='display name'
        variant='standard'
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='bio'
        variant='standard'
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <div id='buttons'>
        <button onClick={handleRegister}>Register</button>
        <button onClick={() => navigate('/')}>Back</button>
      </div>
    </StyledRegister>
  )
}

export default Register
