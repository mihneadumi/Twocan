import { useParams, useNavigate } from 'react-router-dom'
import StyledConfirmDeleteModal from './styled/StyledConfirmDeleteModal'
import Post from '../../../../interfaces/Post'
import PostItem from '../PostItem/PostItem'
import StyledModalActions from './styled/StyledModalActions'

interface ConfirmDeleteModalProps {
  posts: Post[]
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>
}

const ConfirmDeleteModal = ({ posts, setPosts }: ConfirmDeleteModalProps) => {
  const { id } = useParams()
  const navigate = useNavigate()

  const onClose = () => {
    navigate('/posts')
  }

  const onDelete = () => {
    const newPosts = posts.filter((post) => post.id !== parseInt(id!))
    navigate('/posts')
    setPosts(newPosts)
  }
  return (
    <StyledConfirmDeleteModal>
      <PostItem post={posts.find((post) => post.id === parseInt(id!))!} />
      <h3>Are you sure you want to delete this post?</h3>
      <StyledModalActions>
        <button onClick={onClose} className='button cancel'>
          Cancel
        </button>
        <button onClick={onDelete} className='button delete'>
          Delete
        </button>
      </StyledModalActions>
    </StyledConfirmDeleteModal>
  )
}

export default ConfirmDeleteModal
