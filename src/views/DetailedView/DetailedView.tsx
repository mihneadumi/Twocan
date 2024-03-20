import { Link, useParams } from 'react-router-dom'
import StyledDetailedView from './styled/StyledDetailedView'
import { mockPosts, mockUsers } from '../../constants/mock_data'
import PostHeader from '../Home/components/PostItem/components/PostHeader/PostHeader'
import PostContent from '../Home/components/PostItem/components/PostContent/PostContent'
import PostFooter from '../Home/components/PostItem/components/PostFooter/PostFooter'

const DetailedView = () => {
  const id = useParams().id
  const post = mockPosts.find((post) => post.id === parseInt(id!))
  const { title, content, authorId, score, date } = post!
  const user = mockUsers.find((user) => user.id === authorId)
  return (
    post && (
      <StyledDetailedView>
        <PostHeader
          user={user!}
          title={title}
          id={parseInt(id!)}
          hasActions={false}
        />
        <PostContent content={content} />
        <PostFooter date={date} score={score} />

        <Link to={`/`}>Back</Link>
      </StyledDetailedView>
    )
  )
}

export default DetailedView
