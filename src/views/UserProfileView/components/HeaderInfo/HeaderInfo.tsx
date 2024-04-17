import User from '../../../../interfaces/User'
import StyledHeaderInfo from './styled/StyledHeaderInfo'

interface HeaderInfoProps {
  user: User
}

const HeaderInfo = ({ user }: HeaderInfoProps) => {
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
    </StyledHeaderInfo>
  )
}

export default HeaderInfo
