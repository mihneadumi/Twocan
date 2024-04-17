import { useNavigate } from 'react-router'
import StyledSideBar from './styled/StyledSideBar'
import { useSelector } from 'react-redux'
import { getPostsIsOnline, getPostsLoading } from '../../../../redux/selectors'

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

  const isOnline = useSelector(getPostsIsOnline)
  const isLoading = useSelector(getPostsLoading)

  return (
    <StyledSideBar>
      <button
        className='button'
        id='homeBtn'
        onClick={() => navigate('/')}
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
        disabled={!isOnline || isLoading}
      >
        Admin
      </button>
    </StyledSideBar>
  )
}

export default SideBar
