import { getPosts, getPostsPagination } from '../../redux/selectors'
import { getPostsAction } from '../../redux/slices/postsSlice'
import { getUsersAction } from '../../redux/slices/usersSlice'
import Header from './components/Header/Header'
import Scroller from './components/Scroller/Scroller'
import SideBar from './components/SideBar/SideBar'
import StyledHome from './styled/StyledHome'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostsAction())
    dispatch(getUsersAction())
  }, [dispatch])

  const posts = useSelector(getPosts)
  const hasPagination = useSelector(getPostsPagination)

  return (
    <StyledHome>
      <SideBar />
      <div id='feed'>
        <Header />
        <Scroller posts={posts} hasPagination={hasPagination} />
      </div>
    </StyledHome>
  )
}

export default Home
