import { useState } from 'react'
import StyledCreatePostView from './styled/StyledCreatePostView'
import { useNavigate } from 'react-router'
import Header from '../Home/components/Header/Header'
import StyledFooterActions from './styled/StyledFooterActions'
import axios from 'axios'
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useSelector } from 'react-redux'
import { getUsers } from '../../redux/selectors'

const CreatePostView = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const navigate = useNavigate()

  const handleTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const newTitle = e.currentTarget.value
    setTitle(newTitle)
  }

  const handleContentChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    const newContent = e.currentTarget.value
    setContent(newContent)
  }

  const handleBackClick = () => {
    navigate('/')
  }

  const handleCreateClick = () => {
    if (title == '') {
      alert('Title cannot be empty')
      return
    }

    const newPost = {
      Title: title,
      Content: content,
      AuthorId: selectedUser
    }

    axios
      .post('https://localhost:7111/twocan/posts/add', newPost)
      .then(() => {
        navigate('/')
      })
      .catch((err) => {
        console.error(err)
      })
  }
  const handleNewUser = () => {
    navigate('/users/create')
  }
  const [selectedUser, setSelectedUser] = useState(0)
  const users = useSelector(getUsers)

  const handleUserSelectChange = (event: SelectChangeEvent) => {
    setSelectedUser(parseInt(event.target.value))
  }

  return (
    <StyledCreatePostView>
      <Header title='New Post' />
      <div id='userSelect'>
        <Select
          labelId='selectLabel'
          size='small'
          id='field'
          value={selectedUser.toString()}
          label='Nr of posts per page'
          onChange={handleUserSelectChange}
        >
          {users.map((user) => (
            <MenuItem key={user.id} value={user.id}>
              {user.username}
            </MenuItem>
          ))}
        </Select>
        <button id='createUser' onClick={handleNewUser}>
          +
        </button>
      </div>
      <input
        className='field'
        maxLength={100}
        placeholder='Some creative title, short and sweet'
        onChange={handleTitleChange}
      ></input>
      <textarea
        className='field'
        maxLength={500}
        placeholder="What's on your mind?"
        onChange={handleContentChange}
      ></textarea>
      <StyledFooterActions>
        <button className='button back' onClick={handleBackClick}>
          Back
        </button>
        <button className='button create' onClick={handleCreateClick}>
          Create Post
        </button>
      </StyledFooterActions>
    </StyledCreatePostView>
  )
}

export default CreatePostView
