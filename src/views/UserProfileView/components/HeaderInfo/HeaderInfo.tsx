import axios from 'axios'
import User from '../../../../interfaces/User'
import StyledHeaderInfo from './styled/StyledHeaderInfo'
import { useNavigate } from 'react-router-dom'

interface HeaderInfoProps {
  user: User
}

const HeaderInfo = ({ user }: HeaderInfoProps) => {
  const navigate = useNavigate()

  const handleUserDelete = () => {
    axios
      .delete(`https://localhost:7111/twocan/users/delete/${user.id}`)
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
      <button id='deleteUser' onClick={handleUserDelete}>
        Delete User
      </button>
    </StyledHeaderInfo>
  )
}

export default HeaderInfo
