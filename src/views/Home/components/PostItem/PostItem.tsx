import { users } from '../../../../constants/mock_data'
import Post from '../../../../interfaces/Post'
import PostHeader from './components/PostHeader/PostHeader'
import StyledPostItem from './styled/StyledPostItem'

interface PostItemProps {
  post: Post
}

const PostItem = ({ post }: PostItemProps) => {
  const { authorId, title, score, date } = post
  const user = users.find((user) => user.id === authorId)
  return (
    <StyledPostItem>
      <PostHeader user={user!} title={title} />
      {post.content && <p id='content'>{post.content}</p>}
      <div id='postFooter'>
        <p>Date: {date}</p>
        <p>Score: {score}</p>
      </div>
    </StyledPostItem>
  )
}

export default PostItem
