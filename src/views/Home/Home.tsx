import Header from './components/Header/Header'
import Scroller from './components/Scroller/Scroller'
import SideBar from './components/SideBar/SideBar'
import StyledHome from './styled/StyledHome'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getPosts } from '../../redux/selectors'

const Home = () => {
  const [hasPagination, setHasPagination] = useState(true)

  const posts = useSelector(getPosts)

  return (
    <StyledHome>
      <SideBar />
      <div id='feed'>
        <Header
          hasPagination={hasPagination}
          setPagination={setHasPagination}
        />
        <Scroller posts={posts} hasPagination={hasPagination} />
      </div>
    </StyledHome>
  )
}

export default Home
