import StyledScroller from './styled/StyledScroller'
import PostItem from '../PostItem/PostItem'
import Post from '../../../../interfaces/Post'
import { useState } from 'react'
import Pagination from '../Pagination/Pagination'
import { useSelector } from 'react-redux'
import {
  getPostsLoading,
  getPostsPagination,
  getPostsPerPage
} from '../../../../redux/selectors'
import CircularProgress from '@mui/material/CircularProgress'

interface ScrollerProps {
  posts: Post[]
}

const Scroller = ({ posts }: ScrollerProps) => {
  const [page, setPage] = useState(1)
  let sortedPosts = [...posts].sort((a, b) => a.title.localeCompare(b.title))
  const hasPagination = useSelector(getPostsPagination)
  const postsPerPage = useSelector(getPostsPerPage)
  if (hasPagination) {
    sortedPosts = sortedPosts.slice(
      (page - 1) * postsPerPage,
      page * postsPerPage
    )
  }
  const isLoading = useSelector(getPostsLoading)

  return (
    <StyledScroller>
      {sortedPosts.map((post) => (
        <PostItem key={post.id.toString() + post.authorId} post={post} />
      ))}
      {isLoading ? (
        <CircularProgress color='inherit' sx={{ marginLeft: 7 }} />
      ) : hasPagination ? (
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
