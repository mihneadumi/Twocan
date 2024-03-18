import StyledScroller from './styled/StyledScroller'
import { posts } from '../../../../constants/mock_data'
import PostItem from '../PostItem/PostItem'

const Scroller = () => {
  return (
    <StyledScroller>
      {posts.map((post) => (
        <PostItem key={post.id.toString() + post.authorId} post={post} />
      ))}
      <p id='end'>*crickets* looks like you reached the end of your feed</p>
    </StyledScroller>
  )
}

export default Scroller
