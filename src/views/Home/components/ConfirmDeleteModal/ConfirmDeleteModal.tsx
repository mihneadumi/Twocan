import { useParams, useNavigate } from 'react-router-dom'
import StyledConfirmDeleteModal from './styled/StyledConfirmDeleteModal'
import PostItem from '../PostItem/PostItem'
import StyledModalActions from './styled/StyledModalActions'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../../../redux/selectors'
import { deletePost } from '../../../../redux/slices/postsSlice'

const ConfirmDeleteModal = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const posts = useSelector(getPosts)
  const dispatch = useDispatch()

  const onClose = () => {
    navigate('/posts')
  }

  const onDelete = () => {
    dispatch(deletePost(parseInt(id!)))
    navigate('/posts')
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
