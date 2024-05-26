import { useNavigate } from 'react-router'
import StyledSideBar from './styled/StyledSideBar'
import { useSelector } from 'react-redux'
import {
  getCurrentUserId,
  getIsAdmin,
  getPostsIsOnline,
  getPostsLoading
} from '../../../../redux/selectors'
import axios from 'axios'

const SideBar = () => {
  const navigate = useNavigate()
  const handlePostClick = () => {
    navigate('/posts/create')
  }

  const handleStatsClick = () => {
    navigate('/stats')
  }

  const handleAdminClick = () => {
    navigate('/admin')
  }

  const userId = useSelector(getCurrentUserId)

  const handleLogoutClick = () => {
    axios.post(
      'https://twocanapiserver.azurewebsites.net/twocan/logout',
      { userId: userId },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('sessionToken')}`
        }
      }
    )
    localStorage.removeItem('sessionToken')
    navigate('/')
  }

  const isOnline = useSelector(getPostsIsOnline)
  const isLoading = useSelector(getPostsLoading)
  const isAdmin = useSelector(getIsAdmin)

  return (
    <StyledSideBar>
      <button
        className='button'
        id='homeBtn'
        onClick={() => navigate('/posts')}
        disabled={!isOnline || isLoading}
      >
        Home
      </button>
      <button
        className='button'
        id='addBtn'
        onClick={handlePostClick}
        disabled={!isOnline || isLoading}
      >
        Post
      </button>
      <button
        className='button'
        id='statsBtn'
        onClick={handleStatsClick}
        disabled={!isOnline || isLoading}
      >
        Stats
      </button>
      <button
        className='button'
        id='settingsBtn'
        onClick={handleAdminClick}
        disabled={!isOnline || isLoading || !isAdmin}
      >
        Admin
      </button>
      <button
        className='button logout'
        id='logoutBtn'
        onClick={handleLogoutClick}
        disabled={!isOnline || isLoading}
      >
        Logout
      </button>
    </StyledSideBar>
  )
}

export default SideBar
