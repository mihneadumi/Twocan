import axios from 'axios'
import User from '../../../../interfaces/User'
import StyledHeaderInfo from './styled/StyledHeaderInfo'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getCurrentUserId } from '../../../../redux/selectors'

interface HeaderInfoProps {
  user: User
}

const HeaderInfo = ({ user }: HeaderInfoProps) => {
  const navigate = useNavigate()

  const currentUser = useSelector(getCurrentUserId)

  const handleUserDelete = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('sessionToken')}`
      }
    }
    axios
      .delete(
        `https://twocanapiserver.azurewebsites.net/twocan/users/delete/${user.id}`,
        config
      )
      .then(() => {
        alert('User deleted successfully')
        navigate('/')
      })
      .catch((err) => {
        alert('Error deleting user')
        console.error(err)
      })
  }
  return (
    <StyledHeaderInfo>
      <h1>{user.displayName}</h1>
      <h2>@{user.username}</h2>
      <h2>{user.bio}</h2>

      <div id='stats'>
        <h2>
          {user.posts.length} posts | {user.followers} followers |{' '}
          {user.following} following
        </h2>
      </div>
      {(currentUser === user.id || currentUser === 0) && (
        <button id='deleteUser' onClick={handleUserDelete}>
          Delete User
        </button>
      )}
    </StyledHeaderInfo>
  )
}

export default HeaderInfo
