import User from '../../../../interfaces/User'
import StyledUserProfileHeader from './styled/StyledUserProfileHeader'

interface UserProfileHeaderProps {
  user: User
}

const UserProfileHeader = ({ user }: UserProfileHeaderProps) => {
  const { username, displayName } = user
  return (
    <StyledUserProfileHeader>
      <img id='coverImg' src='/defaultCover.png' alt='Cover' />
      <img id='profileImg' src='/defaultAvatar.png' alt='Profile' />
      <h1>{displayName}</h1>
      <h2>@{username}</h2>
    </StyledUserProfileHeader>
  )
}

export default UserProfileHeader
