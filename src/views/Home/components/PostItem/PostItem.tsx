import { useSelector } from 'react-redux'
import Post from '../../../../interfaces/Post'
import PostHeader from './components/PostHeader/PostHeader'
import StyledPostItem from './styled/StyledPostItem'
import { getUserById } from '../../../../redux/selectors'
import { RootState } from '../../../../redux/store'

interface PostItemProps {
  post: Post
  hasActions?: boolean
}

const PostItem = ({ post, hasActions = true }: PostItemProps) => {
  const { id, authorId, title, score, date } = post
  const user = useSelector(
    (state: RootState) => getUserById(state, authorId) || undefined
  )

  if (!user) {
    console.log('Invalid user')
    return null
  }

  return (
    <StyledPostItem>
      <PostHeader hasActions={hasActions} user={user!} title={title} id={id} />
      {post.content && <p id='content'>{post.content}</p>}
      <div id='postFooter'>
        <p>Date: {date}</p>
        <p>Score: {score}</p>
      </div>
    </StyledPostItem>
  )
}

export default PostItem
