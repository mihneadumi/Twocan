import { useState } from 'react'
import Post from '../../interfaces/Post'
import { useNavigate, useParams } from 'react-router'
import Header from '../Home/components/Header/Header'
import StyledCreatePostView from '../CreatePostView/styled/StyledCreatePostView'
import StyledFooterActions from './styled/StyledFooterActions'
import { useSelector } from 'react-redux'
import { getPostById } from '../../redux/selectors'
import { RootState } from '../../redux/store'
import axios from 'axios'

const EditPostView = () => {
  const navigate = useNavigate()
  const params = useParams()

  const postId = parseInt(params.id!)
  const post = useSelector((state: RootState) => getPostById(state, postId))
  const [title, setTitle] = useState(post?.title)
  const [content, setContent] = useState(post?.content || '')

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
    navigate('/posts')
  }

  const handleUpdateClick = () => {
    if (title == '') {
      alert('Title cannot be empty')
      return
    }
    const updatedPost: Post = {
      ...post!,
      title: title!,
      content: content ? content : ''
    }

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('sessionToken')}`
      }
    }

    axios
      .put(
        `https://twocanapiserver.azurewebsites.net/twocan/posts/update`,
        updatedPost,
        config
      )
      .then(() => {
        navigate('/posts')
      })
      .catch((error) => {
        console.error('There was an error in the post PUT request!', error)
      })
  }

  return (
    <StyledCreatePostView>
      <Header title='Edit Post' />
      <input
        value={title}
        className='field'
        maxLength={100}
        placeholder='Some creative title, short and sweet'
        onChange={handleTitleChange}
      ></input>
      <textarea
        value={content}
        className='field'
        maxLength={500}
        placeholder="What's on your mind?"
        onChange={handleContentChange}
      ></textarea>
      <StyledFooterActions>
        <button
          id='backButton'
          className='button back'
          onClick={handleBackClick}
        >
          Back
        </button>
        <button
          id='editButton'
          className='button update'
          onClick={handleUpdateClick}
        >
          Update Post
        </button>
      </StyledFooterActions>
    </StyledCreatePostView>
  )
}

export default EditPostView
