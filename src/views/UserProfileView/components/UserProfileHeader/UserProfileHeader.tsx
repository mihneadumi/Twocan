import User from '../../../../interfaces/User'
import HeaderInfo from '../HeaderInfo/HeaderInfo'
import StyledUserProfileHeader from './styled/StyledUserProfileHeader'

interface UserProfileHeaderProps {
  user: User
}

const UserProfileHeader = ({ user }: UserProfileHeaderProps) => {
  return (
    <StyledUserProfileHeader>
      <img id='coverImg' src='/defaultCover.png' alt='Cover' />
      <img id='profileImg' src='/defaultAvatar.png' alt='Profile' />
      <HeaderInfo user={user} />
    </StyledUserProfileHeader>
  )
}

export default UserProfileHeader
