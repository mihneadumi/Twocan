import { useState } from 'react'
import { useNavigate } from 'react-router'
import Header from '../Home/components/Header/Header'
import StyledFooterActions from './styled/StyledFooterActions'
import axios from 'axios'
import StyledCreateUserView from './styled/StyledCreateUserView'

const CreateUserView = () => {
  const [username, setUsername] = useState('')
  const [displayName, setDisplayname] = useState('')
  const [bio, setBio] = useState('')

  const navigate = useNavigate()

  const handleUsernameChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const newUsername = e.currentTarget.value
    setUsername(newUsername)
  }

  const handleDisplayNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const newDisplayName = e.currentTarget.value
    setDisplayname(newDisplayName)
  }

  const handleBioChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    const newBio = e.currentTarget.value
    setBio(newBio)
  }

  const handleBackClick = () => {
    navigate('/')
  }

  const handleCreateClick = () => {
    if (username == '') {
      alert('Username cannot be empty')
      return
    }

    const newUser = {
      Username: username,
      DisplayName: displayName,
      Bio: bio
    }

    axios
      .post('https://localhost:7111/twocan/users/add', newUser)
      .then(() => {
        alert('User created successfully')
        navigate('/')
      })
      .catch((err) => {
        alert('Error creating user')
        console.error(err)
      })
  }

  return (
    <StyledCreateUserView>
      <Header title='New User' />
      <input
        className='field'
        maxLength={100}
        placeholder='Username'
        onChange={handleUsernameChange}
      ></input>
      <input
        className='field'
        maxLength={100}
        placeholder='Display Name'
        onChange={handleDisplayNameChange}
      ></input>
      <textarea
        className='field'
        maxLength={500}
        placeholder='Bio goes here...'
        onChange={handleBioChange}
      ></textarea>
      <StyledFooterActions>
        <button className='button back' onClick={handleBackClick}>
          Back
        </button>
        <button className='button create' onClick={handleCreateClick}>
          Create User
        </button>
      </StyledFooterActions>
    </StyledCreateUserView>
  )
}

export default CreateUserView
