import { useNavigate } from 'react-router'
import StyledSideBar from './styled/StyledSideBar'

const SideBar = () => {
  const navigate = useNavigate()
  const handleCreatePost = () => {
    navigate('/posts/create')
  }

  const handleStats = () => {
    navigate('/stats')
  }
  return (
    <StyledSideBar>
      <button className='button' id='addBtn' onClick={handleCreatePost}>
        Post
      </button>
      <button className='button' id='addBtn' onClick={handleStats}>
        Stats
      </button>
      <p>SideBarElem 3</p>
    </StyledSideBar>
  )
}

export default SideBar
