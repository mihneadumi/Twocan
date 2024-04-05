import StyledScroller from './styled/StyledScroller'
import PostItem from '../PostItem/PostItem'
import Post from '../../../../interfaces/Post'
import { useState } from 'react'
import Pagination from '../Pagination/Pagination'

interface ScrollerProps {
  posts: Post[]
  hasPagination?: boolean
  postsPerPage?: number
}

const Scroller = ({
  posts,
  hasPagination = false,
  postsPerPage = 4
}: ScrollerProps) => {
  const [page, setPage] = useState(1)
  let sortedPosts = [...posts].sort((a, b) => a.title.localeCompare(b.title))

  if (hasPagination) {
    sortedPosts = sortedPosts.slice(
      (page - 1) * postsPerPage,
      page * postsPerPage
    )
  }

  return (
    <StyledScroller>
      {sortedPosts.map((post) => (
        <PostItem key={post.id.toString() + post.authorId} post={post} />
      ))}
      {hasPagination ? (
        <Pagination
          page={page}
          setPage={setPage}
          totalPage={Math.ceil(posts.length / 4)}
        />
      ) : (
        <p id='end'>*crickets* looks like you reached the end of your feed</p>
      )}
    </StyledScroller>
  )
}

export default Scroller
