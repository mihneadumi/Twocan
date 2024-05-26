import { Link, useParams } from 'react-router-dom'
import StyledDetailedView from './styled/StyledDetailedView'
import PostHeader from '../Home/components/PostItem/components/PostHeader/PostHeader'
import PostContent from '../Home/components/PostItem/components/PostContent/PostContent'
import PostFooter from '../Home/components/PostItem/components/PostFooter/PostFooter'
import { useSelector } from 'react-redux'
import { getPostById, getUserById } from '../../redux/selectors'
import { RootState } from '../../redux/store'

const DetailedView = () => {
  const id = useParams().id
  const invalidId = !id || isNaN(parseInt(id))

  const post = useSelector((state: RootState) =>
    getPostById(state, parseInt(invalidId ? '0' : id))
  )
  const { title, content, authorId, score, date } = post!
  const user = useSelector(
    (state: RootState) => getUserById(state, authorId) || undefined
  )

  if (invalidId || !post || !user) {
    console.log('Invalid post or user')
    return (
      <StyledDetailedView>
        <p>Invalid post ID</p>
        <Link to={`/`}>Back</Link>
      </StyledDetailedView>
    )
  }

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

        <Link to={`/posts`}>Back</Link>
      </StyledDetailedView>
    )
  )
}

export default DetailedView
