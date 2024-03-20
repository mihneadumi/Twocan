import { useState } from 'react'
import Post from '../../interfaces/Post'
import { useNavigate, useParams } from 'react-router'
import Header from '../Home/components/Header/Header'
import StyledCreatePostView from '../CreatePostView/styled/StyledCreatePostView'

interface CreatePostViewProps {
  posts: Post[]
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>
}

const EditPostView = ({ posts, setPosts }: CreatePostViewProps) => {
  const navigate = useNavigate()
  const params = useParams()
  const postId = parseInt(params.id!)
  const post = posts.find((post) => post.id === postId)

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
    navigate('/')
  }

  const handleUpdateClick = () => {
    if (title == '') {
      alert('Title cannot be empty')
      return
    }
    const newPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          title: title!,
          content: content!
        }
      }
      return post
    })

    setPosts(newPosts)
    navigate('/')
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

      <button onClick={handleUpdateClick}>Update Post</button>
      <button onClick={handleBackClick}>Back</button>
    </StyledCreatePostView>
  )
}

export default EditPostView
