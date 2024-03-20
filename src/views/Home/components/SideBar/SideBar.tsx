import { useNavigate } from 'react-router'
import StyledSideBar from './styled/StyledSideBar'

const SideBar = () => {
  const navigate = useNavigate()
  const handleCreatePost = () => {
    navigate('/posts/create')
  }
  return (
    <StyledSideBar>
      <button className='button' onClick={handleCreatePost}>
        Write
      </button>
      <p>SideBarElem 2</p>
      <p>SideBarElem 3</p>
    </StyledSideBar>
  )
}

export default SideBar
