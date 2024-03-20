import { useState } from 'react'
import Post from '../../interfaces/Post'
import getNewPostId from '../../utils/getNewPostId'
import StyledCreatePostView from './styled/StyledCreatePostView'
import { useNavigate } from 'react-router'
import Header from '../Home/components/Header/Header'
import StyledFooterActions from './styled/StyledFooterActions'

interface CreatePostViewProps {
  posts: Post[]
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>
}

const CreatePostView = ({ posts, setPosts }: CreatePostViewProps) => {
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
    const newPosts = [
      ...posts,
      {
        id: getNewPostId(posts),
        authorId: 0,
        title: title,
        content: content,
        score: 0,
        date: new Date().toJSON().slice(0, 10)
      }
    ]

    setPosts(newPosts)
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
