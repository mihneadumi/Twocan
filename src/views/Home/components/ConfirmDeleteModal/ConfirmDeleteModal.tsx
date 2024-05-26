import { useParams, useNavigate } from 'react-router-dom'
import StyledConfirmDeleteModal from './styled/StyledConfirmDeleteModal'
import PostItem from '../PostItem/PostItem'
import StyledModalActions from './styled/StyledModalActions'
import { useSelector } from 'react-redux'
import { getPosts } from '../../../../redux/selectors'
import axios from 'axios'

const ConfirmDeleteModal = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const posts = useSelector(getPosts)

  const onClose = () => {
    navigate('/posts')
  }

  const onDelete = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('sessionToken')}`
      }
    }
    axios
      .delete(
        `https://twocanapiserver.azurewebsites.net/twocan/posts/delete/${id}`,
        config
      )
      .then(() => {
        navigate('/posts')
      })
      .catch((error) => {
        console.error('There was an error in the post DELETE request!', error)
      })
  }
  return (
    <StyledConfirmDeleteModal>
      <PostItem
        post={posts.find((post) => post.id === parseInt(id!))!}
        hasActions={false}
      />
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
