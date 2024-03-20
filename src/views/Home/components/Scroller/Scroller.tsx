import StyledScroller from './styled/StyledScroller'
import PostItem from '../PostItem/PostItem'
import Post from '../../../../interfaces/Post'

interface ScrollerProps {
  posts: Post[]
}

const Scroller = ({ posts }: ScrollerProps) => {
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
