import User from '../../../../../../interfaces/User'
import StyledPostHeader from './styled/StyledPostHeader'

interface PostHeaderProps {
  user: User
  title: string
}

const PostHeader = ({ user, title }: PostHeaderProps) => {
  const { username, displayName } = user
  return (
    <StyledPostHeader>
      <h3>{title}</h3>
      <p id='displayName'>
        By {displayName} <span id='username'>@{username}</span>
      </p>
    </StyledPostHeader>
  )
}

export default PostHeader
