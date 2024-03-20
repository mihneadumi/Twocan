import { useNavigate } from 'react-router-dom'
import User from '../../../../../../interfaces/User'
import StyledInformation from './styled/StyledInformation'
import StyledPostHeader from './styled/StyledPostHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faPenToSquare,
  faTrashAlt
} from '@fortawesome/free-regular-svg-icons'

interface PostHeaderProps {
  user: User
  title: string
  id: number
  hasActions?: boolean
}

const PostHeader = ({
  user,
  title,
  id,
  hasActions = true
}: PostHeaderProps) => {
  const { username, displayName } = user
  const navigate = useNavigate()
  const handleDelete = () => {
    navigate(`/posts/delete/${id}`)
  }
  return (
    <StyledPostHeader>
      <StyledInformation>
        <h3>{title}</h3>
        <p id='displayName'>
          By {displayName} <span id='username'>@{username}</span>
        </p>
      </StyledInformation>
      {hasActions && (
        <div id='postActions'>
          <FontAwesomeIcon
            className='rowActionIcon'
            onClick={() => navigate(`/posts/${id}`)}
            icon={faEye}
            size='xl'
          />
          <FontAwesomeIcon
            id='editIcon'
            className='rowActionIcon'
            onClick={() => navigate(`/posts/edit/${id}`)}
            icon={faPenToSquare}
            size='xl'
          />
          <FontAwesomeIcon
            id='deleteIcon'
            className='rowActionIcon'
            onClick={() => handleDelete()}
            icon={faTrashAlt}
            size='xl'
          />
        </div>
      )}
    </StyledPostHeader>
  )
}

export default PostHeader
