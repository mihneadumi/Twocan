import Header from './components/Header/Header'
import Scroller from './components/Scroller/Scroller'
import SideBar from './components/SideBar/SideBar'
import StyledHome from './styled/StyledHome'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { loadPosts } from '../../redux/slices/postsSlice'
import { getPosts } from '../../redux/selectors'

const Home = () => {
  const [hasPagination, setHasPagination] = useState(false)
  const [postsPerPage, setPostsPerPage] = useState(4)
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get('https://localhost:7111/twocan/posts')
      .then((response) => {
        dispatch(loadPosts(response.data))
      })
      .catch((error) => {
        console.error('There was an error in the post GET request!', error)
      })
  }, [dispatch])

  const posts = useSelector(getPosts)

  return (
    <StyledHome>
      <SideBar />
      <div id='feed'>
        <Header
          hasPagination={hasPagination}
          setPagination={setHasPagination}
          postsPerPage={postsPerPage}
          setPostsPerPage={setPostsPerPage}
        />
        <Scroller
          posts={posts}
          hasPagination={hasPagination}
          postsPerPage={postsPerPage}
        />
      </div>
    </StyledHome>
  )
}

export default Home
