import { useState } from 'react'
import StyledCreatePostView from './styled/StyledCreatePostView'
import { useNavigate } from 'react-router'
import Header from '../Home/components/Header/Header'
import StyledFooterActions from './styled/StyledFooterActions'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentPostId, getPosts } from '../../redux/selectors'
import { loadPosts } from '../../redux/slices/postsSlice'

const CreatePostView = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const posts = useSelector(getPosts)
  const currentId = useSelector(getCurrentPostId)

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
    const newPosts = [
      ...posts,
      {
        id: currentId + 1,
        authorId: 0,
        title: title,
        content: content,
        score: 0,
        date: new Date().toJSON().slice(0, 10)
      }
    ]
    dispatch(loadPosts(newPosts))

    navigate('/')
  }

  return (
    <StyledCreatePostView>
      <Header title='New Post' />
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
