import StyledScroller from './styled/StyledScroller'
import PostItem from '../PostItem/PostItem'
import Post from '../../../../interfaces/Post'
import { useState } from 'react'
import Pagination from '../Pagination/Pagination'
import { useSelector } from 'react-redux'
import {
  getCurrentUserId,
  getPostsLoading,
  getPostsPerPage
} from '../../../../redux/selectors'
import CircularProgress from '@mui/material/CircularProgress'

interface ScrollerProps {
  posts: Post[]
  hasPagination: boolean
}

const Scroller = ({ posts, hasPagination }: ScrollerProps) => {
  const [page, setPage] = useState(1)
  let sortedPosts = [...posts].sort((a, b) => a.title.localeCompare(b.title))
  const postsPerPage = useSelector(getPostsPerPage)
  if (hasPagination) {
    sortedPosts = sortedPosts.slice(
      (page - 1) * postsPerPage,
      page * postsPerPage
    )
  }
  const isLoading = useSelector(getPostsLoading)
  const currentUser = useSelector(getCurrentUserId)
  return (
    <StyledScroller>
      {sortedPosts.map((post) => (
        <PostItem
          key={post.id.toString() + post.authorId}
          post={post}
          hasActions={currentUser === post.authorId || currentUser === 0}
        />
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
